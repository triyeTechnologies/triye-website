import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ activeSection }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Vision', id: 'vision' },
        { name: 'Features', id: 'features' },
        { name: 'Technology', id: 'concept' },
        { name: 'Roadmap', id: 'roadmap' },
        { name: 'Future', id: 'future' },
        { name: 'Mission', id: 'mission' },
        { name: 'Founders', id: 'founders' }
    ];

    return (
        <header className="fixed w-full top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <img src="/logo.png" alt="Triye Logo" className="w-12 h-12 sm:w-14 sm:h-14" />
                        <img src="/triye1.png" alt="Triye" className="h-7 sm:h-8" />
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={`#${item.id}`}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                                    activeSection === item.id
                                        ? 'text-amber-400 bg-amber-400/8'
                                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="ml-4 px-5 py-2 rounded-lg text-sm font-bold text-black bg-amber-400 hover:bg-amber-300 transition-colors"
                        >
                            Contact Us
                        </a>
                    </nav>

                    {/* Mobile toggle */}
                    <button
                        className="lg:hidden p-2 rounded-lg text-zinc-400 hover:bg-white/5 hover:text-white transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {mobileMenuOpen && (
                    <nav className="lg:hidden mt-3 pb-4 border-t border-white/5 absolute left-0 w-full px-4 bg-[#0a0a0a] shadow-2xl">
                        <div className="flex flex-col space-y-1 pt-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={`#${item.id}`}
                                    className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                                        activeSection === item.id
                                            ? 'text-amber-400 bg-amber-400/8'
                                            : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                    }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="mt-2 px-4 py-2.5 rounded-lg text-sm font-bold text-black bg-amber-400 text-center"
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
