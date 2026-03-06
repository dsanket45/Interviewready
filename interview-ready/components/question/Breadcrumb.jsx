import Link from 'next/link';

export default function Breadcrumb({ topic, subtopic, question }) {
  const parts = [];
  if (topic) {
    parts.push({
      href: `/${topic}`,
      label: topic,
    });
  }
  if (subtopic) {
    parts.push({
      href: `/${topic}#${encodeURIComponent(subtopic)}`,
      label: subtopic,
    });
  }

  return (
    <nav
      className="text-xs text-brand-muted"
      aria-label="Breadcrumb"
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      <ol className="flex flex-wrap items-center gap-1">
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link href="/" className="hover:text-brand-accent" itemProp="item">
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        {parts.map((p, index) => (
          <li
            key={p.href}
            className="flex items-center gap-1"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <span>/</span>
            <Link
              href={p.href}
              className="hover:text-brand-accent"
              itemProp="item"
            >
              <span itemProp="name">{p.label}</span>
            </Link>
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
        {question && (
          <li className="flex items-center gap-1">
            <span>/</span>
            <span className="line-clamp-1 text-brand-text">{question}</span>
          </li>
        )}
      </ol>
    </nav>
  );
}

