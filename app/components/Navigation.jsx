"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import ThemeSwitch from "./ThemeSwitch";

const Navigation = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "My Work", href: "#work" },
    { name: "Contact Me", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 lg:px-8 xl:px-[8%] ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:shadow-white/20 dark:bg-black"
            : ""
        }`}
      >
        
          <h2 className="text-xl font-bold cursor-pointer flex items-center gap-4">DevGracies</h2>
       
        {/* Desktop Nav */}
        <ul
          className={`hidden md:flex items-center lg:gap-8 rounded-full px-12 py-3 gap-6 ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-gray-600 cursor-pointer">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          <ThemeSwitch />
          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-4 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            <h2 className="text-sm font-semibold">Contact</h2>
            <FaArrowRight />
          </Link>
          <button className="block md:hidden ml-3" onClick={() => setMenuOpen(true)}>
            <FaBars />
          </button>
        </div>

        {/* Mobile Side Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-black text-white z-50 transform transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="absolute top-6 right-6 cursor-pointer" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </div>
          <ul className="flex flex-col gap-6 pt-20 px-10 font-Ovo">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-gray-400 cursor-pointer"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
