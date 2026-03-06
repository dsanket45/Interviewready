const levelToStyles = {
  easy: 'bg-brand-success/10 text-brand-success border-brand-success/40',
  medium: 'bg-brand-warning/10 text-brand-warning border-brand-warning/40',
  hard: 'bg-brand-danger/10 text-brand-danger border-brand-danger/40',
};

const levelToLabel = {
  easy: 'EASY',
  medium: 'MEDIUM',
  hard: 'HARD',
};

export default function DifficultyBadge({ level }) {
  if (!level) return null;
  const styles = levelToStyles[level] || levelToStyles.medium;
  const label = levelToLabel[level] || levelToLabel.medium;
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-mono uppercase tracking-wide ${styles}`}
    >
      {label}
    </span>
  );
}

