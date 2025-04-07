import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div
      className="text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 md:mt-10 sm:mt-32 mt-14"
      id="top"
    >
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end  text-3xl font-bold md:text-4xl tracking-widest"
      >
        {" "}
        Hello! I'm Grace Adegunle
      </motion.h3>
      <TextGenerateEffect
        className=" uppercase font-Ovo"
        words={"Problem Solver | Innovator |  Developer"}
      />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto md:tracking-wider mb-4 text-lg md:text-xl lg:text-lg text-center"
      >
        With a passion for building technology that empowers and inspires, I
        specialize in frontend, backend, and mobile development, transforming
        complex challenges into sleek, functional, and scalable solutions. I’ve
        got you covered. I believe every line of code tells a story, and I’m
        here to make yours unforgettable. <br />
        Ready to build something amazing?
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border-white  bg-[#8E2DE2]  text-white gap-2 flex rounded-full items-center "
        >
          {" "}
          Contact me
          <FaArrowRight className="w-4" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Grace_Adegunle_Resume.pdf"
          download="/Grace_Adegunle_Resume.pdf"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 "
        >
          {" "}
          My Resume
          <FaDownload />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
