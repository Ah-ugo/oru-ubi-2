"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import HolographicText from "@/components/3D/HolographicText";
import LiquidButton from "@/components/3D/LiquidButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "Our Vision", id: "vision" },
    { name: "What We're Building", id: "building" },
    { name: "Join Waitlist", id: "waitlist" },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-morphism border-b border-[#27AE60]/20 shadow-lg"
            : "bg-black/10 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo with holographic effect */}
            <motion.div
              initial={{ opacity: 0, x: -20, rotateY: -30 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
              }}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              <motion.div
                className="w-3 h-3 rounded-full bg-[#27AE60]"
                animate={{
                  scale: [1, 1.5, 1],
                  boxShadow: [
                    "0 0 0 rgba(39, 174, 96, 0.3)",
                    "0 0 20px rgba(39, 174, 96, 0.8)",
                    "0 0 0 rgba(39, 174, 96, 0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <HolographicText className="text-2xl font-bold">
                ORU-UBI
              </HolographicText>
            </motion.div>

            {/* Desktop Navigation with 3D hover effects */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <motion.button
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className="px-6 py-3 text-white hover:text-[#27AE60] transition-all duration-300 font-medium relative overflow-hidden"
                  >
                    <span className="relative z-10">{item.name}</span>

                    {/* Animated background */}
                    <AnimatePresence>
                      {hoveredItem === index && (
                        <motion.div
                          className="absolute inset-0 bg-[#27AE60]/10 rounded-xl"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.button>

                  {/* Floating indicator */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#27AE60] rounded-full"
                    animate={{
                      y: hoveredItem === index ? -5 : 0,
                      opacity: hoveredItem === index ? 1 : 0,
                      scale: hoveredItem === index ? [1, 1.5, 1] : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      repeat: hoveredItem === index ? Infinity : 0,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              ))}

              {/* CTA Button with liquid effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <LiquidButton
                  variant="primary"
                  className="ml-4 px-6 py-3 text-sm"
                  onClick={() => scrollToSection("waitlist")}
                >
                  Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
                </LiquidButton>
              </motion.div>
            </div>

            {/* Mobile Menu Button with 3D effect */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{
                scale: 1.1,
                rotate: 5,
              }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-white hover:text-[#27AE60] transition-all duration-300 p-2 glass-morphism rounded-lg border border-[#27AE60]/30 relative"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>

              {/* Pulsing dot */}
              {!isOpen && (
                <motion.div
                  className="absolute -top-1 -right-1 w-2 h-2 bg-[#27AE60] rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu with futuristic 3D effects */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50, rotateX: 15 }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
            }}
            exit={{
              opacity: 0,
              y: -50,
              rotateX: 15,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              staggerChildren: 0.1,
            }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-lg md:hidden pt-20"
          >
            {/* Animated grid background */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2327AE60' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  animation: "pulse 10s infinite alternate",
                }}
              />
            </div>

            <div className="flex flex-col items-center justify-center h-full space-y-8 relative z-10 px-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30, rotateX: -30 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 30,
                    rotateX: -30,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="w-full max-w-md"
                >
                  <motion.button
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{
                      scale: 1.05,
                      x: 10,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full text-left glass-morphism p-6 rounded-xl border border-[#27AE60]/30 flex items-center justify-between"
                  >
                    <span className="text-2xl text-white font-medium">
                      {item.name}
                    </span>
                    <motion.div
                      animate={{
                        x: [0, 5, 0],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight className="text-[#27AE60] w-6 h-6" />
                    </motion.div>
                  </motion.button>
                </motion.div>
              ))}

              {/* Decorative footer */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-12 flex flex-col items-center gap-4"
              >
                <div className="flex items-center gap-2 glass-morphism px-6 py-3 rounded-full border border-[#27AE60]/30">
                  <Sparkles className="w-4 h-4 text-[#27AE60]" />
                  <span className="text-white/80 font-inter text-sm">
                    The Future of Farming
                  </span>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-xs text-white/50 mt-4"
                >
                  Close Menu
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
