import HeroSection from '@/components/home/HeroSection';
import StatsBar from '@/components/home/StatsBar';
import TopicsGrid from '@/components/home/TopicsGrid';
import FeaturedQuestions from '@/components/home/FeaturedQuestions';
import StudyPath from '@/components/home/StudyPath';

export default function HomePage() {
  return (
    <div className="bg-brand-bg text-brand-text">
      <HeroSection />
      <StatsBar />
      <TopicsGrid />
      <FeaturedQuestions />
      <StudyPath />
    </div>
  );
}

