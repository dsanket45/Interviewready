import Link from 'next/link';
import { topics } from '@/data/topics';

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-64 border-r border-brand-border bg-brand-surface/60">
      <div className="sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto px-4 py-6">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-brand-muted">
          Topics
        </h3>
        <nav className="mt-3 space-y-1 text-sm">
          {topics.map((t) => (
            <Link
              key={t.slug}
              href={`/${t.slug}`}
              className="block rounded-md px-2 py-1 text-brand-text hover:bg-brand-card hover:text-brand-accent"
            >
              <span className="mr-1">{t.icon}</span>
              {t.name}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}

