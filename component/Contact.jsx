import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Establishing connection...");

    const formData = new FormData(event.target);
    formData.append("access_key", "2d165571-89fb-4400-b229-5dcfcaffdc65");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Transmission Successful. I will process your data shortly.");
        event.target.reset();
      } else {
        console.error("Web3Forms Error:", data);
        setResult(
          `Transmission Failed: ${data.message || "Unknown anomaly detected."}`,
        );
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setResult("Connection Lost. Please check your network node.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 120, damping: 12 },
    },
  };

  return (
    <section
      id="contact"
      className="bg-[#020617] text-cyan-50 w-full px-[5%] py-24 scroll-mt-20 relative overflow-hidden font-sans min-h-screen flex items-center"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <ParticleBackground />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(90deg, #06b6d4 1px, transparent 1px), linear-gradient(#06b6d4 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-cyan-600/10 blur-[120px] rounded-full"></div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] left-[5%] w-64 h-64 border border-cyan-500/10 border-dashed rounded-full flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-40 h-40 border border-blue-500/20 rounded-full"
          ></motion.div>
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[10%] w-12 h-12 flex items-center justify-center"
        >
          <div className="absolute w-full h-[1px] bg-cyan-500/40"></div>
          <div className="absolute h-full w-[1px] bg-cyan-500/40"></div>
          <div className="absolute w-8 h-8 border border-cyan-400/40 rounded-full"></div>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="px-6 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 font-mono tracking-widest uppercase text-xs shadow-[0_0_15px_rgba(34,211,238,0.2)] backdrop-blur-md flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Communication_Link
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]"
        >
          Initialize Connection
          <span className="text-cyan-400 animate-pulse">_</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-2xl mx-auto mt-2 mb-16 font-light text-cyan-100/60 text-lg"
        >
          Open a direct channel to my system. Transmit your queries,
          collaboration requests, or feedback below.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            type: "spring",
            bounce: 0.3,
          }}
          className="relative max-w-3xl mx-auto p-8 md:p-10 bg-[#030712]/80 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-blue-900/50 overflow-hidden"
        >
          <motion.div
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent shadow-[0_0_15px_#22d3ee] z-50 pointer-events-none"
          />

          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/50 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/50 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50 pointer-events-none"></div>

          <motion.form
            variants={formContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="relative z-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div variants={itemVariants} className="relative group">
                <div className="absolute inset-0 bg-cyan-500/20 blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  className="w-full relative z-10 p-4 bg-black/50 outline-none border border-blue-900/50 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-cyan-50 placeholder-cyan-800/70 font-mono text-sm shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"
                  type="text"
                  placeholder="> Enter Identification"
                  name="name"
                  required
                />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-500/50 group-focus-within:bg-cyan-400 transition-colors z-20"></div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative group">
                <div className="absolute inset-0 bg-cyan-500/20 blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  className="w-full relative z-10 p-4 bg-black/50 outline-none border border-blue-900/50 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-cyan-50 placeholder-cyan-800/70 font-mono text-sm shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"
                  type="email"
                  placeholder="> Enter Node Address (Email)"
                  name="email"
                  required
                />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-500/50 group-focus-within:bg-cyan-400 transition-colors z-20"></div>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative group mb-10"
            >
              <div className="absolute inset-0 bg-cyan-500/20 blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                className="w-full relative z-10 p-4 bg-black/50 outline-none border border-blue-900/50 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-cyan-50 placeholder-cyan-800/70 font-mono text-sm resize-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"
                rows="6"
                placeholder="> Input Data Packet (Message)"
                name="message"
                required
              ></motion.textarea>
              <div className="absolute bottom-1.5 right-0 w-2 h-2 bg-cyan-500/50 group-focus-within:bg-cyan-400 transition-colors z-20"></div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 25px rgba(34,211,238,0.5)",
                }}
                type="submit"
                disabled={isSubmitting}
                className={`py-3.5 px-10 w-full md:w-max flex items-center justify-center gap-3 
                  bg-cyan-500/10 border border-cyan-400 text-cyan-300 font-bold font-mono tracking-widest text-sm
                  mx-auto transition-all duration-300 backdrop-blur-sm relative overflow-hidden group
                  ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-cyan-400 hover:text-cyan-950"}`}
              >
                <div className="absolute inset-0 w-[20%] h-full bg-white/30 skew-x-[-20deg] -translate-x-[150%] group-hover:animate-[btn-scan_0.7s_ease-in-out]"></div>

                {isSubmitting ? "TRANSMITTING..." : "EXECUTE TRANSMISSION"}

                {!isSubmitting && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <path d="m22 2-7 19-3-8-8-3Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                )}
              </motion.button>
            </motion.div>

            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`mt-8 text-center font-mono text-sm px-4 py-2 border rounded backdrop-blur-sm inline-block w-full ${
                    result.includes("Successful")
                      ? "text-green-400 border-green-500/30 bg-green-500/10 shadow-[0_0_10px_rgba(34,197,94,0.2)]"
                      : result.includes("Failed") || result.includes("Lost")
                        ? "text-red-400 border-red-500/30 bg-red-500/10 shadow-[0_0_10px_rgba(239,68,68,0.2)]"
                        : "text-cyan-400 border-cyan-500/30 bg-cyan-500/10 shadow-[0_0_10px_rgba(34,211,238,0.2)]"
                  }`}
                >
                  <span className="animate-pulse mr-2">_</span>
                  {result}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </motion.div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes btn-scan {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(500%) skewX(-20deg); }
        }
      `,
        }}
      />
    </section>
  );
}

export default Contact;
