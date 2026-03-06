import { topics } from '@/data/topics';
import { getQuestionsByTopic } from '@/lib/getQuestions';
import DifficultyBadge from '@/components/ui/DifficultyBadge';
import { useExperience } from '@/lib/experienceContext';
import { filterByExperience } from '@/lib/getQuestions';

function LevelTabs({ selected, onChange }) {
  const levels = [
    { id: null, label: 'All' },
    { id: 0, label: 'Fresher' },
    { id: 1, label: '1-2 Yrs' },
    { id: 2, label: '2-4 Yrs' },
    { id: 3, label: '4-7 Yrs' },
    { id: 4, label: '7+ Yrs' },
  ];
  return (
    <div className="mt-4 flex flex-wrap gap-2 text-xs">
      {levels.map((l) => (
        <button
          key={String(l.id)}
          type="button"
          onClick={() => onChange(l.id)}
          className={`rounded-full border px-3 py-1 ${
            selected === l.id
              ? 'border-brand-accent bg-brand-accent text-brand-bg'
              : 'border-brand-border bg-brand-card text-brand-muted hover:text-brand-white'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

function ClientFilters({ topic, questions }) {
  'use client';
  const { level } = useExperience();
  const [localLevel, setLocalLevel] = require('react').useState(level ?? null);
  const filtered = filterByExperience(questions, localLevel ?? level ?? null);

  const bySubtopic = filtered.reduce((acc, q) => {
    const key = q.subtopic || 'General';
    if (!acc[key]) acc[key] = [];
    acc[key].push(q);
    return acc;
  }, {});

  return (
    <>
      <LevelTabs selected={localLevel} onChange={setLocalLevel} />
      <div className="mt-6 space-y-6">
        {Object.entries(bySubtopic).map(([sub, qs]) => (
          <section key={sub} id={sub}>
            <h2 className="text-sm font-semibold text-brand-white">{sub}</h2>
            <div className="mt-2 divide-y divide-brand-border rounded-xl border border-brand-border bg-brand-card">
              {qs.map((q) => (
                <a
                  key={q.slug}
                  href={`/${topic}/${q.slug}`}
                  className="flex items-center justify-between px-4 py-3 hover:bg-brand-surface/80"
                >
                  <span className="text-sm text-brand-text">{q.question}</span>
                  <DifficultyBadge level={q.difficulty} />
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

export default function TopicPage({ params }) {
  const topicMeta = topics.find((t) => t.slug === params.topic);
  const questions = getQuestionsByTopic(params.topic);

  if (!topicMeta) {
    return (
      <div className="ir-container py-10">
        <p className="text-brand-muted">Unknown topic.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="ir-container py-8">
        <header>
          <div className="flex items-center gap-2 text-sm text-brand-muted">
            <span className="text-lg">{topicMeta.icon}</span>
            <span className="font-display text-2xl font-semibold text-brand-white">
              {topicMeta.name}
            </span>
          </div>
          <p className="mt-2 text-sm text-brand-muted">
            {topicMeta.description ??
              'Deep, production-level interview questions for this topic.'}
          </p>
          <p className="mt-1 text-xs text-brand-muted">
            {topicMeta.questionCount}+ curated questions planned.
          </p>
        </header>

        <ClientFilters topic={params.topic} questions={questions} />
      </div>
    </div>
  );
}

