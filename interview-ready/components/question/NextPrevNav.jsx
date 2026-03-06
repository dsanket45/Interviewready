import Link from 'next/link';
import { getAllQuestions } from '@/lib/getQuestions';

export default function NextPrevNav({ prevSlug, nextSlug, topic }) {
  const all = getAllQuestions();
  const prev = prevSlug
    ? all.find((q) => q.slug === prevSlug && q.topic === topic)
    : null;
  const next = nextSlug
    ? all.find((q) => q.slug === nextSlug && q.topic === topic)
    : null;

  if (!prev && !next) return null;

  return (
    <nav className="mt-10 flex flex-col gap-3 rounded-xl border border-brand-border bg-brand-surface px-4 py-3 text-sm md:flex-row md:items-center md:justify-between">
      {prev ? (
        <Link
          href={`/${topic}/${prev.slug}`}
          className="group flex-1 text-left text-brand-muted hover:text-brand-accent"
        >
          <div className="text-[11px] uppercase tracking-wide text-brand-muted">
            ← Previous
          </div>
          <div className="mt-1 text-sm text-brand-text group-hover:text-brand-accent">
            {prev.question}
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/${topic}/${next.slug}`}
          className="group ml-auto flex-1 text-right text-brand-muted hover:text-brand-accent"
        >
          <div className="text-[11px] uppercase tracking-wide text-brand-muted">
            Next →
          </div>
          <div className="mt-1 text-sm text-brand-text group-hover:text-brand-accent">
            {next.question}
          </div>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}

