import { useEffect, useRef, useState } from "react";
import SectionHeader from "./ui/SectionHeader";
import { skills } from "../data/skills";

function SkillBar({ skill, delay = 0 }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(skill.level), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [skill.level, delay]);

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-[0.78rem] text-ink group-hover:text-ink-white transition-colors">{skill.name}</span>
        <span className="text-[0.68rem] text-accent-dim font-mono">{skill.level}%</span>
      </div>
      <div className="h-[3px] bg-border rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${width}%`,
            transition: `width 1s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
            background: "linear-gradient(90deg, #00d4ff, #39ff14)",
            boxShadow: "0 0 8px rgba(0,212,255,0.3)",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="py-28 bg-bg">
      <div className="section-container">
        <SectionHeader index="02" title="Tech Stack" />
        <div className="grid md:grid-cols-3 gap-10">
          {categories.map((cat) => (
            <div key={cat}>
              <h3 className="text-[0.7rem] tracking-widest uppercase text-ink-dim mb-5 font-mono">
                <span className="text-accent">// </span>{cat}
              </h3>
              <div className="flex flex-col gap-4">
                {skills
                  .filter((s) => s.category === cat)
                  .map((s, i) => (
                    <SkillBar key={s.name} skill={s} delay={i * 100} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}