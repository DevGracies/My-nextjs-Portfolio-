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
  FaJs,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

const techStack = [
  { name: "GitHub", icon: <FaGithub />, color: "" },
  { name: "React", icon: <FaReact />, color: "text-blue-500" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3 />, color: "text-blue-400" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "Git", icon: <FaGit />, color: "text-red-600" },
  { name: "Database", icon: <FaDatabase />, color: "text-yellow-500" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-600" },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill />, color: "text-cyan-700" },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "text-black dark:text-white",
  },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
];

const about = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-24 bg-gradient-to-b  min-h-screen"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl font-Ovo text-[#8E2DE2]"
      >
        Behind the Code
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center xl:justify-between gap-16 mt-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            src="/picture.png"
            width={300}
            height={300}
            alt="Developer"
            className="w-full h-auto rounded-3xl object-cover"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          className="flex-1"
        >
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
            </span>{" "}
            with 4+ years of experience. I collaborate with brands to build
            <span className="italic text-[#8E2DE2]"> creative</span> and
            <span className="italic text-[#8E2DE2]"> impactful solutions</span>.
          </motion.p>

          <motion.ul
            className="space-y-4 pl-2"
            variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
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
                emoji: "🌍",
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
                <span className="absolute left-0 top-1 text-[#8E2DE2] group-hover:scale-125 transition-transform duration-300">
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
        className="mt-20 mb-12 font-Ovo text-center text-5xl text-[#8E2DE2]"
      >
        My Toolkit
      </motion.h4>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-3 sm:grid-cols-6 gap-6 max-w-5xl mx-auto"
      >
        {techStack.map((tool, index) => {
          const isTopRow = index < 6;
          return (
            <motion.div
              key={index}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className={`relative group text-4xl sm:text-5xl flex items-center justify-center aspect-square rounded-xl cursor-pointer hover:scale-110 transition-transform duration-300 ${tool.color}`}
            >
              {tool.icon}
              <span
                className={`absolute ${
                  isTopRow ? "-top-10" : "top-20"
                } text-sm px-2 py-1 bg-black text-white dark:bg-white dark:text-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-50`}
              >
                {tool.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default about;
