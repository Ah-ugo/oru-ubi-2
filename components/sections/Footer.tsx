"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-2 font-tinos">
              <span className="text-[#27AE60]">ORU-UBI</span>
            </h3>
            <p className="text-[#27AE60] italic font-inter">
              From Soil to Soul.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Mail className="w-4 h-4 text-[#27AE60]" />
              <a
                href="mailto:hello@oru-ubi.africa"
                className="text-white hover:text-[#27AE60] transition-colors duration-200 font-inter"
              >
                hello@oru-ubi.africa
              </a>
            </div>
            <p className="text-gray-400 text-sm font-inter">
              Nigeria • Coming Soon
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end gap-4"
          >
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#27AE60] transition-colors duration-200 group"
            >
              <Instagram className="w-5 h-5 text-white group-hover:text-black" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#27AE60] transition-colors duration-200 group"
            >
              <Twitter className="w-5 h-5 text-white group-hover:text-black" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#27AE60] transition-colors duration-200 group"
            >
              <Linkedin className="w-5 h-5 text-white group-hover:text-black" />
            </a>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 text-sm mb-2 font-inter">
            © 2025 Oru-Ubi. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <span className="font-inter">Made with</span>
            <Heart className="w-4 h-4 text-[#27AE60] fill-current" />
            <span className="font-inter">for Nigerian farmers</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
