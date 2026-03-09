import React from 'react';
import { motion } from 'framer-motion';

const FoundersSection = () => {
    const founders = [
        { name: 'Akshay R Kumar',   role: 'CEO & Co-founder', image: '/aksh.jpg',  desc: 'Visionary leader driving Triye\'s mission to make Indian cities safer through AI-powered surveillance technology.' },
        { name: 'Aditya Belludi',   role: 'CTO & Co-founder', image: '/adi.png',   desc: 'Technical architect behind Traced\'s real-time AI detection engine and camera network intelligence platform.', adiStyle: true },
        { name: 'Akhilesh N Naidu', role: 'COO & Co-founder', image: '/akhi.png',  desc: 'Operations strategist ensuring seamless deployment, partnerships, and scaling of Triye\'s security solutions.' },
    ];

    return (
        <section id="founders" className="py-16 sm:py-28" style={{ background: '#0a0a0a' }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-8">
                <div className="text-center mb-14">
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">Team</motion.p>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                        Meet the <span className="gradient-text">Founders</span>
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-zinc-500 text-sm mt-3">
                        The visionary team building India's most advanced AI security platform.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {founders.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                            className="group flex flex-col items-center text-center p-8 transition-all duration-300"
                        >
                            {/* Circular photo */}
                            <div className="relative mb-5">
                                <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-amber-400/25 group-hover:border-amber-400/50 transition-all duration-300">
                                    <img
                                        src={f.image}
                                        alt={f.name}
                                        className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${f.adiStyle ? 'object-top scale-105' : 'object-center'}`}
                                    />
                                </div>
                                {/* Amber ring glow */}
                                <div className="absolute inset-0 rounded-full bg-amber-400/5 group-hover:bg-amber-400/10 transition-all duration-300" />
                            </div>

                            <h3 className="text-base font-bold text-white mb-1.5">{f.name}</h3>
                            <span className="inline-block text-xs font-semibold text-amber-400 bg-amber-400/8 border border-amber-400/20 px-2.5 py-0.5 rounded-full mb-4">{f.role}</span>
                            <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FoundersSection;
