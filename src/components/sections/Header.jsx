import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ activeSection }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed w-full top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <img
                            src="/logo.png"
                            alt="Triye Logo"
                            className="w-12 h-12 sm:w-16 sm:h-16"
                        />
                        <img
                            src="/triye.png"
                            alt="Triye"
                            className="h-8 sm:h-10"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-6">
                        {[
                            { name: 'Vision', id: 'vision' },
                            { name: 'Features', id: 'features' },
                            { name: 'Technology', id: 'concept' },
                            { name: 'Roadmap', id: 'roadmap' },
                            { name: 'Future', id: 'future' },
                            { name: 'Mission', id: 'mission' },
                            { name: 'Founders', id: 'founders' }
                        ].map((item) => (
                            <a
                                key={item.name}
                                href={`#${item.id}`}
                                className={`px-4 py-3 text-base font-medium transition-colors duration-200 ${activeSection === item.id ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                                    }`}
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium min-h-[48px] flex items-center hover:from-emerald-600 hover:to-blue-600 transition-all duration-200"
                        >
                            Contact Us
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 min-h-[48px] min-w-[48px] flex items-center justify-center"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <nav className="lg:hidden mt-4 pb-4 border-t border-gray-100">
                        <div className="flex flex-col space-y-2 pt-4">
                            {[
                                { name: 'Vision', id: 'vision' },
                                { name: 'Features', id: 'features' },
                                { name: 'Technology', id: 'concept' },
                                { name: 'Roadmap', id: 'roadmap' },
                                { name: 'Future', id: 'future' },
                                { name: 'Mission', id: 'mission' },
                                { name: 'Founders', id: 'founders' }
                            ].map((item) => (
                                <a
                                    key={item.name}
                                    href={`#${item.id}`}
                                    className={`px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 hover:bg-gray-50 min-h-[48px] flex items-center ${activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-3 rounded-lg font-medium mt-2 min-h-[48px] flex items-center justify-center hover:from-emerald-600 hover:to-blue-600 transition-all duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact Us
                            </a>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
