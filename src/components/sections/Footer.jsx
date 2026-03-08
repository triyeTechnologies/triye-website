import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
    <footer className="bg-gray-950 border-t border-white/5 relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

                {/* Brand */}
                <div className="flex flex-col items-center md:items-start gap-3">
                    <div className="flex items-center gap-3">
                        <img
                            src="/logo.png"
                            alt="Triye Logo"
                            className="w-9 h-9 filter brightness-0 invert drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
                        />
                        <img
                            src="/triye1.png"
                            alt="Triye"
                            className="h-6 filter brightness-0 invert drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
                        />
                    </div>
                    <p className="text-emerald-400/80 text-xs tracking-widest font-medium uppercase">Eye that never blinks</p>
                    <p className="text-gray-600 text-xs max-w-[220px] text-center md:text-left leading-relaxed">
                        AI-powered surveillance intelligence for safer cities.
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-col items-center md:items-start gap-3">
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-1">Navigate</p>
                    {['Home', 'Features', 'Vision', 'Roadmap', 'Founders', 'Contact'].map(link => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-gray-400 text-sm hover:text-emerald-400 transition-colors duration-200"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* Social */}
                <div className="flex flex-col items-center md:items-start gap-3">
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-1">Connect</p>
                    <a
                        href="https://www.instagram.com/triye_technologies/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 text-sm hover:text-pink-400 transition-colors duration-200"
                    >
                        <Instagram className="w-4 h-4" />
                        <span>Instagram</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/company/triye-technologies/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 text-sm hover:text-blue-400 transition-colors duration-200"
                    >
                        <Linkedin className="w-4 h-4" />
                        <span>LinkedIn</span>
                    </a>
                    <span className="flex items-center gap-2 text-gray-400 text-sm">
                        <Mail className="w-4 h-4" />
                        <span>triye3@gmail.com</span>
                    </span>
                </div>
            </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-4 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
                <span>© 2025 Triye Technologies. All rights reserved.</span>
                <span>Currently in development phase.</span>
            </div>
        </div>
    </footer>
);

export default Footer;
