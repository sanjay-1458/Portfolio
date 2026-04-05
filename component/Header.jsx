import React, { useMemo } from "react";
import ParticleBackground from "./ParticleBackground";
import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const socials = [
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/sanjay-1458",
  },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sanjaythakur2108/",
  },
  {
    Icon: SiLeetcode,
    label: "LeetCode",
    href: "https://leetcode.com/u/st2147/",
  },
];

const glowVariants = {
  initial: {
    y: 0,
    scale: 1,
    filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
  },
  hover: {
    y: -3,
    scale: 1.2,
    filter:
      "drop-shadow(0 0 10px rgba(56,189,248,0.9)) drop-shadow(0 0 20px rgba(59,130,246,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: {
    y: 0,
    scale: 0.95,
    transition: { duration: 0.08 },
  },
};

function Header() {
  const roles = useMemo(
    () => [
      "AI Systems Engineer",
      "Full-Stack Architect",
      "Backend Orchestrator",
      "Software Developer",
    ],
    [],
  );

  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentRole = roles[index];
    const timeOut = setTimeout(
      () => {
        if (!deleting && subIndex < currentRole.length) {
          setSubIndex((subIndex) => subIndex + 1);
        } else if (!deleting && subIndex === currentRole.length) {
          setTimeout(() => {
            setDeleting(true);
          }, 1200);
        } else if (deleting && subIndex > 0) {
          setSubIndex((subIndex) => subIndex - 1);
        }
        if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((index) => (index + 1) % roles.length);
        }
      },
      deleting ? 40 : 60,
    );

    return () => clearTimeout(timeOut);
  }, [subIndex, deleting, index, roles]);

  return (
    <section
      id="header"
      className="h-screen w-full relative bg-[#020617] overflow-hidden font-sans"
    >
      <ParticleBackground />

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -left-32
          w-[70vw] sm:w-[50vw] md:w-[40vw]
          h-[70vw] sm:h-[50vw] md:h-[40vw]
          max-w-[500px] max-h-[500px]
          rounded-full bg-gradient-to-tr from-[#0f172a] via-[#1d4ed8] to-[#06b6d4]
          opacity-30 sm:opacity-20 ms:opacity-10
          blur-[100px] sm:blur-[130px] md:blur-[150px]
          animate-pulse
          "
        ></div>
        <div
          className="absolute bottom-0 right-0
          w-[70vw] sm:w-[50vw] md:w-[40vw]
          h-[70vw] sm:h-[50vw] md:h-[40vw]
          max-w-[500px] max-h-[500px]
          rounded-full bg-gradient-to-tr from-[#1e1b4b] via-[#2563eb] to-[#22d3ee]
          opacity-30 sm:opacity-20 ms:opacity-10
          blur-[100px] sm:blur-[130px] md:blur-[150px]
          animate-pulse delay-500
          "
        ></div>
      </div>

      <div className="relative z-10 w-11/12 max-w-4xl text-center mx-auto h-full flex flex-col items-center justify-center gap-6">
        <motion.div
          className="relative flex items-center justify-center w-28 h-28 mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-2 border-t-cyan-300 border-r-transparent border-b-blue-600 border-l-transparent opacity-80"
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-4 rounded-full border border-blue-400/30 backdrop-blur-md bg-blue-900/20"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="w-10 h-10 bg-cyan-400 rounded-full shadow-[0_0_30px_#22d3ee]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          className="mb-2 text-xl md:text-2xl font-mono font-medium text-white tracking-wide min-h-[1.6em]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gray-500">&gt; System.init("</span>
          <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
            {roles[index].substring(0, subIndex)}
          </span>
          <span
            className="inline-block w-2.5 ml-1 bg-cyan-400 animate-pulse align-middle"
            style={{ height: "1em" }}
          ></span>
          <span className="text-gray-500">");</span>
        </motion.div>

        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]"
        >
          <span className="text-white">I'm</span> Sanjay Thakur
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light"
        >
          Architecting scalable backend ecosystems and orchestrating intelligent
          AI agents to solve complex technical challenges.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-6 mt-8 perspective-1000"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0px 0px 30px rgba(34, 211, 238, 0.8), 0px 0px 60px rgba(34, 211, 238, 0.4)",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 rounded-full font-bold text-lg text-slate-900 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)] cursor-pointer inline-block"
          >
            INITIALIZE SEQUENCE
          </motion.a>

          <motion.a
            href="https://drive.google.com/file/d/1nag2nkavosAinr7sEdsAFSzsW-kzckci/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(34, 211, 238, 0.5)",
              backgroundColor: "rgba(34, 211, 238, 0.1)",
            }}
            className="px-8 py-3.5 rounded-full font-medium text-lg text-cyan-50 border border-slate-700 bg-slate-900/50 backdrop-blur-md transition-all shadow-lg flex items-center gap-2"
          >
            Extract_Resume.pdf
          </motion.a>
        </motion.div>

        <div className="mt-12 flex gap-6 text-2xl md:text-3xl justify-center">
          {socials.map(({ Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              variants={glowVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="text-slate-500 hover:text-cyan-400 transition-colors p-2 rounded-full hover:bg-cyan-900/20 border border-transparent hover:border-cyan-500/30"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Header;
