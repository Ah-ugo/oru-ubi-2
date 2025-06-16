"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HolographicTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const HolographicText = ({
  children,
  className = "",
  delay = 0,
}: HolographicTextProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 1,
        delay,
        type: "spring",
        stiffness: 80,
      }}
      className={`relative ${className}`}
    >
      {/* Solid text for fallback */}
      <div className="absolute inset-0 z-0 text-white font-tinos">
        {children}
      </div>

      {/* Holographic text */}
      <div className="holographic relative z-10 font-tinos">{children}</div>

      {/* Glow effect */}
      <div className="absolute inset-0 text-[#27AE60] blur-sm opacity-30 -z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default HolographicText;
