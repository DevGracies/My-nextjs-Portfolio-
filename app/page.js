"use client";
import { useState, useEffect } from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  return (
    <div className="relative justify-center overflow-hidden items-center flex sm:px-10 px-5 mx-auto flex-col">
      <Navigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
