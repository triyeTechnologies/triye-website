import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Users, Network, Zap } from 'lucide-react';

const VisionSection = () => {
    const features = [
        { num: '01', icon: Eye,     title: 'Real-Time Detection',  color: 'bg-amber-500',   image: '/ai detection software.png',          desc: 'Our AI continuously monitors live camera feeds throughout urban areas, instantly identifying suspicious activity and criminal behavior through traffic CCTV networks using deep learning algorithms.' },
        { num: '02', icon: Users,   title: 'Suspect ID',           color: 'bg-orange-500',  image: '/Criminal Identification Panel.png',   desc: 'When criminal activity is detected, the system captures comprehensive suspect profiles — facial features, clothing, physical characteristics, vehicle make, color and number plates — for precise identification.' },
        { num: '03', icon: Network, title: 'Network Tracking',     color: 'bg-yellow-500',  image: '/City-Wide Tracking Map.png',          desc: 'Our interconnected camera network spans entire urban areas with zero blind spots. When a tagged suspect moves zones, surrounding cameras automatically begin tracking — seamless citywide coverage.' },
        { num: '04', icon: Zap,     title: 'Live Response',        color: 'bg-red-500',     image: '/Police Mobile App Interface.png',     desc: 'The moment criminal activity is detected, law enforcement receives instant alerts through our mobile app with real-time suspect location, movement patterns, and map traces for interception.' },
    ];

    return (
        <section id="vision" className="py-16 sm:py-28" style={{ background: '#111111' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                {/* Section header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20">
                    <div>
                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">How It Works</motion.p>
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                            Intelligent Crime<br />
                            <span className="gradient-text">Detection & Response</span>
                        </motion.h2>
                    </div>
                    <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-zinc-500 max-w-sm lg:text-right text-sm leading-relaxed">
                        A complete AI surveillance pipeline — from detection to law enforcement coordination — in seconds.
                    </motion.p>
                </div>

                {/* Numbered feature rows */}
                <div className="space-y-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: i * 0.05 }}
                            className={`group grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-0 rounded-2xl overflow-hidden transition-all duration-300 ${i % 2 === 1 ? 'lg:grid-cols-[380px_1fr]' : ''}`}
                            style={{ background: '#1a1a1a' }}
                        >
                            {/* Text side */}
                            <div className={`p-8 sm:p-10 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="flex items-center gap-4 mb-5">
                                    <span className="text-5xl font-black text-white/5 select-none leading-none">{f.num}</span>
                                    <div className={`w-10 h-10 ${f.color} rounded-xl flex items-center justify-center shadow-sm`}>
                                        <f.icon className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{f.title}</h3>
                                <p className="text-zinc-400 leading-relaxed text-sm">{f.desc}</p>
                                <div className="flex flex-wrap gap-2 mt-5">
                                    {['AI-Powered', 'Real-Time', 'Urban-Wide'].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 text-zinc-400 rounded-full text-xs font-medium border border-white/8">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            {/* Image side */}
                            <div className={`relative overflow-hidden bg-black h-56 lg:h-64 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <img
                                    src={f.image}
                                    alt={f.title}
                                    className={`w-full h-full opacity-85 group-hover:scale-105 transition-transform duration-500 ${f.title === 'Live Response' ? 'object-contain p-6' : 'object-cover'}`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VisionSection;
