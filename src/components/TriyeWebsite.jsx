import React, { useState, useEffect } from 'react';

// Components
import ErrorBoundary from './common/ErrorBoundary';
import Header from './common/Header';
import Footer from './common/Footer';
import HeroSection from './sections/HeroSection';
import VisionSection from './sections/VisionSection';
import ConceptSection from './sections/ConceptSection';
import RoadmapSection from './sections/RoadmapSection';
import FutureProductsSection from './sections/FutureProductsSection';
import MissionSection from './sections/MissionSection';
import FoundersSection from './sections/FoundersSection';
import ContactSection from './sections/ContactSection';

// UI Components
import ContactForm from './ui/ContactForm';
import Modal from './ui/Modal';
import TechConceptModal from './ui/TechConceptModal';

// Hooks
import { useScrollPosition } from '../hooks/useScrollPosition';

// Data
import { NAVIGATION_ITEMS } from '../data/constants';

const TriyeWebsite = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [techModal, setTechModal] = useState({
    isOpen: false,
    concept: null
  });

  const sectionIds = ['home', ...NAVIGATION_ITEMS.map(item => item.id), 'contact'];
  const { activeSection } = useScrollPosition(sectionIds, 100);

  useEffect(() => {
    setIsLoaded(true);
    
    const criticalImages = ['/images/logo.png', '/hero-section.png'];
    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (showVideoModal || showContactForm || techModal.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showVideoModal, showContactForm, techModal.isOpen]);

  const handleOpenTechModal = (concept) => {
    setTechModal({
      isOpen: true,
      concept
    });
  };

  const handleCloseTechModal = () => {
    setTechModal({
      isOpen: false,
      concept: null
    });
  };

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-white overflow-x-hidden">
        <Header
          activeSection={activeSection}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        <main>
          <HeroSection
            isLoaded={isLoaded}
            onPlayVideo={() => setShowVideoModal(true)}
          />
          
          <VisionSection />
          
          <ConceptSection 
            onOpenTechModal={handleOpenTechModal}
          />
          
          <RoadmapSection />
          
          <FutureProductsSection />
          
          <MissionSection />
          
          <FoundersSection />
          
          <ContactSection 
            onOpenContactForm={() => setShowContactForm(true)}
          />
        </main>

        <Footer />

        {/* Video Modal */}
        <Modal
          isOpen={showVideoModal}
          onClose={() => setShowVideoModal(false)}
          title="Traced Demo"
          maxWidth="5xl"
          darkTheme={true}
        >
          <video
            className="w-full h-full max-w-full max-h-full object-contain"
            controls
            autoPlay
            muted
            preload="metadata"
          >
            <source src="/videos/demo.mp4" type="video/mp4" />
            <p className="text-white text-center p-4">Your browser doesn't support video playback.</p>
          </video>
        </Modal>

        {/* Contact Form */}
        <ContactForm
          isOpen={showContactForm}
          onClose={() => setShowContactForm(false)}
        />

        {/* Tech Concept Modal */}
        <TechConceptModal
          isOpen={techModal.isOpen}
          onClose={handleCloseTechModal}
          concept={techModal.concept}
        />

        {/* Loading Screen */}
        {!isLoaded && (
          <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading Triye...</p>
            </div>
          </div>
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
          
          @media (prefers-reduced-motion: reduce) {
            .animate-float,
            .animate-pulse,
            .animate-bounce,
            .animate-spin {
              animation: none;
            }
            
            * {
              transition-duration: 0.01ms !important;
            }
            
            html {
              scroll-behavior: auto;
            }
          }

          *:focus {
            outline: none;
            box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
            border-radius: 4px;
          }

          .loading {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
          }

          .loaded {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
      </div>
    </ErrorBoundary>
  );
};

export default TriyeWebsite;