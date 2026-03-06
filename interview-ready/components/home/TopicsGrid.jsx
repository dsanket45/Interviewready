import Link from 'next/link';
import { topics } from '@/data/topics';

export default function TopicsGrid() {
  return (
    <section className="py-10">
      <div className="ir-container">
        <h2 className="font-display text-xl font-semibold text-brand-white">
          Master every layer of the stack
        </h2>
        <p className="mt-2 text-sm text-brand-muted">
          From Java internals to HTML/CSS polish — each topic is packed with
          deep, production-grade questions.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <Link
              key={t.slug}
              href={`/${t.slug}`}
              className="group rounded-xl border border-brand-border bg-brand-card p-4 shadow-sm transition hover:border-brand-accent hover:shadow-[0_0_24px_rgba(56,189,248,0.25)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{t.icon}</span>
                  <span className="font-medium text-brand-white">
                    {t.name}
                  </span>
                </div>
                <span className="text-xs text-brand-muted">
                  {t.questionCount}+ Qs
                </span>
              </div>
              {t.subtopics && (
                <p className="mt-2 text-xs text-brand-muted line-clamp-2">
                  {t.subtopics.join(' • ')}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

