import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const FoundersSection = () => {
    const founders = [
        {
            name: 'Akshay R Kumar',
            role: 'CEO & Co-founder',
            image: '/aksh.jpg',
            hasImage: true,
            gradient: 'from-emerald-500 to-blue-500'
        },
        {
            name: 'Aditya Belludi',
            role: 'CTO & Co-founder',
            image: '/adi.png',
            hasImage: true,
            gradient: 'from-blue-500 to-purple-500'
        },
        {
            name: 'Akhilesh N Naidu',
            role: 'COO & Co-founder',
            image: '/akhi.png',
            hasImage: true,
            gradient: 'from-purple-500 to-pink-500'
        }
    ];

    return (
        <section id="founders" className="py-16 sm:py-32 bg-gray-950 relative overflow-hidden">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-12 sm:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
                    >
                        Our Founders
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto"
                    >
                        Meet the visionary team behind Triye's revolutionary AI security technology.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto">
                    {founders.map((founder, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="mb-6 relative inline-block">
                                <div className={`absolute inset-0 bg-gradient-to-br ${founder.gradient} blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-full`}></div>
                                <div
                                    className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-900 shadow-xl border-2 border-white/10 group-hover:border-emerald-500/50 transition-colors duration-300 relative z-10"
                                >
                                    {founder.hasImage ? (
                                        <img
                                            src={founder.image}
                                            alt={founder.name}
                                            className={`w-full h-full object-cover transition-all duration-500 ${founder.image === '/adi.png' ? 'object-top scale-105' : ''}`}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-800">
                                            <User className="w-24 h-24 text-gray-600" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                    {founder.name}
                                </h3>
                                <p className="text-base sm:text-lg font-medium text-emerald-500/80">
                                    {founder.role}
                                </p>
                            </div>

                            <div className="mt-4 w-12 h-1 bg-gray-800 mx-auto rounded-full group-hover:bg-emerald-500/50 transition-colors duration-300"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FoundersSection;
