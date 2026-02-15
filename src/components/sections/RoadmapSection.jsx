import React from 'react';


import { motion } from 'framer-motion';

const RoadmapSection = () => {
    const roadmapItems = [
        { phase: 'Day 1', title: 'The Idea', desc: 'Revolutionary AI security concept', status: 'completed', position: { top: '80%', left: '8%' } },
        { phase: 'Month 5', title: 'Basic Detection', desc: 'Core AI algorithms developed', status: 'completed', position: { top: '65%', left: '25%' } },
        { phase: 'Month 6', title: 'Seeking Funding', desc: 'Pursuing investment opportunities', status: 'current', position: { top: '70%', left: '42%' } },
        { phase: 'Month 12', title: 'Working Prototype', desc: 'Full-scale prototype ready', status: 'future', position: { top: '50%', left: '75%' } },
        { phase: 'Month 15', title: 'Market Ready', desc: 'Deployment and scaling', status: 'future', position: { top: '30%', left: '92%' } }
    ];

    return (
        <section id="roadmap" className="py-16 sm:py-32 bg-gray-950 relative overflow-hidden">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-12 sm:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
                    >
                        Development
                        <span className="text-emerald-400"> Roadmap</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto"
                    >
                        Our journey from concept to reality - tracking progress every step of the way.
                    </motion.p>
                </div>

                {/* Mobile-first responsive roadmap */}
                <div className="block lg:hidden space-y-8">
                    {roadmapItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-start space-x-4"
                        >
                            <div className="flex flex-col items-center">
                                <div className={`w-8 h-8 rounded-full border-2 flex-shrink-0 z-10 ${item.status === 'completed' ? 'bg-emerald-500 border-emerald-400 box-glow' :
                                    item.status === 'current' ? 'bg-blue-500 border-blue-400 animate-pulse box-glow' :
                                        'bg-gray-800 border-gray-700'
                                    }`}></div>
                                {index !== roadmapItems.length - 1 && (
                                    <div className="w-0.5 h-full bg-gradient-to-b from-gray-700 to-transparent -my-2"></div>
                                )}
                            </div>

                            <div className="flex-1 pb-8">
                                <div
                                    className={`glass-cyber rounded-xl p-4 border border-white/5 hover:border-emerald-500/30 transition-colors ${item.status === 'current' ? 'border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.15)]' : ''}`}
                                >
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${item.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                                        item.status === 'current' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                                            'bg-gray-800 text-gray-500 border border-gray-700'
                                        }`}>
                                        {item.phase}
                                    </span>
                                    <h4 className="font-bold text-white text-lg mb-1">{item.title}</h4>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Desktop roadmap with SVG */}
                <div className="hidden lg:block relative h-96">
                    <svg
                        viewBox="0 0 1200 400"
                        className="w-full h-full absolute inset-0 z-0 opacity-60"
                        preserveAspectRatio="none"
                    >
                        <motion.path
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            d="M 96 320 Q 200 290 300 260 Q 400 270 504 280 Q 700 240 900 200 Q 1000 160 1104 120"
                            stroke="url(#roadmapGradient)"
                            strokeWidth="4"
                            fill="none"
                            strokeLinecap="round"
                            className="drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                        />
                        <defs>
                            <linearGradient id="roadmapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#10B981" />
                                <stop offset="50%" stopColor="#3B82F6" />
                                <stop offset="100%" stopColor="#8B5CF6" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className="relative z-10 h-full">
                        {roadmapItems.map((item, index) => (
                            <div
                                key={index}
                                className="absolute transform -translate-x-1/2 -translate-y-2 group"
                                style={{ top: item.position.top, left: item.position.left }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.2) }}
                                >
                                    <div className={`w-4 h-4 rounded-full border-2 ${item.status === 'completed' ? 'bg-emerald-500 border-emerald-400 box-glow scale-125' :
                                        item.status === 'current' ? 'bg-blue-500 border-blue-400 animate-pulse box-glow scale-150' :
                                            'bg-gray-800 border-gray-600'
                                        } transition-all duration-300 mb-4 mx-auto`}></div>

                                    <div
                                        className={`glass-cyber rounded-xl p-4 w-48 border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105 hover:-translate-y-2 relative
                                        ${item.status === 'current' ? 'border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.2)]' : ''}`}
                                    >
                                        <div className="text-center">
                                            <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 ${item.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                                                item.status === 'current' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                                                    'bg-gray-800 text-gray-500 border border-gray-700'
                                                }`}>
                                                {item.phase}
                                            </span>
                                            <h4 className="font-bold text-white text-sm mb-1 group-hover:text-emerald-400 transition-colors">{item.title}</h4>
                                            <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoadmapSection;
