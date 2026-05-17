import { useEffect, useState } from "react";
import SectionHeader from "./ui/SectionHeader";

// ─── Replace with your GitHub username ───
const GITHUB_USERNAME = "obaidhossain";

function StatCard({ label, value, icon, loading }) {
  return (
    <div className="card p-5 flex flex-col gap-1">
      <div className="flex items-center justify-between mb-2">
        <span className="text-ink-muted text-[0.65rem] tracking-widest uppercase">{label}</span>
        <span className="text-accent text-lg">{icon}</span>
      </div>
      {loading ? (
        <div className="h-7 w-20 bg-border animate-pulse rounded-sm" />
      ) : (
        <span className="font-display text-2xl font-bold text-ink-white">{value ?? "—"}</span>
      )}
    </div>
  );
}

function RepoCard({ repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="card p-4 group flex flex-col gap-2 hover:no-underline"
    >
      <div className="flex items-start justify-between gap-2">
        <span className="font-mono text-sm text-ink-white group-hover:text-accent transition-colors truncate">
          {repo.name}
        </span>
        <span className="text-ink-muted text-xs shrink-0">↗</span>
      </div>
      {repo.description && (
        <p className="text-ink-dim text-[0.75rem] leading-snug line-clamp-2">{repo.description}</p>
      )}
      <div className="flex items-center gap-3 mt-auto pt-1">
        {repo.language && (
          <span className="flex items-center gap-1 text-[0.65rem] text-ink-dim">
            <span className="w-2 h-2 rounded-full bg-accent" />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1 text-[0.65rem] text-ink-dim">
          ★ {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1 text-[0.65rem] text-ink-dim">
          ⑂ {repo.forks_count}
        </span>
      </div>
    </a>
  );
}

function ContribGraph({ weeks }) {
  if (!weeks?.length) return null;
  const levels = ["bg-border", "bg-accent/20", "bg-accent/40", "bg-accent/70", "bg-accent"];

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-1 w-max">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.contributionDays.map((day, di) => (
              <div
                key={di}
                title={`${day.date}: ${day.contributionCount} contributions`}
                className={`w-3 h-3 rounded-[2px] ${levels[Math.min(day.contributionLevel ?? 0, 4)]} transition-colors`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-2 justify-end">
        <span className="text-ink-muted text-[0.6rem]">Less</span>
        {levels.map((l, i) => (
          <div key={i} className={`w-3 h-3 rounded-[2px] ${l}`} />
        ))}
        <span className="text-ink-muted text-[0.6rem]">More</span>
      </div>
    </div>
  );
}

export default function GitHubStats() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=2`),
        ]);

        if (!profileRes.ok) throw new Error("GitHub API error");

        const profileData = await profileRes.json();
        const reposData = await reposRes.json();

        setProfile(profileData);
        setRepos(Array.isArray(reposData) ? reposData : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const stats = [
    { label: "Public Repos",  value: profile?.public_repos,   icon: "⬡" },
    { label: "Followers",     value: profile?.followers,       icon: "◈" },
    { label: "Following",     value: profile?.following,       icon: "◎" },
    { label: "Gists",         value: profile?.public_gists,    icon: "◻" },
  ];

  return (
    <section id="github" className="py-28 bg-bg">
      <div className="section-container">
        <SectionHeader index="04" title="GitHub Stats" />

        {error ? (
          <div className="border border-border bg-bg-surface p-6 text-ink-dim text-sm font-mono">
            <span className="text-accent">// </span>
            Could not load Github data. Make sure{" "}
            <span className="text-accent">GITHUB_USERNAME</span> is set correctly in{" "}
            <code>GithubStats.jsx</code>.
          </div>
        ) : (
          <>
            {/* Profile bar */}
            <div className="flex flex-wrap items-center gap-4 mb-8 bg-bg-surface border border-border p-4">
              {loading ? (
                <div className="w-12 h-12 rounded-full bg-border animate-pulse" />
              ) : (
                <img
                  src={profile?.avatar_url}
                  alt={profile?.login}
                  className="w-12 h-12 rounded-full border-2 border-accent-dim"
                />
              )}
              <div>
                {loading ? (
                  <div className="h-4 w-40 bg-border animate-pulse rounded-sm mb-1" />
                ) : (
                  <div className="font-display font-bold text-ink-white">{profile?.name || profile?.login}</div>
                )}
                <div className="text-ink-dim text-xs font-mono">@{GITHUB_USERNAME}</div>
              </div>
              {profile?.bio && (
                <p className="text-ink-dim text-xs ml-auto max-w-sm line-clamp-2">{profile.bio}</p>
              )}
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-[0.65rem] tracking-widest uppercase text-accent hover:text-ink-white transition-colors border border-accent-dim px-3 py-1.5"
              >
                View Profile ↗
              </a>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {stats.map((s) => (
                <StatCard key={s.label} {...s} loading={loading} />
              ))}
            </div>

            {/* Top repos */}
            <h3 className="text-[0.7rem] tracking-widest uppercase text-ink-dim mb-4 font-mono">
              <span className="text-accent">// </span>Top Repositories
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {loading
                ? Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="bg-bg-surface border border-border p-4 h-28 animate-pulse" />
                  ))
                : repos.map((r) => <RepoCard key={r.id} repo={r} />)}
            </div>
          </>
        )}
      </div>
    </section>
  );
}