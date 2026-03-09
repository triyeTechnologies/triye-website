import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Car, Shield, GraduationCap, ShoppingBag, Package, X, CheckCircle } from 'lucide-react';

const FutureProductsSection = () => {
    const [selected, setSelected] = useState(null);

    const products = [
        {
            icon: Building2, title: 'Community Guard',
            desc: 'Complete security for gated communities with access control and visitor management.',
            detail: 'Community Guard provides end-to-end security for residential complexes including facial recognition entry, visitor management, and emergency response integration.',
            features: ['Facial recognition entry gates', 'Visitor pre-registration & tracking', 'Perimeter intrusion detection', 'Emergency SOS integration', 'Real-time resident alerts', 'Patrol route monitoring']
        },
        {
            icon: Car, title: 'Smart Parking Pro',
            desc: 'AI-powered parking management with license plate recognition and automated payments.',
            detail: 'Smart Parking Pro transforms any parking facility with automated ANPR, real-time space availability, and seamless payment integration.',
            features: ['Automatic number plate recognition', 'Real-time slot availability', 'Automated billing & payments', 'Wrong-way detection', 'VIP/reserved zone enforcement', 'Traffic flow optimization']
        },
        {
            icon: Shield, title: 'Enterprise Shield',
            desc: 'Advanced security platform for commercial properties with multi-site management.',
            detail: 'Enterprise Shield gives corporates a unified security dashboard across all their properties with intelligent threat detection and compliance reporting.',
            features: ['Multi-site centralized dashboard', 'Employee access analytics', 'Tailgating detection', 'After-hours intrusion alerts', 'Compliance & audit reports', 'Integration with existing CCTV']
        },
        {
            icon: GraduationCap, title: 'Campus Protect',
            desc: 'Educational institution security with student safety and emergency response features.',
            detail: 'Campus Protect creates a safe learning environment with intelligent child tracking, stranger detection, and rapid emergency response coordination.',
            features: ['Student attendance via AI', 'Stranger/intruder alerts', 'Panic button integration', 'Crowd control during events', 'Staff safety monitoring', 'Parent notification system']
        },
        {
            icon: ShoppingBag, title: 'Retail Secure',
            desc: 'Specialized retail security with theft prevention and customer analytics intelligence.',
            detail: 'Retail Secure combines loss prevention with business intelligence — catching shoplifters while analyzing customer behaviour for smarter operations.',
            features: ['Shoplifting detection & alerts', 'Dwell time heatmaps', 'Queue length monitoring', 'Customer demographics analytics', 'Staff theft prevention', 'Inventory shrinkage tracking']
        },
        {
            icon: Package, title: 'Warehouse Guard',
            desc: 'Comprehensive warehouse security with inventory protection and worker safety monitoring.',
            detail: 'Warehouse Guard ensures both asset protection and worker safety in large facilities with zone-based access control and hazard detection.',
            features: ['Forklift & pedestrian conflict alerts', 'Restricted zone monitoring', 'Fire & smoke early detection', 'PPE compliance detection', 'Asset & vehicle tracking', 'Shift activity reporting']
        },
    ];

    return (
        <section id="future" className="py-16 sm:py-28" style={{ background: '#0a0a0a' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                    <div>
                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">What's Next</motion.p>
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                            Future Product <span className="gradient-text">Vision</span>
                        </motion.h2>
                    </div>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-zinc-500 text-sm max-w-xs lg:text-right">
                        Expanding our core AI technology into security solutions for every environment.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                            whileHover={{ y: -3 }}
                            onClick={() => setSelected(p)}
                            className="group relative border border-white/6 hover:border-amber-400/25 rounded-2xl overflow-hidden cursor-pointer transition-all duration-200"
                            style={{ background: '#1a1a1a' }}
                        >
                            <div className="h-0.5 w-full bg-amber-400/20 group-hover:bg-amber-400/50 transition-colors" />
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-11 h-11 bg-white/6 border border-white/10 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-amber-400/10 group-hover:border-amber-400/20 transition-all duration-200">
                                        <p.icon className="w-5 h-5 text-zinc-400 group-hover:text-amber-400 transition-colors" />
                                    </div>
                                    <span className="text-xs font-semibold text-amber-400/70 bg-amber-400/6 border border-amber-400/15 px-2.5 py-1 rounded-full">Coming Soon</span>
                                </div>
                                <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{p.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                                <span className="text-xs font-semibold text-amber-400/60 group-hover:text-amber-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Learn more <span>→</span>
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Popup modal */}
            <AnimatePresence>
                {selected && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={() => setSelected(null)}>
                        <motion.div initial={{ scale: 0.93, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.93, y: 20 }}
                            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                            className="rounded-2xl p-7 max-w-lg w-full border border-white/10 max-h-[85vh] overflow-y-auto"
                            style={{ background: '#1a1a1a' }}
                            onClick={e => e.stopPropagation()}>
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-amber-400/10 border border-amber-400/20 rounded-xl flex items-center justify-center">
                                        <selected.icon className="w-5 h-5 text-amber-400" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-bold text-white">{selected.title}</h2>
                                        <span className="text-xs text-amber-400 font-semibold">Coming Soon</span>
                                    </div>
                                </div>
                                <button onClick={() => setSelected(null)} className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                                    <X className="w-4 h-4 text-zinc-400" />
                                </button>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed pb-5 mb-5 border-b border-white/6">{selected.detail}</p>
                            <p className="text-xs font-bold text-zinc-600 uppercase tracking-wider mb-3">Key Features</p>
                            <ul className="space-y-2.5">
                                {selected.features.map((f, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-sm text-zinc-400">{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default FutureProductsSection;
