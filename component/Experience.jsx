import { experiences } from "@/assets/assets";
import React from "react";
import { motion } from "framer-motion";

import ParticleBackground from "./ParticleBackground";
import InternshipCard from "./InternshipCard";

const Experience = () => {
  const experienceData = experiences[0];

  if (!experienceData) {
    return null;
  }

  return (
    <motion.div
      id="experience"
      className="relative px-[5%] py-24 bg-black text-white overflow-hidden scroll-mt-20 min-h-screen flex flex-col items-center justify-center"
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.15 }}
    >
      <ParticleBackground />
      
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="relative z-20 w-full max-w-7xl px-4"> 
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="px-6 py-2 rounded-full border border-indigo-600/50 bg-indigo-900/30 text-indigo-300 font-medium tracking-wider">
            What I did
          </div>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-5xl md:text-6xl font-extrabold text-white mb-16"
        >
          Experience<span className="text-[#1cd8d2]">.</span>
        </motion.h2>

        <InternshipCard data={experienceData} />
        
      </div>
    </motion.div>
  );
};

export default Experience;