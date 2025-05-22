"use client";

import { projects } from "../../data/index";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";
import ReadMoreCard from "../components/ReadMoreCard.jsx";

const work = () => {
  return (
    <section className="relative z-10 px-4 md:px-12 py-24 bg-gradient-to-br from-zinc-100 via-white to-zinc-50 dark:from-zinc-900 dark:via-black dark:to-zinc-800">
      {/* Hero Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold font-Ovo text-transparent bg-clip-text bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]">
          Bringing Ideas to Life
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 font-Ovo">
          Explore a selection of few of the many projects I’ve built,
          work—crafted with code and creativity.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {projects.map(({ id, title, des, link, img }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: id * 0.1 }}
            className="relative group w-full max-w-sm bg-white/70 dark:bg-white/10 border border-zinc-300 dark:border-zinc-700 rounded-3xl shadow-xl overflow-hidden backdrop-blur-xl transition-transform duration-300 hover:scale-[1.03]"
          >
            {/* Image */}
            <div className="h-52 w-full overflow-hidden">
              <Image
                src={img}
                alt={title}
                width={500}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Text content */}
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-xl font-semibold font-Ovo text-[#8E2DE2]">
                {title}
              </h3>
              <ReadMoreCard text={des} />
              <Link
                href={link}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 text-sm mt-2 text-[#8E2DE2] hover:underline font-medium"
              >
                Check Live Site
                <FaLocationArrow className="text-base" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subtle Grid BG */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default work;
