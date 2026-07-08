import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

// Loop clip that only loads and plays while it's near the viewport
const LazyLoopVideo = ({ src }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                if (!video.src) video.src = src;
                video.play().catch(() => {});
            } else {
                video.pause();
            }
        }, { rootMargin: '200px' });

        observer.observe(video);
        return () => observer.disconnect();
    }, [src]);

    return <video ref={videoRef} className="w-full h-full object-cover" loop muted playsInline preload="none" />;
};

const VideoSection = () => (
    <section id="video" className="py-16 sm:py-28" style={{ background: '#111111' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-end mb-16">
                <div>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">Demo</motion.p>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                        See Traced <span className="gradient-text">In Action</span>
                    </motion.h2>
                </div>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-zinc-500 leading-relaxed">
                    Watch our demo showing how Traced AI security system works in real-world scenarios across urban environments.
                </motion.p>
            </div>

            {/* Main demo video */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-16 max-w-3xl mx-auto">
                <div className="rounded-2xl overflow-hidden bg-black relative group">
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Play className="w-7 h-7 text-white fill-white ml-1" />
                        </div>
                    </div>
                    <video className="w-full h-auto max-h-[380px] object-cover" controls preload="none" poster="/sotat1.webp">
                        <source src="/traced-demo.mp4" type="video/mp4" />
                    </video>
                </div>
            </motion.div>

            {/* Action detection grid */}
            <div className="max-w-4xl mx-auto">
                <div className="mb-8 text-center">
                    <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-bold text-white">Real-Time Action Detection</motion.h3>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-zinc-500 text-sm mt-1">Traced identifying human activities with skeletal tracking technology</motion.p>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    {['/video1.mp4', '/video2.mp4', '/video3.mp4', '/video4.mp4'].map((src, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                            className="rounded-xl overflow-hidden bg-black aspect-video">
                            <LazyLoopVideo src={src} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default VideoSection;
