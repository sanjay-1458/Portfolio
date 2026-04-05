import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "@/assets/assets";
import Image from "next/image";
import ParticleBackground from "./ParticleBackground";

const initialSkills = [
  { name: "C++", icon: assets.cpp, type: "lang" },
  { name: "Java", icon: assets.java, type: "lang" },
  { name: "JavaScript", icon: assets.javascript_icon, type: "lang" },
  { name: "TypeScript", icon: assets.typescript_icon, type: "lang" },
  { name: "Python", icon: assets.python, type: "lang" },

  { name: "React.js", icon: assets.react_icon, type: "frame" },
  { name: "Next.js", icon: assets.next, type: "frame" },
  { name: "Node.js", icon: assets.node_icon, type: "frame" },
  { name: "NestJS", icon: assets.nest, type: "frame" },
  { name: "FastAPI", icon: assets.fastapi, type: "frame" },

  { name: "LangChain", icon: assets.langchain, type: "ai" },
  { name: "n8n", icon: assets.n8n, type: "ai" },
  { name: "Redux", icon: assets.redux, type: "frame" },

  { name: "MongoDB", icon: assets.mongodb, type: "db" },
  { name: "PostgreSQL", icon: assets.postgre, type: "db" },
  { name: "Pinecone", icon: assets.pinecone, type: "ai" },

  { name: "Docker", icon: assets.docker_icon, type: "tool" },
  { name: "Git", icon: assets.git_icon, type: "tool" },
  { name: "Jenkins", icon: assets.jenkins, type: "tool" },
  { name: "Postman", icon: assets.postman, type: "tool" },
];

const getTypeColor = (type) => {
  switch (type) {
    case "ai":
      return "bg-fuchsia-500 shadow-[0_0_15px_#d946ef]";
    case "db":
      return "bg-emerald-400 shadow-[0_0_15px_#34d399]";
    case "lang":
      return "bg-blue-400 shadow-[0_0_15px_#60a5fa]";
    default:
      return "bg-cyan-400 shadow-[0_0_15px_#22d3ee]";
  }
};

