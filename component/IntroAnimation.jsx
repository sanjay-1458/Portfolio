import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function IntroAnimation({ onFinish }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{
            opacity: 0,
            scale: 1.5,
            transition: { duration: 0.7, ease: "easeOut" },
          }}
        >
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=" text-6xl md:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
          >
            Hello World
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="h-1 mt-4 bg-cyan-400 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroAnimation;
