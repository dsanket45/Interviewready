"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar({ placeholder = 'Search deep questions…' }) {
  const [value, setValue] = useState('');
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    const q = value.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full items-center gap-2 rounded-full border border-brand-border bg-brand-surface/80 px-4 py-2 backdrop-blur"
    >
      <input
        type="text"
        className="flex-1 bg-transparent text-sm text-brand-text placeholder:text-brand-muted focus:outline-none"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-full bg-brand-accent px-4 py-1.5 text-xs font-semibold text-brand-bg hover:bg-brand-accentHover transition-colors"
      >
        Search
      </button>
    </form>
  );
}

