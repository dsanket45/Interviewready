import Link from 'next/link';
import { topics } from '@/data/topics';
import {
  getQuestionsByTopic,
  filterByExperience,
} from '@/lib/getQuestions';
import DifficultyBadge from '@/components/ui/DifficultyBadge';
import TopicBadge from '@/components/ui/TopicBadge';

const EXPERIENCE_PAGES = [
  // Java
  {
    topic: 'java',
    slug: 'fresher-interview-questions',
    level: 0,
    title: 'Fresher Java Interview Questions 2026 | InterviewReady',
    label: 'Fresher',
    description:
      'Curated Java interview questions for freshers in 2026, focusing on fundamentals that still matter in real codebases.',
  },
  {
    topic: 'java',
    slug: '1-2-years-experience-interview-questions',
    level: 1,
    title:
      'Java Interview Questions for 1-2 Years Experience 2026 | InterviewReady',
    label: '1-2 Years',
    description:
      'Production-focused Java interview questions for developers with 1-2 years of experience.',
  },
  {
    topic: 'java',
    slug: '2-4-years-experience-interview-questions',
    level: 2,
    title:
      'Java Interview Questions for 2-4 Years Experience 2026 | InterviewReady',
    label: '2-4 Years',
    description:
      'Deep Java interview questions for 2-4 years experienced engineers, covering concurrency, memory, and Spring.',
  },
  {
    topic: 'java',
    slug: '4-7-years-experience-interview-questions',
    level: 3,
    title:
      'Java Interview Questions for 4-7 Years Experience 2026 | InterviewReady',
    label: '4-7 Years',
    description:
      'Senior Java interview questions for 4-7 years of experience, focused on JVM internals and production debugging.',
  },
  {
    topic: 'java',
    slug: 'senior-developer-interview-questions',
    level: 4,
    title:
      'Senior Java Developer Interview Questions 2026 | InterviewReady',
    label: 'Senior Developer',
    description:
      'High-level Java questions for senior and lead developers, emphasizing architecture and trade-offs.',
  },
  // Spring Boot
  {
    topic: 'spring-boot',
    slug: 'fresher-interview-questions',
    level: 0,
    title:
      'Spring Boot Fresher Interview Questions 2026 | InterviewReady',
    label: 'Fresher',
    description:
      'Entry-level Spring Boot interview questions for freshers stepping into backend development.',
  },
  {
    topic: 'spring-boot',
    slug: '2-4-years-experience-interview-questions',
    level: 2,
    title:
      'Spring Boot Interview Questions for 2-4 Years Experience 2026 | InterviewReady',
    label: '2-4 Years',
    description:
      'Real-world Spring Boot interview questions for developers with 2-4 years of experience.',
  },
  {
    topic: 'spring-boot',
    slug: 'senior-developer-interview-questions',
    level: 4,
    title:
      'Senior Spring Boot Developer Interview Questions 2026 | InterviewReady',
    label: 'Senior Developer',
    description:
      'Advanced Spring Boot questions for senior developers responsible for large-scale services.',
  },
];

function findConfig(topic, expSlug) {
  return EXPERIENCE_PAGES.find(
    (p) => p.topic === topic && p.slug === expSlug,
  );
}

export async function generateStaticParams() {
  return EXPERIENCE_PAGES.map((p) => ({
    topic: p.topic,
    experience: p.slug,
  }));
}

export async function generateMetadata({ params }) {
  const expSlug = params.experience;
  const cfg = findConfig(params.topic, expSlug);
  if (!cfg) {
    return {
      title: 'InterviewReady',
    };
  }

  const url = `https://interviewready.in/${cfg.topic}/${cfg.slug}`;
  const questions = filterByExperience(
    getQuestionsByTopic(cfg.topic),
    cfg.level,
  ).slice(0, 5);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.quickAnswer,
      },
    })),
  };

  return {
    title: cfg.title,
    description: cfg.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: cfg.title,
      description: cfg.description,
      type: 'article',
      url,
    },
    other: {
      'application/ld+json': JSON.stringify(faqSchema),
    },
  };
}

export default function ExperiencePage({ params }) {
  const expSlug = params.experience;
  const cfg = findConfig(params.topic, expSlug);

  if (!cfg) {
    return (
      <div className="ir-container py-10">
        <p className="text-brand-muted">Experience page not found.</p>
      </div>
    );
  }

  const topicMeta = topics.find((t) => t.slug === cfg.topic);
  const allForTopic = getQuestionsByTopic(cfg.topic);
  const filtered = filterByExperience(allForTopic, cfg.level);

  const siblings = EXPERIENCE_PAGES.filter(
    (p) => p.topic === cfg.topic,
  );

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="ir-container py-8">
        <div className="flex items-center gap-3">
          {topicMeta && (
            <>
              <span className="text-2xl">
                {topicMeta.icon}
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-brand-muted">
                  {topicMeta.name} · {cfg.label}
                </p>
                <h1 className="mt-1 font-display text-2xl md:text-3xl font-extrabold text-brand-white">
                  {cfg.title}
                </h1>
              </div>
            </>
          )}
        </div>
        <p className="mt-3 text-sm text-brand-muted max-w-2xl">
          {cfg.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          {siblings.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.topic}/${p.slug}`}
              className={`rounded-full border px-3 py-1 ${
                p.slug === cfg.slug
                  ? 'border-brand-accent bg-brand-accent text-brand-bg'
                  : 'border-brand-border bg-brand-card text-brand-muted hover:text-brand-white'
              }`}
            >
              {p.label}
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-brand-border bg-brand-card">
          {filtered.length === 0 ? (
            <div className="px-4 py-6 text-sm text-brand-muted">
              Questions for this experience band are coming soon.
              Check other levels in the meantime.
            </div>
          ) : (
            <ul className="divide-y divide-brand-border">
              {filtered.map((q) => (
                <li key={`${q.topic}/${q.slug}`}>
                  <Link
                    href={`/${q.topic}/${q.slug}`}
                    className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-brand-surface/80"
                  >
                    <div>
                      <p className="text-sm text-brand-white">
                        {q.question}
                      </p>
                      <p className="mt-1 text-xs text-brand-muted line-clamp-2">
                        {q.quickAnswer}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <TopicBadge topic={q.topic} />
                      <DifficultyBadge level={q.difficulty} />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}


