import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import Grid from "./Grid";
import { about } from "@/data";
import { FaCss3, FaGit, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.grace}
            alt="Olori"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I’m a developer with expertise in frontend, backend, and mobile
            applications, backed by 4 years of experience. I’ve had the
            opportunity to collaborate with leading organizations, helping them
            achieve their goals through innovative and effective software
            solutions.
          </p>
      <Grid />
      <ul className=" justify-center md:grid md:grid-cols-3 hidden gap-6 max-w-2xl">
        {about.map(({ icon, title, description }, index) => (
          <li key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:translate-y-1  duration-500 hover:shadow-black">
            {icon}
            <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
            <p className="text-gray-600 text-sm">{description} </p>
          </li>
        ))}
      </ul>
      <h4 className="my-6 text-gray-700 font-Ovo"> Tools i use </h4>
      <div className="flex items-center gap-3 sm:gap5">
        <div className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-2 duration-500">
        <FaGithub className="w-5 sma:w07" />
        </div>
        <div className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-2 duration-500">
        <FaReact className="w-5 sma:w07" />
        </div>
        <div className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-2 duration-500">
        <FaNodeJs className="w-5 sma:w07" />
        </div>
        <div className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-2 duration-500">
        <FaHtml5 className="w-5 sma:w07" />
        </div>
        <div className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-2 duration-500">
        <FaCss3 className="w-5 sma:w07" />
        </div>
        <div className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-2 duration-500">
        <FaGit className="w-5 sma:w07" />
        </div>

      </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
