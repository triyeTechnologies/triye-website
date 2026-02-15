import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Car, Shield, GraduationCap, ShoppingBag, Package } from 'lucide-react';

const FutureProductsSection = () => {
    const products = [
        { icon: Building2, title: 'Community Guard', desc: 'Complete security solution for gated communities with access control and visitor management.', color: 'from-emerald-500 to-teal-500' },
        { icon: Car, title: 'Smart Parking Pro', desc: 'AI-powered parking management with license plate recognition and automated payment systems.', color: 'from-blue-500 to-cyan-500' },
        { icon: Shield, title: 'Enterprise Shield', desc: 'Advanced security platform for commercial properties with multi-site management capabilities.', color: 'from-purple-500 to-pink-500' },
        { icon: GraduationCap, title: 'Campus Protect', desc: 'Educational institution security with student safety features and emergency response.', color: 'from-orange-500 to-red-500' },
        { icon: ShoppingBag, title: 'Retail Secure', desc: 'Specialized retail security with theft prevention and customer analytics intelligence.', color: 'from-yellow-500 to-orange-500' },
        { icon: Package, title: 'Warehouse Guard', desc: 'Comprehensive warehouse security with inventory protection and worker safety monitoring.', color: 'from-indigo-500 to-purple-500' }
    ];

    return (
        <section id="future" className="py-16 sm:py-32 bg-gray-950 relative overflow-hidden">
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
                        Future Product
                        <span className="text-emerald-400"> Vision</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto"
                    >
                        Expanding our core technology into comprehensive security solutions for communities and enterprises.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="relative glass-cyber rounded-3xl p-6 sm:p-8 border border-white/5 hover:border-emerald-500/30 transition-all duration-300 group"
                        >
                            <div className="absolute top-4 right-4 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md">
                                Coming Soon
                            </div>

                            <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-300`}>
                                <product.icon className="w-8 h-8 text-white" />
                            </div>

                            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                                {product.title}
                            </h3>

                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                {product.desc}
                            </p>

                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FutureProductsSection;
