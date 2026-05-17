import SectionHeader from "./ui/SectionHeader";
import Tag from "./ui/Tag";
import { projects } from "../data/projects";

function StatusBadge({ status }) {
  const isLive = status === "LIVE";
  return (
    <span
      className={`flex items-center gap-1.5 text-[0.58rem] tracking-widest uppercase px-2 py-0.5 border font-mono ${
        isLive
          ? "text-neon border-neon-dim bg-neon-muted"
          : "text-[#ffbd2e] border-[rgba(255,189,46,0.35)] bg-[rgba(255,189,46,0.05)]"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${isLive ? "bg-neon shadow-neon animate-pulse2" : "bg-[#ffbd2e]"}`}
      />
      {status}
    </span>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="card group p-6 relative overflow-hidden cursor-default">
      {/* Glow on hover */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,212,255,0.07),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="flex justify-between items-center mb-4">
        <span className="text-ink-muted text-[0.65rem] tracking-widest font-mono">{project.id}</span>
        <StatusBadge status={project.status} />
      </div>

      <h3 className="font-display text-xl font-bold text-ink-white mb-2 group-hover:text-accent transition-colors duration-200">
        {project.title}
      </h3>
      <p className="text-ink-dim text-[0.82rem] leading-relaxed mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((t) => <Tag key={t} size="sm">{t}</Tag>)}
      </div>

      <div className="flex gap-4 pt-4 border-t border-border">
        {project.liveUrl != '' ? (<a
          href={project.liveUrl}
          className="text-accent text-[0.7rem] tracking-wider uppercase hover:text-ink-white transition-colors"
        >
          ↗ Live Demo
        </a>) : ""}
        {project.repoUrl != '' ? (<a
          href={project.repoUrl}
          className="text-ink-dim text-[0.7rem] tracking-wider uppercase hover:text-ink transition-colors"
        >
          ⌥ Source
        </a>) : ""}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-bg-surface">
      <div className="section-container">
        <SectionHeader index="03" title="Projects" />
        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}