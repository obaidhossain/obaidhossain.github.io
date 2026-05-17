import { useState, useEffect } from "react";
import Button from "./ui/Button";

function TerminalCursor() {
  return <span className="inline-block text-accent animate-blink">▋</span>;
}

const TYPED_TEXT = "Building modern web applications \nto fund my farming empire. \n\n Web app to Cattle farm 💻 ⇸ 🌱";
const FUN_FACTS = [
  ["10+", "Years Exp."], 
  ["200+", "Contributions"], 
  ["100%", "Passion"]
];                

export default function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setTyped(TYPED_TEXT.slice(0, i));
      i++;
      if (i > TYPED_TEXT.length) clearInterval(t);
    }, 28);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-10 pt-24 pb-16"
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-20 pointer-events-none"
        style={{ maskImage: "radial-gradient(ellipse at 60% 50%, black 30%, transparent 80%)" }}
      />
      {/* Scanlines */}
      <div className="absolute inset-0 bg-scanlines pointer-events-none" />
      {/* Accent glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-accent opacity-5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full grid md:grid-cols-[1fr_auto] gap-12 items-center">
        {/* Left */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-neon text-[0.65rem] tracking-widest uppercase border border-neon-dim bg-neon-muted px-3 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-neon shadow-neon animate-pulse2" />
            Available
          </div>

          {/* Name */}
          <h1 className="font-display font-extrabold text-ink-white leading-[0.92] tracking-tight mb-8"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}>
            <span className="glitch" data-text="Obaid">Obaid</span>
            <br />
            <span className="glitch" data-text="Hossain">Hossain</span>
          </h1>

          {/* Terminal */}
          <div className="terminal-window mb-8 max-w-lg">
            <div className="terminal-bar">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-auto text-ink-muted text-[0.65rem]">~/intro.jsx</span>
            </div>
            <div className="px-4 py-3 text-sm leading-relaxed">
              <span className="text-accent">$ </span>
              <span className="text-ink">
                {typed.split("\n").map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </span>
              <TerminalCursor />
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Button href="#projects">Featured Projects</Button>
            <Button href="#contact" variant="ghost">Discussion time</Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8">
            {FUN_FACTS.map(([n, l]) => (
              <div key={l}>
                <div className="font-mono text-3xl font-extrabold text-accent leading-none">{n}</div>
                <div className="text-ink-muted text-[0.62rem] tracking-widest uppercase mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: floating code block */}
        <div className="hidden md:block bg-bg-surface border border-border border-l-2 border-l-accent px-5 py-4 text-[0.75rem] leading-loose text-ink-dim font-mono">
          <pre>{`const bio_summary = {
  role: "Full-Stack Engineer",
  tech_stack: ["React.js", "Node.js", "PHP", "WordPress", "Shopify"],
  coffee: Infinity,
  bio: "Full-stack Engineer",
  dream: "in-house organic empire"
};`}</pre>
        </div>
      </div>
    </section>
  );
}