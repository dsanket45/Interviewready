"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { topics } from '@/data/topics';
import SearchBar from '@/components/ui/SearchBar';
import { useExperience } from '@/lib/experienceContext';

const levels = [
  { id: 0, label: 'Fresher' },
  { id: 1, label: '1-2 Years' },
  { id: 2, label: '2-4 Years' },
  { id: 3, label: '4-7 Years' },
  { id: 4, label: '7+ Years' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { level, setLevel } = useExperience();

  return (
    <header className="sticky top-0 z-40 border-b border-brand-border bg-brand-surface/80 backdrop-blur">
      <div className="ir-container flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-baseline gap-1 font-display">
          <span className="text-lg font-extrabold text-brand-white">
            Interview
          </span>
          <span className="text-lg font-extrabold text-brand-accent">
            Ready
          </span>
        </Link>

        <div className="hidden md:flex flex-1 max-w-xl">
          <SearchBar />
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-3 text-xs text-brand-muted">
            {topics.slice(0, 4).map((t) => (
              <Link
                key={t.slug}
                href={`/${t.slug}`}
                className={`hover:text-brand-accent transition-colors ${
                  pathname.startsWith(`/${t.slug}`)
                    ? 'text-brand-accent'
                    : ''
                }`}
              >
                {t.icon} {t.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-1 rounded-full border border-brand-border bg-brand-card px-2 py-1">
            {levels.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => setLevel(l.id)}
                className={`rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wide ${
                  level === l.id
                    ? 'bg-brand-accent text-brand-bg'
                    : 'text-brand-muted hover:text-brand-white'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden border-t border-brand-border bg-brand-surface/80 px-4 pb-3 pt-2">
        <SearchBar />
      </div>
    </header>
  );
}

