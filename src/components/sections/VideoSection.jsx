import React from 'react';


import { motion } from 'framer-motion';

const VideoSection = () => {
    return (
        <section id="video" className="py-12 sm:py-24 bg-gray-950 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
                    >
                        See Traced
                        <span className="text-emerald-400"> In Action</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto"
                    >
                        Watch our comprehensive demo showing how Traced AI security system works in real-world scenarios.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto mb-20"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.15)] border border-white/10 group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
                        <video
                            className="w-full h-auto"
                            controls
                            preload="metadata"
                            poster="/sotat1.png"
                        >
                            <source src="/Traced by Triye Demo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </motion.div>

                {/* Action Detection Videos */}
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl sm:text-3xl font-bold text-white mb-4"
                        >
                            Real-Time Action Detection
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400"
                        >
                            Watch Traced identify different human activities with skeletal tracking technology
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        {[
                            { src: '/video1.mp4' },
                            { src: '/video2.mp4' },
                            { src: '/video3.mp4' },
                            { src: '/video4.mp4' }
                        ].map((video, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="glass-cyber rounded-2xl p-2 border border-white/5 hover:border-emerald-500/30 transition-all duration-300"
                            >
                                <div className="rounded-xl overflow-hidden relative">
                                    <video
                                        className="w-full h-auto"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        <source src={video.src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
