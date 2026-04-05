import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-[#020617] text-cyan-50 pt-20 pb-10 overflow-hidden font-sans border-t border-cyan-900/50">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(90deg, #06b6d4 1px, transparent 1px), linear-gradient(#06b6d4 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[60%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full"></div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#22d3ee]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center pb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="px-4 py-1 rounded border border-blue-500/30 bg-blue-900/20 text-cyan-500 font-mono text-xs tracking-widest flex items-center gap-2 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              SYSTEM.END_OF_FILE
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, type: "spring" }}
            viewport={{ once: true }}
            className="relative inline-block mb-8 group"
          >
            <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Image
              src={assets.logo}
              alt="Logo"
              width={120}
              height={48}
              className="relative z-10 mx-auto filter brightness-150 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          <motion.a
            href="mailto:sanjay2100012@gmail.com"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(34,211,238,0.4)",
            }}
            className="w-max flex items-center gap-3 mx-auto px-6 py-3 rounded-full border border-cyan-500/30 bg-[#030712]/80 backdrop-blur-md font-mono text-sm tracking-wide text-cyan-100 transition-all group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-cyan-400/10 to-blue-600/0 -translate-x-[100%] group-hover:animate-[btn-scan_1s_ease-in-out_infinite]"></div>

            <FaEnvelope className="w-4 h-4 text-cyan-400 group-hover:text-white transition-colors" />
            <span className="relative z-10 group-hover:text-white transition-colors">
              sanjay2100012@gmail.com
            </span>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between border-t border-cyan-900/50 pt-8 mt-4 relative"
        >
          <div className="absolute top-0 left-0 w-1 h-4 bg-cyan-500/50"></div>
          <div className="absolute top-0 right-0 w-1 h-4 bg-cyan-500/50"></div>

          <p className="order-2 sm:order-1 text-xs md:text-sm font-mono text-cyan-600 tracking-wider">
            &gt; &copy; 2026 SANJAY THAKUR. ALL PROTOCOLS FULFILLED.
          </p>

          <ul className="flex items-center gap-6 justify-center order-1 sm:order-2 mb-6 sm:mb-0">
            {[
              {
                name: "GitHub",
                icon: FaGithub,
                url: "https://github.com/sanjay-1458",
              },
              {
                name: "LinkedIn",
                icon: FaLinkedinIn,
                url: "https://www.linkedin.com/in/sanjaythakur2108/",
              },
            ].map((social, idx) => (
              <motion.li
                key={social.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                viewport={{ once: true }}
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-500/70 hover:text-cyan-300 transition-all group relative py-1 px-2"
                  title={`${social.name} Profile`}
                >
                  <span className="absolute left-0 top-0 bottom-0 w-2 border-l-2 border-t-2 border-b-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:-translate-x-0"></span>
                  <span className="absolute right-0 top-0 bottom-0 w-2 border-r-2 border-t-2 border-b-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0"></span>

                  <social.icon className="w-5 h-5 drop-shadow-[0_0_5px_rgba(34,211,238,0)] group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all" />
                  <span className="hidden sm:inline font-mono text-sm tracking-widest">
                    {social.name}
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes btn-scan {
          0% { transform: translateX(-150%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
      `,
        }}
      />
    </footer>
  );
}

export default Footer;
