import { experiences } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <motion.div
      id="experience"
      className="px-[12%] py-16 bg-gray-50 scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      // viewport={{ once: true }}
      transition={{ staggerChildren: 0.15 }}
    >
      <motion.h4
        variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.6 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I did
      </motion.h4>
      <motion.h2
        variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-5xl font-Ovo mb-12"
      >
        Experience
      </motion.h2>

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-dashed border-gray-300"></div>

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              // viewport={{ once: true }}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-blue-500 rounded-full w-8 h-8"></div>

              <div className="m-3 mt-6 md:mt-0 md:w-5/12 bg-white p-6 rounded-2xl shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <p className="text-gray-500 text-sm">{exp.title}</p>
                  </div>
                </div>
                <p className="text-sm text-blue-600 font-medium mb-4">{exp.duration}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {exp.work.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="m-3 md:w-5/12 bg-[#f9f9ff] border border-gray-200 rounded-xl p-6 shadow-sm text-center">
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  My first internship immersed me in real‑world software development—daily standups, version control, and code reviews. In a fast‑paced team, I learned to break down complex tasks, meet deadlines, and communicate clearly. Seeing staged deployments and feedback loops firsthand taught me the value of clean, maintainable code, adaptability, and continuous learning.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
