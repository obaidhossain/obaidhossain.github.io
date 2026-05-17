export default function Button({ children, variant = "primary", href, onClick, className = "", fullWidth = false }) {
  const base = `inline-flex items-center justify-center font-mono text-[0.72rem] tracking-widest uppercase transition-all duration-200 px-5 py-2.5 ${fullWidth ? "w-full" : ""}`;

  const variants = {
    primary: "bg-accent text-bg font-bold hover:bg-ink-white hover:shadow-accent",
    ghost: "bg-transparent border border-border text-ink hover:border-accent-dim hover:text-accent",
    outline: "bg-transparent border border-accent text-accent hover:bg-accent-muted hover:shadow-accent-sm",
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return <a href={href} className={cls}>{children}</a>;
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}