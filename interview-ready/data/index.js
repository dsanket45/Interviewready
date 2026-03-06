import { topics } from './topics';
import { java } from './java';
import { springBoot } from './spring-boot';

// Placeholder arrays for future topics; keep shape consistent.
export const react = [];
export const python = [];
export const postgresql = [];
export const mysql = [];
export const javascript = [];
export const htmlCss = [];
export const systemDesign = [];

export const allQuestions = [
  ...java,
  ...springBoot,
  // spread future topic arrays here as they are implemented
];

export { topics };

