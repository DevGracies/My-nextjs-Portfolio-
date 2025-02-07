import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
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
        className="flex w-full flex-col lg:flex-row items-center xl:justify-between gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.grace}
            alt="grace"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-Ovo">
            I’m a developer with expertise in frontend, backend, and mobile
            applications, backed by 4 years of experience. I’ve had the
            opportunity to collaborate with leading organizations, helping them
            achieve their goals through innovative and effective software
            solutions. Key Highlights:
          </p>
          <ul>
            <li>
              🎓 B.Sc. Computer Science: Strong foundation in software
              development
            </li>
            <li>
              {" "}
              💻 4+ Years of Experience: Frontend, Backend, Fullstack & Mobile.
            </li>
            <li>
              Languages: Html, css, javascript, react js, nextjs, react-native,
              nodejs
            </li>
            <li>
              🚀 Freelancer & Tech Enthusiast: Delivering impactful digital
              solutions{" "}
            </li>
            <li>
              🌎 Looking for Global Opportunities: Open to remote &
              international roles
            </li>
          </ul>
        </motion.div>
      </motion.div>
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-6 font-Ovo text-center"
      >
        {" "}
        My Toolkit{" "}
      </motion.h4>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-3 sm:gap-5"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center justify-center w-20 sm:w-16 sm:h-16 aspect-square rounded-xl cursor-pointer hover:translate-y-2 duration-500"
        >
          <FaGithub className="md:w-20 md:h-20 sm:w-16 sm:h-16" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center justify-center w-20 sm:w-16 sm:h-16 aspect-square rounded-xl cursor-pointer hover:translate-y-2 duration-500"
        >
          <FaReact className="md:w-20 md:h-20 sm:w-16 sm:h-16 fill-blue-600" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center justify-center w-20 sm:w-16 sm:h-16 aspect-square rounded-xl cursor-pointer hover:translate-y-2 duration-500"
        >
          <FaNodeJs className="md:w-20 md:h-20 sm:w-16 sm:h-16 fill-yellow-400" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center justify-center w-20 sm:w-16 sm:h-16 aspect-square rounded-xl cursor-pointer hover:translate-y-2 duration-500"
        >
          <FaHtml5 className="md:w-20 md:h-20 sm:w-16 sm:h-16 fill-red-400" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center justify-center w-20 sm:w-16 sm:h-16 aspect-square rounded-xl cursor-pointer hover:translate-y-2 duration-500"
        >
          <FaCss3 className="md:w-20 md:h-20 sm:w-16 sm:h-16 fill-blue-400" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center justify-center w-20 sm:w-16 sm:h-16 aspect-square rounded-xl cursor-pointer hover:translate-y-2 duration-500"
        >
          <FaGit className="md:w-20 md:h-20 sm:w-16 sm:h-16" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center justify-center w-20 sm:w-16 sm:h-16 aspect-square rounded-xl cursor-pointer hover:translate-y-2 duration-500"
        >
          <FaDatabase className="md:w-20 md:h-20 sm:w-16 sm:h-16" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center justify-center w-20 sm:w-16 sm:h-16 aspect-square rounded-xl cursor-pointer hover:translate-y-2 duration-500"
        >
          <FaBootstrap className="md:w-20 md:h-20 sm:w-16 sm:h-16 fill-purple" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center justify-center w-20 sm:w-16 sm:h-16 aspect-square rounded-xl cursor-pointer hover:translate-y-2 duration-500"
        >
          <RiTailwindCssFill className="md:w-20 md:h-20 sm:w-16 sm:h-16 fill-blue-900" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center justify-center w-20 sm:w-16 sm:h-16 aspect-square rounded-xl cursor-pointer hover:translate-y-2 duration-500"
        >
          <TbBrandNextjs className="md:w-20 md:h-20 sm:w-16 sm:h-16" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center justify-center w-20 sm:w-16 sm:h-16 aspect-square rounded-xl cursor-pointer hover:translate-y-2 duration-500"
        >
          <SiMongodb className="md:w-20 md:h-20 sm:w-16 sm:h-16 fill-green-300" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
