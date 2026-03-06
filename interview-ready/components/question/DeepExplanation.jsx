export default function DeepExplanation({ text }) {
  if (!text) return null;
  return (
    <section className="mt-6 rounded-xl border-l-4 border-brand-accent bg-brand-card p-4">
      <h2 className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
        Deep explanation
      </h2>
      <div className="mt-2 space-y-3 text-sm text-brand-text whitespace-pre-line">
        {text}
      </div>
    </section>
  );
}

