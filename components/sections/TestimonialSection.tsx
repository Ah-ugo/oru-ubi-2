"use client";

import { motion } from "framer-motion";
import {
  HandHeart,
  Quote,
  User,
  Check,
  Wheat,
  Leaf,
  Coins,
} from "lucide-react";

const TestimonialsSection = () => {
  // Testimonial data with real images
  const testimonials = [
    {
      quote:
        "For the first time in 20 years, I knew what was killing my crops before it was too late",
      name: "Oluwaseun K.",
      location: "Ogun State",
      result: "Saved 3 acres of maize",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      icon: <Wheat className="w-5 h-5" />,
      color: "#f1c40f",
    },
    {
      quote:
        "The Pidgin instructions made all the difference for my 65-year-old mother who can't read English",
      name: "Amina D.",
      location: "Kano State",
      result: "Correctly treated cassava blight",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      icon: <Leaf className="w-5 h-5" />,
      color: "#2ecc71",
    },
    {
      quote:
        "We stopped wasting ₦120,000 monthly on chemicals that never worked",
      name: "Ngozi Cooperative",
      location: "Enugu State",
      result: "Reduced pesticide costs by 60%",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      icon: <Coins className="w-5 h-5" />,
      color: "#e74c3c",
    },
  ];

  return (
    <motion.section
      className="relative py-32 bg-gradient-to-r from-[#0a2e0a] to-black overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Floating leaves background */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#27AE60]"
            style={{
              fontSize: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            <Leaf className="w-full h-full" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [-5, 5, -5, 5, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <HandHeart className="w-12 h-12 text-[#27AE60] mx-auto mb-4" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl text-white mb-4 font-playfair">
              Lives <span className="text-[#27AE60]">Transformed</span>
            </h2>
            <p className="text-xl text-white/70 font-inter">
              Real stories from farmers whose harvests we've saved
            </p>
          </motion.div>

          {/* Testimonials */}
          <div className="space-y-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative group"
              >
                {/* Testimonial card */}
                <div className="glass-morphism p-8 rounded-2xl border border-[#27AE60]/30 relative overflow-hidden">
                  {/* Background image */}
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    <img
                      src={testimonial.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <motion.div
                      className="text-[#27AE60] mb-4"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      <Quote className="w-8 h-8" />
                    </motion.div>

                    <motion.p
                      className="text-xl text-white/90 mb-6 font-inter leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                    >
                      "{testimonial.quote}"
                    </motion.p>

                    <motion.div
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      <div className="relative">
                        <div className="w-12 h-12 bg-[#27AE60]/20 rounded-full flex items-center justify-center overflow-hidden">
                          <User className="w-6 h-6 text-[#27AE60]" />
                        </div>
                        <motion.div
                          className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: testimonial.color }}
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 20, -20, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          {testimonial.icon}
                        </motion.div>
                      </div>
                      <div>
                        <p className="text-white font-medium">
                          {testimonial.name}
                        </p>
                        <p className="text-white/60 text-sm font-inter">
                          {testimonial.location} • {testimonial.result}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${testimonial.color}20 0%, transparent 70%)`,
                    }}
                  />
                </div>

                {/* Verified badge */}
                <motion.div
                  className="absolute -bottom-3 -right-3 bg-[#27AE60] text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                  animate={{
                    scale: [1, 1.1, 1],
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Check className="w-3 h-3" />
                  <span>Verified</span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-white/80 mb-6 max-w-2xl mx-auto font-inter leading-relaxed">
              These are just a few of the thousands of farmers we've helped.
              Could you be next?
            </p>
            <motion.button
              className="px-8 py-4 bg-[#27AE60] text-black rounded-lg font-medium relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Share Your Story</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <HandHeart className="w-5 h-5" />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, #ffffff20 50%, transparent 100%)`,
                }}
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
