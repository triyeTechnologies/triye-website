
import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
    { name: 'Python', color: 'text-yellow-400' },
    { name: 'TensorFlow', color: 'text-orange-500' },
    { name: 'PyTorch', color: 'text-red-500' },
    { name: 'React', color: 'text-cyan-400' },
    { name: 'Node.js', color: 'text-green-500' },
    { name: 'AWS', color: 'text-yellow-600' },
    { name: 'Docker', color: 'text-blue-500' },
    { name: 'Kubernetes', color: 'text-blue-600' },
    { name: 'OpenCV', color: 'text-green-400' },
    { name: 'PostgreSQL', color: 'text-blue-300' },
];

const TechStackMarquee = () => {
    return (
        <section className="py-10 bg-gray-950 overflow-hidden border-y border-white/5 relative z-20">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-transparent to-gray-950 z-10 pointer-events-none"></div>

            <div className="flex">
                <motion.div
                    className="flex space-x-12 sm:space-x-24 whitespace-nowrap"
                    animate={{
                        x: [0, -1035],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                        <div key={index} className="flex items-center space-x-2 group cursor-default">
                            <span className={`text-xl sm:text-2xl font-bold ${tech.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]`}>
                                {tech.name}
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-800"></div>
                        </div>
                    ))}
                </motion.div>

                {/* Duplicate for seamless loop (if needed by screen width, but the triple array above usually covers it) */}
                <motion.div
                    className="flex space-x-12 sm:space-x-24 whitespace-nowrap pl-12 sm:pl-24"
                    animate={{
                        x: [0, -1035],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                    aria-hidden="true"
                >
                    {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                        <div key={index} className="flex items-center space-x-2 group cursor-default">
                            <span className={`text-xl sm:text-2xl font-bold ${tech.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]`}>
                                {tech.name}
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-800"></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStackMarquee;
