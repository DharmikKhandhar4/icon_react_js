import React, { useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

/**
 * ============================================================================
 * DepthCard Component (inspired by React Bits Pro: depth-card-tw)
 * Interactive 3D Card that tilts with realistic perspective depth and specular
 * glare reflections as the cursor moves across its surface.
 * ============================================================================
 */

export function DepthLayer({
  depth = 25,
  className = '',
  children,
  style = {},
  ...props
}) {
  return (
    <div
      style={{
        transform: `translateZ(${depth}px)`,
        transformStyle: 'preserve-3d',
        ...style,
      }}
      className={`will-change-transform ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default function DepthCard({
  children,
  className = '',
  containerClassName = '',
  maxTilt = 14,
  scale = 1.025,
  perspective = 1100,
  glare = true,
  glareOpacity = 0.28,
  glareColor = 'rgba(255, 255, 255, 0.75)',
  shadow = true,
  shadowColor = 'rgba(0, 0, 0, 0.12)',
  springConfig = { stiffness: 280, damping: 22, mass: 0.2 },
  onClick,
  onMouseEnter: externalMouseEnter,
  onMouseLeave: externalMouseLeave,
  style = {},
  ...props
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw cursor position normalized from -0.5 to +0.5
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for fluid tilt without jitter
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  // 3D rotations based on cursor offset
  // Moving cursor down (positive y) tilts card forward (negative rotateX)
  const rotateX = useTransform(ySpring, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-maxTilt, maxTilt]);

  // Dynamic shadow casting in opposite direction of tilt for realistic elevation
  const shadowX = useTransform(xSpring, [-0.5, 0.5], [14, -14]);
  const shadowY = useTransform(ySpring, [-0.5, 0.5], [18, -8]);
  const shadowBlur = useTransform(ySpring, [-0.5, 0.5], [20, 32]);

  // Dynamic glare percentage coordinates
  const glareX = useTransform(xSpring, [-0.5, 0.5], ['10%', '90%']);
  const glareY = useTransform(ySpring, [-0.5, 0.5], ['10%', '90%']);

  // Reactive radial gradient for glare using Framer Motion template
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, ${glareColor} 0%, transparent 68%)`;

  const handleMouseMove = useCallback(
    (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Bound between -0.5 and +0.5
      const normX = Math.min(Math.max(mouseX / rect.width - 0.5, -0.5), 0.5);
      const normY = Math.min(Math.max(mouseY / rect.height - 0.5, -0.5), 0.5);

      x.set(normX);
      y.set(normY);
    },
    [x, y]
  );

  const handleMouseEnter = useCallback(
    (e) => {
      setIsHovered(true);
      if (externalMouseEnter) externalMouseEnter(e);
    },
    [externalMouseEnter]
  );

  const handleMouseLeave = useCallback(
    (e) => {
      setIsHovered(false);
      x.set(0);
      y.set(0);
      if (externalMouseLeave) externalMouseLeave(e);
    },
    [x, y, externalMouseLeave]
  );

  return (
    <div
      style={{ perspective: `${perspective}px` }}
      className={`relative inline-block ${containerClassName}`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        animate={{
          scale: isHovered ? scale : 1,
        }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          ...style,
        }}
        className={`relative will-change-transform select-none rounded-[inherit] ${className}`}
        {...props}
      >
        {/* Dynamic 3D Floating Shadow */}
        {shadow && (
          <motion.div
            style={{
              x: shadowX,
              y: shadowY,
              filter: `blur(24px)`,
              backgroundColor: shadowColor,
              opacity: isHovered ? 0.75 : 0.28,
            }}
            transition={{ duration: 0.25 }}
            className="absolute inset-2 -z-10 rounded-[inherit] pointer-events-none transition-opacity duration-300"
          />
        )}

        {/* Card Body with 3D Transform Space */}
        <div
          style={{ transformStyle: 'preserve-3d' }}
          className="relative w-full h-full rounded-[inherit] overflow-hidden"
        >
          {children}

          {/* Interactive Specular Glare Reflection */}
          {glare && (
            <motion.div
              style={{
                opacity: isHovered ? glareOpacity : 0,
                background: glareBackground,
              }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 pointer-events-none z-40 transition-opacity duration-200"
            />
          )}
        </div>
      </motion.div>
    </div>
  );
}
