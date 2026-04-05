import { experiences } from "@/assets/assets";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import InternshipCard from "./InternshipCard";

const TechBubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const generatedBubbles = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 90 + 5}%`,
      size: `${Math.random() * 40 + 20}px`,
      duration: `${Math.random() * 8 + 10}s`,
      delay: `${Math.random() * 5}s`,
    }));
    setBubbles(generatedBubbles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute bottom-[-100px] rounded-full backdrop-blur-sm border animate-rise-morph"
          style={{
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
            animationDuration: bubble.duration,
            animationDelay: bubble.delay,
          }}
        />
      ))}
    </div>
  );
};

const Experience = () => {
  if (!experiences || experiences.length === 0) {
    return null;
  }

  return (
    <motion.div
      id="experience"
      className="relative px-[5%] md:px-[12%] py-24 bg-[#020617] text-white overflow-hidden scroll-mt-20 min-h-screen flex flex-col items-center justify-center font-sans"
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.15 }}
    >
      <TechBubbles />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#020617]/50 to-[#020617] z-10 pointer-events-none"></div>

      <div className="relative z-20 w-full max-w-7xl px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="px-6 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 font-mono tracking-widest uppercase text-sm shadow-[0_0_15px_rgba(34,211,238,0.2)] backdrop-blur-md">
            System.Log
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-4xl md:text-5xl font-extrabold text-white mb-16 tracking-tight drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]"
        >
          Experience<span className="text-cyan-400 animate-pulse">_</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-12 w-full max-w-3xl mx-auto relative"
        >
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 hidden md:block z-0"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative z-10 w-full transform scale-90"
            >
              <div className="bg-[#030712]/40 backdrop-blur-md border border-white/5 rounded-3xl p-2 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-cyan-500/30">
                <InternshipCard data={exp} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes rise-morph {
          0% {
            transform: translateY(10vh) scale(0.5);
            opacity: 0;
            border-color: rgba(34, 211, 238, 0.4);
            background-color: rgba(34, 211, 238, 0.1);
            box-shadow: 0 0 15px rgba(34, 211, 238, 0.2);
          }
          10% {
            opacity: 1;
          }
          35% {
            /* Still Blue as it approaches the card */
            border-color: rgba(34, 211, 238, 0.4);
            background-color: rgba(34, 211, 238, 0.1);
            box-shadow: 0 0 15px rgba(34, 211, 238, 0.2);
          }
          40% {
            /* Morphs to Green as it enters the card area */
            border-color: rgba(34, 197, 94, 0.5);
            background-color: rgba(34, 197, 94, 0.15);
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.4);
          }
          60% {
            /* Stays Green inside the card area */
            border-color: rgba(34, 197, 94, 0.5);
            background-color: rgba(34, 197, 94, 0.15);
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.4);
          }
          65% {
            /* Morphs back to Blue as it leaves the card area */
            border-color: rgba(34, 211, 238, 0.4);
            background-color: rgba(34, 211, 238, 0.1);
            box-shadow: 0 0 15px rgba(34, 211, 238, 0.2);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-110vh) scale(1.2);
            opacity: 0;
            border-color: rgba(34, 211, 238, 0.4);
            background-color: rgba(34, 211, 238, 0.1);
            box-shadow: 0 0 15px rgba(34, 211, 238, 0.2);
          }
        }
        
        .animate-rise-morph {
          animation-name: rise-morph;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `,
        }}
      />
    </motion.div>
  );
};

export default Experience;
