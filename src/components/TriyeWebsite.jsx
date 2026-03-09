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

    const handleScroll = () => {
      const sections = ['home', 'vision', 'features', 'video', 'concept', 'roadmap', 'future', 'mission', 'founders', 'contact'];
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

    window.addEventListener('scroll', handleScroll);

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

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
          }
          50% { 
            transform: translateY(-20px) rotate(10deg) scale(1.05); 
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Hide scrollbars */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-pulse,
          .animate-bounce {
            animation: none;
          }
          
          * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TriyeWebsite;