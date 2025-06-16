"use client";

import { motion } from "framer-motion";
import HolographicText from "@/components/3D/HolographicText";
import TiltCard from "@/components/3D/TiltCard";
import LiquidButton from "../3D/LiquidButton";
import { ArrowRight, Heart, Quote, Sparkles, Users } from "lucide-react";
import React, { useState } from "react";

const FarmerStoriesSection = () => {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      title: "The Heart",
      subtitle: "Passion in Every Seed",
      icon: <Heart className="w-8 h-8" />,
      image: "https://oru-ubi-web-1.vercel.app/image4.png",
      content:
        "Amina wakes at 4 AM, her calloused hands already reaching for her tools. She's done this for 30 years, yet each day brings the same prayer: 'Let this harvest feed my children.'",
      stats: { years: "30+", families: "15", hectares: "5" },
    },
    {
      title: "The Community",
      subtitle: "United We Grow",
      icon: <Users className="w-8 h-8" />,
      image: "https://oru-ubi-web-1.vercel.app/image5.png",
      content:
        "In Kaduna, 200 families depend on the same rain, the same soil, the same hope. When one farm fails, the entire village feels the hunger. When one succeeds, everyone celebrates.",
      stats: { families: "200", villages: "12", support: "24/7" },
    },
    {
      title: "The Dream",
      subtitle: "Tomorrow's Agriculture",
      icon: <Sparkles className="w-8 h-8" />,
      image: "https://oru-ubi-web-1.vercel.app/image6.jpeg",
      content:
        "Young Kemi sees beyond the traditional ways. She dreams of drones delivering seeds, of apps predicting weather, of technology serving those who feed the nation.",
      stats: { innovation: "AI", growth: "+40%", future: "∞" },
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 opacity-20">
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
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HolographicText className="mb-6">
            <h2 className="text-5xl md:text-7xl font-bold">
              Every Seed Has a Story
            </h2>
          </HolographicText>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Behind every harvest lies a human story of resilience, hope, and
            unwavering determination
          </motion.p>
        </motion.div>

        {/* Interactive Story Navigation */}
        <div className="flex justify-center mb-16 overflow-x-scroll sm:overflow-x-hidden">
          <div className="flex gap-2 sm:gap-3 p-2 ml-20 sm:ml-0 bg-white/5 backdrop-blur-lg rounded-full border border-[#27AE60]/20 max-w-fit">
            {stories.map((story, index) => (
              <motion.button
                key={index}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-full transition-all text-xs sm:text-sm ${
                  activeStory === index
                    ? "bg-[#27AE60] text-white shadow-lg shadow-[#27AE60]/30"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
                onClick={() => setActiveStory(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span
                  className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${
                    activeStory === index ? "text-white" : "text-[#27AE60]"
                  }`}
                >
                  {React.cloneElement(story.icon, {
                    className: "w-full h-full",
                  })}
                </span>
                <span className="font-medium whitespace-nowrap">
                  {story.title}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main Story Display */}
        {stories.map((story, index) => (
          <motion.div
            key={index}
            className={`${activeStory === index ? "block" : "hidden"}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: activeStory === index ? 1 : 0,
              y: activeStory === index ? 0 : 50,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
              {/* Image Side */}
              <motion.div
                className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard className="relative group">
                  <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Floating Stats */}
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                      <div className="flex flex-wrap justify-center sm:justify-between items-end gap-2">
                        {Object.entries(story.stats).map(
                          ([key, value], statIndex) => (
                            <motion.div
                              key={key}
                              className="bg-white/10 backdrop-blur-lg px-2 sm:px-4 py-1 sm:py-2 rounded-lg border border-white/20 min-w-0"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 + statIndex * 0.1 }}
                            >
                              <div className="text-[#27AE60] font-bold text-sm sm:text-lg">
                                {value}
                              </div>
                              <div className="text-white/80 text-xs sm:text-sm capitalize">
                                {key}
                              </div>
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>

              {/* Content Side */}
              <motion.div
                className={`${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                } space-y-6 lg:space-y-8`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-[#27AE60]/20 rounded-full border border-[#27AE60]/30 flex-shrink-0">
                    <span className="text-[#27AE60] w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                      {React.cloneElement(story.icon, {
                        className: "w-full h-full",
                      })}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 leading-tight">
                      {story.title}
                    </h3>
                    <p className="text-[#27AE60] text-base sm:text-lg font-medium">
                      {story.subtitle}
                    </p>
                  </div>
                </div>

                <motion.p
                  className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {story.content}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <LiquidButton className="group w-full sm:w-auto">
                    <span className="flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </LiquidButton>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ))}

        {/* Quote Section */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl sm:rounded-3xl border border-[#27AE60]/30 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-8 left-8 w-16 h-16 bg-[#27AE60]/20 rounded-full blur-xl" />
              <div className="absolute bottom-8 right-8 w-24 h-24 bg-[#2ECC71]/20 rounded-full blur-xl" />
            </div>

            <div className="relative z-10 text-center">
              <motion.div
                className="inline-flex p-3 sm:p-4 bg-[#27AE60]/20 rounded-full border border-[#27AE60]/30 mb-6 sm:mb-8"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#27AE60]" />
              </motion.div>

              <motion.p
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl italic font-light mb-6 sm:mb-8 text-white leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                "We don't just plant seeds in the ground. We plant hope in
                hearts, dreams in minds, and futures in the hands of those who
                feed us all."
              </motion.p>

              <motion.div
                className="flex items-center justify-center gap-2 sm:gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-[#27AE60] to-transparent" />
                <p className="text-[#27AE60] font-semibold text-base sm:text-lg tracking-wide text-center">
                  The Oru-Ubi Promise
                </p>
                <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-[#27AE60] to-transparent" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FarmerStoriesSection;
