import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full w-max-4xl flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-4xl max-w-none "
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-4xl "
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="text-center mb-10 max-w-4xl font-Ovo">
            I am a recent graduate Software Engineer eager to contribute to
            real-world projects and kickstart my career. I focus on building
            scalable solutions using SOLID principles and system design best
            practices. I am passionate about competitive coding and solving
            complex data structure and algorithm problems.
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl cursor-pointer p-6 hover:bg-[#fcf4ff] hover:[box-shadow:4px_4px_0_#000] hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="my-6 text-gray-700 font-Ovo"
          >
            Tools i use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex items-center gap-5 sm:gap-8"
          >
            {toolsData.map((tool, index) => {
              return (
                <motion.li
                whileHover={{scale:1.1}}
                  key={index}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                >
                  <Image
                    src={tool}
                    alt="Tool"
                    className="w-8 sm:w-10 h-8 sm:h-10"
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
