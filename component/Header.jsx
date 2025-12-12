import React, { useMemo } from "react";
import IntroAnimation from "./IntroAnimation";
import ParticleBackground from "./ParticleBackground";
import Image from "next/image";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { assets } from "@/assets/assets";
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
      "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
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
      "Software Engineer",
      "Full Stack Developer",
      "MERN Stack Developer",
      "Frontend Developer",
      "Backend Developer",
    ],
    []
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
      deleting ? 40 : 60
    );

    return () => clearTimeout(timeOut);
  }, [subIndex, deleting, index, roles]);

  return (
    <section
      id="header"
      className="h-screen w-full relative bg-black overflow-hidden"
    >
      <ParticleBackground />

      <div className="absolute inset-0">
        <div
          className="absolute -top-32 -left-32
          w-[70vw] sm:w-[50vw] md:w-[40vw]
          h-[70vw] sm:h-[50vw] md:h-[40vw]
          max-w-[500px] max-h-[500px]
          rounded-full bg-linear-to-tr from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
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
          rounded-full bg-linear-to-tr from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
          opacity-30 sm:opacity-20 ms:opacity-10
          blur-[100px] sm:blur-[130px] md:blur-[150px]
          animate-pulse delay-500
          "
        ></div>
      </div>

      <div className="relative z-10 w-11/12 max-w-3xl text-center mx-auto h-full flex flex-col items-center justify-center gap-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <Image
            src={assets.profile_img}
            alt="profile picture"
            className="rounded-full w-20 h-20 object-cover"
            width={128}
            height={128}
          />
        </motion.div>

        <motion.div
          className="mb-3 text-xl md:text-2xl font-semibold text-white tracking-wide min-h-[1.6em]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gray-400">I am a </span>
          <span className="text-white">
            {roles[index].substring(0, subIndex)}
          </span>
          <span
            className="inline-block w-0.5 ml-1 bg-white animate-pulse align-middle"
            style={{ height: "1.2em" }}
          ></span>
        </motion.div>

        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-6xl lg:text-[66px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-600 drop-shadow-lg"
        >
          Hi! I'm <span className="text-white">Sanjay Thakur</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-gray-400"
        >
          I create modern digital experiences and build scalable web applications.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full font-medium text-lg text-white bg-gradient-to-r from-cyan-500 via-emerald-500 to-indigo-700 shadow-lg hover:scale-105 transition-all"
          >
            View my Work
          </a>
          <a
            href="https://drive.google.com/file/d/1vSneFAv9YDdIGkLKRKzIhosPyf1F114Y/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-medium text-lg text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all"
          >
            My Resume
          </a>
        </motion.div>

        <div className="mt-10 flex gap-5 text-2xl md:text-3xl justify-center">
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
              className="text-gray-300 hover:text-white transition-colors"
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
