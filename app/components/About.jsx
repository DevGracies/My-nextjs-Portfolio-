"use client";

import React from "react";
import Image from "next/image";
import {
  FaBootstrap,
  FaCss3,
  FaDatabase,
  FaGit,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const techStack = [
  { icon: <FaGithub />, color: "" },
  { icon: <FaReact />, color: "text-blue-500" },
  { icon: <FaNodeJs />, color: "text-green-600" },
  { icon: <FaHtml5 />, color: "text-orange-500" },
  { icon: <FaCss3 />, color: "text-blue-400" },
  { icon: <FaGit />, color: "text-red-600" },
  { icon: <FaDatabase />, color: "text-yellow-500" },
  { icon: <FaBootstrap />, color: "text-purple-600" },
  { icon: <RiTailwindCssFill />, color: "text-cyan-700" },
  { icon: <TbBrandNextjs />, color: "text-black dark:text-white" },
  { icon: <SiMongodb />, color: "text-green-400" },
  //  { icon: <FaT />, color: "text-blue-500" },
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo text-[#8E2DE2]"
      >
        Behind the Code
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center xl:justify-between gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none overflow-hidden shadow-lg"
        >
          <Image
            src="/picture.png"
            width={300}
            height={300}
            alt="grace"
            className="w-full rounded-3xl object-cover"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          className="flex-1"
        >
          {/* Animated Paragraph */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}
            className="mb-10 max-w-2xl font-Ovo text-lg leading-relaxed text-gray-800 dark:text-gray-200"
          >
            I’m a{" "}
            <span className="text-[#8E2DE2] font-bold">Software Developer</span>{" "}
            with expertise in
            <span className="text-[#8E2DE2] font-bold"> frontend</span>,
            <span className="text-[#8E2DE2] font-bold"> backend</span>, and
            <span className="text-[#8E2DE2] font-bold">
              {" "}
              mobile applications
            </span>
            , backed by 4 years of experience. I’ve collaborated with leading
            organizations, driving success through
            <span className="italic text-pink-500"> innovative</span> and
            <span className="italic text-pink-500">
              {" "}
              impactful software solutions
            </span>
            .
          </motion.p>

          <motion.ul
            className="space-y-4 list-none pl-2"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.25,
                },
              },
            }}
          >
            {[
              {
                emoji: "🎓",
                text: "B.Sc. Computer Science: Strong foundation in software development",
              },
              {
                emoji: "💻",
                text: "4+ Years Experience: Frontend, Backend, Fullstack & Mobile",
              },
              {
                emoji: "🛠",
                text: "Languages: HTML, CSS, JS, React, Next.js, React Native, Node.js",
              },
              {
                emoji: "🚀",
                text: "Freelancer & Tech Enthusiast: Impactful digital solutions",
              },
              {
                emoji: "🌎",
                text: "Open to global remote and international roles",
              },
            ].map(({ emoji, text }, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="relative pl-6 text-base sm:text-lg text-gray-700 dark:text-gray-200 font-medium group"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-1 text-[#8E2DE2] group-hover:scale-125 transition-transform duration-300"
                >
                  {emoji}
                </span>
                <span className="ml-2 group-hover:text-[#8E2DE2] transition-colors duration-300">
                  {text}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-10 font-Ovo text-center text-5xl text-[#8E2DE2]"
      >
        My Toolkit
      </motion.h4>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-3 sm:grid-cols-6 gap-6 max-w-4xl mx-auto"
      >
        {techStack.map((tool, index) => (
          <motion.div
            key={index}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className={`text-4xl sm:text-5xl flex items-center justify-center aspect-square rounded-xl cursor-pointer hover:scale-110 transition-transform duration-300 ${tool.color}`}
          >
            {tool.icon}
          </motion.div>
        ))}
      </motion.div>

      <div className="sm:hidden mt-6 grid grid-cols-5 gap-4 max-w-xs mx-auto">
        {techStack.slice(6, 11).map((tool, index) => (
          <motion.div
            key={index}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className={`text-4xl flex items-center justify-center aspect-square rounded-xl cursor-pointer hover:scale-110 transition-transform duration-300 ${tool.color}`}
          >
            {tool.icon}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default About;
