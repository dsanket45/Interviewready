import { getAllQuestions } from '@/lib/getQuestions';
import { topics } from '@/data/topics';

export default function sitemap() {
  const questions = getAllQuestions();

  const questionPages = questions.map((q) => ({
    url: `https://interviewready.in/${q.topic}/${q.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const topicPages = topics.map((t) => ({
    url: `https://interviewready.in/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    { url: 'https://interviewready.in', priority: 1.0 },
    ...topicPages,
    ...questionPages,
  ];
}

