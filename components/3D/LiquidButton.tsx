'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LiquidButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const LiquidButton = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary' 
}: LiquidButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ 
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
      }}
      whileTap={{ 
        scale: 0.95,
        rotateX: -5,
        rotateY: -5,
      }}
      className={`
        relative liquid-button
        px-8 py-4 rounded-full
        font-inter font-semibold text-lg
        transform-style-3d perspective-1000
        transition-all duration-300
        overflow-hidden
        ${variant === 'primary' 
          ? 'bg-gradient-to-r from-[#27AE60] to-[#2ECC71] text-white neon-glow' 
          : 'glass-morphism text-[#27AE60] border border-[#27AE60]/50'
        }
        ${className}
      `}
    >
      {/* Liquid wave effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-white/30"
        initial={{ scale: 0, opacity: 1 }}
        whileHover={{ scale: 1.2, opacity: 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.button>
  );
};

export default LiquidButton;