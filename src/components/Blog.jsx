import { useState } from "react";
import SectionHeader from "./ui/SectionHeader";
import Tag from "./ui/Tag";
import Button from "./ui/Button";
import { posts } from "../data/blog";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function ArticleModal({ post, onClose }) {
  if (!post) return null;
  return (
    <div
      className="fixed inset-0 z-50 bg-bg/90 backdrop-blur-md flex items-start justify-center overflow-y-auto p-4 md:p-10"
      onClick={onClose}
    >
      <div
        className="bg-bg-surface border border-border max-w-2xl w-full my-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-border px-6 py-4 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-border" />
            <span className="w-2.5 h-2.5 rounded-full bg-border" />
            <span className="w-2.5 h-2.5 rounded-full bg-border" />
          </div>
          <span className="text-ink-muted text-[0.65rem] font-mono">{post.slug}.md</span>
          <button
            onClick={onClose}
            className="text-ink-muted hover:text-ink-white text-lg leading-none transition-colors"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-8">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {post.tags.map((t) => <Tag key={t} size="sm">{t}</Tag>)}
          </div>
          <h2 className="font-display text-2xl font-bold text-ink-white mb-3 leading-snug">
            {post.title}
          </h2>
          <div className="flex items-center gap-4 text-[0.65rem] text-ink-muted font-mono mb-8 pb-6 border-b border-border">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          {/* Placeholder article body */}
          <div className="prose-dark space-y-4 text-ink-dim text-sm leading-loose">
            <p>{post.excerpt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ post, featured = false, onClick }) {
  return (
    <article
      className={`card group cursor-pointer ${featured ? "p-6" : "p-5"}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((t) => <Tag key={t} size="sm">{t}</Tag>)}
        </div>
        {featured && (
          <span className="ml-auto text-[0.55rem] tracking-widest uppercase text-neon border border-neon-dim bg-neon-muted px-1.5 py-0.5 shrink-0">
            Featured
          </span>
        )}
      </div>

      <h3
        className={`font-display font-bold text-ink-white group-hover:text-accent transition-colors duration-200 mb-2 leading-snug ${
          featured ? "text-xl" : "text-base"
        }`}
      >
        {post.title}
      </h3>

      <p className="text-ink-dim text-[0.8rem] leading-relaxed mb-4 line-clamp-2">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between pt-3 border-t border-border">
        <div className="flex items-center gap-3 text-[0.65rem] text-ink-muted font-mono">
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <span className="text-accent text-[0.7rem] tracking-wider group-hover:translate-x-1 transition-transform duration-200">
          Read →
        </span>
      </div>
    </article>
  );
}

export default function Blog() {
  const [activePost, setActivePost] = useState(null);
  const featured = posts.filter((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  if (posts.length === 0) return null;

  return (
    <>
      <section id="blog" className="py-28 bg-bg-surface">
        <div className="section-container">
          <SectionHeader index="05" title="Blog" />

          {/* Featured */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {featured.map((p) => (
              <ArticleCard key={p.id} post={p} featured onClick={() => setActivePost(p)} />
            ))}
          </div>

          {/* Rest */}
          {rest.length > 0 && (
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {rest.map((p) => (
                <ArticleCard key={p.id} post={p} onClick={() => setActivePost(p)} />
              ))}
            </div>
          )}

        </div>
      </section>

      <ArticleModal post={activePost} onClose={() => setActivePost(null)} />
    </>
  );
}