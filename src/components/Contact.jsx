import { useState } from "react";
import SectionHeader from "./ui/SectionHeader";
import Button from "./ui/Button";

const CONTACT_LINKS = [
  { label: "Email",     value: "obaidhossain.me@gmail.com",       href: "mailto:obaidhossain.me@gmail.com" },
  { label: "GitHub",    value: "github.com/obaidhossain",         href: "https://github.com/obaidhossain" },
  { label: "LinkedIn",  value: "linkedin.com/in/obaidhossain",    href: "https://linkedin.com/in/obaidhossain" },
  { label: "Fiverr",    value: "programmerobaid",                 href: "https://www.fiverr.com/programmerobaid" },
];

// TODO: Replace these with your actual Google Form entry IDs
// To find them:
// 1. Open your Google Form in browser
// 2. Right-click → Inspect on each field
// 3. Look for name="entry.XXXXXXXX"
const FORM_ENTRY_IDS = {
  name: "entry.509358992",
  message: "entry.1698915873",
  email: "entry.1540597577",
};

const FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSeycMiZ6RNjVv1KvTnTTs4_K8nQrYZrpBjOL7A6NPEMkNatNw/formResponse";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData();
    formData.append(FORM_ENTRY_IDS.name, form.name);
    formData.append(FORM_ENTRY_IDS.email, form.email);
    formData.append(FORM_ENTRY_IDS.message, form.message);

    try {
      await fetch(FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Form submission failed", err);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-bg">
      <div className="section-container">
        <SectionHeader index="06" title="Contact" />
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-14 items-start">
          {/* Info */}
          <div>
            <p className="text-ink-white text-base leading-relaxed mb-8">
              Have a project in mind? Let's build something great together.
            </p>
            <div className="flex flex-col gap-3">
              {CONTACT_LINKS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group flex flex-col px-4 py-3 border border-border hover:border-accent-dim hover:bg-accent-muted transition-all duration-200"
                >
                  <span className="text-[0.6rem] text-ink-muted tracking-widest uppercase mb-0.5">
                    {c.label}
                  </span>
                  <span className="text-accent text-sm group-hover:text-ink-white transition-colors">
                    {c.value}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {sent && (
              <div className="flex items-center gap-2 px-4 py-3 border border-neon-dim bg-neon-muted text-neon text-sm font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-neon shadow-neon" />
                Thanks for reaching out! I’ll review your message and reply as soon as possible.
              </div>
            )}
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.65rem] text-ink-dim tracking-widest uppercase">Name</label>
              <input
                className="input-field"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.65rem] text-ink-dim tracking-widest uppercase">Email</label>
              <input
                className="input-field"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.65rem] text-ink-dim tracking-widest uppercase">Message</label>
              <textarea
                className="input-field resize-y min-h-[120px]"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>
            <Button variant="primary" fullWidth disabled={sending}>
              {sending ? "Sending..." : "Send Message →"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
