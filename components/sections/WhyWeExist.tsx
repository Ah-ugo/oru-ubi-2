"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import MorphingCard from "@/components/3D/MorphingCard";
import HolographicText from "@/components/3D/HolographicText";
import TiltCard from "@/components/3D/TiltCard";

const WhyWeExist = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-[#27AE60]/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-[#27AE60]/20 rounded-full blur-lg"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <HolographicText>
              <h2 className="text-4xl text-[#27AE60] md:text-6xl">
                Why We <span className="text-[#27AE60]">Exist</span>
              </h2>
            </HolographicText>

            <MorphingCard delay={0.2}>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-white/90 leading-relaxed font-inter"
              >
                In every harvest, there is hope. But for millions of Nigerian
                farmers,
                <span className="text-[#27AE60] font-semibold">
                  {" "}
                  hope alone isn't enough.
                </span>
              </motion.p>
            </MorphingCard>

            <MorphingCard delay={0.4}>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-white/80 leading-relaxed font-inter"
              >
                We exist because we believe in the power of technology to
                transform lives. We exist because every farmer deserves access
                to tools that can help them thrive, not just survive.
              </motion.p>
            </MorphingCard>

            <MorphingCard delay={0.6}>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg text-white/80 leading-relaxed font-inter"
              >
                From soil analysis to crop disease detection, from market access
                to sustainable practices — we're building the future of
                agriculture,
                <span className="text-[#27AE60] font-semibold">
                  {" "}
                  one farm at a time.
                </span>
              </motion.p>
            </MorphingCard>
          </div>

          {/* 3D Image Card */}
          <TiltCard intensity={15}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <div className="glass-morphism rounded-3xl overflow-hidden shadow-2xl border border-[#27AE60]/20">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Woman planting seeds"
                    className="w-full h-[500px] object-cover"
                  />

                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Floating stats */}
                  <motion.div
                    className="absolute top-6 right-6 glass-morphism p-4 rounded-xl border border-[#27AE60]/30"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="text-[#27AE60] font-bold text-lg font-tinos">
                      85%
                    </div>
                    <div className="text-white/80 text-sm font-inter">
                      Smallholder Farms
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-6 left-6 glass-morphism p-4 rounded-xl border border-[#27AE60]/30"
                    animate={{
                      y: [0, 10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <div className="text-[#27AE60] font-bold text-lg font-tinos">
                      $2.3B
                    </div>
                    <div className="text-white/80 text-sm font-inter">
                      Market Potential
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating elements around the image */}
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 bg-[#27AE60] rounded-full opacity-60"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute -bottom-4 -right-4 w-6 h-6 border-2 border-[#27AE60] rounded-full"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default WhyWeExist;
