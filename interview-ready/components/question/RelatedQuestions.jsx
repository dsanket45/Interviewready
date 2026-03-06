import Link from 'next/link';
import { getAllQuestions } from '@/lib/getQuestions';

export default function RelatedQuestions({ slugs = [], topic }) {
  if (!slugs.length) return null;
  const all = getAllQuestions();
  const related = slugs
    .map((slug) => all.find((q) => q.slug === slug && q.topic === topic))
    .filter(Boolean);

  if (!related.length) return null;

  return (
    <section className="mt-6 rounded-xl border-l-4 border-brand-accent bg-brand-card p-4">
      <h2 className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
        Related deep questions
      </h2>
      <ul className="mt-2 space-y-1 text-sm">
        {related.map((q) => (
          <li key={q.slug}>
            <Link
              href={`/${q.topic}/${q.slug}`}
              className="text-brand-text hover:text-brand-accent"
            >
              {q.question}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

