import React, { useRef, useEffect, useCallback } from 'react';

const ParticleBackground = ({ particleCount = 50, connectionDistance = 100 }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  const Particle = useCallback(class {
    constructor(canvas) {
      this.canvas = canvas;
      this.reset();
      this.size = Math.random() * 3 + 2; // Larger particles (2-5px)
      this.speedX = (Math.random() - 0.5) * 1;
      this.speedY = (Math.random() - 0.5) * 1;
      this.opacity = Math.random() * 0.4 + 0.6; // Higher base opacity (0.6-1.0)
      this.maxOpacity = this.opacity;
    }

    reset() {
      this.x = Math.random() * this.canvas.width;
      this.y = Math.random() * this.canvas.height;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > this.canvas.width) this.x = 0;
      if (this.x < 0) this.x = this.canvas.width;
      if (this.y > this.canvas.height) this.y = 0;
      if (this.y < 0) this.y = this.canvas.height;

      const dx = mouseRef.current.x - this.x;
      const dy = mouseRef.current.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        this.opacity = Math.min(this.maxOpacity * 1.5, 1.0);
      } else {
        this.opacity = this.maxOpacity;
      }
    }

    draw(ctx) {
      // Draw particle with enhanced visibility
      ctx.fillStyle = `rgba(102, 126, 234, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Add a subtle glow effect
      ctx.shadowColor = `rgba(102, 126, 234, ${this.opacity * 0.8})`;
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.shadowBlur = 0; // Reset shadow
    }
  }, []);

  const handleMouseMove = useCallback((event) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    mouseRef.current.x = event.clientX - rect.left;
    mouseRef.current.y = event.clientY - rect.top;
  }, []);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    particlesRef.current.forEach(particle => {
      if (particle.x > canvas.width) particle.x = canvas.width;
      if (particle.y > canvas.height) particle.y = canvas.height;
    });
  }, []);

  const drawConnections = useCallback((ctx, particles) => {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          // Enhanced line visibility
          const opacity = (1 - distance / connectionDistance) * 0.6; // Increased from 0.4
          ctx.strokeStyle = `rgba(102, 126, 234, ${opacity})`;
          ctx.lineWidth = 1.5; // Increased line width
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }, [connectionDistance]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const particles = particlesRef.current;
    
    // Draw connections first (behind particles)
    drawConnections(ctx, particles);
    
    // Then draw particles
    particles.forEach(particle => {
      particle.update();
      particle.draw(ctx);
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [drawConnections]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Reduced particle count for mobile
    const effectiveParticleCount = window.innerWidth < 768 ? Math.min(particleCount, 25) : particleCount;
    particlesRef.current = Array.from({ length: effectiveParticleCount }, () => new Particle(canvas));

    animationRef.current = requestAnimationFrame(animate);

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [particleCount, animate, handleResize, handleMouseMove, Particle]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
};

export default React.memo(ParticleBackground);
