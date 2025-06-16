"use client";

import { motion } from "framer-motion";
import {
  Wheat,
  Clock,
  AlertTriangle,
  Sparkles,
  ShieldAlert,
  Truck,
  Leaf,
  CloudRain,
} from "lucide-react";
import HolographicText from "@/components/3D/HolographicText";

const CrisisSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-[#0a2e0a] to-black">
      <div className="container mx-auto px-4">
        <HolographicText className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl">The Harsh Reality</h2>
        </HolographicText>
        <p className="text-xl text-center mb-20 max-w-3xl mx-auto text-white">
          Behind every statistic is a human story. Behind every number is a
          family's struggle.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: <CloudRain className="w-8 h-8" />,
              stat: "40%",
              title: "Unpredictable Weather",
              description: "of crops lost to unexpected weather patterns",
              quote:
                "When the rains don't come, or come too late, entire harvests disappear. Families go hungry.",
            },
            {
              icon: <Leaf className="w-8 h-8" />,
              stat: "60%",
              title: "Low Yields",
              description: "below potential due to poor soil management",
              quote:
                "The same land that fed our ancestors now struggles to feed our children.",
            },
            {
              icon: <ShieldAlert className="w-8 h-8" />,
              stat: "30%",
              title: "Disease & Pests",
              description: "of crops destroyed by preventable diseases",
              quote:
                "By the time farmers notice the problem, it's often too late to save the harvest.",
            },
            {
              icon: <Truck className="w-8 h-8" />,
              stat: "50%",
              title: "Market Access",
              description: "of produce spoils before reaching market",
              quote:
                "Fresh vegetables rot in villages while cities pay premium prices for imports.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: Math.floor(index / 2) * 0.2 + (index % 2) * 0.1,
              }}
              className="glass-morphism p-8 rounded-2xl border border-[#27AE60]/30"
            >
              <div className="flex items-start gap-6">
                <div className="p-3 bg-[#27AE60]/10 rounded-full text-white">
                  {item.icon}
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#27AE60] mb-2">
                    {item.stat}
                  </p>
                  <h3 className="text-xl font-medium mb-1 text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/80 mb-4">{item.description}</p>
                  <div className="border-l-2 border-[#27AE60] pl-4">
                    <p className="italic text-white">"{item.quote}"</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-3xl md:text-4xl mb-6 text-[#27AE60]">
            But what if it didn't have to be this way?
          </h3>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-white">
            What if technology could predict the weather, prevent diseases,
            optimize yields, and connect farmers directly to markets?
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CrisisSection;
