import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 relative bg-darkTheme">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="profile picture"
          className="rounded-full w-32"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl md-3 font-Ovo"
      >
        Hi! I'm Sanjay Thakur{" "}
        <Image src={assets.hand_icon} alt="hello" className="w-6" />
      </motion.h3>
      <motion.h1
      initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Software Engineer.
      </motion.h1>
      <motion.p
      
      initial={{ opacity: 0 }}
        whileInView={{opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      
      className="max-w-2xl mx-auto font-Ovo">
        I am a software engineer passionate about building scalable and
        efficient solutions that solve real-world problems.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a

        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}

          href="#contact"
          className="px-10 py-3 border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          connect with me{" "}
          <Image alt="" src={assets.right_arrow_white} className="w-4" />{" "}
        </motion.a>
        <motion.a
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
          href="https://drive.google.com/file/d/1FPO6z0IxiWc3ZAfCfy3TyFtd76KO-hwt/view?usp=sharing"
          target="_blank"
          className="border rounded-full px-10 py-3 border-gray-500 flex items-center gap-2"
        >
          my resume <Image alt="" src={assets.download_icon} className="w-4" />
        </motion.a>
      </div>
    </div>
  );
}

export default Header;
