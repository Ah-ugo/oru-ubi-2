"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Microscope, Scan, Plane, ShoppingCart, BarChart3 } from "lucide-react";
import MorphingCard from "@/components/3D/MorphingCard";
import HolographicText from "@/components/3D/HolographicText";
import TiltCard from "@/components/3D/TiltCard";

const features = [
  {
    icon: Scan,
    title: "Soil Scanning",
    description:
      "Advanced soil analysis to optimize crop yields and sustainable farming practices.",
    image:
      "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    color: "#27AE60",
  },
  {
    icon: Microscope,
    title: "Crop Disease Detection",
    description:
      "AI-powered early detection system to prevent crop diseases before they spread.",
    image:
      "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    color: "#2ECC71",
  },
  {
    icon: Plane,
    title: "Drone Delivery",
    description:
      "Coming soon: Automated delivery of seeds, fertilizers, and farming supplies.",
    image:
      "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    color: "#58D68D",
  },
  {
    icon: ShoppingCart,
    title: "Farm-to-Table Marketplace",
    description:
      "Direct connection between farmers and consumers for fair pricing and fresh produce.",
    image:
      "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    color: "#85E085",
  },
  {
    icon: BarChart3,
    title: "Research & Data",
    description:
      "Comprehensive agricultural data platform for informed decision-making.",
    image:
      "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    color: "#A9DFBF",
  },
];

const WhatWereBuilding = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0h100M0 25h100M0 50h100M0 75h100M0 100h100M0 0v100M25 0v100M50 0v100M75 0v100M100 0v100' stroke='%2327AE60' stroke-width='0.5'/%3E%3C/svg%3E")`,
            animation: "pulse 2s infinite",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <HolographicText>
            <h2 className="text-4xl md:text-6xl mb-6">
              What We're <span className="text-[#27AE60]">Building</span>
            </h2>
          </HolographicText>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/70 max-w-3xl mx-auto font-inter"
          >
            Revolutionary tools and platforms designed to empower every farmer
            with cutting-edge technology
          </motion.p>
        </motion.div>

        {/* 3D Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <TiltCard key={feature.title} intensity={8}>
              <MorphingCard delay={index * 0.1}>
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    rotateY: 5,
                    z: 20,
                  }}
                  className="relative h-full"
                >
                  {/* Image with 3D effect */}
                  <div className="relative h-48 overflow-hidden rounded-2xl mb-6">
                    <motion.img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Floating icon */}
                    <motion.div
                      className="absolute bottom-4 left-4 p-3 glass-morphism rounded-xl border border-white/20"
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                    >
                      <feature.icon
                        className="w-6 h-6"
                        style={{ color: feature.color }}
                      />
                    </motion.div>

                    {/* Holographic overlay */}
                    <motion.div
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(45deg, ${feature.color}20, transparent, ${feature.color}20)`,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white font-tinos">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed font-inter">
                      {feature.description}
                    </p>
                  </div>

                  {/* Progress indicator */}
                  <motion.div
                    className="mt-6 h-1 bg-gray-800 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: feature.color }}
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${Math.random() * 40 + 60}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                    />
                  </motion.div>
                </motion.div>
              </MorphingCard>
            </TiltCard>
          ))}
        </div>

        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 glass-morphism px-8 py-4 rounded-full border border-[#27AE60]/30">
            <motion.div
              className="w-3 h-3 bg-[#27AE60] rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-white font-inter font-medium">
              More innovations coming soon...
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWereBuilding;
