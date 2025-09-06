import React from 'react';
import { Play, ChevronDown } from 'lucide-react';
import ParticleBackground from '../ui/ParticleBackground';
import { OptimizedImage } from '../../utils/imageUtils.jsx';
import { ASSETS } from '../../utils/assetUtils';

const HeroSection = ({ isLoaded, onPlayVideo }) => {
  const scrollToNextSection = () => {
    const visionSection = document.getElementById('vision');
    if (visionSection) {
      const offsetTop = visionSection.offsetTop - 100;
      window.scrollTo({
        top: Math.max(0, offsetTop),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0">
        <OptimizedImage
          src={ASSETS.heroSection}
          alt="Hero background"
          className="w-full h-full object-cover"
          placeholderType="hero"
          loading="eager"
          onLoad={() => {}}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/60 to-purple-900/70"></div>
      </div>
      
      <ParticleBackground particleCount={window.innerWidth < 768 ? 25 : 40} />

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`transform transition-all duration-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 sm:mb-6 leading-tight">
            The Future of
            <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Smart Security
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            Revolutionary AI-powered surveillance system that detects criminal activity in real-time, 
            tracks suspects across multiple cameras, and coordinates with law enforcement instantly.
          </p>
          
          <div className="flex justify-center">
            <button 
              onClick={onPlayVideo}
              className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold flex items-center justify-center space-x-2 hover:from-emerald-700 hover:to-blue-700 transition-all duration-200 min-h-[44px] focus:outline-none focus:ring-0"
            >
              <Play className="w-4 h-4" />
              <span>Explore Our Vision</span>
            </button>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/60 hover:text-white/80 transition-colors duration-200 focus:outline-none focus:ring-0"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
