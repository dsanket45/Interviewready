import { getAllQuestions } from '@/lib/getQuestions';
import DifficultyBadge from '@/components/ui/DifficultyBadge';
import TopicBadge from '@/components/ui/TopicBadge';

export default function SearchPage({ searchParams }) {
  const q = typeof searchParams.q === 'string' ? searchParams.q.trim() : '';
  const all = getAllQuestions();
  const term = q.toLowerCase();
  const results = term
    ? all.filter((item) => {
        const haystack = [
          item.question,
          item.quickAnswer,
          ...(item.tags || []),
        ]
          .join(' ')
          .toLowerCase();
        return haystack.includes(term);
      })
    : [];

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="ir-container py-8">
        <h1 className="text-2xl font-display font-semibold text-brand-white">
          Search results
        </h1>
        {q && (
          <p className="mt-1 text-sm text-brand-muted">
            Showing results for <span className="text-brand-white">"{q}"</span>
          </p>
        )}

        {!q && (
          <p className="mt-4 text-sm text-brand-muted">
            Type in the search bar above to find deep questions by error
            message, stack trace, or concept.
          </p>
        )}

        {q && results.length === 0 && (
          <p className="mt-4 text-sm text-brand-muted">
            No deep questions match that query yet. Try a different keyword —
            or come back soon as we add more topics.
          </p>
        )}

        <div className="mt-6 space-y-3">
          {results.map((item) => (
            <a
              key={`${item.topic}/${item.slug}`}
              href={`/${item.topic}/${item.slug}`}
              className="block rounded-xl border border-brand-border bg-brand-card px-4 py-3 hover:border-brand-accent"
            >
              <div className="flex items-center gap-2 text-xs">
                <TopicBadge topic={item.topic} />
                <DifficultyBadge level={item.difficulty} />
              </div>
              <h2 className="mt-2 text-sm font-semibold text-brand-white">
                {item.question}
              </h2>
              <p className="mt-1 text-xs text-brand-muted line-clamp-2">
                {item.quickAnswer}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

