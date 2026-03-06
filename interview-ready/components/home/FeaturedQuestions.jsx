import Link from 'next/link';
import { getAllQuestions } from '@/lib/getQuestions';
import DifficultyBadge from '@/components/ui/DifficultyBadge';
import TopicBadge from '@/components/ui/TopicBadge';

export default function FeaturedQuestions() {
  const all = getAllQuestions();
  const featured = all.slice(0, 6);

  return (
    <section className="border-t border-brand-border bg-brand-surface/40 py-10">
      <div className="ir-container">
        <h2 className="font-display text-xl font-semibold text-brand-white">
          Questions GFG Won&apos;t Teach You
        </h2>
        <p className="mt-2 text-sm text-brand-muted">
          Handpicked deep dives into bugs that only appear at 2 a.m. in
          production.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((q) => (
            <Link
              key={q.slug}
              href={`/${q.topic}/${q.slug}`}
              className="group flex flex-col rounded-xl border border-brand-border bg-brand-card p-4 hover:border-brand-accent hover:shadow-[0_0_24px_rgba(56,189,248,0.25)]"
            >
              <div className="flex items-center gap-2 text-xs">
                <TopicBadge topic={q.topic} />
                <DifficultyBadge level={q.difficulty} />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-brand-white group-hover:text-brand-accent">
                {q.question}
              </h3>
              <p className="mt-2 line-clamp-3 text-xs text-brand-muted">
                {q.quickAnswer}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

