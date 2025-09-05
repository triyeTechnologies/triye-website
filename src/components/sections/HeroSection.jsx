import React from 'react';
import { Play, ChevronDown } from 'lucide-react';
import ParticleBackground from '../ui/ParticleBackground';
import { OptimizedImage } from '../../utils/imageUtils.jsx';

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <OptimizedImage
          src="/images/hero-section.png"
          alt="Hero background"
          className="w-full h-full object-cover"
          placeholderType="hero"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/60 to-purple-900/70"></div>
      </div>
      
      <ParticleBackground particleCount={window.innerWidth < 768 ? 30 : 50} />
      
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-10 pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${4 + i * 0.5}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        >
          <div className={`w-12 h-12 sm:w-16 sm:h-16 ${
            i % 3 === 0 ? 'bg-gradient-to-r from-emerald-400 to-blue-500' :
            i % 3 === 1 ? 'bg-gradient-to-r from-red-400 to-pink-500' :
            'bg-gradient-to-r from-blue-400 to-purple-500'
          } rounded-2xl transform rotate-45 shadow-2xl`}></div>
        </div>
      ))}

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`transform transition-all duration-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white mb-6 leading-tight">
            The Future of
            <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Smart Security
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary AI-powered surveillance system that detects criminal activity in real-time, 
            tracks suspects across multiple cameras, and coordinates with law enforcement instantly.
          </p>
          
          <div className="flex justify-center">
            <button 
              onClick={onPlayVideo}
              className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-3 rounded-lg text-base font-semibold flex items-center justify-center space-x-2 hover:from-emerald-700 hover:to-blue-700 transition-all duration-200"
            >
              <Play className="w-4 h-4" />
              <span>Explore Our Vision</span>
            </button>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce text-white/60 hover:text-white/80 transition-colors duration-200"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;