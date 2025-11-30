import React from "react";
import { motion } from "framer-motion";

const InternshipCard = ({ data }) => {
  const iconLetter = data.company ? data.company[0].toUpperCase() : "H";
  const { title, company, duration, work } = data;

  return (
    <motion.div
      className="max-w-4xl mx-auto p-12 lg:p-16 bg-black/70 rounded-3xl shadow-2xl backdrop-blur-sm border border-gray-800"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center gap-6 mb-6">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg flex items-center justify-center border-2 border-indigo-400">
          <span className="text-3xl font-bold text-white">{iconLetter}</span>
        </div>
        
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-1">
            {title}
          </h2>
          <p className="text-xl text-gray-300">
            {company}
          </p>
        </div>
      </div>

      <ul className="space-y-4 mb-6 list-none pl-0">
        {work.map((item, i) => (
          <motion.li
            key={i}
            className="flex items-start text-lg text-gray-200"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
          >
            <span className="text-indigo-400 text-2xl mr-3 leading-none">
              •
            </span>
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
      
      <motion.p
        className="text-lg font-medium text-indigo-400 mt-8 pt-4 border-t border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        {duration}
      </motion.p>
    </motion.div>
  );
};

export default InternshipCard;