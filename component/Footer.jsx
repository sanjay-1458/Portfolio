import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Footer() {
  const ACCENT_COLOR_CLASS = "text-[#1cd8d2]";
  const HOVER_TEXT_CLASS = "hover:text-white transition-colors duration-300";

  return (
    <motion.div
      className="mt-24 py-12 bg-gray-950 text-gray-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={assets.logo}
              alt="Logo"
              width={100}
              height={40}
              className="mx-auto mb-4 filter brightness-150"
            />
          </motion.div>

          <motion.a
            href="mailto:sanjay.thakur21478@gmail.com"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className={`w-max flex items-center gap-2 mx-auto text-lg font-medium ${HOVER_TEXT_CLASS} group`}
            viewport={{ once: true }}
          >
            <FaEnvelope
              className={`w-5 h-5 ${ACCENT_COLOR_CLASS} group-hover:text-white transition-colors duration-300`}
            />
            sanjay.thakur21478@gmail.com
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center sm:flex items-center justify-between border-t border-gray-700 pt-8 mt-8"
          viewport={{ once: true }}
        >
          <p className="order-2 sm:order-1 text-sm text-gray-400">
            &copy; 2025 Sanjay Thakur. All rights reserved.
          </p>

          <ul className="flex items-center gap-6 justify-center order-1 sm:order-2 mt-6 sm:mt-0">
            <motion.li
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="https://github.com/sanjay-1458"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 ${HOVER_TEXT_CLASS} group`}
                title="GitHub Profile"
              >
                <FaGithub
                  className={`w-5 h-5 ${ACCENT_COLOR_CLASS} group-hover:text-white transition-colors`}
                />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <a
                href="https://www.linkedin.com/in/sanjaythakur2108/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 ${HOVER_TEXT_CLASS} group`}
                title="LinkedIn Profile"
              >
                <FaLinkedinIn
                  className={`w-5 h-5 ${ACCENT_COLOR_CLASS} group-hover:text-white transition-colors`}
                />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Footer;
