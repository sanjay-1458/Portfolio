import React from "react";
import { motion } from "motion/react";

const skillList = [
  "C++", "JavaScript", "React.js", "Node.js", "HTML5", "CSS3",
  "MongoDB", "SQL", "Git", "GitHub", "Jenkins", "Redis",
];

function Skills() {
  return (
    <motion.div
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Toolkit
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-5xl font-Ovo"
      >
        Skills
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-3xl text-gray-600 p-6 border border-gray-100 mt-4 shadow rounded-lg mx-auto text-center"
      >
        I specialize in building full-stack web applications using the MERN
        stack (MongoDB, Express.js, React.js, and Node.js). With C++ as my
        primary programming language, I bring strong problem-solving skills
        and a deep understanding of system-level concepts to my development
        work.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10 max-w-4xl text-center mx-auto"
      >
        {skillList.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, }}
            className="p-4 cursor-pointer hover:bg-[#ececfc] hover:[box-shadow:4px_4px_0_#000] hover:-translate-y-1 duration-500 rounded-xl border border-gray-300 shadow-sm"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Skills;
