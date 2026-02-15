import React from 'react';
import { Target, Network, Zap, Sparkles } from 'lucide-react';

const MissionSection = () => (
    <section id="mission" className="py-16 sm:py-32 text-white relative overflow-hidden" style={{ backgroundColor: '#2D3748' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white">Our Mission</h2>
            <p className="text-lg sm:text-xl mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed text-gray-200">
                We envision a world where advanced AI technology makes communities safer, response times faster,
                and crime prevention more effective. Through innovative surveillance solutions, we're building
                the foundation for smarter, more secure urban areas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {[
                    { icon: Target, title: 'Real-Time Detection', desc: 'Instant identification and tracking of security threats', color: 'bg-red-500/60' },
                    { icon: Network, title: 'Connected Networks', desc: 'Unified camera systems with zero blind spots', color: 'bg-blue-500/60' },
                    { icon: Zap, title: 'Rapid Response', desc: 'Coordinated law enforcement within seconds', color: 'bg-yellow-500/60' },
                    { icon: Sparkles, title: 'Safer Communities', desc: 'Technology that protects what matters most', color: 'bg-emerald-500/60' }
                ].map((stat, index) => (
                    <div
                        key={index}
                        className="text-center"
                    >
                        <div className={`w-20 h-20 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30 shadow-lg`}>
                            <stat.icon className="w-10 h-10 text-white drop-shadow-lg" />
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold mb-3 text-white">{stat.title}</h4>
                        <p className="text-gray-300 text-sm sm:text-base">{stat.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default MissionSection;
