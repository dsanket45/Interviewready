import QuickAnswer from '@/components/question/QuickAnswer';
import DeepExplanation from '@/components/question/DeepExplanation';
import RealWorldExample from '@/components/question/RealWorldExample';
import CodeBlock from '@/components/question/CodeBlock';
import WhatIfNotUsed from '@/components/question/WhatIfNotUsed';
import WhenToUse from '@/components/question/WhenToUse';
import InterviewTip from '@/components/question/InterviewTip';
import RelatedQuestions from '@/components/question/RelatedQuestions';
import NextPrevNav from '@/components/question/NextPrevNav';
import Breadcrumb from '@/components/question/Breadcrumb';
import DifficultyBadge from '@/components/ui/DifficultyBadge';
import TopicBadge from '@/components/ui/TopicBadge';
import { getQuestion, getAllSlugs } from '@/lib/getQuestions';

export async function generateStaticParams() {
  const all = getAllSlugs();
  return all.map((q) => ({
    topic: q.topic,
    slug: q.slug,
  }));
}

export async function generateMetadata({ params }) {
  if (!params || !params.topic || !params.slug) {
    return {
      title: 'InterviewReady',
    };
  }

  const q = getQuestion(params.topic, params.slug);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: q.quickAnswer,
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://interviewready.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: q.topic,
        item: `https://interviewready.in/${q.topic}`,
      },
    ],
  };

  const url = `https://interviewready.in/${q.topic}/${q.slug}`;

  return {
    title: q.metaTitle,
    description: q.metaDescription,
    keywords: q.tags.join(', '),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: q.metaTitle,
      description: q.metaDescription,
      type: 'article',
      url,
    },
    other: {
      'application/ld+json': JSON.stringify(faqSchema),
      'application/ld+json:breadcrumb': JSON.stringify(breadcrumbSchema),
    },
  };
}

export default function QuestionPage({ params }) {
  const q = getQuestion(params.topic, params.slug);

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="ir-container py-8">
        <Breadcrumb
          topic={q.topic}
          subtopic={q.subtopic}
          question={q.question}
        />

        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-brand-white leading-tight">
          {q.question}
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <TopicBadge topic={q.topic} />
          <DifficultyBadge level={q.difficulty} />
          {Array.isArray(q.experienceLevel) && q.experienceLevel.length > 0 && (
            <span className="text-xs text-brand-muted">
              Asked at:{' '}
              {q.experienceLevel.includes(4)
                ? '7+ Years interviews'
                : q.experienceLevel.includes(3)
                ? '4-7 Years interviews'
                : q.experienceLevel.includes(2)
                ? '2-4 Years interviews'
                : q.experienceLevel.includes(1)
                ? '1-2 Years interviews'
                : 'Fresher interviews'}
            </span>
          )}
        </div>

        <QuickAnswer text={q.quickAnswer} />
        <DeepExplanation text={q.explanation} />
        <RealWorldExample text={q.realWorldExample} />
        <CodeBlock wrong={q.codeExample?.wrong} correct={q.codeExample?.correct} />
        <WhatIfNotUsed text={q.whatIfNotUsed} />
        <WhenToUse text={q.whenToUse} />
        <InterviewTip text={q.interviewTip} />
        <RelatedQuestions slugs={q.relatedQuestions} topic={q.topic} />
        <NextPrevNav
          prevSlug={q.prevSlug}
          nextSlug={q.nextSlug}
          topic={q.topic}
        />
      </div>
    </div>
  );
}

