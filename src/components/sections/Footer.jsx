import React from 'react';

const Footer = () => (
    <footer className="bg-gray-950 text-white py-12 sm:py-16 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-center space-x-3 mb-8">
                <img
                    src="/logo.png"
                    alt="Triye Logo"
                    className="w-12 h-12 sm:w-14 sm:h-14 filter brightness-0 invert drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                />
                <div>
                    <img
                        src="/triye1.png"
                        alt="Triye"
                        className="h-6 sm:h-8 filter brightness-0 invert drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                    />
                    <div className="text-emerald-400 text-xs sm:text-sm tracking-widest font-medium mt-1">Eye that never blinks!</div>
                </div>
            </div>
            <p className="text-center text-gray-500 text-sm sm:text-base">
                © 2025 Triye. All rights reserved. | Currently in development phase.
            </p>
        </div>
    </footer>
);

export default Footer;
