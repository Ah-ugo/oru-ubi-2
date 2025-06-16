"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Globe, BarChart2 } from "lucide-react";
import HolographicText from "@/components/3D/HolographicText";
import LiquidButton from "@/components/3D/LiquidButton";
import TiltCard from "@/components/3D/TiltCard";

const HeroSection = () => {
  const ref = useRef(null);

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#27AE60] blur-xl"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.2 + 0.1,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 200],
              y: [0, (Math.random() - 0.5) * 200],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2327AE60' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 sm:mt-0 mt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass-morphism px-4 py-2 rounded-full border border-[#27AE60]/30 mb-6">
              <Sparkles className="w-4 h-4 text-[#27AE60]" />
              <span className="text-sm text-white/80 font-inter">
                The Future of Agriculture
              </span>
            </div>

            <HolographicText>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                ORU-UBI <span className="text-[#27AE60]">From</span> Soil to
                Soul
              </h1>
            </HolographicText>

            <motion.p
              className="text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0 font-inter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Every sunrise brings hope to millions of Nigerian farmers. We're
              here to turn that hope into harvest, that dream into reality.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <LiquidButton variant="primary" className="px-8 py-4">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </LiquidButton>
              <LiquidButton variant="secondary" className="px-8 py-4">
                Learn More
              </LiquidButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 glass-morphism rounded-lg border border-[#27AE60]/30">
                  <Globe className="w-6 h-6 text-[#27AE60]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">2500+</p>
                  <p className="text-sm text-white/60 font-inter">
                    Farms Worldwide
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 glass-morphism rounded-lg border border-[#27AE60]/30">
                  <BarChart2 className="w-6 h-6 text-[#27AE60]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">40%</p>
                  <p className="text-sm text-white/60 font-inter">
                    Yield Increase
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - 3D card */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <TiltCard intensity={10}>
              <motion.div
                className="relative rounded-3xl overflow-hidden border border-[#27AE60]/30"
                variants={floatingVariants}
                animate="animate"
              >
                {/* Main image with gradient overlay */}
                <div className="relative aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                    alt="AI Agriculture"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-6 left-6 p-4 glass-morphism rounded-xl border border-[#27AE60]/30"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="text-[#27AE60] text-sm font-bold font-inter">
                    AI ANALYSIS
                  </div>
                  <div className="text-white text-xl font-bold mt-1">
                    Soil Health
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-6 right-6 p-4 glass-morphism rounded-xl border border-[#27AE60]/30"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, -3, 3, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <div className="text-[#27AE60] text-sm font-bold font-inter">
                    PREDICTION
                  </div>
                  <div className="text-white text-xl font-bold mt-1">
                    Optimal Yield
                  </div>
                </motion.div>

                {/* Holographic effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(39, 174, 96, 0.1) 0%, transparent 50%, rgba(39, 174, 96, 0.1) 100%)",
                      "linear-gradient(45deg, rgba(39, 174, 96, 0.1) 0%, transparent 80%, rgba(39, 174, 96, 0.1) 100%)",
                      "linear-gradient(45deg, rgba(39, 174, 96, 0.1) 0%, transparent 50%, rgba(39, 174, 96, 0.1) 100%)",
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
