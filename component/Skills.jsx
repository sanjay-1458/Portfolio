import React from "react";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";
import Image from "next/image";
import ParticleBackground from "./ParticleBackground";

const SkillCard = ({ skillName, iconSrc, index }) => {
  const icon = iconSrc || assets.default_skill_icon;

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        delay: 0.8 + index * 0.1,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 10px rgba(28, 216, 210, 0.8)",
      transition: { type: "spring", stiffness: 600, damping: 25 },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.5 }}
      className={`w-32 h-36 flex flex-col items-center justify-center 
              bg-gray-950 border-2 border-gray-700 rounded-xl text-white 
              cursor-pointer p-3 transition-all duration-300 relative 
              overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#1cd8d2]/10 to-transparent animate-pulse-slow"></div>

      <div
        className="w-16 h-16 mb-2 rounded-lg flex items-center justify-center 
              bg-gray-800/50 p-2 border border-gray-600 
              border-r-purple-400 border-b-purple-400
              "
      >
        <Image
          src={icon}
          alt={skillName}
          width={48}
          height={48}
          className="w-12 h-12 object-contain"
        />
      </div>

      <h3 className="text-sm font-semibold tracking-wide text-[#00bf8f] mt-1">
        {skillName}
      </h3>
    </motion.div>
  );
};

const skillList = [
  { name: "JavaScript", icon: assets.javascript_icon },
  { name: "React.js", icon: assets.react_icon },
  { name: "Node.js", icon: assets.node_icon },
  { name: "Docker", icon: assets.docker_icon },
  { name: "TypeScript", icon: assets.typescript_icon },
  { name: "Express.js", icon: assets.express_icon },
  { name: "Git", icon: assets.git_icon },
];

function Skills() {
  return (
    <motion.div
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="px-[12%] py-20 scroll-mt-20 bg-black text-white relative overflow-hidden"
    >
      <ParticleBackground />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="px-6 py-2 rounded-full border border-indigo-600/50 bg-indigo-900/30 text-indigo-300 font-medium tracking-wider">
            My toolkit
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-5xl md:text-6xl font-extrabold text-white mb-16"
        >
          Skills<span className="text-[#1cd8d2]">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-3xl text-gray-300 p-6 border border-gray-700 bg-gray-900/90 mt-8 shadow-xl rounded-lg mx-auto text-center"
        >
          I work with the MERN stack to build full-stack apps and rely on C++ for solid problem-solving and system-level insight.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 mt-16 max-w-6xl mx-auto"
        >
          {skillList.map((skill, index) => (
            <SkillCard
              key={index}
              skillName={skill.name}
              iconSrc={skill.icon}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Skills;