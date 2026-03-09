import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Shield, Cpu, Radio } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const HeroSection = ({ isLoaded }) => {
    const heroRef = useRef(null);
    const cv = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.4 } } };
    const iv = { hidden: { y: 28, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 70, damping: 14 } } };

    const stats = [
        { icon: Shield, value: 'Real-Time', label: 'Crime Detection' },
        { icon: Cpu,    value: 'Edge AI',   label: 'Processing' },
        { icon: Radio,  value: '360°',      label: 'City Coverage' },
    ];

    return (
        <section id="home" ref={heroRef} className="relative min-h-screen overflow-hidden" style={{ background: '#050505' }}>
            {/* Bg image */}
            <motion.div
                initial={{ scale: 1.08, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.8 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/hero section.png')` }}
            >
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.75) 60%, rgba(5,5,5,0.92) 100%)' }} />
            </motion.div>

            {/* Camera network animation */}
            <div className="absolute inset-0 opacity-45">
                <ParticleBackground />
            </div>

            {/* Main content — left-aligned split layout */}
            <div className="relative z-10 min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 sm:px-8 pt-24 pb-16">
                <motion.div variants={cv} initial="hidden" animate={isLoaded ? 'visible' : 'hidden'} className="max-w-2xl">

                    <motion.div variants={iv} className="mb-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold tracking-widest uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                            AI-Powered Surveillance · India
                        </span>
                    </motion.div>

                    <motion.h1 variants={iv} className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
                        Securing Cities
                        <br />
                        <span className="gradient-text">with AI</span>
                    </motion.h1>

                    <motion.p variants={iv} className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl">
                        Traced by Triye detects criminal activity in real-time, tracks suspects across camera networks, and coordinates with law enforcement — instantly.
                    </motion.p>

                    <motion.div variants={iv} className="flex flex-wrap gap-4">
                        <motion.button
                            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                            onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth', block: 'start' })}
                            className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black px-7 py-3.5 rounded-xl font-bold text-sm shadow-lg transition-all"
                        >
                            Explore Features <ArrowRight className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                            onClick={() => document.getElementById('video').scrollIntoView({ behavior: 'smooth', block: 'start' })}
                            className="flex items-center gap-2 bg-white/6 hover:bg-white/10 border border-white/10 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all"
                        >
                            Watch Demo
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Bottom stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                    transition={{ delay: 1.4, duration: 0.7 }}
                    className="mt-auto pt-16 grid grid-cols-3 gap-4 max-w-lg"
                >
                    {stats.map(({ icon: Icon, value, label }, i) => (
                        <div key={i} className="flex items-center gap-3 border-l border-white/8 pl-4 first:border-0 first:pl-0">
                            <Icon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                            <div>
                                <p className="text-white font-bold text-sm">{value}</p>
                                <p className="text-zinc-500 text-xs">{label}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
                    <ChevronDown className="w-5 h-5 text-zinc-600" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
