import React from 'react';

const Footer = () => (
    <footer className="bg-black text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-center space-x-3 mb-8">
                <img
                    src="/logo.png"
                    alt="Triye Logo"
                    className="w-12 h-12 sm:w-14 sm:h-14 filter brightness-0 invert"
                />
                <div>
                    <img
                        src="/triye1.png"
                        alt="Triye"
                        className="h-6 sm:h-8 filter brightness-0 invert"
                    />
                    <div className="text-gray-400 text-xs sm:text-sm">Eye that never blinks!</div>
                </div>
            </div>
            <p className="text-center text-gray-400 text-sm sm:text-base">
                © 2025 Triye. All rights reserved. | Currently in development phase.
            </p>
        </div>
    </footer>
);

export default Footer;
