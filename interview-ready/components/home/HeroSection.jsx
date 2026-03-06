"use client";

import Link from 'next/link';
import SearchBar from '@/components/ui/SearchBar';
import { useExperience } from '@/lib/experienceContext';

const levels = [
  { id: 0, label: 'Fresher' },
  { id: 1, label: '1-2 Years' },
  { id: 2, label: '2-4 Years' },
  { id: 3, label: '4-7 Years' },
  { id: 4, label: '7+ Years' },
];

export default function HeroSection() {
  const { level, setLevel } = useExperience();

  return (
    <section className="border-b border-brand-border bg-brand-bg py-12">
      <div className="ir-container grid items-center gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-accent">
            India&apos;s #1 deep interview prep
          </p>
          <h1 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-white leading-tight">
            Crack Senior Tech Interviews in 2026
          </h1>
          <p className="mt-4 max-w-xl text-sm md:text-base text-brand-muted">
            Deep production-level questions GFG never covers. Java, Spring
            Boot, React, Python, PostgreSQL and more — all in one fast,
            beautifully searchable site.
          </p>

          <div className="mt-6 max-w-xl">
            <SearchBar />
          </div>

          <div className="mt-4 text-xs text-brand-muted">
            I have{' '}
            <span className="font-semibold text-brand-white">
              {level === null ? '___' : levels.find((l) => l.id === level)?.label}
            </span>{' '}
            of experience
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {levels.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => setLevel(l.id)}
                className={`rounded-full border px-3 py-1 text-xs ${
                  level === l.id
                    ? 'border-brand-accent bg-brand-accent text-brand-bg'
                    : 'border-brand-border bg-brand-card text-brand-muted hover:text-brand-white'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link
              href="/java"
              className="rounded-full bg-brand-accent px-4 py-2 font-semibold text-brand-bg hover:bg-brand-accentHover"
            >
              Browse Java Questions
            </Link>
            <Link
              href="/html-css"
              className="rounded-full border border-brand-border bg-brand-card px-4 py-2 text-brand-text hover:border-brand-accent"
            >
              Start from Basics
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-brand-border bg-brand-card/70 p-5 shadow-[0_0_40px_rgba(56,189,248,0.12)]">
          <p className="text-xs font-mono uppercase tracking-wide text-brand-accent">
            Why this beats GFG
          </p>
          <ul className="mt-3 space-y-2 text-sm text-brand-muted">
            <li>• 100% production bugs, 0% textbook fluff.</li>
            <li>• Every question comes with real outage stories.</li>
            <li>• Exact titles &amp; slugs optimized for Google.</li>
            <li>• Experience filters tuned for 0–7+ years.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

