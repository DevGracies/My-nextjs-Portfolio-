"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import ThemeSwitch from "./ThemeSwitch";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "My Work", href: "/work" },
  { name: "Contact Me", href: "/contact" },
];

const Navigation = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Automatically close menu when path changes
    setMenuOpen(false);
  }, [pathname]);

  const handleMobileClick = (href) => {
    router.push(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 lg:px-8 xl:px-[8%] transition-all duration-300 ${
        isScroll
          ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:shadow-white/20 dark:bg-black"
          : ""
      }`}
    >
      <h2 className="text-xl font-bold cursor-pointer flex items-center gap-4">
        DevGracies
      </h2>

      {/* Desktop Navigation */}
      <ul
        className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300 ${
          isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`hover:text-gray-600 ${
                pathname === link.href ? "text-[#8E2DE2] font-bold" : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <ThemeSwitch />

        <Link
          href="/contact"
          className="hidden lg:flex items-center gap-3 px-6 py-2 border border-gray-500 rounded-full font-Ovo"
        >
          <span className="text-sm font-semibold">Contact</span>
          <FaArrowRight />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden ml-3"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-black text-white z-50 transform transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="absolute top-6 right-6 cursor-pointer"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes />
        </div>
        <ul className="flex flex-col gap-6 pt-20 px-10 font-Ovo">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleMobileClick(link.href)}
                className={`text-left w-full hover:text-gray-400 ${
                  pathname === link.href ? "text-[#8E2DE2] font-bold" : ""
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
