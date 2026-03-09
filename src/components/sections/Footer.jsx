import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

/* Radar sweep animation */
const RadarAnimation = () => {
    const blips = [
        { cx: 108, cy: 72,  r: 2.2, delay: '0s',    dur: '3.1s' },
        { cx: 158, cy: 118, r: 1.8, delay: '1.2s',  dur: '2.8s' },
        { cx: 82,  cy: 138, r: 2.0, delay: '2.4s',  dur: '3.4s' },
        { cx: 194, cy: 88,  r: 1.6, delay: '0.7s',  dur: '2.6s' },
        { cx: 136, cy: 52,  r: 1.5, delay: '1.9s',  dur: '3.0s' },
        { cx: 62,  cy: 98,  r: 1.7, delay: '3.0s',  dur: '2.9s' },
        { cx: 172, cy: 148, r: 2.0, delay: '0.4s',  dur: '3.3s' },
    ];

    return (
        <div className="relative w-[200px] h-[200px] flex-shrink-0">
            <svg width="200" height="200" viewBox="0 0 200 200" className="absolute inset-0">
                {/* Rings */}
                {[72, 50, 28, 8].map((r, i) => (
                    <circle key={i} cx="100" cy="100" r={r} fill="none"
                        stroke="rgba(245,158,11,0.12)" strokeWidth="0.8" />
                ))}
                {/* Crosshairs */}
                <line x1="100" y1="28" x2="100" y2="172" stroke="rgba(245,158,11,0.08)" strokeWidth="0.6" />
                <line x1="28"  y1="100" x2="172" y2="100" stroke="rgba(245,158,11,0.08)" strokeWidth="0.6" />
                {/* Diagonal ticks */}
                <line x1="49"  y1="49"  x2="59"  y2="59"  stroke="rgba(245,158,11,0.06)" strokeWidth="0.5" />
                <line x1="151" y1="49"  x2="141" y2="59"  stroke="rgba(245,158,11,0.06)" strokeWidth="0.5" />
                <line x1="49"  y1="151" x2="59"  y2="141" stroke="rgba(245,158,11,0.06)" strokeWidth="0.5" />
                <line x1="151" y1="151" x2="141" y2="141" stroke="rgba(245,158,11,0.06)" strokeWidth="0.5" />

                {/* Sweep sector — rotating */}
                <g style={{ transformOrigin: '100px 100px', animation: 'radar-spin 3s linear infinite' }}>
                    <defs>
                        <radialGradient id="sweepGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(100,100) scale(72)">
                            <stop offset="0%"   stopColor="rgba(245,158,11,0)" />
                            <stop offset="60%"  stopColor="rgba(245,158,11,0.07)" />
                            <stop offset="100%" stopColor="rgba(245,158,11,0.18)" />
                        </radialGradient>
                    </defs>
                    {/* Sweep wedge ~40 degrees */}
                    <path d="M100,100 L172,100 A72,72 0 0,0 145.6,63.6 Z" fill="url(#sweepGrad)" />
                    {/* Sweep leading edge line */}
                    <line x1="100" y1="100" x2="172" y2="100" stroke="rgba(245,158,11,0.55)" strokeWidth="0.8" />
                </g>

                {/* Blips */}
                {blips.map((b, i) => (
                    <circle key={i} cx={b.cx} cy={b.cy} r={b.r} fill="rgba(245,158,11,0.9)">
                        <animate attributeName="opacity" values="0;1;0.6;0" dur={b.dur} begin={b.delay} repeatCount="indefinite" />
                        <animate attributeName="r" values={`${b.r};${b.r * 1.8};${b.r}`} dur={b.dur} begin={b.delay} repeatCount="indefinite" />
                    </circle>
                ))}

                {/* Center dot */}
                <circle cx="100" cy="100" r="2.5" fill="rgba(245,158,11,0.7)" />
                <circle cx="100" cy="100" r="5" fill="none" stroke="rgba(245,158,11,0.2)" strokeWidth="0.8">
                    <animate attributeName="r" values="5;10;5" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* Outer border */}
                <circle cx="100" cy="100" r="94" fill="none" stroke="rgba(245,158,11,0.1)" strokeWidth="1" />
                {/* Corner brackets */}
                <path d="M6,18 L6,6 L18,6"   fill="none" stroke="rgba(245,158,11,0.2)" strokeWidth="1" />
                <path d="M182,6 L194,6 L194,18"  fill="none" stroke="rgba(245,158,11,0.2)" strokeWidth="1" />
                <path d="M6,182 L6,194 L18,194"  fill="none" stroke="rgba(245,158,11,0.2)" strokeWidth="1" />
                <path d="M194,182 L194,194 L182,194" fill="none" stroke="rgba(245,158,11,0.2)" strokeWidth="1" />
            </svg>

            {/* HUD labels */}
            <div className="absolute top-2 left-3 text-[8px] font-mono text-amber-400/40 leading-tight select-none">
                <div>● TRACED</div>
                <div>ACTIVE</div>
            </div>
            <div className="absolute bottom-2 right-3 text-[8px] font-mono text-amber-400/30 leading-tight text-right select-none">
                <div>SCAN MODE</div>
                <div>360°</div>
            </div>

            <style>{`
                @keyframes radar-spin {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

/* Bangalore area street maps — deeply zoomed out (viewBox 900×540, thin roads) */
const S = 'rgba(245,158,11,'; // amber shorthand
const blrMaps = [
    {
        id: 'CAM 01', area: 'MG ROAD · CENTRAL',
        map: (
            <svg width="100%" height="100%" viewBox="0 0 900 540" preserveAspectRatio="xMidYMid slice">
                {/* Cubbon Park */}
                <rect x="32" y="76" width="189" height="130" fill={S+'0.03)'} stroke={S+'0.12)'} strokeWidth="0.5" rx="2"/>
                <rect x="32" y="40" width="99" height="32"  fill={S+'0.05)'} stroke={S+'0.13)'} strokeWidth="0.4" rx="1"/>
                {/* MG Road main diagonal */}
                <line x1="0" y1="396" x2="900" y2="148" stroke={S+'0.38)'} strokeWidth="0.9"/>
                {/* Brigade Road */}
                <line x1="378" y1="540" x2="576" y2="0"   stroke={S+'0.28)'} strokeWidth="0.7"/>
                {/* Residency Road */}
                <line x1="0"   y1="315" x2="900" y2="333" stroke={S+'0.2)'} strokeWidth="0.5"/>
                {/* St Marks */}
                <line x1="252" y1="0"   x2="360" y2="540" stroke={S+'0.14)'} strokeWidth="0.4"/>
                {/* Minor verticals */}
                {[108,189,279,459,639,747,828].map(x=><line key={x} x1={x} y1="0" x2={x} y2="540" stroke={S+'0.07)'} strokeWidth="0.35"/>)}
                {/* Minor horizontals */}
                {[72,144,216,279,360,432,477].map(y=><line key={y} x1="0" y1={y} x2="900" y2={y} stroke={S+'0.06)'} strokeWidth="0.3"/>)}
                {/* City blocks */}
                {[[414,54,99,72],[648,81,108,63],[720,360,90,68],[504,396,99,58],[144,378,81,72],[279,414,108,54]].map(([x,y,w,h],k)=>
                    <rect key={k} x={x} y={y} width={w} height={h} fill={S+'0.025)'} stroke={S+'0.08)'} strokeWidth="0.35" rx="1"/>
                )}
                {/* Major intersections */}
                {[[378,320],[576,252],[279,329],[468,297],[747,270],[189,351]].map(([x,y],k)=>
                    <circle key={k} cx={x} cy={y} r="2" fill={S+'0.55)'}/>
                )}
                {[[108,297],[639,284],[828,315],[252,396],[558,104]].map(([x,y],k)=>
                    <circle key={k} cx={x} cy={y} r="1.2" fill={S+'0.28)'}/>
                )}
            </svg>
        ),
    },
    {
        id: 'CAM 02', area: 'KORAMANGALA',
        map: (
            <svg width="100%" height="100%" viewBox="0 0 900 540" preserveAspectRatio="xMidYMid slice">
                {/* Inner Ring Road curve */}
                <path d="M0,432 Q333,158 900,274" fill="none" stroke={S+'0.38)'} strokeWidth="0.9"/>
                {/* 80 Feet Road */}
                <line x1="0"   y1="284" x2="900" y2="212" stroke={S+'0.28)'} strokeWidth="0.7"/>
                {/* Sarjapur Road */}
                <line x1="513" y1="0"   x2="756" y2="540" stroke={S+'0.22)'} strokeWidth="0.6"/>
                {/* 7th Block main */}
                <line x1="162" y1="0"   x2="360" y2="540" stroke={S+'0.17)'} strokeWidth="0.5"/>
                {/* Intermediate Rd */}
                <line x1="0"   y1="378" x2="900" y2="414" stroke={S+'0.12)'} strokeWidth="0.4"/>
                {/* Minor verticals */}
                {[81,261,414,612,792].map(x=><line key={x} x1={x} y1="0" x2={x+22} y2="540" stroke={S+'0.07)'} strokeWidth="0.35"/>)}
                {/* Minor horizontals */}
                {[90,171,315,459].map(y=><line key={y} x1="0" y1={y} x2="900" y2={y} stroke={S+'0.06)'} strokeWidth="0.3"/>)}
                {/* Forum/EGL campus */}
                <rect x="540" y="94"  width="162" height="104" fill={S+'0.04)'} stroke={S+'0.13)'} strokeWidth="0.5" rx="2"/>
                {[[27,94,99,76],[279,76,108,86],[27,315,90,68],[288,342,99,63],[648,333,117,68]].map(([x,y,w,h],k)=>
                    <rect key={k} x={x} y={y} width={w} height={h} fill={S+'0.025)'} stroke={S+'0.07)'} strokeWidth="0.3" rx="1"/>
                )}
                {[[261,252],[513,230],[162,297],[612,266],[360,351],[756,351]].map(([x,y],k)=>
                    <circle key={k} cx={x} cy={y} r="2" fill={S+'0.55)'}/>
                )}
                {[[81,274],[792,288],[414,414]].map(([x,y],k)=>
                    <circle key={k} cx={x} cy={y} r="1.2" fill={S+'0.28)'}/>
                )}
            </svg>
        ),
    },
    {
        id: 'CAM 03', area: 'WHITEFIELD · ITPL',
        map: (
            <svg width="100%" height="100%" viewBox="0 0 900 540" preserveAspectRatio="xMidYMid slice">
                {/* ITPL Main Road */}
                <line x1="0" y1="266" x2="900" y2="266" stroke={S+'0.4)'} strokeWidth="0.9"/>
                {/* Whitefield Main */}
                <line x1="0" y1="158" x2="900" y2="173" stroke={S+'0.24)'} strokeWidth="0.6"/>
                {/* Hope Farm Rd */}
                <line x1="0" y1="378" x2="900" y2="392" stroke={S+'0.17)'} strokeWidth="0.5"/>
                {/* Verticals */}
                {[122,288,459,630,792].map(x=><line key={x} x1={x} y1="0" x2={x} y2="540" stroke={S+'0.09)'} strokeWidth="0.4"/>)}
                {/* Horizontals */}
                {[72,216,306,441,486].map(y=><line key={y} x1="0" y1={y} x2="900" y2={y} stroke={S+'0.06)'} strokeWidth="0.3"/>)}
                {/* Tech campuses */}
                <rect x="32"  y="284" width="216" height="158" fill={S+'0.05)'} stroke={S+'0.16)'} strokeWidth="0.5" rx="2"/>
                <rect x="310" y="284" width="189" height="144" fill={S+'0.05)'} stroke={S+'0.15)'} strokeWidth="0.5" rx="2"/>
                <rect x="634" y="284" width="234" height="135" fill={S+'0.05)'} stroke={S+'0.14)'} strokeWidth="0.5" rx="2"/>
                {/* Above-road blocks */}
                <rect x="32"  y="36" width="234" height="108" fill={S+'0.03)'} stroke={S+'0.09)'} strokeWidth="0.4" rx="1"/>
                <rect x="360" y="32" width="198" height="112" fill={S+'0.03)'} stroke={S+'0.09)'} strokeWidth="0.4" rx="1"/>
                <rect x="662" y="36" width="207" height="108" fill={S+'0.03)'} stroke={S+'0.09)'} strokeWidth="0.4" rx="1"/>
                {/* Intersections */}
                {[[122,266],[288,266],[459,266],[630,266],[792,266],[122,165],[459,165]].map(([x,y],k)=>
                    <circle key={k} cx={x} cy={y} r="2" fill={S+'0.55)'}/>
                )}
                {[[288,165],[630,165],[288,385],[630,385]].map(([x,y],k)=>
                    <circle key={k} cx={x} cy={y} r="1.2" fill={S+'0.28)'}/>
                )}
            </svg>
        ),
    },
    {
        id: 'CAM 04', area: 'INDIRANAGAR',
        map: (
            <svg width="100%" height="100%" viewBox="0 0 900 540" preserveAspectRatio="xMidYMid slice">
                {/* 100 Feet Road vertical */}
                <line x1="450" y1="0"   x2="450" y2="540" stroke={S+'0.42)'} strokeWidth="0.9"/>
                {/* CMH Road horizontal */}
                <line x1="0"   y1="266" x2="900" y2="266" stroke={S+'0.3)'} strokeWidth="0.7"/>
                {/* HAL diagonal */}
                <line x1="0"   y1="104" x2="450" y2="266" stroke={S+'0.2)'} strokeWidth="0.5"/>
                {/* 12th Main */}
                <line x1="0"   y1="378" x2="900" y2="378" stroke={S+'0.17)'} strokeWidth="0.5"/>
                {/* Old Airport Rd */}
                <line x1="450" y1="266" x2="900" y2="180" stroke={S+'0.14)'} strokeWidth="0.4"/>
                {/* Verticals */}
                {[126,261,594,738].map(x=><line key={x} x1={x} y1="0" x2={x} y2="540" stroke={S+'0.07)'} strokeWidth="0.35"/>)}
                {/* Horizontals */}
                {[68,144,198,315,432,477].map(y=><line key={y} x1="0" y1={y} x2="900" y2={y} stroke={S+'0.06)'} strokeWidth="0.3"/>)}
                {/* Blocks */}
                <rect x="454" y="270" width="137" height="94" fill={S+'0.04)'} stroke={S+'0.12)'} strokeWidth="0.4" rx="1"/>
                <rect x="18"  y="270" width="117" height="90" fill={S+'0.03)'} stroke={S+'0.09)'} strokeWidth="0.3" rx="1"/>
                <rect x="612" y="108" width="144" height="99" fill={S+'0.03)'} stroke={S+'0.09)'} strokeWidth="0.3" rx="1"/>
                <rect x="162" y="108" width="126" height="86" fill={S+'0.03)'} stroke={S+'0.08)'} strokeWidth="0.3" rx="1"/>
                {/* Intersections */}
                {[[450,266],[450,378],[126,266],[738,266],[261,266],[126,378],[738,378]].map(([x,y],k)=>
                    <circle key={k} cx={x} cy={y} r="2.2" fill={S+'0.6)'}/>
                )}
                {[[261,378],[450,144],[594,266]].map(([x,y],k)=>
                    <circle key={k} cx={x} cy={y} r="1.4" fill={S+'0.3)'}/>
                )}
            </svg>
        ),
    },
];

/* 2×2 camera feed grid with Bangalore maps */
const CameraGrid = () => (
    <div className="grid grid-cols-2 gap-2 flex-1">
        <style>{`
            @keyframes patrol-1 {
                0%   { left:14%; top:22% }
                20%  { left:76%; top:18% }
                40%  { left:82%; top:62% }
                60%  { left:48%; top:68% }
                80%  { left:16%; top:65% }
                100% { left:14%; top:22% }
            }
            @keyframes patrol-2 {
                0%   { left:78%; top:18% }
                20%  { left:82%; top:65% }
                40%  { left:48%; top:70% }
                60%  { left:14%; top:62% }
                80%  { left:16%; top:20% }
                100% { left:78%; top:18% }
            }
            @keyframes patrol-3 {
                0%   { left:16%; top:65% }
                20%  { left:80%; top:68% }
                40%  { left:82%; top:22% }
                60%  { left:48%; top:16% }
                80%  { left:14%; top:24% }
                100% { left:16%; top:65% }
            }
            @keyframes patrol-4 {
                0%   { left:80%; top:65% }
                20%  { left:14%; top:62% }
                40%  { left:16%; top:20% }
                60%  { left:50%; top:16% }
                80%  { left:82%; top:22% }
                100% { left:80%; top:65% }
            }
            @keyframes detect-flash { 0%,100%{opacity:0} 38%,62%{opacity:1} }
            @keyframes dot-pulse    { 0%,100%{opacity:1} 50%{opacity:0.15} }
            @keyframes cam-scan     { 0%{transform:translateY(-100%)} 100%{transform:translateY(1100%)} }
        `}</style>
        {blrMaps.map((cam, i) => (
            <div key={i} className="relative overflow-hidden rounded-lg"
                style={{ background: '#060809', border: '1px solid rgba(245,158,11,0.12)', height: '96px' }}>

                {/* Map */}
                <div className="absolute inset-0" style={{ opacity: 0.9 }}>{cam.map}</div>

                {/* Vignette */}
                <div className="absolute inset-0 pointer-events-none" style={{
                    background: 'radial-gradient(ellipse at center, transparent 35%, rgba(6,8,9,0.65) 100%)',
                }} />

                {/* Scanline */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
                    <div style={{
                        position: 'absolute', left: 0, right: 0, height: '9%',
                        background: 'linear-gradient(to bottom, transparent, rgba(245,158,11,0.04), transparent)',
                        animation: `cam-scan ${4 + i * 0.6}s linear infinite`,
                    }} />
                </div>

                {/* Corner brackets */}
                {[['top-1.5 left-1.5','border-t border-l'],['top-1.5 right-1.5','border-t border-r'],
                  ['bottom-1.5 left-1.5','border-b border-l'],['bottom-1.5 right-1.5','border-b border-r'],
                ].map(([pos, brd], bi) => (
                    <div key={bi} className={`absolute ${pos} w-3.5 h-3.5 ${brd} border-amber-400/40`} style={{ zIndex: 4 }} />
                ))}

                {/* Slow patrol reticle — percentage-positioned, wanders whole window */}
                <div className="absolute" style={{
                    zIndex: 3,
                    animation: `patrol-${i + 1} ${16 + i * 2}s ease-in-out infinite`,
                }}>
                    <svg width="22" height="22" viewBox="0 0 22 22" style={{ transform: 'translate(-11px,-11px)' }}>
                        <circle cx="11" cy="11" r="7" fill="none" stroke="rgba(245,158,11,0.75)" strokeWidth="0.9"/>
                        <circle cx="11" cy="11" r="1.6" fill="rgba(245,158,11,1)"/>
                        <line x1="0"  y1="11" x2="4.5" y2="11" stroke="rgba(245,158,11,0.75)" strokeWidth="0.9"/>
                        <line x1="17.5" y1="11" x2="22" y2="11" stroke="rgba(245,158,11,0.75)" strokeWidth="0.9"/>
                        <line x1="11" y1="0"  x2="11" y2="4.5" stroke="rgba(245,158,11,0.75)" strokeWidth="0.9"/>
                        <line x1="11" y1="17.5" x2="11" y2="22" stroke="rgba(245,158,11,0.75)" strokeWidth="0.9"/>
                        <path d="M4,4 L6.5,4 L6.5,6.5"  fill="none" stroke="rgba(245,158,11,0.4)" strokeWidth="0.7"/>
                        <path d="M18,4 L15.5,4 L15.5,6.5" fill="none" stroke="rgba(245,158,11,0.4)" strokeWidth="0.7"/>
                        <path d="M4,18 L6.5,18 L6.5,15.5" fill="none" stroke="rgba(245,158,11,0.4)" strokeWidth="0.7"/>
                        <path d="M18,18 L15.5,18 L15.5,15.5" fill="none" stroke="rgba(245,158,11,0.4)" strokeWidth="0.7"/>
                    </svg>
                </div>

                {/* Top HUD */}
                <div className="absolute top-1.5 left-2 right-2 flex justify-between items-center" style={{ zIndex: 5 }}>
                    <span style={{ fontSize: '6.5px', fontFamily: 'monospace', color: 'rgba(245,158,11,0.7)', letterSpacing: '0.06em' }}>{cam.id}</span>
                    <span style={{
                        fontSize: '6px', fontFamily: 'monospace', color: 'rgba(239,68,68,0.9)',
                        animation: `detect-flash 2.4s ease-in-out infinite`,
                        animationDelay: `${i * 0.5}s`,
                    }}>● DETECT</span>
                </div>

                {/* Bottom HUD */}
                <div className="absolute bottom-1.5 left-2 right-2 flex justify-between items-center" style={{ zIndex: 5 }}>
                    <span style={{ fontSize: '6px', fontFamily: 'monospace', color: 'rgba(245,158,11,0.55)', letterSpacing: '0.04em' }}>{cam.area}</span>
                    <span className="flex items-center gap-1">
                        <span style={{
                            width: 3.5, height: 3.5, borderRadius: '50%',
                            background: 'rgba(245,158,11,0.9)', display: 'inline-block',
                            animation: `dot-pulse ${1.1 + i * 0.25}s ease-in-out infinite`,
                        }} />
                        <span style={{ fontSize: '5.5px', fontFamily: 'monospace', color: 'rgba(245,158,11,0.4)' }}>LIVE</span>
                    </span>
                </div>
            </div>
        ))}
    </div>
);

const Footer = () => {
    const navCol1 = [
        { label: 'Vision',      href: '#vision' },
        { label: 'Features',    href: '#features' },
        { label: 'Technology',  href: '#concept' },
        { label: 'Roadmap',     href: '#roadmap' },
    ];
    const navCol2 = [
        { label: 'Future',    href: '#future' },
        { label: 'Mission',   href: '#mission' },
        { label: 'Founders',  href: '#founders' },
        { label: 'Contact',   href: '#contact' },
    ];

    const socials = [
        { icon: Instagram, href: 'https://www.instagram.com/triye_technologies/', label: 'Instagram' },
        { icon: Linkedin,  href: 'https://www.linkedin.com/company/triye-technologies/', label: 'LinkedIn' },
    ];

    return (
        <footer style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.04)' }} className="text-zinc-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">

                {/* Top section — 4 columns */}
                <div className="py-14 grid grid-cols-1 md:grid-cols-[220px_auto_auto_1fr] gap-8 lg:gap-12 border-b border-white/4">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <img src="/logo.png" alt="Triye" className="w-8 h-8 opacity-70" />
                            <img src="/triye1.png" alt="Triye" className="h-5" />
                        </div>
                        <p className="text-zinc-600 text-xs leading-relaxed mb-4 max-w-[200px]">
                            AI-powered surveillance intelligence for safer cities across India.
                        </p>
                        <p className="text-amber-400/60 text-[10px] font-semibold uppercase tracking-widest mb-5">Eye that never blinks</p>

                        <div className="flex items-center gap-2.5">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-lg bg-white/4 hover:bg-white/8 flex items-center justify-center transition-colors border border-white/6">
                                    <Icon className="w-3.5 h-3.5 text-zinc-500 hover:text-white transition-colors" />
                                </a>
                            ))}
                            <span className="flex items-center gap-1.5 text-xs text-zinc-700 ml-1">
                                <Mail className="w-3 h-3" /> triye3@gmail.com
                            </span>
                        </div>
                    </div>

                    {/* Nav col 1 */}
                    <div>
                        <p className="text-zinc-400 text-[10px] font-semibold uppercase tracking-widest mb-4">Navigate</p>
                        <ul className="space-y-2.5">
                            {navCol1.map(l => (
                                <li key={l.label}><a href={l.href} className="text-sm hover:text-white transition-colors duration-200">{l.label}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Nav col 2 */}
                    <div className="md:pt-[1.6rem]">
                        <ul className="space-y-2.5">
                            {navCol2.map(l => (
                                <li key={l.label}><a href={l.href} className="text-sm hover:text-white transition-colors duration-200">{l.label}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Surveillance animation */}
                    <div className="flex flex-col gap-2">
                        <p className="text-zinc-400 text-[10px] font-semibold uppercase tracking-widest mb-1">Surveillance Network</p>
                        <div className="flex gap-3 items-start">
                            <RadarAnimation />
                            <CameraGrid />
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-700">
                    <span>© 2025 Triye Technologies Pvt. Ltd. All rights reserved.</span>
                    <span className="text-zinc-800">Traced · AI Surveillance Platform</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
