import Link from 'next/link';
import { topics } from '@/data/topics';

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-surface mt-12">
      <div className="ir-container grid gap-8 py-8 md:grid-cols-3">
        <div>
          <h3 className="font-display text-sm font-semibold text-brand-white">
            InterviewReady
          </h3>
          <p className="mt-2 text-sm text-brand-muted">
            Deep, production-level interview questions that go beyond basic
            textbook definitions.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-brand-muted">
            Topics
          </h4>
          <ul className="mt-2 space-y-1 text-sm">
            {topics.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/${t.slug}`}
                  className="text-brand-text hover:text-brand-accent"
                >
                  {t.icon} {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-brand-muted">
            Site
          </h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <Link href="/about" className="hover:text-brand-accent">
                About InterviewReady
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-border py-3 text-center text-xs text-brand-muted">
        © {new Date().getFullYear()} InterviewReady.in — 100% free for
        developers.
      </div>
    </footer>
  );
}

