"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaMoon, FaRegMoon, FaTimes } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";

const Navigation = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenu = useRef();
  const openMenu = () => {
    sideMenu.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenu.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 lg:px-8 xl:px-[8%] ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:shadow-white/20 dark:bg-black"
            : ""
        }`}
      >
        <a href="#top" className="flex items-cen ter gap-4">
          <h2 className="text-xl font-bold cursor-pointer">DevGracies</h2>
        </a>

        <ul
          className={`hidden md:flex items-center lg:gap-8 rounded-full px-12 py-3 gap-6 ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
          } `}
        >
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
            <a className="hover:text-gray-600 cursor-pointer" href="#services">
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
          {isDarkMode ? (
            <FaSun onClick={() => setIsDarkMode((prev) => !prev)} />
          ) : (
            <FaRegMoon onClick={() => setIsDarkMode((prev) => !prev)} />
          )}
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
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 bg-black text-white"
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
