export default function StatsBar() {
  const stats = [
    { label: 'Deep Questions', value: '5,000+' },
    { label: 'Tech Topics', value: '10' },
    { label: 'Basic Definitions', value: '0' },
    { label: 'Price', value: '100% Free' },
  ];

  return (
    <section className="border-b border-brand-border bg-brand-surface/80">
      <div className="ir-container grid gap-4 py-4 text-center text-xs md:grid-cols-4 md:text-sm">
        {stats.map((s) => (
          <div key={s.label} className="space-y-1">
            <div className="font-mono text-base font-semibold text-brand-white">
              {s.value}
            </div>
            <div className="text-brand-muted">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

