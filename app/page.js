"use client";

import Image from "next/image";
import React from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { TextGenerateEffect } from "./components/ui/TextGenerateEffect";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-24 md:py-36 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20"
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left"
      >
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold tracking-widest"
        >
          Hello! I&#39;m Grace Adegunle
        </motion.h3>

        <TextGenerateEffect
          className="uppercase font-Ovo mt-2"
          words={"Problem Solver | Innovator | Software Developer"}
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-10 mt-4 max-w-2xl font-Ovo"
        >
          With a passion for building technology that empowers and inspires, I
          specialize in frontend, backend, and mobile development, transforming
          complex challenges into sleek, functional, and scalable solutions.
          I’ve got you covered. I believe every line of code tells a story, and
          I’m here to make yours unforgettable. <br />
          Ready to build something amazing?
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 mt-6 w-full">
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="#contact"
            className="px-10 py-3 bg-[#8E2DE2] text-white flex items-center gap-2 rounded-full"
          >
            Contact me
            <FaArrowRight className="w-4" />
          </motion.a>

          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            href="/Grace_Adegunle_Resume.pdf"
            download="/Grace_Adegunle_Resume.pdf"
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
          >
            My Resume
            <FaDownload />
          </motion.a>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -10 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl"
      >
        <Image
          src="/animate.png"
          alt="Grace"
          width={320}
          height={320}
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}
