import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const tagColors = (index) => {
  const colors = [
    "text-[#1cd8d2] bg-[#1cd8d2]/10 border-[#1cd8d2]/50",
    "text-[#00bf8f] bg-[#00bf8f]/10 border-[#00bf8f]/50",
    "text-gray-300 bg-gray-700/50 border-gray-600/50",
  ];
  return colors[index % colors.length];
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

function Projects() {
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-20 scroll-mt-20 bg-black text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-8"
      >
        <div className="px-6 py-2 rounded-full border border-indigo-600/50 bg-indigo-900/30 text-indigo-300 font-medium tracking-wider">
          My portfolio
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-5xl md:text-6xl font-extrabold text-white mb-16"
      >
        My latest work<span className="text-[#1cd8d2]">.</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center max-w-3xl mx-auto mt-5 mb-12 font-Ovo text-gray-300"
      >
        Explore my recent MERN stack projects, designed with scalability and clean architecture in mind.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto my-10 gap-8"
      >
        {workData.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.1}
              perspective={1000}
              scale={1.01}
              maxTilt={5}
              className="w-full  border border-purple-900 rounded-xl overflow-hidden shadow-xl transition-all duration-300"
            >
              <div className="p-3">
                <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-900">
                  <Image
                    src={project.bgImage}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500"
                  />

                  <div className="absolute top-4 right-4 flex gap-3 z-10">
                    {project.github_link && (
                      <motion.a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 shadow-xl"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Image
                          src={assets.github_icon}
                          alt="GitHub"
                          className="w-6 invert"
                        />
                      </motion.a>
                    )}

                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[#10d0d2]/90 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 shadow-xl"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Image
                          src={assets.play_icon}
                          alt="Live Demo"
                          className="w-5"
                        />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-base mb-4 min-h-[4rem]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${tagColors(
                        tagIndex
                      )}`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        href="https://github.com/sanjay-1458?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-max flex items-center justify-center gap-2 text-[#1cd8d2] border-2 border-[#1cd8d2]/70 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#1cd8d2]/10 duration-300 font-semibold"
      >
        Show more
        <Image
          src={assets.right_arrow_bold}
          alt="arrow"
          className="w-4 invert brightness-0 hue-rotate-180"
        />
      </motion.a>
    </motion.div>
  );
}

export default Projects;
