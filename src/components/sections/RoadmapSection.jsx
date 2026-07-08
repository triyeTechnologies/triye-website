import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Clock } from 'lucide-react';

const RoadmapSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

    const steps = [
        { phase: 'Day 1',    title: 'The Idea',          desc: 'Revolutionary AI security concept born',         status: 'completed' },
        { phase: 'Month 5',  title: 'Basic Detection',   desc: 'Core AI algorithms developed and tested',        status: 'completed' },
        { phase: 'Month 6',  title: 'Seeking Funding',   desc: 'Pursuing investment and strategic partnerships',  status: 'current'   },
        { phase: 'Month 12', title: 'Working Prototype', desc: 'Full-scale prototype ready for deployment',       status: 'future'    },
        { phase: 'Month 15', title: 'Market Ready',      desc: 'Commercial deployment and city-wide scaling',     status: 'future'    },
    ];

    const sc = {
        completed: { fill: '#f59e0b', ring: 'rgba(245,158,11,0.2)',  badge: 'rgba(245,158,11,0.12)', text: '#f59e0b' },
        current:   { fill: '#fb923c', ring: 'rgba(251,146,60,0.22)', badge: 'rgba(251,146,60,0.12)', text: '#fb923c' },
        future:    { fill: '#3f3f46', ring: 'transparent',            badge: 'rgba(63,63,70,0.25)',   text: '#71717a' },
    };

    // ── Road levels — perspective projection ──────────────────────────────
    // Each level: cx (center X), y (screen Y), hw (half-width of road)
    // Road zigzags left-right as it retreats to vanishing point
    const levels = [
        { cx: 450, y: 575, hw: 210 },  // viewer's feet (nearest)
        { cx: 300, y: 460, hw: 140 },  // milestone 1 — curves left
        { cx: 580, y: 345, hw: 88  },  // milestone 2 — curves right
        { cx: 330, y: 255, hw: 55  },  // milestone 3 — curves left
        { cx: 530, y: 178, hw: 33  },  // milestone 4 — curves right
        { cx: 420, y: 110, hw: 19  },  // milestone 5 — centers
        { cx: 450, y: 38,  hw: 5   },  // vanishing point
    ];

    const milestones = levels.slice(1, 6);

    // Road edge point arrays
    const leftPts  = levels.map(l => [l.cx - l.hw, l.y]);
    const rightPts = levels.map(l => [l.cx + l.hw, l.y]);
    const centerPts = levels.map(l => [l.cx, l.y]);

    // Full road polygon (left edge up → right edge down)
    const roadPath = [
        ...leftPts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]},${p[1]}`),
        ...rightPts.slice().reverse().map(p => `L ${p[0]},${p[1]}`),
        'Z',
    ].join(' ');

    // Completed progress — cover segments 0→1 and 1→2 (steps 1 & 2 done)
    const progressPoly = [
        `M ${leftPts[0][0]},${leftPts[0][1]}`,
        `L ${leftPts[1][0]},${leftPts[1][1]}`,
        `L ${leftPts[2][0]},${leftPts[2][1]}`,
        `L ${rightPts[2][0]},${rightPts[2][1]}`,
        `L ${rightPts[1][0]},${rightPts[1][1]}`,
        `L ${rightPts[0][0]},${rightPts[0][1]}`,
        'Z',
    ].join(' ');

    // ── Card placement (alternating sides, scaling with depth) ───────────
    const cardDefs = [
        { w: 195, h: 128, fontSize: 11.5, side: 'right', x: 455, y: 397 },
        { w: 168, h: 112, fontSize: 10.5, side: 'left',  x: 275, y: 291 },
        { w: 142, h:  98, fontSize:  9.5, side: 'right', x: 400, y: 207 },
        { w: 118, h:  85, fontSize:  8.5, side: 'left',  x: 185, y: 136 },
        { w:  98, h:  74, fontSize:  7.5, side: 'right', x: 445, y:  73 },
    ];

    // Connector: from milestone center to nearest card edge midpoint
    const connectorEnd = (m, c) => {
        if (c.side === 'right') return { x: c.x, y: c.y + c.h / 2 };
        return { x: c.x + c.w, y: c.y + c.h / 2 };
    };

    return (
        <section id="roadmap" ref={sectionRef} className="py-16 sm:py-28 overflow-hidden" style={{ background: '#111111' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-8">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
                    <div>
                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">Journey</motion.p>
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                            Development <span className="gradient-text">Roadmap</span>
                        </motion.h2>
                    </div>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-zinc-500 text-sm max-w-xs lg:text-right">
                        The road ahead — every curve a milestone, every step forward.
                    </motion.p>
                </div>

                {/* ── Desktop: 3D perspective road ── */}
                <div className="hidden lg:block">
                    <motion.div
                        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <svg viewBox="0 0 900 590" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
                            <defs>
                                {/* Sky gradient */}
                                <linearGradient id="rm-sky" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#0d0d0d" />
                                    <stop offset="60%" stopColor="#151515" />
                                    <stop offset="100%" stopColor="#1d1d1d" />
                                </linearGradient>
                                {/* Road surface gradient */}
                                <linearGradient id="rm-road" x1="0" y1="1" x2="0" y2="0">
                                    <stop offset="0%" stopColor="#2e2e2e" />
                                    <stop offset="100%" stopColor="#1c1c1c" />
                                </linearGradient>
                                {/* Depth haze — darkens the far end */}
                                <linearGradient id="rm-haze" x1="0" y1="1" x2="0" y2="0">
                                    <stop offset="0%"   stopColor="#111111" stopOpacity="0" />
                                    <stop offset="60%"  stopColor="#111111" stopOpacity="0.25" />
                                    <stop offset="100%" stopColor="#111111" stopOpacity="0.72" />
                                </linearGradient>
                                {/* Node glow filter */}
                                <filter id="rm-glow" x="-60%" y="-60%" width="220%" height="220%">
                                    <feGaussianBlur stdDeviation="5" result="b" />
                                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                                </filter>
                                {/* Amber glow */}
                                <filter id="rm-amber-glow" x="-40%" y="-40%" width="180%" height="180%">
                                    <feGaussianBlur stdDeviation="3" result="b" />
                                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                                </filter>
                            </defs>

                            {/* Background */}
                            <rect x="0" y="0" width="900" height="590" fill="url(#rm-sky)" />

                            {/* Subtle stars in sky */}
                            {[{ x:80,y:20 },{ x:200,y:12 },{ x:350,y:25 },{ x:550,y:8 },{ x:700,y:18 },{ x:820,y:26 },{ x:130,y:30 },{ x:670,y:5 }].map((s,i) => (
                                <circle key={i} cx={s.x} cy={s.y} r={0.8} fill="rgba(255,255,255,0.3)" />
                            ))}

                            {/* Horizon glow */}
                            <ellipse cx="450" cy="38" rx="160" ry="18" fill="rgba(245,158,11,0.04)" />

                            {/* Road fill */}
                            <path d={roadPath} fill="url(#rm-road)" />

                            {/* Road edge lines (kerb) */}
                            <polyline points={leftPts.map(p => p.join(',')).join(' ')}  fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
                            <polyline points={rightPts.map(p => p.join(',')).join(' ')} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />

                            {/* Center dashes — full road */}
                            <polyline points={centerPts.map(p => p.join(',')).join(' ')} fill="none" stroke="rgba(245,158,11,0.14)" strokeWidth="1.2" strokeDasharray="18 14" />

                            {/* Completed progress overlay (amber tint) */}
                            <motion.path
                                d={progressPoly}
                                fill="rgba(245,158,11,0.07)"
                                initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.6, duration: 1 }}
                            />

                            {/* Completed progress center line (bright amber) */}
                            <motion.polyline
                                points={centerPts.slice(0, 3).map(p => p.join(',')).join(' ')}
                                fill="none" stroke="#f59e0b" strokeWidth="2"
                                strokeDasharray="18 14"
                                initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                filter="url(#rm-amber-glow)"
                            />

                            {/* Road cross-hatching (horizontal lines for depth texture) */}
                            {levels.slice(1).map((l, i) => {
                                const lx = l.cx - l.hw, rx = l.cx + l.hw;
                                return <line key={i} x1={lx} y1={l.y} x2={rx} y2={l.y} stroke="rgba(255,255,255,0.025)" strokeWidth="0.8" />;
                            })}

                            {/* Connector lines — node to card */}
                            {milestones.map((m, i) => {
                                const c = cardDefs[i];
                                const ep = connectorEnd(m, c);
                                return (
                                    <line key={i}
                                        x1={m.cx} y1={m.y} x2={ep.x} y2={ep.y}
                                        stroke="rgba(255,255,255,0.07)" strokeWidth="0.9" strokeDasharray="5 4"
                                    />
                                );
                            })}

                            {/* Cards (foreignObject) — smaller = farther away */}
                            {steps.map((s, i) => {
                                const c = cardDefs[i];
                                const col = sc[s.status];
                                const isCurrent = s.status === 'current';
                                const opacity = Math.max(0.45, 1 - i * 0.11);
                                return (
                                    <foreignObject key={i} x={c.x} y={c.y} width={c.w} height={c.h} style={{ opacity }}>
                                        <div xmlns="http://www.w3.org/1999/xhtml" style={{
                                            background: '#1d1d1d',
                                            border: `1px solid ${isCurrent ? 'rgba(251,146,60,0.35)' : 'rgba(255,255,255,0.08)'}`,
                                            borderRadius: '8px',
                                            padding: '10px 12px',
                                            width: '100%', height: '100%',
                                            boxSizing: 'border-box',
                                            fontFamily: 'Inter, system-ui, sans-serif',
                                            overflow: 'hidden',
                                        }}>
                                            <div style={{
                                                display: 'inline-block', fontSize: `${c.fontSize - 2}px`,
                                                fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase',
                                                padding: '1px 6px', borderRadius: '999px',
                                                background: col.badge, color: col.text,
                                                border: `1px solid ${col.text}35`, marginBottom: '5px',
                                            }}>{s.phase}</div>
                                            <div style={{ fontSize: `${c.fontSize}px`, fontWeight: '700', color: '#fff', marginBottom: '3px', lineHeight: 1.2 }}>{s.title}</div>
                                            <div style={{ fontSize: `${c.fontSize - 1.5}px`, color: '#717171', lineHeight: 1.4 }}>{s.desc}</div>
                                        </div>
                                    </foreignObject>
                                );
                            })}

                            {/* Milestone nodes — smaller as they recede */}
                            {milestones.map((m, i) => {
                                const s = steps[i].status;
                                const col = sc[s];
                                const done = s === 'completed';
                                const curr = s === 'current';
                                const fut  = s === 'future';
                                const r = Math.max(4, 9.5 - i * 1.3);
                                const opacity = Math.max(0.4, 1 - i * 0.12);
                                return (
                                    <g key={i} style={{ opacity }}>
                                        {!fut && <circle cx={m.cx} cy={m.y} r={r + 9} fill={col.ring} />}
                                        {curr && <circle cx={m.cx} cy={m.y} r={r + 5} fill="none" stroke="rgba(251,146,60,0.35)" strokeWidth="1.2" />}
                                        <circle cx={m.cx} cy={m.y} r={r}
                                            fill={fut ? '#1e1e1e' : col.fill}
                                            stroke={fut ? 'rgba(255,255,255,0.15)' : col.fill}
                                            strokeWidth="1.5"
                                            filter={!fut ? 'url(#rm-glow)' : undefined}
                                        />
                                        {done && r > 5 && (
                                            <path d={`M${m.cx - r*0.5},${m.y + 0.5} L${m.cx - r*0.1},${m.y + r*0.45} L${m.cx + r*0.55},${m.y - r*0.45}`}
                                                stroke="#000" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                        )}
                                        {curr && <circle cx={m.cx} cy={m.y} r={r * 0.38} fill="#000" />}
                                        {fut  && <circle cx={m.cx} cy={m.y} r={r * 0.35} fill="rgba(100,100,100,0.4)" />}
                                    </g>
                                );
                            })}

                            {/* Atmospheric depth haze (darkens the far end) */}
                            <rect x="0" y="0" width="900" height="590" fill="url(#rm-haze)" pointerEvents="none" />
                        </svg>
                    </motion.div>
                </div>

                {/* ── Mobile: vertical timeline ── */}
                <div className="lg:hidden space-y-0">
                    {steps.map((s, i) => {
                        const col = sc[s.status];
                        return (
                            <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 mt-4 border-2"
                                        style={{ background: s.status === 'future' ? '#1e1e1e' : col.fill, borderColor: col.fill }}>
                                        {s.status === 'completed' ? <Check className="w-4 h-4 text-black" /> :
                                         s.status === 'current'   ? <Clock className="w-3 h-3 text-black" /> :
                                         <div className="w-2 h-2 rounded-full bg-white/20" />}
                                    </div>
                                    {i < steps.length - 1 && <div className="w-0.5 flex-1 bg-white/[0.08] my-1" />}
                                </div>
                                <div className="flex-1 pb-6">
                                    <div className="border rounded-xl p-4" style={{ background: '#1a1a1a', borderColor: s.status === 'current' ? 'rgba(251,146,60,0.3)' : 'rgba(255,255,255,0.06)' }}>
                                        <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2" style={{ background: col.badge, color: col.text, border: `1px solid ${col.text}35` }}>{s.phase}</span>
                                        <p className="font-bold text-white text-sm mb-1">{s.title}</p>
                                        <p className="text-zinc-500 text-xs">{s.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default RoadmapSection;
