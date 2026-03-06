export default function ProgressBar({ value, max }) {
  if (!max || max <= 0) return null;
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className="h-2 w-full rounded-full bg-brand-border overflow-hidden">
      <div
        className="h-full bg-brand-accent transition-[width]"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

