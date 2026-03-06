import ProgressBar from '@/components/ui/ProgressBar';

const paths = [
  {
    title: 'Fresher roadmap',
    level: 0,
    weeks: [
      'Week 1 → Java Basics + OOPs',
      'Week 2 → Collections + Exceptions',
      'Week 3 → SQL Basics + HTML/CSS',
      'Week 4 → React Basics + JS',
    ],
  },
  {
    title: '2-4 Years roadmap',
    level: 2,
    weeks: [
      'Week 1 → Java Concurrency + Memory',
      'Week 2 → Spring Boot Internals',
      'Week 3 → PostgreSQL Deep + Query Optimization',
      'Week 4 → System Design Basics',
    ],
  },
  {
    title: 'Senior roadmap',
    level: 3,
    weeks: [
      'Week 1 → JVM + GC Internals',
      'Week 2 → Distributed Systems',
      'Week 3 → Architecture Patterns',
      'Week 4 → Leadership + Design Decisions',
    ],
  },
];

export default function StudyPath() {
  return (
    <section className="border-t border-brand-border bg-brand-surface/60 py-10">
      <div className="ir-container">
        <h2 className="font-display text-xl font-semibold text-brand-white">
          From Zero to Senior — In Order
        </h2>
        <p className="mt-2 text-sm text-brand-muted">
          Opinionated paths that sequence Java, Spring, databases, and system
          design the way real teams expect you to grow.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {paths.map((path) => (
            <div
              key={path.title}
              className="flex flex-col rounded-xl border border-brand-border bg-brand-card p-4"
            >
              <h3 className="text-sm font-semibold text-brand-white">
                {path.title}
              </h3>
              <div className="mt-3 space-y-1 text-xs text-brand-muted">
                {path.weeks.map((w) => (
                  <div key={w}>{w}</div>
                ))}
              </div>
              <div className="mt-4">
                <ProgressBar value={1} max={4} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

