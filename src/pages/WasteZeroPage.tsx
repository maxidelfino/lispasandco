import React from 'react';
import FloatingNavigation from '../components/FloatingNavigation';
import HeroSection from '../components/HeroSection';
import CircularWasteDiagram from '../components/CircularWasteDiagram';
import WasteZeroContent from '../components/ContentSection';
import FloatingCTAs from '../components/FloatingCTAs';
import { usePalette } from '../hooks/usePalette';

function WasteZeroPage() {
  const { currentPalette, changePalette } = usePalette();

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      <FloatingNavigation />
      <HeroSection />
      
      <section className="py-20">
        <CircularWasteDiagram />
      </section>
      
      <WasteZeroContent />
      
      <FloatingCTAs />
    </div>
  );
}

export default WasteZeroPage;