'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!containerRef.current) return;

      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
      
      containerRef.current.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 8000);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-10">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border-2 border-[#27AE60]/30 rotate-45"
        animate={{
          y: [0, -20, 0],
          rotate: [45, 90, 45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-[#27AE60]/20 rounded-full"
        animate={{
          y: [0, 30, 0],
          x: [0, -10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-40 left-1/4 w-12 h-12 border border-[#27AE60]/40"
        animate={{
          rotate: [0, 360],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-8 h-8 bg-gradient-to-r from-[#27AE60]/30 to-transparent rounded-full"
        animate={{
          y: [0, -25, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default FloatingElements;