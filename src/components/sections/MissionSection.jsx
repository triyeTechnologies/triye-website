import React from 'react';
import { motion } from 'framer-motion';

const MissionSection = () => {
    const metrics = [
        { value: '< 2s',  label: 'Detection to Alert',   sub: 'Response time' },
        { value: '360°',  label: 'City Coverage',         sub: 'Zero blind spots' },
        { value: '24/7',  label: 'Always On',             sub: 'Continuous monitoring' },
        { value: '~95%',  label: 'Detection Accuracy',    sub: 'Tested accuracy' },
    ];

    return (
        <section id="mission" className="py-16 sm:py-28 overflow-hidden" style={{ background: '#111111' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left — mission statement */}
                    <div>
                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">Purpose</motion.p>
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
                            Our <span className="gradient-text">Mission</span>
                        </motion.h2>
                        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-zinc-400 text-lg leading-relaxed mb-8">
                            We envision a world where advanced AI technology makes communities safer, response times faster, and crime prevention more effective.
                        </motion.p>
                        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }} className="text-zinc-600 leading-relaxed">
                            Through innovative surveillance solutions, we're building the foundation for smarter, more secure urban areas across India — with privacy and ethics at the core.
                        </motion.p>

                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-10 pt-8 border-t border-white/6 flex items-center gap-4">
                            <img src="/logo.png" alt="Triye" className="w-10 h-10 opacity-60" />
                            <div>
                                <p className="text-sm font-semibold text-white">Triye Technologies</p>
                                <p className="text-xs text-zinc-600">Eye that never blinks</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right — big metrics grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {metrics.map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className={`rounded-2xl p-7 flex flex-col justify-between min-h-[160px] ${
                                    i === 0 ? 'border border-amber-400/25' :
                                    i === 1 ? 'border border-white/10' :
                                    'border border-white/6'
                                }`}
                                style={{ background: i === 0 ? 'rgba(245,158,11,0.08)' : i === 1 ? '#222222' : '#1a1a1a' }}
                            >
                                <p className={`text-4xl font-black mb-2 ${i === 0 ? 'text-amber-400' : 'text-white'}`}>{m.value}</p>
                                <div>
                                    <p className={`font-bold text-sm ${i < 2 ? 'text-white' : 'text-zinc-300'}`}>{m.label}</p>
                                    <p className={`text-xs mt-0.5 ${i < 2 ? 'text-zinc-500' : 'text-zinc-600'}`}>{m.sub}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
