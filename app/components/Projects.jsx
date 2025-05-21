"use-client";
import { projects } from "../../data/index.js";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

import { motion } from "framer-motion";
import ReadMoreCard from "./ReadMoreCard";

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div id="work" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-center sm:text-5xl font-bold text-3xl font-Ovo text-[#8E2DE2]">
          Bringing Ideas to Life
        </h2>
        <i className="text-center flex font-Ovo justify-center">
          Here are just a few of the many projects I’ve built.
        </i>
      </motion.div>

      <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2">
        {projects.map(({ id, title, des, link, img }) => {
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              key={id}
              className={` hover:cursor-pointer hover:zoom-out-50 hover:scale-50 sm:w-96 sm:h-[450px] w-60 m-10 p-4 border-none rounded-2xl shadow-black-200 shadow-sm `}
            >
              <div className="w-full h-1/2">
                <Image
                  src={img}
                  alt="images of projects"
                  className="w-full rounded bg-[#8E2DE2] h-full object-cover object-center "
                />
              </div>
              <h2 className="font-semibold">{title} </h2>
              <ReadMoreCard text={des} />
              <div>
                <Link
                  className="flex justify-between items-center w-full h-full rounded p-3"
                  href={link}
                  target="_blank"
                >
                  <h6>Check live site</h6>
                  <div className="flex items-center border-none rounded-full h-8 w-8 justify-center text-[#8E2DE2]">
                    <FaLocationArrow />
                  </div>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
