"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import HolographicText from "@/components/3D/HolographicText";
import MorphingCard from "@/components/3D/MorphingCard";

const personas = [
  {
    text: "For the woman who plants before sunrise…",
    description: "Who knows the soil like her own heartbeat",
    icon: "🌱",
  },
  {
    text: "For the man who prays over cracked soil…",
    description: "Who sees potential in every seed",
    icon: "🙏",
  },
  {
    text: "For the youth who dares to dream…",
    description: "Who believes in a future beyond what they inherited",
    icon: "✨",
  },
  {
    text: "For the cooperative that stands together…",
    description: "Who knows that unity brings strength",
    icon: "🤝",
  },
  {
    text: "For the investor who sees beyond profit…",
    description: "Who invests in people and planet",
    icon: "🌍",
  },
];

const WhoThisIsFor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-32 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-[#27AE60]/10 rounded-full blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
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
              Who This Is <span className="text-[#27AE60]">For</span>
            </h2>
          </HolographicText>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-16">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
                rotateY: index % 2 === 0 ? -20 : 20,
              }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="flex-1 text-center lg:text-left">
                <MorphingCard delay={index * 0.1}>
                  <motion.h3
                    className="text-2xl md:text-4xl font-bold text-white mb-6 font-tinos"
                    whileHover={{ scale: 1.05 }}
                  >
                    {persona.text}
                  </motion.h3>
                  <motion.p
                    className="text-xl text-[#27AE60] italic font-inter"
                    whileHover={{ scale: 1.02 }}
                  >
                    {persona.description}
                  </motion.p>
                </MorphingCard>
              </div>

              {/* 3D Icon */}
              <motion.div
                className="relative"
                whileHover={{
                  scale: 1.1,
                  rotateY: 15,
                  rotateX: 5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-32 h-32 md:w-40 md:h-40 glass-morphism rounded-full flex items-center justify-center border border-[#27AE60]/30 perspective-1000">
                  <motion.div
                    className="text-6xl md:text-7xl"
                    animate={{
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {persona.icon}
                  </motion.div>
                </div>

                {/* Floating particles around icon */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-[#27AE60] rounded-full"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${20 + i * 20}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center mt-24"
        >
          <MorphingCard>
            <motion.p
              className="text-2xl md:text-4xl text-white font-light italic font-inter leading-relaxed"
              whileHover={{ scale: 1.02 }}
            >
              This is for{" "}
              <span className="text-[#27AE60] font-semibold holographic">
                everyone
              </span>{" "}
              who believes that agriculture is not just farming — it's{" "}
              <motion.span
                className="text-[#27AE60] font-semibold"
                animate={{
                  textShadow: [
                    "0 0 10px #27AE60",
                    "0 0 20px #27AE60",
                    "0 0 30px #27AE60",
                    "0 0 20px #27AE60",
                    "0 0 10px #27AE60",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                life itself.
              </motion.span>
            </motion.p>
          </MorphingCard>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;
