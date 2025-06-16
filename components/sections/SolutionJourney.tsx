"use client";

import { motion } from "framer-motion";
import { Camera, Cpu, Languages, Smartphone } from "lucide-react";
import HolographicText from "@/components/3D/HolographicText";

const SolutionJourney = () => {
  // SVG path animations
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      className="py-24 bg-black relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#27AE60]"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.05 + 0.05,
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            transition={{ type: "spring" }}
          >
            <HolographicText>
              <h2 className="text-4xl md:text-6xl mb-6">
                From <span className="text-[#27AE60]">Despair</span> to
                Diagnosis
              </h2>
            </HolographicText>
          </motion.div>

          <motion.p
            className="text-xl text-white/70 max-w-3xl mx-auto font-inter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Transforming smartphones into lifelines for desperate farmers
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Capture",
              description:
                "A farmer photographs their dying crops, praying for answers",
              icon: (
                <motion.div
                  className="relative w-24 h-24 mx-auto mb-6"
                  whileHover={{ scale: 1.1 }}
                >
                  <Smartphone className="w-full h-full text-[#27AE60]/30" />
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    <Camera className="w-12 h-12 text-[#27AE60]" />
                  </motion.div>
                  <motion.svg
                    viewBox="0 0 100 100"
                    className="absolute inset-0 w-full h-full"
                    initial="hidden"
                    whileInView="visible"
                  >
                    <motion.path
                      d="M20,50 Q50,10 80,50 Q50,90 20,50"
                      fill="none"
                      stroke="#27AE60"
                      strokeWidth="2"
                      strokeLinecap="round"
                      variants={pathVariants}
                    />
                  </motion.svg>
                </motion.div>
              ),
              image:
                "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
              credit: "Photo by Nandhu Kumar",
            },
            {
              step: "2",
              title: "Analyze",
              description:
                "Our AI identifies threats invisible to the naked eye",
              icon: (
                <motion.div
                  className="relative w-24 h-24 mx-auto mb-6"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="absolute inset-0 rounded-full border-2 border-[#27AE60]/30" />
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Cpu className="w-12 h-12 text-[#27AE60]" />
                  </motion.div>
                  <motion.svg
                    viewBox="0 0 100 100"
                    className="absolute inset-0 w-full h-full"
                    initial="hidden"
                    whileInView="visible"
                  >
                    <motion.path
                      d="M10,10 L90,10 L90,90 L10,90 Z"
                      fill="none"
                      stroke="#27AE60"
                      strokeWidth="2"
                      strokeDasharray="0 1"
                      variants={pathVariants}
                    />
                    {[20, 40, 60, 80].map((y) => (
                      <motion.path
                        key={y}
                        d={`M10,${y} L90,${y}`}
                        fill="none"
                        stroke="#27AE60"
                        strokeWidth="1"
                        strokeDasharray="0 1"
                        variants={pathVariants}
                        transition={{ delay: 0.2 }}
                      />
                    ))}
                  </motion.svg>
                </motion.div>
              ),
              image:
                "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80",
              credit: "Photo by Andy Kelly",
            },
            {
              step: "3",
              title: "Empower",
              description:
                "Actionable guidance in the farmer's native language",
              icon: (
                <motion.div
                  className="relative w-24 h-24 mx-auto mb-6"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="absolute inset-0 rounded-full bg-[#27AE60]/10" />
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    <Languages className="w-12 h-12 text-[#27AE60]" />
                  </motion.div>
                  <motion.svg
                    viewBox="0 0 100 100"
                    className="absolute inset-0 w-full h-full"
                    initial="hidden"
                    whileInView="visible"
                  >
                    <motion.path
                      d="M20,50 A30,30 0 1,1 80,50"
                      fill="none"
                      stroke="#27AE60"
                      strokeWidth="2"
                      variants={pathVariants}
                    />
                    <motion.path
                      d="M20,50 A30,30 0 0,0 80,50"
                      fill="none"
                      stroke="#27AE60"
                      strokeWidth="2"
                      variants={pathVariants}
                      transition={{ delay: 0.3 }}
                    />
                  </motion.svg>
                </motion.div>
              ),
              image:
                "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
              credit: "Photo by Jopwell",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              {/* Step indicator */}
              <motion.div
                className="absolute -top-4 -left-4 w-10 h-10 bg-[#27AE60] rounded-full flex items-center justify-center text-black font-bold z-10"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {item.step}
              </motion.div>

              {/* Card container */}
              <div className="glass-morphism rounded-2xl h-full border border-[#27AE60]/30 overflow-hidden transition-all duration-500 group-hover:border-[#27AE60]/60">
                {/* Background image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
                </div>

                {/* Icon animation */}
                <div className="relative -mt-12">{item.icon}</div>

                {/* Content */}
                <div className="p-6 pt-0">
                  <h3 className="text-2xl text-white mb-3 font-medium">
                    {item.title}
                  </h3>
                  <p className="text-white/80 mb-4">{item.description}</p>

                  {/* Photo credit */}
                  <p className="text-xs text-white/40 mt-4">{item.credit}</p>
                </div>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(45deg, rgba(39, 174, 96, 0.1) 0%, transparent 50%, rgba(39, 174, 96, 0.1) 100%)`,
                  }}
                />
              </div>

              {/* Connecting lines between steps */}
              {index < 2 && (
                <motion.div
                  className="hidden md:block absolute top-1/2 -right-8 w-8 h-1 bg-[#27AE60]/30"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  <motion.div
                    className="h-full bg-[#27AE60]"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Emotional CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-white/80 mb-6 max-w-3xl mx-auto font-inter leading-relaxed">
            What looks like simple technology is actually{" "}
            <span className="text-[#27AE60] font-medium">
              hope made tangible
            </span>{" "}
            for those who feed us all.
          </p>
          <motion.button
            className="px-8 py-4 bg-[#27AE60] text-black rounded-lg font-medium hover:bg-[#2ecc71] transition-colors relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">See It In Action</span>
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SolutionJourney;
