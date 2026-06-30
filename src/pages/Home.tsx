import Hero from '../components/sections/Hero';
import MarqueeStrip from '../components/sections/MarqueeStrip';
import StatsStrip from '../components/sections/StatsStrip';
import ServicesSection from '../components/sections/ServicesSection';
import ProgramsSection from '../components/sections/ProgramsSection';
import ValuesSection from '../components/sections/ValuesSection';

import TestimonialsSection from '../components/sections/TestimonialsSection';
import AcademicFootprint from '../components/sections/AcademicFootprint';
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
      <ProgramsSection />
      <ValuesSection />

      <TestimonialsSection />
      <AcademicFootprint />
      <MediaSection />
      <CtaBand />
      <FaqSection />
    </>
  );
}
