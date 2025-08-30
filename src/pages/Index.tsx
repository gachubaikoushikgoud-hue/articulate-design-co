import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import RacingStory from '@/components/RacingStory';
import F1Facts from '@/components/F1Facts';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Gallery />
      <RacingStory />
      <F1Facts />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
