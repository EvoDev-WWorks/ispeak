import Hero from '../components/sections/Hero';
import MarqueeStrip from '../components/sections/MarqueeStrip';
import StatsStrip from '../components/sections/StatsStrip';
import ServicesSection from '../components/sections/ServicesSection';
import HowItWorks from '../components/sections/HowItWorks';
import ValuesSection from '../components/sections/ValuesSection';
import SankalpasSection from '../components/sections/SankalpasSection';
import ImpactSection from '../components/sections/ImpactSection';
import WhoWeServe from '../components/sections/WhoWeServe';
import AcademicFootprint from '../components/sections/AcademicFootprint';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import MediaSection from '../components/sections/MediaSection';
import CtaBand from '../components/sections/CtaBand';
import FaqSection from '../components/sections/FaqSection';

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <StatsStrip />
      <ServicesSection />
      <HowItWorks />
      <ValuesSection />
      <SankalpasSection />
      <ImpactSection />
      <WhoWeServe />
      <AcademicFootprint />
      <TestimonialsSection />
      <MediaSection />
      <CtaBand />
      <FaqSection />
    </>
  );
}
