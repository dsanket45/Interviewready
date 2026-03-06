/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0a0f1a',
          surface: '#0f1629',
          card: '#131d35',
          border: '#1e2d4a',
          accent: '#38bdf8',
          accentHover: '#7dd3fc',
          accentDim: '#0c2a4a',
          text: '#e2e8f0',
          muted: '#64748b',
          white: '#ffffff',
          success: '#34d399',
          warning: '#fbbf24',
          danger: '#f87171',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};