const BouncingSkill = ({
  skill,
  containerRef,
  isTargeted,
  isBlasted,
  onRegisterRef,
}) => {
  const wrapperRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const pos = useRef({ x: 0, y: 0 });
  const vel = useRef({
    x: (Math.random() > 0.5 ? 1 : -1) * (0.5 + Math.random()),
    y: (Math.random() > 0.5 ? 1 : -1) * (0.5 + Math.random()),
  });

  useEffect(() => {
    if (containerRef.current && wrapperRef.current) {
      const cWidth = containerRef.current.clientWidth;
      const cHeight = containerRef.current.clientHeight;
      const nWidth = wrapperRef.current.clientWidth || 150;
      const nHeight = wrapperRef.current.clientHeight || 50;

      pos.current.x = Math.random() * (cWidth - nWidth);
      pos.current.y = Math.random() * (cHeight - nHeight);
    }
  }, [containerRef]);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      const container = containerRef.current;
      const node = wrapperRef.current;

      if (container && node && !isBlasted && !isTargeted && !isHovered) {
        const cWidth = container.clientWidth;
        const cHeight = container.clientHeight;
        const nWidth = node.clientWidth;
        const nHeight = node.clientHeight;

        pos.current.x += vel.current.x;
        pos.current.y += vel.current.y;

        if (pos.current.x <= 0) {
          pos.current.x = 0;
          vel.current.x *= -1;
        } else if (pos.current.x >= cWidth - nWidth) {
          pos.current.x = cWidth - nWidth;
          vel.current.x *= -1;
        }

        if (pos.current.y <= 0) {
          pos.current.y = 0;
          vel.current.y *= -1;
        } else if (pos.current.y >= cHeight - nHeight) {
          pos.current.y = cHeight - nHeight;
          vel.current.y *= -1;
        }

        node.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [containerRef, isBlasted, isTargeted, isHovered]);

  useEffect(() => {
    onRegisterRef(skill.name, wrapperRef.current);
  }, [skill.name, onRegisterRef]);

  const blastAnim = {
    scale: [1, 1.5, 0],
    opacity: [1, 1, 0],
    filter: [
      "brightness(1) blur(0px)",
      "brightness(5) blur(10px)",
      "brightness(0) blur(20px)",
    ],
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const targetAnim = {
    x: [0, -5, 5, -5, 5, 0],
    transition: { duration: 0.3, repeat: Infinity },
  };

  if (isBlasted && !wrapperRef.current) return null;

  return (
    <div
      ref={wrapperRef}
      className="absolute top-0 left-0 will-change-transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ pointerEvents: isBlasted ? "none" : "auto" }}
    >
      <motion.div
        animate={isBlasted ? blastAnim : isTargeted ? targetAnim : {}}
        whileHover={
          !isBlasted && !isTargeted
            ? {
                scale: 1.15,
                zIndex: 50,
                boxShadow: "0 0 20px rgba(34,211,238,0.5)",
              }
            : {}
        }
        className={`flex items-center gap-3 px-5 py-3 bg-[#030712]/80 backdrop-blur-md border border-cyan-500/30 rounded-full cursor-pointer transition-colors duration-300 group ${isTargeted ? "border-red-500 bg-red-900/30 shadow-[0_0_20px_rgba(239,68,68,0.5)]" : "shadow-[0_0_15px_rgba(34,211,238,0.1)]"}`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>

        <div
          className={`w-2 h-2 rounded-full ${isTargeted ? "bg-red-500 shadow-[0_0_10px_#ef4444]" : getTypeColor(skill.type)} animate-pulse`}
        ></div>

        {skill.icon && (
          <div className="w-6 h-6 flex items-center justify-center">
            <Image
              src={skill.icon}
              alt={skill.name}
              width={24}
              height={24}
              className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            />
          </div>
        )}

        <h3
          className={`text-sm font-medium tracking-wide z-10 font-mono transition-colors ${isTargeted ? "text-red-300" : "text-gray-200 group-hover:text-cyan-300"}`}
        >
          {skill.name}
        </h3>
      </motion.div>
    </div>
  );
};

function Skills() {
  const [aliveSkills, setAliveSkills] = useState(
    initialSkills.map((s) => s.name),
  );
  const [targetedSkill, setTargetedSkill] = useState(null);
  const [laser, setLaser] = useState(null);

  const [catState, setCatState] = useState("idle");
  const [catMessage, setCatMessage] = useState("Click me!");

  const containerRef = useRef(null);
  const catRef = useRef(null);
  const skillRefs = useRef({});

  const registerSkillRef = (name, element) => {
    if (element) skillRefs.current[name] = element;
  };

  const fireLaser = () => {
    if (
      aliveSkills.length === 0 ||
      catState === "firing" ||
      catState === "leaving"
    )
      return;

    setCatState("firing");
    setCatMessage("TARGET LOCKED!");

    const targetName =
      aliveSkills[Math.floor(Math.random() * aliveSkills.length)];
    setTargetedSkill(targetName);

    const targetEl = skillRefs.current[targetName];
    const catEl = catRef.current;

    setTimeout(() => {
      if (catEl && targetEl) {
        const catRect = catEl.getBoundingClientRect();
        const targetRect = targetEl.getBoundingClientRect();

        setLaser({
          x1: catRect.left + catRect.width / 2,
          y1: catRect.top + catRect.height / 2 - 20,
          x2: targetRect.left + targetRect.width / 2,
          y2: targetRect.top + targetRect.height / 2,
        });

        setTimeout(() => {
          setLaser(null);
          setTargetedSkill(null);
          setAliveSkills((prev) => prev.filter((name) => name !== targetName));
          setTimeout(() => {
            if (aliveSkills.length === 1) {
              setCatState("leaving");
              setCatMessage("See ya later! 🐾");
              setTimeout(() => setCatState("gone"), 2000);
            } else {
              setCatState("idle");
              setCatMessage("Click me!");
            }
          }, 800);
        }, 400);
      }
    }, 700);
  };

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[5%] md:px-[12%] py-24 scroll-mt-20 bg-[#020617] text-white relative overflow-hidden font-sans min-h-screen flex flex-col items-center"
    >
      <ParticleBackground />

      {laser && (
        <svg className="fixed inset-0 w-full h-full pointer-events-none z-[100]">
          <line
            x1={laser.x1}
            y1={laser.y1}
            x2={laser.x2}
            y2={laser.y2}
            stroke="#ef4444"
            strokeWidth="6"
            strokeLinecap="round"
            className="shadow-[0_0_30px_#ef4444]"
            style={{
              filter:
                "drop-shadow(0 0 15px #ef4444) drop-shadow(0 0 30px #b91c1c)",
            }}
          />
          <circle
            cx={laser.x2}
            cy={laser.y2}
            r="30"
            fill="#ffffff"
            className="animate-ping opacity-90"
            style={{ filter: "drop-shadow(0 0 20px #ef4444)" }}
          />
        </svg>
      )}

      <div className="relative z-10 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="px-6 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 font-mono tracking-widest uppercase text-sm shadow-[0_0_15px_rgba(34,211,238,0.2)] backdrop-blur-md">
            System.Capabilities
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]"
        >
          Neural <span className="text-cyan-400">Toolkit_</span>
        </motion.h2>

        <div
          ref={containerRef}
          className="relative w-full h-[65vh] min-h-[500px] border border-cyan-500/20 rounded-3xl overflow-hidden bg-[#030712]/40 backdrop-blur-sm shadow-[inset_0_0_60px_rgba(34,211,238,0.05)] z-20"
        >
          {initialSkills.map((skill) => (
            <BouncingSkill
              key={skill.name}
              skill={skill}
              containerRef={containerRef}
              isTargeted={targetedSkill === skill.name}
              isBlasted={!aliveSkills.includes(skill.name)}
              onRegisterRef={registerSkillRef}
            />
          ))}

          {catState === "gone" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-cyan-500 text-2xl font-mono pointer-events-none z-30"
            >
              <div className="w-20 h-20 border-4 border-t-cyan-400 border-r-cyan-400 border-b-transparent border-l-transparent rounded-full animate-spin shadow-[0_0_30px_rgba(34,211,238,0.6)]"></div>
              <span className="animate-pulse drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                SYSTEM PURGED.
              </span>
            </motion.div>
          )}
        </div>

        <AnimatePresence>
          {catState !== "gone" && (
            <motion.div
              ref={catRef}
              initial={{ y: 150, opacity: 0 }}
              animate={
                catState === "leaving"
                  ? { y: 250, opacity: 0 }
                  : { y: 0, opacity: 1 }
              }
              transition={{ duration: 0.8, ease: "easeInOut" }}
              onClick={fireLaser}
              className="fixed bottom-8 right-8 z-[60] flex flex-col items-center cursor-crosshair group"
            >
              <motion.div
                key={catMessage}
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`mb-3 px-4 py-2 bg-blue-950/90 border rounded-2xl rounded-br-none font-mono text-sm shadow-lg backdrop-blur-md whitespace-nowrap ${catState === "firing" ? "border-red-500 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.4)]" : "border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.4)]"}`}
              >
                {catMessage}
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-20 h-20 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] border-2 rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300 ${catState === "firing" ? "border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.6)]" : "border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]"}`}
              >
                <div
                  className={`text-3xl z-10 font-bold transition-transform ${catState === "firing" ? "text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,1)] scale-110" : "text-cyan-300 drop-shadow-[0_0_5px_rgba(34,211,238,1)]"}`}
                >
                  {catState === "firing" ? "ÒwÓ" : "OwO"}
                </div>
                <div
                  className={`absolute -top-1 left-3 w-5 h-5 rotate-45 z-0 ${catState === "firing" ? "bg-red-500" : "bg-cyan-500"}`}
                ></div>
                <div
                  className={`absolute -top-1 right-3 w-5 h-5 rotate-45 z-0 ${catState === "firing" ? "bg-red-500" : "bg-cyan-500"}`}
                ></div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

export default Skills;
