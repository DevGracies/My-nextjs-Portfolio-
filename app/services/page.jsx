"use client";

import React from "react";
import { workExperience } from "../../data/index";
import { Button } from "../components/ui/MovingBorders.jsx";
import { motion } from "framer-motion";

const services = () => {
  return (
    <section className="relative z-10 px-6 md:px-12 py-24 bg-gradient-to-br from-zinc-100 via-white to-zinc-50 dark:from-zinc-900 dark:via-black dark:to-zinc-800">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-5xl font-Ovo text-gray-900 dark:text-white"
      >
        My <span className="text-[#8E2DE2]">Development Services</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-center mt-4 text-lg text-gray-600 dark:text-gray-300 font-Ovo"
      >
        Transforming visions into beautiful, scalable digital experiences.
      </motion.p>

      {/* Service Cards Grid */}
      <div className="mt-16 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {workExperience.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Button
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "linear-gradient(135deg, #8E2DE2, #4A00E0)",
                borderRadius: `calc(1.75rem * 0.96)`,
              }}
              className="w-full h-full text-white border-neutral-200 dark:border-slate-800 shadow-xl hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex flex-col items-center text-center p-6 gap-5">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="w-20 h-20 object-contain"
                />
                <h3 className="text-xl font-semibold font-Ovo text-white">
                  {card.title}
                </h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Subtle BG Grid */}
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

export default services;
