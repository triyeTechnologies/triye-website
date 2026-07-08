import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Eye, UserCheck, Users, Shield, Crosshair, Activity, Crown, Building2, Car, FileText, Ban, Clock, AlertTriangle, Flame, Navigation, Target, Radar, Trash2, Cigarette, MapPin, Siren, Camera, Zap } from 'lucide-react';

const TracedFeaturesSection = () => {
    const [activeCategory, setActiveCategory] = useState('person');

    const featureCategories = [
        {
            id: 'person', name: 'Person Intelligence', icon: User, accent: 'amber',
            features: [
                { icon: Eye, title: 'Face Recognition', description: 'Advanced facial detection with gender and age estimation for comprehensive suspect profiling', capabilities: ['Facial feature mapping', 'Gender identification', 'Age estimation', 'Face reidentification across cameras'] },
                { icon: UserCheck, title: 'Person Reidentification', description: 'Track individuals across multiple cameras using clothing patterns and body structure analysis', capabilities: ['Clothing pattern matching', 'Body structure analysis', 'Cross-camera tracking', 'Movement pattern recognition'] },
                { icon: Users, title: 'Crowd Behavior Analysis', description: 'Monitor crowd density and detect unusual group behaviors for public safety', capabilities: ['Crowd density monitoring', 'Unusual gathering detection', 'Panic behavior identification', 'Event crowd management'] }
            ]
        },
        {
            id: 'criminal', name: 'Criminal Activity Detection', icon: Shield, accent: 'red',
            features: [
                { icon: Crosshair, title: 'Theft & Snatching', description: 'Real-time detection of chain snatching, purse theft, and pickpocketing incidents', capabilities: ['Chain snatching detection', 'Bag snatching alerts', 'Pickpocket identification', 'Theft pattern analysis'] },
                { icon: Activity, title: 'Violence Detection', description: 'Identify fighting, assault, mob violence, and aggressive behavior patterns', capabilities: ['Fight detection', 'Assault identification', 'Mob violence alerts', 'Weapon usage detection'] },
                { icon: Crown, title: 'Harassment Prevention', description: 'Detect harassment incidents and suspicious stalking behavior', capabilities: ['Harassment detection', 'Stalking behavior identification', 'Victim protection alerts', 'Pattern-based prevention'] },
                { icon: Building2, title: 'Trespassing Detection', description: 'Monitor unauthorized entry into private properties and restricted areas', capabilities: ['Boundary violation alerts', 'Unauthorized entry detection', 'Perimeter monitoring', 'Access control integration'] }
            ]
        },
        {
            id: 'vehicle', name: 'Vehicle Intelligence', icon: Car, accent: 'emerald',
            features: [
                { icon: Car, title: 'Vehicle Recognition', description: 'Comprehensive vehicle identification including make, model, color, and type classification', capabilities: ['Make & model identification', 'Color detection', 'Vehicle type classification', 'Cross-camera reidentification'] },
                { icon: FileText, title: 'Number Plate Detection', description: 'Automatic license plate recognition with cross-camera tracking capabilities', capabilities: ['License plate reading', 'Multi-camera plate tracking', 'Plate verification', 'Vehicle history matching'] },
                { icon: Ban, title: 'Traffic Violations', description: 'Monitor compliance with Indian traffic rules and regulations', capabilities: ['One-way violations', 'Signal jumping detection', 'Helmet & seatbelt monitoring', 'Speed limit enforcement'] },
                { icon: Clock, title: 'Traffic Management', description: 'Intelligent traffic signal control and flow optimization', capabilities: ['Signal timing optimization', 'Traffic flow analysis', 'Congestion management', 'Emergency vehicle priority'] }
            ]
        },
        {
            id: 'safety', name: 'Safety & Hazards', icon: AlertTriangle, accent: 'orange',
            features: [
                { icon: AlertTriangle, title: 'Accident Detection', description: 'Immediate identification of vehicle accidents and emergency situations', capabilities: ['Collision detection', 'Emergency response alerts', 'Severity assessment', 'Automatic dispatch coordination'] },
                { icon: Flame, title: 'Fire Hazard Detection', description: 'Early detection of fire and smoke for rapid emergency response', capabilities: ['Smoke detection', 'Fire identification', 'Emergency alert system', 'Evacuation coordination'] },
                { icon: Navigation, title: 'Road Obstruction', description: 'Identify blocked roads, fallen objects, and traffic impediments', capabilities: ['Road blockage detection', 'Obstacle identification', 'Traffic rerouting alerts', 'Debris monitoring'] },
                { icon: Target, title: 'Weapon Detection', description: 'Identify dangerous weapons and potential security threats', capabilities: ['Firearm detection', 'Knife identification', 'Suspicious object alerts', 'Threat level assessment'] }
            ]
        },
        {
            id: 'compliance', name: 'Public Compliance', icon: Radar, accent: 'purple',
            features: [
                { icon: Trash2, title: 'Littering Detection', description: 'Monitor and detect illegal dumping and littering activities', capabilities: ['Waste dumping detection', 'Littering identification', 'Environmental monitoring', 'Cleanup coordination'] },
                { icon: Cigarette, title: 'Smoking Violations', description: 'Detect smoking in restricted public areas and enclosed spaces', capabilities: ['No-smoking zone monitoring', 'Public area compliance', 'Health regulation enforcement', 'Violation documentation'] },
                { icon: MapPin, title: 'Loitering Detection', description: 'Identify suspicious loitering and unusual lingering behavior', capabilities: ['Loitering pattern recognition', 'Time-based monitoring', 'Suspicious behavior alerts', 'Area security enhancement'] },
                { icon: Siren, title: 'Emergency Response', description: 'Prioritize emergency vehicles and coordinate rapid response', capabilities: ['Emergency vehicle detection', 'Response time optimization', 'Route clearance', 'Multi-agency coordination'] }
            ]
        }
    ];

    // Single amber accent used across all categories
    const accent = {
        tab: 'border-amber-400/35 text-amber-400 bg-amber-400/10',
        card: 'bg-white/[0.08] border border-white/[0.12]',
        dot: 'bg-amber-400',
    };

    const active = featureCategories.find(c => c.id === activeCategory);
    const colors = accent;

    return (
        <section id="features" className="py-16 sm:py-28" style={{ background: '#0a0a0a' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">Capabilities</motion.p>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                        Traced AI <span className="gradient-text">Features</span>
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-zinc-500 text-lg max-w-3xl mx-auto">
                        Comprehensive AI-powered surveillance capabilities designed for Indian urban environments.
                        From real-time crime detection to traffic management, Traced delivers complete city-wide security intelligence.
                    </motion.p>
                </div>

                {/* Category tabs */}
                <div className="flex flex-nowrap justify-center gap-2 mb-10 overflow-x-auto pb-1">
                    {featureCategories.map((cat) => {
                        const Icon = cat.icon;
                        const isActive = activeCategory === cat.id;
                        return (
                            <motion.button
                                key={cat.id}
                                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border font-semibold text-sm whitespace-nowrap transition-all duration-200 ${
                                    isActive ? accent.tab : 'bg-transparent border-white/[0.08] text-zinc-500 hover:bg-amber-400/[0.06] hover:border-amber-400/25 hover:text-amber-300'
                                }`}
                            >
                                <Icon className="w-4 h-4 flex-shrink-0" />
                                {cat.name}
                            </motion.button>
                        );
                    })}
                </div>

                {/* Feature cards */}
                <div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.25 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-5 [&>*:last-child:nth-child(odd)]:md:col-span-2 [&>*:last-child:nth-child(odd)]:md:max-w-xl [&>*:last-child:nth-child(odd)]:md:mx-auto [&>*:last-child:nth-child(odd)]:md:w-full"
                        >
                            {active?.features.map((feature, i) => {
                                const FIcon = feature.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.08 }}
                                        className="rounded-2xl p-6 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-200 group"
                                        style={{ background: '#1a1a1a' }}
                                    >
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className={`w-11 h-11 ${colors.card} rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
                                                <FIcon className="w-5 h-5 text-zinc-300" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                                                <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-2">Key Capabilities</p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                                {feature.capabilities.map((cap, ci) => (
                                                    <div key={ci} className="flex items-center gap-2">
                                                        <div className={`w-1.5 h-1.5 ${colors.dot} rounded-full flex-shrink-0`}></div>
                                                        <span className="text-xs text-zinc-400">{cap}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Bottom row */}
                <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
                    {[{ icon: Camera, label: 'Real-time Processing' }, { icon: Zap, label: 'Instant Alerts' }, { icon: Activity, label: '24/7 Monitoring' }].map(({ icon: Icon, label }) => (
                        <div key={label} className="flex items-center gap-2"><Icon className="w-4 h-4 text-amber-400" /><span>{label}</span></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TracedFeaturesSection;
