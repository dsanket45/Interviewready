"use client";

import { ExperienceProvider } from '@/lib/experienceContext';

export default function ExperienceRoot({ children }) {
  return <ExperienceProvider>{children}</ExperienceProvider>;
}

