import React, { useState, useEffect } from 'react';
import EmailForm from './EmailForm';

// Import Section Components
import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import VisionSection from './sections/VisionSection';
import TracedFeaturesSection from './sections/TracedFeaturesSection';
import VideoSection from './sections/VideoSection';
import ConceptSection from './sections/ConceptSection';
import RoadmapSection from './sections/RoadmapSection';
import FutureProductsSection from './sections/FutureProductsSection';
import MissionSection from './sections/MissionSection';
import FoundersSection from './sections/FoundersSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

const TriyeWebsite = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showEmailForm, setShowEmailForm] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const sections = ['home', 'vision', 'features', 'video', 'concept', 'roadmap', 'future', 'mission', 'founders', 'contact'];
    let ticking = false;

    const updateActiveSection = () => {
      ticking = false;
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Throttle scroll-spy to one update per animation frame
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActiveSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: '#0a0a0a' }}>
      <Header activeSection={activeSection} />
      <HeroSection isLoaded={isLoaded} />
      <VisionSection />
      <TracedFeaturesSection />
      <VideoSection />
      <ConceptSection />
      <RoadmapSection />
      <FutureProductsSection />
      <MissionSection />
      <FoundersSection />
      <ContactSection setShowEmailForm={setShowEmailForm} />
      <Footer />

      {/* Email Form Modal */}
      {showEmailForm && (
        <EmailForm
          onClose={() => setShowEmailForm(false)}
        />
      )}
    </div>
  );
};

export default TriyeWebsite;