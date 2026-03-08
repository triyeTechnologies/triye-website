import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animId;

        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;

        const NODE_COUNT = 90;
        const LINK_DIST  = 145;

        let nodes=[], links=[], pulses=[], suspects=[];

        function init() {
            nodes=[]; links=[]; pulses=[]; suspects=[];

            // Grid-jitter — even spread across full hero
            const cols = 10;
            const rows = Math.ceil(NODE_COUNT / cols);
            const cellW = canvas.width  / cols;
            const cellH = canvas.height / rows;
            for (let i = 0; i < NODE_COUNT; i++) {
                const col = i % cols;
                const row = Math.floor(i / cols);
                nodes.push({
                    x: col * cellW + cellW * 0.15 + Math.random() * cellW * 0.7,
                    y: row * cellH + cellH * 0.15 + Math.random() * cellH * 0.7,
                    alert: 0,
                    ping:  0,
                });
            }

            // Connect nearby nodes
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i+1; j < nodes.length; j++) {
                    const d = Math.hypot(nodes[i].x-nodes[j].x, nodes[i].y-nodes[j].y);
                    if (d < LINK_DIST) links.push({ a:i, b:j, occupied:false });
                }
            }

            // Guarantee every node has at least one link
            nodes.forEach((n, i) => {
                if (links.some(l => l.a===i || l.b===i)) return;
                let nearest=-1, bestD=Infinity;
                nodes.forEach((_, j) => {
                    if (j===i) return;
                    const d = Math.hypot(nodes[i].x-nodes[j].x, nodes[i].y-nodes[j].y);
                    if (d < bestD) { bestD=d; nearest=j; }
                });
                if (nearest >= 0) links.push({ a:i, b:nearest, occupied:false });
            });

            for (let s = 0; s < 5; s++) setTimeout(() => spawnSuspect(), s * 600);
        }

        function spawnSuspect() {
            const startIdx = Math.floor(Math.random() * nodes.length);
            const firstLink = getNextLink(startIdx, -1);
            if (!firstLink) return;
            firstLink.occupied = true;
            suspects.push({
                nodeIdx: startIdx,
                nextIdx: firstLink.a === startIdx ? firstLink.b : firstLink.a,
                currentLink: firstLink,
                t: 0,
                speed: 0.003 + Math.random() * 0.002,
                trail: [],
            });
        }

        function getNextLink(curIdx, prevIdx) {
            const candidates = links.filter(l =>
                !l.occupied &&
                (l.a === curIdx || l.b === curIdx) &&
                (l.a !== prevIdx && l.b !== prevIdx)
            );
            if (candidates.length) return candidates[Math.floor(Math.random() * candidates.length)];
            const fallback = links.filter(l => !l.occupied && (l.a === curIdx || l.b === curIdx));
            return fallback.length ? fallback[Math.floor(Math.random() * fallback.length)] : null;
        }

        function spawnPulse() {
            if (!links.length) return;
            const link = links[Math.floor(Math.random() * links.length)];
            pulses.push({ link, t: 0, dir: Math.random() > 0.5, color: Math.random() > 0.4 ? 'em' : 'cy' });
        }

        // ── Draw ──────────────────────────────────────────────────
        function drawLinks() {
            links.forEach(l => {
                const a=nodes[l.a], b=nodes[l.b];
                ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
                ctx.strokeStyle = 'rgba(16,185,129,0.08)';
                ctx.lineWidth = 0.7; ctx.stroke();
            });
        }

        function drawNodes() {
            nodes.forEach(n => {
                if (n.ping > 0) {
                    ctx.beginPath(); ctx.arc(n.x, n.y, 6+(1-n.ping)*22, 0, Math.PI*2);
                    ctx.strokeStyle = `rgba(16,185,129,${n.ping*0.45})`; ctx.lineWidth=1; ctx.stroke();
                }
                if (n.alert > 0) {
                    ctx.beginPath(); ctx.arc(n.x, n.y, 8+(1-n.alert)*20, 0, Math.PI*2);
                    ctx.strokeStyle = `rgba(239,68,68,${n.alert*0.65})`; ctx.lineWidth=1.5; ctx.stroke();
                }
                // core dot
                ctx.beginPath(); ctx.arc(n.x, n.y, 2.5, 0, Math.PI*2);
                ctx.fillStyle = n.alert > 0.1
                    ? `rgba(239,68,68,${0.7 + n.alert*0.3})`
                    : 'rgba(16,185,129,0.8)';
                ctx.fill();
                // camera tick marks
                ctx.strokeStyle = n.alert > 0.1 ? 'rgba(239,68,68,0.5)' : 'rgba(16,185,129,0.35)';
                ctx.lineWidth = 0.8;
                ctx.beginPath();
                ctx.moveTo(n.x-5, n.y-5); ctx.lineTo(n.x-2, n.y-2);
                ctx.moveTo(n.x+5, n.y-5); ctx.lineTo(n.x+2, n.y-2);
                ctx.stroke();
                if (n.alert > 0) n.alert *= 0.97;
                if (n.ping  > 0) n.ping  *= 0.975;
            });
        }

        function drawPulses() {
            pulses.forEach(p => {
                const a=nodes[p.link.a], b=nodes[p.link.b];
                const [from, to] = p.dir ? [a,b] : [b,a];
                const x = from.x + (to.x-from.x) * p.t;
                const y = from.y + (to.y-from.y) * p.t;
                const c = p.color === 'em' ? '16,185,129' : '34,211,238';
                const tx = from.x + (to.x-from.x) * Math.max(0, p.t-0.18);
                const ty = from.y + (to.y-from.y) * Math.max(0, p.t-0.18);
                const tr = ctx.createLinearGradient(tx,ty,x,y);
                tr.addColorStop(0, `rgba(${c},0)`);
                tr.addColorStop(1, `rgba(${c},0.65)`);
                ctx.beginPath(); ctx.moveTo(tx,ty); ctx.lineTo(x,y);
                ctx.strokeStyle = tr; ctx.lineWidth = 1.4; ctx.stroke();
                ctx.beginPath(); ctx.arc(x,y,2.2,0,Math.PI*2);
                ctx.fillStyle = `rgba(${c},1)`; ctx.fill();
                p.t += 0.014;
            });
            for (let i=pulses.length-1; i>=0; i--) if (pulses[i].t >= 1) pulses.splice(i,1);
        }

        function drawSuspects() {
            suspects.forEach(s => {
                const a=nodes[s.nodeIdx], b=nodes[s.nextIdx];
                const x = a.x + (b.x-a.x) * s.t;
                const y = a.y + (b.y-a.y) * s.t;
                // trail
                for (let i=1; i<s.trail.length; i++) {
                    ctx.beginPath(); ctx.arc(s.trail[i].x, s.trail[i].y, 1.4, 0, Math.PI*2);
                    ctx.fillStyle = `rgba(239,68,68,${(i/s.trail.length)*0.45})`; ctx.fill();
                }
                // glow
                const g = ctx.createRadialGradient(x,y,0,x,y,18);
                g.addColorStop(0,'rgba(239,68,68,0.3)'); g.addColorStop(1,'transparent');
                ctx.beginPath(); ctx.arc(x,y,18,0,Math.PI*2); ctx.fillStyle=g; ctx.fill();
                // core
                ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2);
                ctx.fillStyle='rgba(239,68,68,1)'; ctx.fill();
                // crosshair
                ctx.strokeStyle='rgba(239,68,68,0.65)'; ctx.lineWidth=1;
                ctx.beginPath();
                ctx.moveTo(x-11,y); ctx.lineTo(x-5,y);
                ctx.moveTo(x+5, y); ctx.lineTo(x+11,y);
                ctx.moveTo(x,y-11); ctx.lineTo(x,y-5);
                ctx.moveTo(x,y+5);  ctx.lineTo(x,y+11);
                ctx.stroke();
                ctx.font='7px monospace';
                ctx.fillStyle='rgba(239,68,68,0.75)';
                ctx.fillText('TRACKING', x+13, y-7);
            });
        }

        function drawHUD() {
            ctx.font='8.5px monospace'; ctx.fillStyle='rgba(16,185,129,0.35)';
            ctx.textAlign='left';
            ctx.fillText('● SYSTEM ACTIVE', 14, 22);
            ctx.fillText(`CAMS: ${nodes.length}   LINKS: ${links.length}`, 14, 35);
            ctx.fillText('TRACED — INDIA SECURED', 14, 48);
            ctx.textAlign='right';
            ctx.fillText(new Date().toLocaleTimeString('en-IN',{hour12:false}), canvas.width-14, 22);
            ctx.fillText('LIVE SURVEILLANCE', canvas.width-14, 35);
            ctx.textAlign='left';
        }

        // ── Main loop ─────────────────────────────────────────────
        let pulseTimer = 0;
        function animate() {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            drawLinks();
            drawPulses();
            drawSuspects();
            drawNodes();
            drawHUD();

            pulseTimer++;
            if (pulseTimer % 5 === 0) spawnPulse();

            for (let i=suspects.length-1; i>=0; i--) {
                const s = suspects[i];
                s.t += s.speed;
                const a=nodes[s.nodeIdx], b=nodes[s.nextIdx];
                s.trail.push({ x: a.x+(b.x-a.x)*s.t, y: a.y+(b.y-a.y)*s.t });
                if (s.trail.length > 60) s.trail.shift();

                if (s.t >= 1) {
                    s.t = 0;
                    s.currentLink.occupied = false;
                    nodes[s.nextIdx].alert = 1; nodes[s.nextIdx].ping = 1;
                    const prev = s.nodeIdx;
                    s.nodeIdx = s.nextIdx;
                    const nextLink = getNextLink(s.nodeIdx, prev);
                    if (!nextLink) { suspects.splice(i,1); spawnSuspect(); continue; }
                    nextLink.occupied = true;
                    s.currentLink = nextLink;
                    s.nextIdx = nextLink.a===s.nodeIdx ? nextLink.b : nextLink.a;
                }
            }

            animId = requestAnimationFrame(animate);
        }

        init();
        animId = requestAnimationFrame(animate);

        const onResize = () => { canvas.width=window.innerWidth; canvas.height=window.innerHeight; init(); };
        window.addEventListener('resize', onResize);
        return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{zIndex:1}} />;
};

export default ParticleBackground;
