import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronDown } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const HeroSection = ({ isLoaded }) => {
    const heroRef = useRef(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
            {/* Background Image with Overlay */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{
                    backgroundImage: `url('/hero section.png')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-blue-950/70 to-black/90"></div>
                
                {/* Cyber grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </motion.div>

            <div className="absolute inset-0 z-0 opacity-60">
                <ParticleBackground />
            </div>

            <motion.div 
                className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6"
                variants={containerVariants}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
            >
                <motion.div variants={itemVariants} className="mb-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-mono tracking-wider mb-4 glass-cyber">
                        SYSTEM ONLINE • V2.0
                    </span>
                </motion.div>

                <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                    The Future of
                    <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent filter drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]">
                        Smart Security
                    </span>
                </motion.h1>

                <motion.p variants={itemVariants} className="text-base sm:text-lg lg:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Revolutionary AI-powered surveillance system that detects criminal activity in <span className="text-emerald-400 font-semibold">real-time</span>,
                    tracks suspects across multiple cameras, and coordinates with law enforcement instantly.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.scrollTo({ top: document.getElementById('features').offsetTop - 100, behavior: 'smooth' })}
                        className="btn-neon bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center space-x-2 min-w-[200px]"
                    >
                        <Play className="w-5 h-5 fill-current" />
                        <span>Explore Features</span>
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-8 h-8 text-emerald-500/50" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
