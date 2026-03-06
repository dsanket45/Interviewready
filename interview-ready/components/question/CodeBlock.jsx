"use client";

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Snippet({ title, code, variant }) {
  const [copied, setCopied] = useState(false);
  const isWrong = variant === 'wrong';
  const borderColor = isWrong ? 'border-brand-danger' : 'border-brand-success';
  const label = isWrong ? '❌ Wrong approach' : '✅ Correct approach';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <div
      className={`relative mt-4 overflow-hidden rounded-lg border-l-4 ${borderColor} bg-[#0d1117]`}
    >
      <div className="flex items-center justify-between px-4 py-2 text-xs text-brand-muted">
        <span>{label}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-full border border-brand-border bg-brand-card px-3 py-0.5 text-[10px] uppercase tracking-wide hover:border-brand-accent hover:text-brand-accent"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <SyntaxHighlighter
        language="java"
        style={oneDark}
        customStyle={{
          margin: 0,
          padding: '12px 16px',
          background: '#0d1117',
          fontSize: '0.8rem',
          fontFamily: 'var(--font-mono)',
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
}

export default function CodeBlock({ wrong, correct }) {
  if (!wrong && !correct) return null;
  return (
    <section className="mt-6 rounded-xl border-l-4 border-brand-accent bg-brand-card p-4">
      <h2 className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
        Code comparison
      </h2>
      {wrong && <Snippet variant="wrong" code={wrong} />}
      {correct && <Snippet variant="correct" code={correct} />}
    </section>
  );
}

