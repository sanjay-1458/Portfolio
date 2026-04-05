import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#top" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#coding" },
];

function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = () => setIsMobileMenuOpen(true);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
        className={`w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-[100] transition-all duration-500 ${
          isScroll
            ? "bg-[#020617]/80 backdrop-blur-xl border-b border-cyan-900/50 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent py-6"
        }`}
      >
        <a href="#top" className="relative group">
          <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Image
            src={assets.logo}
            className="w-28 cursor-pointer relative z-10 filter brightness-150 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]"
            alt="Logo"
          />
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 py-2">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <a
                href={link.href}
                className="relative group font-mono text-xs lg:text-sm tracking-widest text-cyan-100/70 hover:text-cyan-300 transition-colors uppercase"
              >
                {link.name}

                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#22d3ee]"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(34,211,238,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-6 py-2 border border-cyan-500/40 rounded-full font-mono text-cyan-300 text-sm tracking-widest uppercase bg-[#030712]/50 backdrop-blur-md hover:bg-cyan-500/10 transition-all group"
          >
            System.Connect
            <Image
              src={assets.arrow_icon}
              alt="arrow icon"
              className="w-3 invert opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
            />
          </motion.a>

          <button
            onClick={openMenu}
            className="block md:hidden p-2 rounded-md bg-cyan-900/20 border border-cyan-500/30"
          >
            <Image
              src={assets.menu_black}
              alt="Menu"
              className="w-6 invert opacity-80"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-64 bg-[#030712]/95 border-l border-cyan-900/50 z-[120] flex flex-col shadow-[0_0_40px_rgba(34,211,238,0.15)]"
            >
              <div className="flex justify-end p-6 border-b border-cyan-900/50">
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-md bg-cyan-900/20 border border-cyan-500/30 hover:bg-cyan-900/40 transition-colors"
                >
                  <Image
                    src={assets.close_black}
                    alt="Close"
                    className="w-4 invert opacity-80"
                  />
                </button>
              </div>

              <ul className="flex flex-col gap-2 py-8 px-6">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <a
                      className="block py-3 px-4 rounded-lg font-mono text-sm tracking-widest text-cyan-100 hover:text-cyan-300 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30 transition-all uppercase"
                      onClick={closeMenu}
                      href={link.href}
                    >
                      <span className="text-cyan-600 mr-2">&gt;</span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}

                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 + 0.1 }}
                  className="mt-6"
                >
                  <a
                    className="flex items-center justify-between py-3 px-4 rounded-lg font-mono text-sm tracking-widest text-[#030712] bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all uppercase"
                    onClick={closeMenu}
                    href="#contact"
                  >
                    Connect <span className="text-xl leading-none">&rarr;</span>
                  </a>
                </motion.li>
              </ul>

              <div className="absolute bottom-6 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
