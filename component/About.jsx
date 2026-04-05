import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets, infoList, experiences, profiles } from "@/assets/assets";
import ParticleBackground from "./ParticleBackground";

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

const About = () => {
  const [startScan, setStartScan] = useState(false);
  const [binaryText, setBinaryText] = useState("");

  useEffect(() => {
    setBinaryText(
      Array.from({ length: 800 }, () => Math.round(Math.random())).join(" "),
    );

    const timer = setTimeout(() => {
      setStartScan(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const techStack = {
    Languages: ["C++", "Java", "JavaScript", "TypeScript", "Python"],
    "Frameworks & Libraries": [
      "React.js",
      "Next.js",
      "Node.js",
      "NestJS",
      "FastAPI",
      "LangChain",
      "Redux",
      "n8n",
    ],
    "Databases & Tools": [
      "MongoDB",
      "PostgreSQL",
      "Pinecone",
      "Git",
      "Jenkins",
      "Postman",
      "Docker",
    ],
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[5%] md:px-[12%] py-24 scroll-mt-20 bg-[#020617] text-white relative font-sans overflow-hidden"
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
          <div className="px-6 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 font-mono tracking-widest uppercase text-sm shadow-[0_0_15px_rgba(34,211,238,0.2)] backdrop-blur-md">
            System.Info
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-4xl md:text-5xl font-extrabold text-white mb-16 tracking-tight drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]"
        >
          About Me<span className="text-cyan-400 animate-pulse">_</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-16 items-start max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="w-full lg:w-1/3 flex flex-col items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateX: 8, rotateY: -8, z: 30 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl p-1.5 bg-gradient-to-br from-blue-500/30 via-cyan-400/30 to-transparent shadow-[0_0_40px_rgba(34,211,238,0.15)] cursor-pointer transition-all duration-300"
            >
              <div className="w-full h-full bg-[#020617] rounded-xl overflow-hidden relative">
                <Image
                  src={assets.user_image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />

                {startScan && (
                  <>
                    <div className="absolute inset-0 bg-[#020617]/95 flex items-start overflow-hidden scanner-mask p-2">
                      <p className="text-cyan-400 font-mono text-sm break-all leading-tight opacity-90 matrix-rain">
                        {binaryText}
                      </p>
                    </div>

                    <div className="absolute left-0 w-full h-1 bg-cyan-300 shadow-[0_0_20px_#22d3ee,0_0_40px_#3b82f6] scanner-line"></div>
                  </>
                )}
              </div>
            </motion.div>

            <div className="mt-8 w-full max-w-xs sm:max-w-sm">
              {profiles.map((profile, index) => (
                <motion.a
                  whileHover={{
                    scale: 1.03,
                    y: -5,
                    boxShadow: "0 10px 30px -10px rgba(34,211,238,0.4)",
                  }}
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block p-5 bg-white/5 backdrop-blur-md rounded-xl border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-bold text-lg text-white">
                      {profile.platform}
                    </h4>
                    <span className="px-2 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-md">
                      Top Rated
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {profile.description}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-2/3 flex flex-col gap-12"
          >
            <p className="text-center lg:text-left text-gray-300 text-lg leading-relaxed max-w-3xl font-light">
              I’m a software developer who loves building scalable systems,
              robust backend architectures, and intelligent AI agents.
            </p>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 place-items-center sm:place-items-start"
            >
              {infoList.map(({ iconDark, title, description }, index) => (
                <motion.li
                  variants={listItemVariants}
                  whileHover={{ y: -10, scale: 1.05 }}
                  key={index}
                  className="relative group rounded-full cursor-pointer w-full max-w-[220px] aspect-square flex border border-cyan-500/30 bg-[#030712]/50 hover:bg-cyan-500/5 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300 backdrop-blur-md"
                >
                  <div className="relative w-full h-full p-5 flex flex-col items-center justify-center text-center z-10">
                    <div className="absolute inset-0 bg-blue-500/0 rounded-full blur-2xl group-hover:bg-cyan-400/10 transition-colors duration-500 pointer-events-none" />

                    <div className="p-4 border border-cyan-800/50 bg-transparent rounded-full mb-3 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300 z-20">
                      <Image
                        src={iconDark || assets.code_icon_dark}
                        alt={title}
                        className="w-7 h-7 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                      />
                    </div>
                    <h3 className="font-bold text-white text-md mb-1 z-20 group-hover:text-cyan-300 transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs text-gray-400 opacity-80 group-hover:opacity-100 group-hover:text-cyan-100 transition-all z-20 px-2">
                      {description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md p-6 md:p-8 border border-white/10 rounded-2xl shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-cyan-400/10 transition-colors duration-700" />

              <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                <span className="w-8 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></span>{" "}
                Experience
              </h3>

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-6 items-start relative z-10"
                >
                  <div className="w-16 h-16 rounded-xl bg-black/50 flex-shrink-0 flex items-center justify-center p-2 border border-cyan-500/20 backdrop-blur-sm shadow-inner group-hover:border-cyan-400/50 transition-colors">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                      <h4 className="text-xl font-bold text-white">
                        {exp.title}
                      </h4>
                      <span className="text-sm px-3 py-1 bg-blue-500/10 text-cyan-400 rounded-full font-medium border border-cyan-500/20 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                        {exp.company}
                      </span>
                      <span className="text-sm text-gray-500 md:ml-auto font-medium font-mono">
                        {exp.duration}
                      </span>
                    </div>
                    <ul className="text-gray-300 space-y-3 mt-4 text-[15px] font-light">
                      {exp.work.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-3 text-cyan-400 mt-1 font-bold">
                            ▹
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                <span className="w-8 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></span>{" "}
                Technologies & Tools
              </h3>
              <div className="space-y-8">
                {Object.entries(techStack).map(([category, skills], idx) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <h4 className="text-sm uppercase tracking-widest text-cyan-400 font-bold mb-4 flex items-center gap-2">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill, i) => (
                        <motion.div
                          key={i}
                          whileHover="hover"
                          initial="rest"
                          animate="rest"
                          whileTap={{ scale: 0.95 }}
                          variants={{
                            rest: {
                              scale: 1,
                              y: 0,
                              boxShadow: "0px 0px 0px rgba(34,211,238,0)",
                            },
                            hover: {
                              scale: 1.05,
                              y: -3,
                              boxShadow: "0px 8px 20px rgba(34,211,238,0.2)",
                              transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                              },
                            },
                          }}
                          className="relative px-4 py-2 bg-[#030712]/50 border border-cyan-900/50 rounded-lg overflow-hidden cursor-crosshair group backdrop-blur-md"
                        >
                          <motion.div
                            variants={{
                              rest: { left: "-100%" },
                              hover: {
                                left: "200%",
                                transition: {
                                  duration: 1,
                                  ease: "easeInOut",
                                  repeat: Infinity,
                                },
                              },
                            }}
                            className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent skew-x-[-30deg]"
                          />

                          <div className="absolute top-0 left-0 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-[2px]"></div>
                          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-[2px]"></div>

                          <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors duration-300 pointer-events-none"></div>

                          <span className="relative z-10 font-mono text-sm text-gray-400 group-hover:text-cyan-300 font-medium transition-colors duration-300 flex items-center">
                            <span className="text-cyan-500 inline-block overflow-hidden transition-all duration-300 w-0 opacity-0 group-hover:w-3 group-hover:opacity-100 group-hover:mr-1">
                              &gt;
                            </span>
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes scan-line-anim {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          45% { top: calc(100% - 4px); opacity: 1; }
          50% { top: calc(100% - 4px); opacity: 0; }
          55% { top: calc(100% - 4px); opacity: 1; }
          90% { top: 0%; opacity: 1; }
          100% { top: 0%; opacity: 0; }
        }
        
        @keyframes scan-mask-anim {
          0% { clip-path: inset(0 0 100% 0); }
          50% { clip-path: inset(0 0 0% 0); }
          100% { clip-path: inset(0 0 100% 0); }
        }

        @keyframes matrix-flicker {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }

        .scanner-line {
          animation: scan-line-anim 4s ease-in-out infinite;
        }

        .scanner-mask {
          animation: scan-mask-anim 4s ease-in-out infinite;
        }

        .matrix-rain {
          animation: matrix-flicker 0.5s steps(2) infinite;
        }
      `,
        }}
      />
    </motion.section>
  );
};

export default About;
