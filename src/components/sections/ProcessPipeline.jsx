
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Cpu, ShieldAlert, ChevronRight } from 'lucide-react';

const steps = [
    {
        icon: Camera,
        title: "Input Source",
        desc: "Connects to existing CCTV/IP cameras via secure RTSP stream",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/30"
    },
    {
        icon: Cpu,
        title: "AI Processing",
        desc: "Deep learning models analyze behavior and detect anomalies in real-time",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30"
    },
    {
        icon: ShieldAlert,
        title: "Instant Alert",
        desc: "Immediate notification sent to security teams with video evidence",
        color: "text-red-400",
        bg: "bg-red-500/10",
        border: "border-red-500/30"
    }
];

const ProcessPipeline = () => {
    return (
        <section className="py-20 sm:py-32 bg-gray-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        How Traced <span className="text-emerald-400">Works</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A seamless pipeline from detection to action, powered by advanced artificial intelligence.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2 z-0"></div>
                    <motion.div
                        className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-emerald-500 to-red-500 -translate-y-1/2 z-0"
                        initial={{ scaleX: 0, originX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                    ></motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.3 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className={`w-20 h-20 rounded-2xl ${step.bg} ${step.border} border flex items-center justify-center mb-6 relative group`}>
                                    <step.icon className={`w-10 h-10 ${step.color} transition-transform duration-300 group-hover:scale-110`} />

                                    {/* Pulse Effect */}
                                    <div className={`absolute inset-0 rounded-2xl ${step.bg} animate-ping opacity-20`}></div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>

                                {/* Mobile Arrow */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden mt-8 text-gray-700">
                                        <ChevronRight size={32} className="rotate-90" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessPipeline;
