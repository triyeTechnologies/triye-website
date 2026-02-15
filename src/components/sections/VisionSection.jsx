import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Users, Network, Zap } from 'lucide-react';

const VisionSection = () => {
    const features = [
        {
            icon: Eye,
            title: 'Real-Time Detection',
            desc: 'AI analyzes live feeds instantly',
            color: 'from-emerald-500 to-teal-500',
            image: '/ai detection software.png',
            detailDesc: 'Our advanced AI continuously monitors live camera feeds throughout urban areas, instantly identifying suspicious activities and criminal behavior in real-time. The system uses deep learning algorithms to recognize patterns and detect criminal activities through traffic CCTV networks, ensuring comprehensive coverage across metropolitan areas with edge technology integration.'
        },
        {
            icon: Users,
            title: 'Suspect ID',
            desc: 'Captures facial and vehicle details',
            color: 'from-blue-500 to-cyan-500',
            image: '/Criminal Identification Panel.png',
            detailDesc: 'When criminal activity is detected, our system immediately captures comprehensive suspect profiles including facial features (when visible), clothing colors, physical characteristics, and complete vehicle information such as make, color, and number plates. This detailed tagging system enables precise identification and tracking even when suspects attempt to escape the initial detection zone.'
        },
        {
            icon: Network,
            title: 'Network Tracking',
            desc: 'Tracks movement across city',
            color: 'from-purple-500 to-pink-500',
            image: '/City-Wide Tracking Map.png',
            detailDesc: 'Our interconnected camera network spans entire urban areas with zero blind spots. When a tagged suspect moves from one camera zone to another, the surrounding cameras automatically begin searching for the individual. This creates seamless citywide tracking, with each camera maintaining continuous surveillance as the suspect moves through different areas of the metropolitan network.'
        },
        {
            icon: Zap,
            title: 'Live Response',
            desc: 'Coordinates with law enforcement',
            color: 'from-red-500 to-orange-500',
            image: '/Police Mobile App Interface.png',
            detailDesc: 'The moment criminal activity is detected, our system instantly alerts law enforcement through our dedicated mobile application. Officers receive real-time suspect details, location tracking, and live movement patterns. The system provides continuous updates and map traces showing exactly where the suspect is heading, enabling police units to coordinate and intercept effectively.'
        }
    ];

    return (
        <section id="vision" className="py-12 sm:py-24 bg-gray-950 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                    >
                        Intelligent Crime
                        <span className="block mt-2 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent filter drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">
                            Detection & Response
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto"
                    >
                        A comprehensive security network that monitors traffic cameras and security feeds across urban areas.
                        Our AI system instantly detects criminal activity and coordinates real-time response with law enforcement.
                    </motion.p>
                </div>

                {/* Inline Feature Cards with Images */}
                <div className="space-y-24">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}
                        >
                            {/* Content Side */}
                            <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="flex items-center space-x-6">
                                    <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)] box-glow`}>
                                        <feature.icon className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl lg:text-4xl font-bold text-white">{feature.title}</h3>
                                </div>

                                <div className="glass-cyber p-8 rounded-3xl border border-white/5 bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-300">
                                    <p className="text-lg text-gray-300 leading-relaxed">
                                        {feature.detailDesc}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
                                        AI-Powered
                                    </span>
                                    <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                                        Real-Time
                                    </span>
                                    <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                                        Urban-Wide
                                    </span>
                                </div>
                            </div>

                            {/* Image Side */}
                            <div className={`relative flex justify-center items-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative group rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10"></div>
                                    <img
                                        src={feature.image}
                                        alt={`${feature.title} demonstration`}
                                        className={`w-full rounded-3xl transform transition-transform duration-700 group-hover:scale-105 ${feature.title === 'Live Response'
                                            ? 'max-w-md max-h-96 object-contain mx-auto'
                                            : 'w-full max-w-lg object-cover'
                                            }`}
                                    />

                                    {/* Tech Overlay Lines */}
                                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20 border border-white/5 rounded-3xl">
                                        <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-emerald-500/50"></div>
                                        <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-emerald-500/50"></div>
                                        <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-emerald-500/50"></div>
                                        <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-emerald-500/50"></div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VisionSection;
