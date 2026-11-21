import React, { useRef, useEffect, useState, useCallback } from 'react';

/**
 * ParticleImage Component
 * Inspired by React Bits Pro "Particle Image"
 * Renders an image into a particle cloud that swirls apart and reforms.
 * Features:
 * - Interactive mouse repulsion / swirl
 * - Auto-swirl cycle (disperse and reform)
 * - Manual trigger controls
 * - High-DPI canvas rendering
 */
export default function ParticleImage({
  imageSrc = '/product-image/Product1.png',
  width = 620,
  height = 420,
  particleGap = 4,
  particleSize = 1.6,
  mouseRadius = 75,
  repelForce = 6,
  autoSwirlInterval = 6000,
  className = '',
}) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animFrameRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, isHovering: false });
  const [isSwirling, setIsSwirling] = useState(false);
  const [particleCount, setParticleCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger swirl explosion & reformation
  const triggerSwirl = useCallback(() => {
    setIsSwirling(true);
    const centerX = width / 2;
    const centerY = height / 2;

    particlesRef.current.forEach((p) => {
      const dx = p.x - centerX;
      const dy = p.y - centerY;
      const dist = Math.hypot(dx, dy) || 1;
      const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 1.5;
      const speed = (Math.random() * 8 + 4) * (1 - dist / 500);

      // Tangential + radial velocity for a vortex swirl
      p.vx += Math.cos(angle + Math.PI / 2) * speed * 1.4 + (Math.random() - 0.5) * 4;
      p.vy += Math.sin(angle + Math.PI / 2) * speed * 1.4 + (Math.random() - 0.5) * 4;
    });

    setTimeout(() => {
      setIsSwirling(false);
    }, 1800);
  }, [width, height]);

  // Load and sample image pixels
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;

    img.onload = () => {
      const offCanvas = document.createElement('canvas');
      const offCtx = offCanvas.getContext('2d');
      if (!offCtx) return;

      // Fit image into target dimensions while preserving aspect ratio
      const aspect = img.width / img.height;
      let targetW = width * 0.85;
      let targetH = targetW / aspect;

      if (targetH > height * 0.85) {
        targetH = height * 0.85;
        targetW = targetH * aspect;
      }

      offCanvas.width = targetW;
      offCanvas.height = targetH;
      offCtx.drawImage(img, 0, 0, targetW, targetH);

      const offsetX = (width - targetW) / 2;
      const offsetY = (height - targetH) / 2;

      let imgData;
      try {
        imgData = offCtx.getImageData(0, 0, targetW, targetH);
      } catch (err) {
        console.warn('Could not read pixel data:', err);
        return;
      }

      const data = imgData.data;
      const newParticles = [];

      for (let y = 0; y < targetH; y += particleGap) {
        for (let x = 0; x < targetW; x += particleGap) {
          const idx = (y * Math.floor(targetW) + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          const a = data[idx + 3];

          // Sample visible pixels
          if (a > 50) {
            const originX = x + offsetX;
            const originY = y + offsetY;

            // Start with subtle random scatter that forms into the image
            newParticles.push({
              x: originX + (Math.random() - 0.5) * 120,
              y: originY + (Math.random() - 0.5) * 120,
              originX,
              originY,
              vx: (Math.random() - 0.5) * 2,
              vy: (Math.random() - 0.5) * 2,
              size: particleSize * (0.8 + Math.random() * 0.5),
              color: `rgba(${r}, ${g}, ${b}, ${a / 255})`,
            });
          }
        }
      }

      particlesRef.current = newParticles;
      setParticleCount(newParticles.length);
      setIsLoaded(true);
    };
  }, [imageSrc, width, height, particleGap, particleSize]);

  // Main physics & animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    let animationRunning = true;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1. Spring force toward origin (reforming)
        const dx = p.originX - p.x;
        const dy = p.originY - p.y;
        const spring = 0.06;
        const friction = 0.86;

        p.vx += dx * spring;
        p.vy += dy * spring;

        // 2. Cursor repulsion interaction
        if (mouse.isHovering) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const dist = Math.hypot(mdx, mdy);

          if (dist < mouseRadius && dist > 0) {
            const force = (1 - dist / mouseRadius) * repelForce;
            const angle = Math.atan2(mdy, mdx);
            // Repel + swirl around cursor
            p.vx += Math.cos(angle) * force + Math.sin(angle) * (force * 0.6);
            p.vy += Math.sin(angle) * force - Math.cos(angle) * (force * 0.6);
          }
        }

        // 3. Apply velocity and damping
        p.vx *= friction;
        p.vy *= friction;
        p.x += p.vx;
        p.y += p.vy;

        // 4. Render particle
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      if (animationRunning) {
        animFrameRef.current = requestAnimationFrame(render);
      }
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      animationRunning = false;
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [width, height, mouseRadius, repelForce]);

  // Optional periodic auto-swirl
  useEffect(() => {
    if (!autoSwirlInterval || autoSwirlInterval <= 0) return;

    const timer = setInterval(() => {
      if (!mouseRef.current.isHovering) {
        triggerSwirl();
      }
    }, autoSwirlInterval);

    return () => clearInterval(timer);
  }, [autoSwirlInterval, triggerSwirl]);

  const handleMouseMove = (e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovering: true,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -1000, y: -1000, isHovering: false };
  };

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Canvas */}
      <div className="relative group cursor-crosshair overflow-hidden rounded-2xl">
        <canvas
          ref={canvasRef}
          style={{ width: `${width}px`, height: `${height}px` }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={triggerSwirl}
          className="transition-opacity duration-700"
        />

        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/5 backdrop-blur-sm">
            <span className="font-mono text-[11px] text-[#646464] tracking-widest uppercase animate-pulse">
              Generating Particle Matrix...
            </span>
          </div>
        )}
      </div>

      {/* Floating Interactive Controls */}
      <div className="mt-3 flex items-center justify-between w-full max-w-[500px] px-3 font-mono text-[10px] text-[#71717a]">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
          <span>{particleCount.toLocaleString()} Live Particles</span>
        </div>

        <button
          type="button"
          onClick={triggerSwirl}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-[#111315] text-[#111315] hover:text-white border border-[#e4e4e7] rounded-full transition-all duration-200 cursor-pointer shadow-sm text-[11px] font-semibold"
        >
          <span>{isSwirling ? 'Reforming...' : 'Swirl Particles'}</span>
          <span className="text-[12px]">✨</span>
        </button>

        <span className="text-[10px] opacity-75">Hover or click to disperse</span>
      </div>
    </div>
  );
}
