import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const darkGlowClass =
  "shadow-lg shadow-[#00bf8f]/30 hover:shadow-[#00bf8f]/50 transition-shadow";

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-24 scroll-mt-20 bg-black text-white relative"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-8"
      >
        <div className="px-6 py-2 rounded-full border border-indigo-600/50 bg-indigo-900/30 text-indigo-300 font-medium tracking-wider">
          Introduction
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-5xl md:text-6xl font-extrabold text-white mb-16"
      >
        About me<span className="text-[#1cd8d2]">.</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full max-w-7xl mx-auto flex-col lg:flex-row items-center justify-between gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className={`w-64 sm:w-80 rounded-2xl max-w-none p-4 border border-gray-700 ${darkGlowClass}`}
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-xl object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex-1 max-w-4xl"
        >
          <p className="text-center lg:text-left mb-10 font-Ovo text-gray-300 leading-relaxed">
            I’m a recent Software Engineering graduate who loves building scalable systems and solving challenging algorithm problems.
          </p>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.1, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                variants={listItemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0, 191, 143, 0.7)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                key={index}
                className={`
                  relative p-6 rounded-xl cursor-pointer 
                  bg-gray-950/70 backdrop-blur-sm overflow-hidden 
                  border border-gray-700 transition-all duration-300
                  hover:border-[#00bf8f]
                `}
              >
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none 
                                border border-transparent transition-all duration-300 
                                group-hover:border-[#00bf8f]/50"
                ></div>

                <Image
                  src={icon}
                  alt={title}
                  className="w-8 mt-3 invert brightness-125"
                />

                <h3 className="my-4 font-bold text-lg text-white">{title}</h3>
                <p className="text-gray-400 text-sm">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="my-10 text-xl font-Ovo text-[#00bf8f]"
          >
            Development Tools I Use
          </motion.h4>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.05, delay: 1.4 }}
            className="flex flex-wrap items-center gap-5 sm:gap-8"
          >
            {toolsData.map((tool, index) => {
              return (
                <motion.li
                  variants={listItemVariants}
                  whileHover={{
                    scale: 1.25,
                    rotate: 5,
                    boxShadow: "0 0 15px rgba(28, 216, 210, 0.5)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  key={index}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border-2 border-gray-700 rounded-lg cursor-pointer bg-gray-950 duration-500 p-2"
                >
                  <Image
                    src={tool}
                    alt="Tool"
                    className="w-full h-full object-contain"
                  />
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default About;
