'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

const TiltCard = ({ children, className = '', intensity = 10 }: TiltCardProps) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateXValue = ((e.clientY - centerY) / (rect.height / 2)) * intensity;
    const rotateYValue = ((e.clientX - centerX) / (rect.width / 2)) * intensity;
    
    setRotateX(-rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className={`
        perspective-1000 transform-style-3d
        ${className}
      `}
      style={{
        transformOrigin: 'center center',
      }}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;