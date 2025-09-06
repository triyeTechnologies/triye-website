import React from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS, SITE_CONFIG } from '../../data/constants';
import { OptimizedImage } from '../../utils/imageUtils.jsx';
import { ASSETS } from '../../utils/assetUtils';

const Header = ({ activeSection, mobileMenuOpen, setMobileMenuOpen }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: Math.max(0, offsetTop),
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 cursor-pointer" onClick={() => scrollToSection('home')}>
            <OptimizedImage 
              src={ASSETS.logo}
              alt="Triye Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
              placeholderType="logo"
              width={64}
              height={64}
            />
            <OptimizedImage 
              src={ASSETS.triyeLogo}
              alt="TRIYE" 
              className="h-6 sm:h-8 md:h-10 w-auto"
              placeholderType="logo"
            />
          </div>
          
          <nav className="hidden lg:flex items-center space-x-6">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`text-base font-medium transition-colors duration-200 hover:text-blue-600 focus:outline-none focus:ring-0 ${
                  activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                }`}
                style={{ 
                  background: 'none',
                  border: 'none',
                  padding: '12px 16px',
                  boxShadow: 'none'
                }}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium min-h-[48px] flex items-center hover:from-emerald-600 hover:to-blue-600 transition-all duration-200 focus:outline-none focus:ring-0"
            >
              Contact Us
            </button>
          </nav>

          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-0 active:bg-gray-200"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle mobile menu"
            type="button"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-1 pt-4">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 text-base font-medium transition-colors duration-200 hover:bg-gray-50 min-h-[44px] flex items-start text-left focus:outline-none focus:ring-0 rounded-lg ${
                    activeSection === item.id ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                  }`}
                  style={{ 
                    background: activeSection === item.id ? '#eff6ff' : 'transparent',
                    border: 'none',
                    boxShadow: 'none'
                  }}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-3 rounded-lg font-medium mt-2 min-h-[44px] flex items-center justify-center hover:from-emerald-600 hover:to-blue-600 transition-all duration-200 focus:outline-none focus:ring-0"
              >
                Contact Us
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
