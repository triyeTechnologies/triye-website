
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LiveThreatMap = () => {
    const [pings, setPings] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newPing = {
                id: Date.now(),
                x: Math.random() * 100,
                y: Math.random() * 100,
                color: Math.random() > 0.8 ? 'bg-red-500' : 'bg-emerald-500'
            };
            setPings(prev => [...prev.slice(-10), newPing]);
        }, 800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-20">
            {/* World Map Grid (Simplified) */}
            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/2/23/Blue_Marble_2002.png')] bg-cover bg-center opacity-10 grayscale mix-blend-screen"></div>

            {/* Dotted Grid Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:40px_40px] opacity-10"></div>

            {/* Random Pings */}
            <AnimatePresence>
                {pings.map(ping => (
                    <motion.div
                        key={ping.id}
                        initial={{ scale: 0, opacity: 1 }}
                        animate={{ scale: 2, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2 }}
                        className={`absolute w-3 h-3 rounded-full ${ping.color} blur-[2px]`}
                        style={{
                            top: `${ping.y}%`,
                            left: `${ping.x}%`
                        }}
                    >
                        <div className={`absolute inset-0 rounded-full ${ping.color} animate-ping`}></div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default LiveThreatMap;
