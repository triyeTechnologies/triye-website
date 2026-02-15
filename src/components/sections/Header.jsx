import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ activeSection }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed w-full top-0 z-40 bg-gray-950/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 cursor-pointer group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-emerald-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                            <img
                                src="/logo.png"
                                alt="Triye Logo"
                                className="w-12 h-12 sm:w-16 sm:h-16 relative z-10"
                            />
                        </div>
                        <img
                            src="/triye1.png"
                            alt="Triye"
                            className="h-8 sm:h-10"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
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
                                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-white/5 ${activeSection === item.id
                                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="ml-4 btn-neon bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium min-h-[40px] flex items-center hover:bg-emerald-500 transition-all duration-300"
                        >
                            Contact Us
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-md text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <nav className="lg:hidden mt-4 pb-4 border-t border-white/5 bg-gray-950/95 backdrop-blur-xl absolute left-0 w-full px-4 shadow-2xl">
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
                                    className={`px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 flex items-center ${activeSection === item.id
                                        ? 'text-emerald-400 bg-emerald-500/10'
                                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="btn-neon bg-emerald-600 text-white px-4 py-3 rounded-lg font-medium mt-4 flex items-center justify-center"
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
