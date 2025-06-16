'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { ReactNode } from 'react';

interface MorphingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const MorphingCard = ({ children, className = '', delay = 0 }: MorphingCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        z: 50
      }}
      onMouseMove={handleMouseMove}
      className={`
        relative perspective-1000 transform-style-3d
        glass-morphism rounded-3xl p-8
        border border-[#27AE60]/20
        hover:border-[#27AE60]/40
        transition-all duration-500
        group cursor-pointer
        ${className}
      `}
      style={{
        transformOrigin: 'center center',
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(39, 174, 96, 0.1), transparent 50%)`
      }}
    >
      {/* Morphing background */}
      <div className="absolute inset-0 morphing-bg bg-gradient-to-br from-[#27AE60]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Floating light effect */}
      <motion.div
        className="absolute -top-2 -right-2 w-4 h-4 bg-[#27AE60] rounded-full opacity-0 group-hover:opacity-100"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default MorphingCard;