import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Network, Zap, Target, BarChart3, Lock, X, CheckCircle } from 'lucide-react';

const ConceptSection = () => {
    const [selected, setSelected] = useState(null);

    // Modal accessibility: Escape closes, body scroll locked while open
    useEffect(() => {
        if (!selected) return;
        const onKey = (e) => { if (e.key === 'Escape') setSelected(null); };
        document.addEventListener('keydown', onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [selected]);

    const concepts = [
        { icon: Brain,    title: 'AI-Powered Detection',        desc: 'ML algorithms analyze camera feeds in real-time, identifying criminal activities with high precision and minimal false positives.',   color: 'bg-amber-500',  span: 'lg:col-span-2', detailContent: { title: 'AI-Powered Detection System', description: 'Our AI system continuously monitors traffic CCTV cameras using cutting-edge ML to detect criminal activities in real-time.', features: ['Real-time analysis of traffic camera feeds', 'Pattern recognition for suspicious behaviors', 'ML models trained for urban security', 'Edge computing for instant processing', 'High accuracy with minimal false positives', 'Continuous learning from new data'] } },
        { icon: Network,  title: 'Network Intelligence',         desc: 'Interconnected camera systems share data instantly — complete coverage with zero blind spots.',                                      color: 'bg-orange-500', span: '',               detailContent: { title: 'Intelligent Camera Network', description: 'A sophisticated network creating a comprehensive surveillance web with zero blind spots and seamless tracking.', features: ['Citywide camera network', 'Zero blind spots', 'Instant information sharing', 'Automatic suspect handoff', 'Real-time camera coordination', 'Network redundancy'] } },
        { icon: Zap,      title: 'Instant Response',             desc: 'Automated alerts reach law enforcement within seconds with real-time tracking data.',                                               color: 'bg-yellow-500', span: '',               detailContent: { title: 'Real-Time Alert & Response', description: 'Lightning-fast notifications instantly alert law enforcement the moment criminal activity is detected.', features: ['Alerts to police app within seconds', 'Real-time suspect tracking', 'Live map with suspect route', 'Detailed appearance info', 'Automated unit coordination', 'Two-way officer communication'] } },
        { icon: Target,   title: 'Suspect Tagging',              desc: 'Captures full suspect profiles — appearance, vehicle, license plate — and tracks them across the city.',                           color: 'bg-red-500',    span: '',               detailContent: { title: 'Advanced Suspect Tagging', description: 'Immediately creates comprehensive identification tags and initiates citywide tracking when criminal activity is detected.', features: ['Physical characteristic capture', 'Vehicle + plate identification', 'Facial recognition tagging', 'Searchable suspect profiles', 'Cross-zone tracking', 'Persistent tracking'] } },
        { icon: BarChart3, title: 'Smart Analytics',             desc: 'Crime pattern analysis, hotspot identification and trend prediction for strategic law enforcement.',                               color: 'bg-purple-500', span: '',               detailContent: { title: 'Intelligent Crime Analytics', description: 'Processes all security data to identify patterns, predict trends, and provide actionable insights for law enforcement.', features: ['Pattern analysis', 'Hotspot identification', 'Trend prediction', 'Resource allocation', 'Performance metrics', 'Predictive modeling'] } },
        { icon: Lock,     title: 'Privacy-First Design',         desc: 'Data encryption, role-based access, and full compliance with privacy regulations — ethics built in.',                             color: 'bg-teal-500',   span: 'lg:col-span-2', detailContent: { title: 'Privacy & Security Framework', description: 'Privacy protection is a fundamental principle — all surveillance activities comply with ethical and legal standards.', features: ['End-to-end encryption', 'Privacy-compliant facial recognition', 'Role-based access control', 'Full audit trails', 'National privacy compliance', 'Transparent reporting'] } },
    ];

    return (
        <section id="concept" className="py-16 sm:py-28" style={{ background: '#0a0a0a' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="text-center mb-12">
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">Technology</motion.p>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                        Core Technology <span className="gradient-text">Concepts</span>
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-zinc-500 max-w-xl mx-auto">
                        The foundation of our security platform built on advanced AI and network intelligence.
                    </motion.p>
                </div>

                {/* Bento grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
                    {concepts.map((c, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                            whileHover={{ y: -3 }}
                            onClick={() => setSelected(c)}
                            className={`border border-white/[0.06] hover:border-white/[0.14] rounded-2xl p-6 cursor-pointer group transition-all duration-200 ${c.span} ${i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''} ${i === 5 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
                            style={{ background: '#1a1a1a' }}
                        >
                            <div className={`w-11 h-11 ${c.color} rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                                <c.icon className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-base font-bold text-white mb-2">{c.title}</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed mb-4">{c.desc}</p>
                            <span className="text-xs font-semibold text-amber-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                                Learn more <span>→</span>
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selected && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelected(null)}>
                        <motion.div initial={{ scale: 0.93, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.93, y: 20 }} transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                            role="dialog" aria-modal="true" aria-label={selected.detailContent.title}
                            className="rounded-2xl p-7 max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-white/10"
                            style={{ background: '#1a1a1a' }}
                            onClick={e => e.stopPropagation()}>
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 ${selected.color} rounded-xl flex items-center justify-center`}><selected.icon className="w-5 h-5 text-white" /></div>
                                    <h2 className="text-lg font-bold text-white">{selected.detailContent.title}</h2>
                                </div>
                                <button onClick={() => setSelected(null)} aria-label="Close dialog" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"><X className="w-4 h-4 text-zinc-400" /></button>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed pb-5 mb-5 border-b border-white/[0.06]">{selected.detailContent.description}</p>
                            <p className="text-xs font-bold text-zinc-600 uppercase tracking-wider mb-3">Key Features</p>
                            <ul className="space-y-2.5">
                                {selected.detailContent.features.map((f, i) => (
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

export default ConceptSection;
