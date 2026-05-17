export default function Tag({ children, size = "md" }) {
  const sizes = {
    sm: "text-[0.6rem] px-2 py-0.5",
    md: "text-[0.65rem] px-2.5 py-1",
  };
  return (
    <span
      className={`${sizes[size]} bg-accent-muted border border-accent-dim text-accent tracking-wider uppercase font-mono`}
    >
      {children}
    </span>
  );
}