import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function IntroAnimation({ onFinish }) {
  const [visible, setVisible] = useState(true);
  const [text, setText] = useState("");

  useEffect(() => {
    let isMounted = true;

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const typeSequence = async () => {
      await sleep(500);

      if (!isMounted) return;
      setText("n");
      await sleep(600);

      if (!isMounted) return;
      setText("np");
      await sleep(600);

      if (!isMounted) return;
      setText("npx");
      await sleep(1200);

      if (!isMounted) return;
      setText("np");
      await sleep(500);

      if (!isMounted) return;
      setText("npm");
      await sleep(500);

      if (!isMounted) return;
      setText("npm ");
      await sleep(500);

      if (!isMounted) return;
      setText("npm i");
      await sleep(500);

      if (!isMounted) return;
      setText("npm in");
      await sleep(500);

      if (!isMounted) return;
      setText("npm ini");
      await sleep(500);

      if (!isMounted) return;
      setText("npm init");

      await sleep(1000);
      if (!isMounted) return;
      setVisible(false);
    };

    typeSequence();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          key="intro-wrapper"
          className="fixed inset-0 bg-[#020617] z-[100] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.1,
            filter: "blur(20px)",
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            ></div>

            <div className="absolute inset-0 mix-blend-color-dodge">
              <div className="absolute w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(34,211,238,0.8)_0%,transparent_60%)] rounded-full animate-sweep opacity-80 blur-[60px]"></div>
            </div>
          </div>

          <div className="relative z-10 w-full max-w-[95vw] xl:max-w-[85vw] px-2 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute -top-8 md:-top-12 left-6 md:left-16 flex items-center gap-3 text-cyan-400 text-xs sm:text-sm md:text-2xl tracking-[0.2em] drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] uppercase"
              style={{ fontFamily: "'Fira Code', monospace" }}
            >
              <span className="w-2 h-2 md:w-4 md:h-4 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_15px_#22d3ee]"></span>
              System.Initialize
            </motion.div>

            <motion.div
              initial={{ width: "0%", opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="w-full bg-black/80 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl md:rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.9),inset_0_0_40px_rgba(34,211,238,0.1)] p-6 sm:p-10 md:p-16 flex items-center justify-between overflow-hidden"
            >
              <div className="flex items-center min-h-[60px] sm:min-h-[100px] md:min-h-[160px]">
                <span
                  className="text-cyan-600 mr-3 md:mr-8 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)] text-[clamp(2.5rem,5vw,7rem)]"
                  style={{ fontFamily: "'Fira Code', monospace" }}
                >
                  ~
                </span>

                <span
                  className="text-cyan-400 tracking-[0.1em] md:tracking-[0.15em] leading-none drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] whitespace-nowrap font-black text-[clamp(3rem,8vw,11rem)]"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  {text}
                </span>

                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="ml-2 md:ml-6 bg-green-400 inline-block shadow-[0_0_20px_#4ade80,0_0_40px_#4ade80] w-[clamp(0.5rem,1.5vw,2.5rem)] h-[clamp(3rem,8vw,11rem)]"
                />
              </div>

              <span
                className="text-cyan-500/30 shrink-0 drop-shadow-[0_0_20px_rgba(34,211,238,0.1)] ml-4 text-[clamp(3rem,8vw,11rem)]"
                style={{ fontFamily: "'Fira Code', monospace" }}
              >
                &gt;
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@500;700&family=Orbitron:wght@700;900&display=swap');

        @keyframes sweep {
          0% { 
            top: -30%; 
            right: -30%; 
            transform: translate(0, 0); 
          }
          100% { 
            top: 130%; 
            right: 130%; 
            transform: translate(-100vw, 100vh); 
          }
        }
        .animate-sweep {
          animation: sweep 4.5s linear infinite;
        }
      `,
        }}
      />
    </AnimatePresence>
  );
}

export default IntroAnimation;
