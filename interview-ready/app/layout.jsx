import './globals.css';
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ExperienceRoot from '@/components/layout/ExperienceRoot';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-display',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

export const metadata = {
  metadataBase: new URL('https://interviewready.in'),
  title: 'InterviewReady — Deep Production-Level Interview Questions',
  description:
    'Crack senior tech interviews with deep, production-level questions for Java, Spring Boot, React, Python, PostgreSQL and more.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${jetBrainsMono.variable}`}
    >
      <body className="bg-brand-bg text-brand-text font-sans">
        <ExperienceRoot>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ExperienceRoot>
      </body>
    </html>
  );
}

