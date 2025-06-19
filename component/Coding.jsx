import { profiles } from "@/assets/assets";
import React from "react";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "motion/react";

function Coding() {
  return (
    <section id="coding" className="px-[12%] py-16 scroll-mt-20">
      <h4 className="text-center text-lg font-Ovo mb-2">Profiles</h4>
      <h2 className="text-center text-5xl font-Ovo mb-12">Coding Profiles</h2>
      <p className="p-3 m-3 mx-auto max-w-3xl text-center">
        I enjoy solving diverse problems and exploring how algorithms can be used to tackle complex challenges.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
        {profiles.map((profile, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{  amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`rounded-3xl p-8 transition-transform hover:[box-shadow:4px_4px_0_#000] duration-300 hover:scale-[1.02] hover:shadow-lg border border-gray-300 hover:bg-[#fcf4ff] duration-500 transition-all`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-3xl font-bold ${profile.textColor}`}>
                {profile.platform}
              </h3>
              <FaCode className={`text-3xl ${profile.textColor}`} />
            </div>
            <p className="text-lg font-semibold mb-2">
              Ranking: <span className="text-gray-700">{profile.handle}</span>
            </p>
            <p className="text-md text-gray-700 mb-6">{profile.rating}</p>
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-500 rounded-full font-Ovo hover:bg-white hover:text-black hover:[box-shadow:1px_1px_0_#333] transition-all"
            >
              Visit Profile <FaExternalLinkAlt className="w-3" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Coding;
