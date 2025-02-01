"use client";
import React, { useRef } from "react";
import { FaMoon, FaTimes } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Toggle } from "./Toogle";

const Navigation = () => {
  const sideMenu = useRef();
  const openMenu = () => {
    sideMenu.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenu.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      <nav className="fixed bg-custom-gradient top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 lg:px-8 xl:px-[8%]">
        <a href="#top" className="flex items-center gap-4">
          <h2 className="text-xl font-bold cursor-pointer">DevGracies</h2>
        </a>

        <ul className="hidden md:flex items-center lg:gap-8 rounded-full px-12 py-3 gap-6 ">
          <li>
            {" "}
            <a className="hover:text-gray-600 cursor-pointer" href="#top">
              Home
            </a>{" "}
          </li>
          <li>
            <a className="hover:text-gray-600 cursor-pointer" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="hover:text-gray-600 cursor-pointer" href="#Services">
              Services
            </a>
          </li>
          <li>
            <a className="hover:text-gray-600 cursor-pointer" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="hover:text-gray-600 cursor-pointer" href="#contact">
              Contact Me{" "}
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <Toggle />
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-4 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            <h2 className="text-sm font-semibold">Contact</h2>
            <FaArrowRight />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <FaBars />
          </button>
        </div>
        <ul
          ref={sideMenu}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 bg-custom-gradient"
        >
          <div
            className="absolute right-6 top-6 cursor-pointer "
            onClick={closeMenu}
          >
            <FaTimes />
          </div>
          <li>
            {" "}
            <a
              className="hover:text-gray-600 cursor-pointer font-Ovo"
              onClick={closeMenu}
              href="#top"
            >
              Home
            </a>{" "}
          </li>
          <li>
            <a
              className="hover:text-gray-600 cursor-pointer font-Ovo"
              onClick={closeMenu}
              href="#about"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-600 cursor-pointer font-Ovo"
              onClick={closeMenu}
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-600 cursor-pointer font-Ovo"
              onClick={closeMenu}
              href="#work"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-600 cursor-pointer font-Ovo"
              onClick={closeMenu}
              href="#contact"
            >
              Contact Me{" "}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
