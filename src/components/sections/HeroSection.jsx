import React, { useRef } from 'react';
import { Play, ChevronDown } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const HeroSection = ({ isLoaded }) => {
    const heroRef = useRef(null);

    return (
        <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/hero section.png')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/60 to-purple-900/70"></div>
            </div>

            <ParticleBackground />

            <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
                <div className={`transform transition-all duration-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
                        The Future of
                        <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                            Smart Security
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Revolutionary AI-powered surveillance system that detects criminal activity in real-time,
                        tracks suspects across multiple cameras, and coordinates with law enforcement instantly.
                    </p>

                    <div className="flex justify-center">
                        <button
                            onClick={() => window.scrollTo({ top: document.getElementById('features').offsetTop - 100, behavior: 'smooth' })}
                            className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-3 rounded-xl text-base font-semibold flex items-center justify-center space-x-2 min-h-[44px] hover:from-emerald-700 hover:to-blue-700 transition-all duration-200"
                        >
                            <Play className="w-4 h-4" />
                            <span>Explore Our Features</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-6 h-6 text-white/60" />
            </div>
        </section>
    );
};

export default HeroSection;
