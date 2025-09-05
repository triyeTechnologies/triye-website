import React from 'react';
import { SITE_CONFIG } from '../../data/constants';
import { OptimizedImage } from '../../utils/imageUtils.jsx';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-start justify-center space-x-3 mb-8">
          <OptimizedImage 
            src="/images/logo.png" 
            alt="Triye Logo" 
            className="w-12 h-12 sm:w-14 sm:h-14 filter brightness-0 invert"
            placeholderType="logo"
            width={56}
            height={56}
          />
          <div className="flex flex-col items-start">
            <OptimizedImage 
              src="/images/triye1.png" 
              alt="TRIYE" 
              className="h-6 sm:h-8 w-auto filter brightness-0 invert mt-2"
              placeholderType="logo"
            />
            <div className="text-gray-400 text-xs sm:text-sm mt-1">{SITE_CONFIG.tagline}</div>
          </div>
        </div>
        <p className="text-center text-gray-400 text-sm sm:text-base">
          © 2025 {SITE_CONFIG.name}. All rights reserved. | Currently in development phase.
        </p>
      </div>
    </footer>
  );
};

export default Footer;