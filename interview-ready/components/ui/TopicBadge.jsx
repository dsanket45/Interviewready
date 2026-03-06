import { topics } from '@/data/topics';

export default function TopicBadge({ topic }) {
  const meta = topics.find((t) => t.slug === topic);
  if (!meta) return null;
  return (
    <span className="inline-flex items-center rounded-full border border-brand-border bg-brand-surface px-3 py-0.5 text-xs text-brand-muted">
      <span className="mr-1">{meta.icon}</span>
      <span>{meta.name}</span>
    </span>
  );
}

