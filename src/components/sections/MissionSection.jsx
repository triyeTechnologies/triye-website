import React from 'react';
import { motion } from 'framer-motion';
import { Target, Network, Zap, Sparkles } from 'lucide-react';

const MissionSection = () => {
    const stats = [
        { icon: Target, title: 'Real-Time Detection', desc: 'Instant identification and tracking of security threats', color: 'bg-red-500', glow: 'shadow-[0_0_20px_rgba(239,68,68,0.4)]' },
        { icon: Network, title: 'Connected Networks', desc: 'Unified camera systems with zero blind spots', color: 'bg-blue-500', glow: 'shadow-[0_0_20px_rgba(59,130,246,0.4)]' },
        { icon: Zap, title: 'Rapid Response', desc: 'Coordinated law enforcement within seconds', color: 'bg-yellow-500', glow: 'shadow-[0_0_20px_rgba(234,179,8,0.4)]' },
        { icon: Sparkles, title: 'Safer Communities', desc: 'Technology that protects what matters most', color: 'bg-emerald-500', glow: 'shadow-[0_0_20px_rgba(16,185,129,0.4)]' }
    ];

    return (
        <section id="mission" className="py-16 sm:py-32 bg-gray-950 relative overflow-hidden">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white"
                >
                    Our Mission
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg sm:text-xl mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed text-gray-400"
                >
                    We envision a world where advanced AI technology makes communities safer, response times faster,
                    and crime prevention more effective. Through innovative surveillance solutions, we're building
                    the foundation for smarter, more secure urban areas.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="text-center group"
                        >
                            <div className="glass-cyber rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all duration-300 h-full">
                                <div className={`w-20 h-20 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30 ${stat.glow} group-hover:scale-110 transition-transform duration-300`}>
                                    <stat.icon className="w-10 h-10 text-white drop-shadow-lg" />
                                </div>
                                <h4 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">{stat.title}</h4>
                                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{stat.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
