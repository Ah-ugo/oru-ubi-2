"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle, Mail, User, Users, Sparkles } from "lucide-react";
import MorphingCard from "@/components/3D/MorphingCard";
import HolographicText from "@/components/3D/HolographicText";
import LiquidButton from "@/components/3D/LiquidButton";
import TiltCard from "@/components/3D/TiltCard";

const JoinWaitlist = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-32 bg-gradient-to-br from-[#27AE60]/20 via-black to-[#27AE60]/10 relative overflow-hidden">
        {/* Success animation background */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#27AE60] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="max-w-2xl mx-auto text-center"
          >
            <TiltCard>
              <MorphingCard>
                <div className="p-12">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 360, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <CheckCircle className="w-20 h-20 text-[#27AE60] mx-auto mb-8" />
                  </motion.div>

                  <HolographicText>
                    <h2 className="text-3xl md:text-5xl mb-6">
                      Welcome to the Movement!
                    </h2>
                  </HolographicText>

                  <motion.p
                    className="text-lg text-white/80 mb-8 font-inter leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Thank you for joining us on this revolutionary journey.
                    We'll keep you updated on our progress and let you know when
                    we're ready to transform agriculture together.
                  </motion.p>

                  <motion.div
                    className="glass-morphism rounded-2xl p-6 border border-[#27AE60]/30"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(39, 174, 96, 0.3)",
                        "0 0 40px rgba(39, 174, 96, 0.5)",
                        "0 0 20px rgba(39, 174, 96, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <p className="text-[#27AE60] font-semibold font-inter text-lg">
                      From Soil to Soul — The revolution begins with you.
                    </p>
                  </motion.div>
                </div>
              </MorphingCard>
            </TiltCard>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-br from-[#27AE60]/20 via-black to-[#27AE60]/10 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2327AE60' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 glass-morphism px-6 py-3 rounded-full border border-[#27AE60]/30 mb-8">
              <Sparkles className="w-4 h-4 text-[#27AE60]" />
              <span className="text-white/80 font-inter text-sm">
                Join the Agricultural Revolution
              </span>
            </div>

            <HolographicText>
              <h2 className="text-4xl md:text-6xl mb-6">
                Join the <span className="text-[#27AE60]">Movement</span>
              </h2>
            </HolographicText>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80 font-inter"
            >
              Be part of the agricultural revolution. Get early access and
              exclusive updates.
            </motion.p>
          </motion.div>

          {/* Form */}
          <TiltCard intensity={5}>
            <MorphingCard delay={0.3}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="p-8"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name Input */}
                  <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#27AE60] w-5 h-5 z-10" />
                    <motion.input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                      className="w-full pl-14 pr-4 py-5 glass-morphism rounded-2xl border border-[#27AE60]/30 focus:border-[#27AE60] focus:outline-none text-white placeholder-white/50 font-inter transition-all duration-300"
                      whileFocus={{
                        boxShadow: "0 0 20px rgba(39, 174, 96, 0.3)",
                      }}
                    />
                  </motion.div>

                  {/* Email Input */}
                  <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#27AE60] w-5 h-5 z-10" />
                    <motion.input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      className="w-full pl-14 pr-4 py-5 glass-morphism rounded-2xl border border-[#27AE60]/30 focus:border-[#27AE60] focus:outline-none text-white placeholder-white/50 font-inter transition-all duration-300"
                      whileFocus={{
                        boxShadow: "0 0 20px rgba(39, 174, 96, 0.3)",
                      }}
                    />
                  </motion.div>

                  {/* Role Select */}
                  <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                    <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#27AE60] w-5 h-5 z-10" />
                    <motion.select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full pl-14 pr-4 py-5 glass-morphism rounded-2xl border border-[#27AE60]/30 focus:border-[#27AE60] focus:outline-none text-white font-inter appearance-none transition-all duration-300"
                      whileFocus={{
                        boxShadow: "0 0 20px rgba(39, 174, 96, 0.3)",
                      }}
                    >
                      <option value="" className="bg-black">
                        Select Your Role
                      </option>
                      <option value="farmer" className="bg-black">
                        Farmer
                      </option>
                      <option value="partner" className="bg-black">
                        Partner
                      </option>
                      <option value="supporter" className="bg-black">
                        Supporter
                      </option>
                      <option value="investor" className="bg-black">
                        Investor
                      </option>
                      <option value="other" className="bg-black">
                        Other
                      </option>
                    </motion.select>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <motion.button
                      // onClick={onClick}
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
        font-inter font-semibold text-md
        transform-style-3d perspective-1000
        transition-all duration-300
        overflow-hidden bg-gradient-to-r from-[#27AE60] to-[#2ECC71] text-white neon-glow
        
      `}
                    >
                      {/* Liquid wave effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />

                      {/* Content */}
                      <span className="relative z-10 flex items-center gap-2">
                        Join the waitlist
                      </span>

                      {/* Ripple effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white/30"
                        initial={{ scale: 0, opacity: 1 }}
                        whileHover={{ scale: 1.2, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.button>
                  </motion.div>
                </form>

                {/* Disclaimer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-8 text-center"
                >
                  <p className="text-sm text-white/60 font-inter">
                    By joining, you agree to receive updates about Oru-Ubi's
                    progress and early access opportunities.
                  </p>
                </motion.div>
              </motion.div>
            </MorphingCard>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default JoinWaitlist;
