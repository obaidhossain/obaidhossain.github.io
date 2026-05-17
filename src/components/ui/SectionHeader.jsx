export default function SectionHeader({ index, title }) {
  return (
    <div className="flex items-center gap-3 mb-12">
      <span className="font-mono text-accent text-xs tracking-widest">{index}.</span>
      <h2 className="font-display text-2xl font-bold text-ink-white">{title}</h2>
      <div className="flex-1 h-px bg-border max-w-xs" />
    </div>
  );
}