
import React from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Counter = ({ value, suffix = '', duration = 2 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const springValue = useSpring(0, { duration: duration * 1000, bounce: 0 });
    const displayValue = useTransform(springValue, (current) => Math.round(current) + suffix);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (inView && !hasAnimated) {
            springValue.set(value);
            setHasAnimated(true);
        }
    }, [inView, value, springValue, hasAnimated]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const MetricCard = ({ value, suffix, label, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="glass-cyber p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all duration-300 text-center group"
    >
        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500 mb-2 font-mono">
            <Counter value={value} suffix={suffix} />
        </div>
        <p className="text-gray-400 text-sm sm:text-base group-hover:text-gray-300 transition-colors uppercase tracking-widest">
            {label}
        </p>
    </motion.div>
);

const LiveMetricsSection = () => {
    return (
        <section className="py-16 sm:py-24 bg-gray-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        System <span className="text-emerald-400">Performance</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Our AI models operate with unparalleled precision and speed, ensuring real-time security without compromise.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    <MetricCard value={99} suffix="%" label="Detection Accuracy" delay={0.1} />
                    <MetricCard value={50} suffix="ms" label="Processing Latency" delay={0.2} />
                    <MetricCard value={24} suffix="/7" label="Active Monitoring" delay={0.3} />
                    <MetricCard value={10} suffix="K+" label="Threats Analyzed" delay={0.4} />
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-emerald-500/5 blur-[120px] pointer-events-none"></div>
        </section>
    );
};

export default LiveMetricsSection;
