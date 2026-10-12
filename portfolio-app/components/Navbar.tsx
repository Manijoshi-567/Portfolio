"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Default to clean light mode (white background) unless user explicitly chose dark
    if (localStorage.theme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDarkMode(true);
    }
  };

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white/80 dark:bg-[#11001F]/80 backdrop-blur-lg shadow-sm dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top" className="flex items-center cursor-pointer mr-14">
          <span className="text-2xl sm:text-3xl font-Outfit font-bold tracking-tight text-gray-900 dark:text-white">
            {PERSONAL_INFO.name}
            <span className="text-rose-500 font-extrabold text-2xl sm:text-3xl">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <a className="font-Ovo hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="#projects">
              My Projects
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} aria-label="Toggle Dark Mode" className="cursor-pointer">
            <Image
              src={isDarkMode ? "/assets/sun_icon.png" : "/assets/moon_icon.png"}
              alt="Theme toggle"
              width={24}
              height={24}
              className="w-6"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            Contact
            <Image
              src={isDarkMode ? "/assets/arrow-icon-dark.png" : "/assets/arrow-icon.png"}
              alt=""
              width={12}
              height={12}
              className="w-3"
            />
          </a>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="block md:hidden ml-3 cursor-pointer"
            aria-label="Open mobile menu"
          >
            <Image
              src={isDarkMode ? "/assets/menu-white.png" : "/assets/menu-black.png"}
              alt="Menu"
              width={24}
              height={24}
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Slide-in Menu */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-all duration-500 shadow-2xl dark:bg-[#2a004a] dark:text-white ${
            isMenuOpen ? "right-0" : "-right-64"
          }`}
        >
          <div className="absolute right-6 top-6">
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close mobile menu">
              <Image
                src={isDarkMode ? "/assets/close-white.png" : "/assets/close-black.png"}
                alt="Close"
                width={20}
                height={20}
                className="w-5 cursor-pointer"
              />
            </button>
          </div>

          <li>
            <a onClick={() => setIsMenuOpen(false)} className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => setIsMenuOpen(false)} className="font-Ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a onClick={() => setIsMenuOpen(false)} className="font-Ovo" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a onClick={() => setIsMenuOpen(false)} className="font-Ovo" href="#projects">
              My Projects
            </a>
          </li>
          <li>
            <a onClick={() => setIsMenuOpen(false)} className="font-Ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
