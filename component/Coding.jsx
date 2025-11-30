import { profiles } from "@/assets/assets";
import React from "react";
import { motion } from "framer-motion";
import AchievementCard from "./AchievementCard";

function Coding() {
  return (
    <section
      id="coding"
      className="bg-black text-white px-[5%] py-24 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="px-6 py-2 rounded-full border border-indigo-600/50 bg-indigo-900/30 text-indigo-300 font-medium tracking-wider">
            Milestones
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-5xl md:text-6xl font-extrabold text-white mb-16"
        >
          Achievements<span className="text-[#1cd8d2]">.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {profiles.map((profile, index) => (
            <AchievementCard key={index} profile={profile} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Coding;
