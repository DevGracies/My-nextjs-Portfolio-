"use client";
import { useState, useEffect } from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden px-5 sm:px-10 mx-auto">
      <Navigation />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
