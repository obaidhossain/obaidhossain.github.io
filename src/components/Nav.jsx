import { useState, useEffect } from "react";
import Button from "./ui/Button";

const NAV_LINKS = ["about", "skills", "projects", "github", "blog", "contact"];

export default function Nav({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center gap-6 px-6 md:px-10 py-4 transition-all duration-300 ${
        scrolled ? "bg-bg/95 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      {/* Logo */}
      <a href="#hero" className="font-mono font-extrabold text-ink-white text-lg mr-auto tracking-tight">
        <span className="text-accent">[</span>OH<span className="text-accent">]</span>
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-6">
        {NAV_LINKS.map((l, i) => (
          <li key={l}>
            <a
              href={`#${l}`}
              className={`nav-link ${activeSection === l ? "active" : ""}`}
            >
              <span className="text-accent-dim mr-1">{String(i + 1).padStart(2, "0")}.</span>
              {l}
            </a>
          </li>
        ))}
      </ul>

      <Button href="#contact" variant="outline" className="hidden md:inline-flex">
        Hire Me
      </Button>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-ink-dim hover:text-accent transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5">
          <span className={`block w-5 h-px bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </div>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bg-surface border-b border-border px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l}
              href={`#${l}`}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-accent-dim mr-2">{String(i + 1).padStart(2, "0")}.</span>
              {l}
            </a>
          ))}
          <Button href="#contact" variant="outline" fullWidth>Hire Me</Button>
        </div>
      )}
    </nav>
  );
}