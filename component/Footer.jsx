import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

function Footer() {
  return (
    <motion.div
      className="mt-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Image src={assets.logo} alt="" className="w-33 mx-auto mb-2" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-max flex items-center gap-2 mx-auto"
          viewport={{ once: true }}
        >
          <Image src={assets.mail_icon} alt="" className="w-6" />
          sanjay.thakur21478@gmail.com
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6"
        viewport={{ once: true }}
      >
        <p>© 2025 Sanjay Thakur. All rights reserved</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/sanjay-1458" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sanjaythakur2108/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default Footer;
