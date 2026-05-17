const NAV = ["about", "skills", "projects", "github", "blog", "contact"];

export default function Footer() {
  return (
    <footer className="bg-bg-surface border-t border-border py-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-mono font-extrabold text-lg text-ink-white">
            <span className="text-accent">[</span>OH<span className="text-accent">]</span>
          </div>
          <p className="text-ink-muted text-[0.65rem] font-mono">
            Copyright &copy; 2026
          </p>
        </div>
      </div>
    </footer>
  );
}