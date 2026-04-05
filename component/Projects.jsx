import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const BinaryRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const binaryChars = "01";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(2, 6, 23, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#06b6d4";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = binaryChars.charAt(
          Math.floor(Math.random() * binaryChars.length),
        );
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40"
    />
  );
};

function Projects() {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const tagColors = (index) => {
    const colors = [
      "text-cyan-300 bg-cyan-900/30 border-cyan-500/50 shadow-[0_0_10px_rgba(34,211,238,0.2)]",
      "text-blue-300 bg-blue-900/30 border-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.2)]",
      "text-indigo-300 bg-indigo-900/30 border-indigo-500/50 shadow-[0_0_10px_rgba(99,102,241,0.2)]",
    ];
    return colors[index % colors.length];
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full min-h-screen px-[5%] md:px-[12%] py-20 scroll-mt-20 bg-[#020617] text-white relative overflow-hidden font-sans"
    >
      <BinaryRain />

      <div className="fixed top-32 -left-20 animate-fly-slow z-10 pointer-events-none opacity-60">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="1.5"
          className="drop-shadow-[0_0_8px_#22d3ee]"
        >
          <path
            d="M2 12C2 12 5 10 12 12C19 14 22 12 22 12"
            strokeLinecap="round"
          />
          <path
            d="M12 12C12 12 15 6 12 2C9 6 12 12 12 12Z"
            fill="#06b6d4"
            stroke="none"
            className="animate-flap"
          />
        </svg>
      </div>
      <div className="fixed top-48 -left-32 animate-fly-fast z-10 pointer-events-none opacity-40">
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1.5"
          className="drop-shadow-[0_0_8px_#3b82f6]"
        >
          <path
            d="M2 12C2 12 5 10 12 12C19 14 22 12 22 12"
            strokeLinecap="round"
          />
          <path
            d="M12 12C12 12 15 6 12 2C9 6 12 12 12 12Z"
            fill="#3b82f6"
            stroke="none"
            className="animate-flap-fast"
          />
        </svg>
      </div>

      <div className="relative z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="px-6 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 font-mono tracking-widest uppercase text-sm shadow-[0_0_15px_rgba(34,211,238,0.2)] backdrop-blur-md">
            System.Portfolio
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]"
        >
          My Latest Work<span className="text-cyan-400 animate-pulse">_</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-16 font-light text-gray-300 text-lg bg-[#030712]/50 p-4 rounded-xl border border-blue-900/50 backdrop-blur-sm"
        >
          Explore my recent MERN stack projects, designed with scalability and
          clean architecture in mind.
          <br />
          <span className="text-cyan-500 text-sm italic font-mono mt-2 block">
            Hover Cards for 3D & Tooltips
          </span>
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto my-10 perspective-1000"
        >
          {workData.map((project, index) => {
            const isMisted =
              hoveredCardIndex !== null && hoveredCardIndex !== index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative group transition-all duration-700 ease-out z-30 ${isMisted ? "blur-md brightness-50 opacity-50 scale-95 z-20" : ""}`}
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex(null)}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition duration-700 pointer-events-none"></div>

                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.15}
                  glareColor="#22d3ee"
                  glarePosition="all"
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={1000}
                  tiltMaxAngleX={12}
                  tiltMaxAngleY={12}
                  className="w-full h-full border border-blue-500/20 rounded-2xl bg-[#030712]/90 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-300 transform-style-3d relative z-30"
                >
                  <div
                    className="p-4 h-full flex flex-col transform-style-3d"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-900 shadow-[0_10px_20px_rgba(0,0,0,0.5)] border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                      <Image
                        src={project.bgImage}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-110 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                      />

                      <div
                        className="absolute top-4 right-4 flex gap-3 z-10"
                        style={{ transform: "translateZ(30px)" }}
                      >
                        {project.github_link && (
                          <motion.a
                            href={project.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center transition-all shadow-[0_0_15px_rgba(0,0,0,0.8)] hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] group/link relative"
                          >
                            <Image
                              src={assets.github_icon}
                              alt="GitHub"
                              className="w-5 invert opacity-80 group-hover/link:opacity-100"
                            />

                            <span className="absolute -top-10 scale-0 group-hover/link:scale-100 transition-transform origin-bottom bg-cyan-950 text-cyan-300 text-xs px-2.5 py-1 rounded border border-cyan-500/50 pointer-events-none drop-shadow-[0_0_8px_rgba(34,211,238,0.4)] whitespace-nowrap">
                              Source Code
                            </span>
                          </motion.a>
                        )}

                        {project.link && (
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            className="w-10 h-10 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/50 flex items-center justify-center transition-all shadow-[0_0_15px_rgba(0,0,0,0.8)] hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] group/link relative"
                          >
                            <Image
                              src={assets.play_icon}
                              alt="Live Demo"
                              className="w-4 ml-0.5 brightness-200"
                            />

                            <span className="absolute -top-10 scale-0 group-hover/link:scale-100 transition-transform origin-bottom bg-cyan-950 text-cyan-300 text-xs px-2.5 py-1 rounded border border-cyan-500/50 pointer-events-none drop-shadow-[0_0_8px_rgba(34,211,238,0.4)] whitespace-nowrap">
                              Live Demo
                            </span>
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <div
                      className="pt-6 pb-2 flex-grow flex flex-col transform-style-3d"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors drop-shadow-md">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-5 flex-grow font-light leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 perspective-1000">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tagIndex}
                            whileHover={{
                              scale: 1.1,
                              rotateX: 15,
                              rotateY: -15,
                              y: -4,
                              boxShadow: "4px 4px 0px rgba(34,211,238,0.5)",
                            }}
                            className={`text-xs font-mono px-3 py-1.5 rounded-md border backdrop-blur-sm cursor-default transform-style-3d transition-colors ${tagColors(tagIndex)}`}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div className="flex justify-center mt-16">
          <motion.a
            href="https://github.com/sanjay-1458?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(34,211,238,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 text-cyan-950 bg-cyan-400 border border-cyan-300 rounded-full py-3.5 px-10 font-bold transition-all"
          >
            INITIALIZE MORE_PROJECTS
            <Image
              src={assets.right_arrow_bold}
              alt="arrow"
              className="w-4 invert mix-blend-difference"
            />
          </motion.a>
        </motion.div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .transform-style-3d {
          transform-style: preserve-3d;
        }

        @keyframes flyRight {
          0% { transform: translateX(-10vw) translateY(0px); }
          25% { transform: translateX(25vw) translateY(-20px); }
          50% { transform: translateX(50vw) translateY(10px); }
          75% { transform: translateX(75vw) translateY(-15px); }
          100% { transform: translateX(110vw) translateY(0px); }
        }
        .animate-fly-slow {
          animation: flyRight 15s linear infinite;
        }
        .animate-fly-fast {
          animation: flyRight 10s linear infinite 3s;
        }

        @keyframes flap {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(-0.5); }
        }
        .animate-flap {
          animation: flap 0.3s ease-in-out infinite;
          transform-origin: center;
        }
        .animate-flap-fast {
          animation: flap 0.2s ease-in-out infinite;
          transform-origin: center;
        }
      `,
        }}
      />
    </motion.section>
  );
}

export default Projects;
