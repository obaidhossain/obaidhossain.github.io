import SectionHeader from "./ui/SectionHeader";
import Tag from "./ui/Tag";

const TAGS = [
  "Clean Code", 
  "Shopify", 
  "WordPress", 
  "PHP",
  "React.js",
  "Node.js",
  "Express.js",
  "Open Source",
  "TailwindCSS",
  "Automation",
  "SaaS",
  "CWV"
];

const CODE_LINES = [
  { indent: false, content: [{ cls: "text-[#ff7b72]", t: "const" }, { cls: "text-[#d2a8ff]", t: " about_me" }, { cls: "text-ink-dim", t: " = {" }] },
  { indent: true,  content: [{ cls: "text-[#79c0ff]", t: "name" },      { cls: "text-ink-dim", t: ": " }, { cls: "text-[#a5d6ff]", t: '"Obaid Hossain",' }] },
  { indent: true,  content: [{ cls: "text-[#79c0ff]", t: "located" },     { cls: "text-ink-dim", t: ": " }, { cls: "text-[#a5d6ff]", t: '"Bangladesh 🇧🇩",' }] },
  { indent: true,  content: [{ cls: "text-[#79c0ff]", t: "focus" },     { cls: "text-ink-dim", t: ": " }, { cls: "text-[#a5d6ff]", t: '"Full-Stack Engineer",' }] },
  { indent: true,  content: [{ cls: "text-[#79c0ff]", t: "available" }, { cls: "text-ink-dim", t: ": " }, { cls: "text-[#ff9e64]", t: "true," }] },
  { indent: false, content: [{ cls: "text-ink-dim", t: "};" }] },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-bg-surface">
      <div className="section-container">
        <SectionHeader index="01" title="About Me" />
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <p className="text-ink-white text-base leading-relaxed mb-4">
              Hey there, I'm Obaid. I build full-stack web applications, along with WordPress and Shopify solutions that scale, perform, and
              don't fall apart under pressure.
            </p>
            <p className="text-ink-dim text-sm leading-relaxed mb-4">
              I specialize in crafting end-to-end digital experiences, from pixel-perfect
              frontends to resilient backend architectures. Whether it's a high-traffic API,
              a real-time dashboard, or a seamless UX, I care deeply about every layer.
            </p>
            <p className="text-ink-dim text-sm leading-relaxed mb-6">
              Beyond client work, I love experimenting with SaaS ideas, hosting infrastructure, 
              automation systems, and developer tools. I'm always exploring new technologies, 
              building side projects, and finding practical ways to turn ideas into real products.
            </p>
            <div className="flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>

          {/* Code card */}
          <div className="terminal-window">
            <div className="terminal-bar">
              <span className="w-2 h-2 rounded-full bg-border" />
              <span className="w-2 h-2 rounded-full bg-border" />
              <span className="w-2 h-2 rounded-full bg-border" />
            </div>
            <div className="px-5 py-4 text-[0.8rem] leading-loose font-mono">
              {CODE_LINES.map((line, i) => (
                <div key={i} className={line.indent ? "pl-5" : ""}>
                  {line.content.map((part, j) => (
                    <span key={j} className={part.cls}>{part.t}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}