import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import ParticleBackground from "./ParticleBackground";

const AchievementCard = ({ profile, index }) => {
  const gradientClass =
    index === 0
      ? "border-t-4 border-l-4 border-b-2 border-r-2 border-indigo-500/50 bg-gray-900/70"
      : "border-t-4 border-l-4 border-b-2 border-r-2 border-blue-500/50 bg-gray-900/70";

  const numberColor =
    index === 0
      ? "bg-purple-600 shadow-purple-900/70"
      : "bg-blue-600 shadow-blue-900/70";

  const buttonPillClass =
    index === 0
      ? "border-indigo-600/50 bg-indigo-900/30 text-indigo-300 hover:bg-indigo-900/50"
      : "border-blue-600/50 bg-blue-900/30 text-blue-300 hover:bg-blue-900/50";

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative rounded-xl p-8 lg:p-10 transition-transform duration-500 backdrop-blur-sm 
        ${gradientClass} 
        hover:scale-[1.03] shadow-2xl hover:shadow-[0_0_20px_rgba(156,39,176,0.5)]`}
    >
      <ParticleBackground />
      <div
        className={`absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center 
        text-white font-bold text-xl shadow-lg ${numberColor}`}
      >
        {index + 1}
      </div>

      {profile.url && (
        <div className="flex justify-start mb-6">
          <a
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-colors 
              ${buttonPillClass} font-medium tracking-wider text-sm`}
          >
            Visit {profile.platform} <FaExternalLinkAlt className="w-3 h-3" />
          </a>
        </div>
      )}

      <div className="text-white">
        <p className="text-xl lg:text-2xl leading-relaxed">
          {profile.description || "Description not provided in profiles array."}
        </p>
      </div>

      {index === 0 && (
        <div className="mt-6 w-1/3 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
      )}
    </motion.div>
  );
};

export default AchievementCard;
