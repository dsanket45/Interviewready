export default function InterviewTip({ text }) {
  if (!text) return null;
  return (
    <section className="mt-6 rounded-xl border-l-4 border-brand-accent bg-brand-card p-4">
      <h2 className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
        Interviewer insight
      </h2>
      <p className="mt-2 text-sm text-brand-text whitespace-pre-line">
        {text}
      </p>
    </section>
  );
}

