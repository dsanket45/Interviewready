"use client";

import { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'interviewready_experience_level';

const ExperienceContext = createContext({
  level: null,
  setLevel: () => {},
});

export function ExperienceProvider({ children }) {
  const [level, setLevelState] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      const parsed = parseInt(stored, 10);
      if (!Number.isNaN(parsed)) {
        setLevelState(parsed);
      }
    }
  }, []);

  const setLevel = (next) => {
    setLevelState(next);
    if (typeof window !== 'undefined') {
      if (next === null) {
        window.localStorage.removeItem(STORAGE_KEY);
      } else {
        window.localStorage.setItem(STORAGE_KEY, String(next));
      }
    }
  };

  return (
    <ExperienceContext.Provider value={{ level, setLevel }}>
      {children}
    </ExperienceContext.Provider>
  );
}

export function useExperience() {
  return useContext(ExperienceContext);
}

