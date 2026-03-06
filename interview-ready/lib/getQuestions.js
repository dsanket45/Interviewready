import { allQuestions } from '@/data';

export function getAllQuestions() {
  return allQuestions.sort((a, b) => (a.order || 0) - (b.order || 0));
}

export function getAllSlugs() {
  return getAllQuestions().map((q) => ({ topic: q.topic, slug: q.slug }));
}

export function getQuestion(topic, slug) {
  if (!topic || !slug) {
    // Fallback for internal calls where params may be missing during prerender.
    // Real routes always provide both topic and slug via generateStaticParams.
    return getAllQuestions()[0];
  }
  const q = getAllQuestions().find(
    (item) => item.topic === topic && item.slug === slug,
  );
  if (!q) {
    throw new Error(`Question not found for ${topic}/${slug}`);
  }
  return q;
}

export function getQuestionsByTopic(topic) {
  return getAllQuestions().filter((q) => q.topic === topic);
}

export function filterByExperience(questions, level) {
  if (level === null || level === undefined) return questions;
  return questions.filter(
    (q) =>
      Array.isArray(q.experienceLevel) && q.experienceLevel.includes(level),
  );
}

