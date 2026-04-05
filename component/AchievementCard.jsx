import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import ParticleBackground from "./ParticleBackground";

const SleepingCat = () => {
  const [catState, setCatState] = useState("sleep");

  useEffect(() => {
    const interval = setInterval(() => {
      setCatState("scratch");

      setTimeout(() => setCatState("sleep"), 2000);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute -top-8 right-10 w-16 h-12 z-20 flex justify-center items-end drop-shadow-xl">
      <AnimatePresence>
        {catState === "sleep" && (
          <motion.div
            initial={{ opacity: 0, y: 0, x: 0 }}
            animate={{ opacity: [0, 1, 0], y: -30, x: 10 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute -top-2 right-2 text-white/70 font-mono text-xs font-bold"
          >
            Z
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{ scaleY: catState === "sleep" ? [1, 0.95, 1] : 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-14 h-10 bg-red-500 rounded-t-3xl rounded-b-lg border-2 border-red-700 overflow-hidden"
      >
        <div className="absolute top-0 left-3 w-1 h-3 bg-gray-900 rounded-full"></div>
        <div className="absolute top-0 left-6 w-1 h-4 bg-gray-900 rounded-full"></div>
        <div className="absolute top-0 left-9 w-1 h-3 bg-gray-900 rounded-full"></div>

        <div className="absolute top-4 left-2 flex gap-4">
          <motion.div
            animate={{ height: catState === "sleep" ? "2px" : "8px" }}
            className="w-2 bg-gray-900 rounded-full transition-all"
          ></motion.div>
          <motion.div
            animate={{ height: catState === "sleep" ? "2px" : "8px" }}
            className="w-2 bg-gray-900 rounded-full transition-all"
          ></motion.div>
        </div>

        {catState === "scratch" && (
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, -20, 0] }}
            transition={{ duration: 0.3, repeat: Infinity }}
            className="absolute -right-1 top-2 w-4 h-6 bg-red-400 rounded-full border border-red-700 origin-bottom"
          ></motion.div>
        )}
      </motion.div>

      <div className="absolute -top-2 left-1 w-4 h-5 bg-red-500 border-2 border-red-700 rounded-t-lg -rotate-12 z-[-1]"></div>
      <div className="absolute -top-2 right-2 w-4 h-5 bg-red-500 border-2 border-red-700 rounded-t-lg rotate-12 z-[-1]"></div>

      <motion.div
        animate={{ rotate: catState === "sleep" ? [0, 5, 0] : [0, -10, 20, 0] }}
        transition={{
          duration: catState === "sleep" ? 4 : 0.5,
          repeat: Infinity,
        }}
        className="absolute bottom-1 -right-3 w-8 h-3 bg-red-600 border-2 border-red-800 rounded-full origin-left z-[-1]"
      ></motion.div>
    </div>
  );
};

const AchievementCard = ({ profile, index }) => {
  const gradientClass =
    index === 0
      ? "border-t border-l border-b border-r border-indigo-500/30 bg-[#030712]/80"
      : "border-t border-l border-b border-r border-cyan-500/30 bg-[#030712]/80";

  const numberColor =
    index === 0
      ? "bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.5)] border border-indigo-400"
      : "bg-cyan-600 shadow-[0_0_15px_rgba(8,145,178,0.5)] border border-cyan-400";

  const buttonPillClass =
    index === 0
      ? "border-indigo-500/50 bg-indigo-900/40 text-indigo-200 hover:bg-indigo-600 hover:text-white"
      : "border-cyan-500/50 bg-cyan-900/40 text-cyan-200 hover:bg-cyan-600 hover:text-white";

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative w-full max-w-2xl mx-auto my-12"
    >
      <SleepingCat />

      <div
        className={`relative z-10 rounded-2xl p-6 lg:p-8 transition-all duration-500 backdrop-blur-xl 
        ${gradientClass} 
        hover:scale-[1.02] shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]`}
      >
        <ParticleBackground />

        <div
          className={`absolute -top-4 -left-4 w-10 h-10 rounded-xl flex items-center justify-center 
          text-white font-bold text-lg ${numberColor}`}
        >
          {index + 1}
        </div>

        {profile.url && (
          <div className="flex justify-start mb-5 relative z-10">
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-md border transition-all duration-300 
              ${buttonPillClass} font-mono tracking-wider text-xs shadow-lg`}
            >
              Visit {profile.platform} <FaExternalLinkAlt className="w-3 h-3" />
            </a>
          </div>
        )}

        <div className="text-gray-200 relative z-10">
          <p className="text-lg lg:text-xl font-light leading-relaxed">
            {profile.description ||
              "Description not provided in profiles array."}
          </p>
        </div>

        {index === 0 && (
          <div className="mt-6 w-1/3 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full shadow-[0_0_8px_#22d3ee] relative z-10"></div>
        )}
      </div>
    </motion.div>
  );
};

export default AchievementCard;
