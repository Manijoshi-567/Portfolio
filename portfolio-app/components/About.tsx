"use client";

import { useState } from "react";
import Image from "next/image";
import {
  PERSONAL_INFO,
  ABOUT_CARDS,
  EDUCATION_HISTORY,
  TOOLS_LIST,
  AboutCard,
} from "@/data/portfolioData";

export default function About() {
  const [activeModal, setActiveModal] = useState<AboutCard | null>(null);

  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {/* Left Side: About Image */}
        <div className="w-64 sm:w-80 rounded-3xl max-w-none overflow-hidden shadow-lg border border-gray-200 dark:border-white/10">
          <Image
            src="/assets/mani_about.jpg"
            alt="Mani"
            width={320}
            height={420}
            className="w-full h-auto object-cover rounded-3xl"
          />
        </div>

        {/* Right Side: Bio, 3 Cards, Tools */}
        <div className="flex-1 w-full">
          <p className="mb-10 max-w-2xl font-Ovo leading-relaxed">
            {PERSONAL_INFO.aboutText}
          </p>

          {/* 3 Info Cards */}
          <ul className="grid grid-flow-row sm:grid-flow-col auto-cols-fr gap-4 max-w-2xl w-full">
            {ABOUT_CARDS.map((card, index) => (
              <li
                key={index}
                onClick={() => setActiveModal(card)}
                className="flex flex-col justify-between border-[0.5px] border-gray-400 rounded-xl p-5 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 transition-all"
              >
                <div>
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={28}
                    height={28}
                    className="w-7 mt-1 dark:hidden"
                  />
                  <Image
                    src={card.iconDark}
                    alt={card.title}
                    width={28}
                    height={28}
                    className="w-7 mt-1 hidden dark:block"
                  />
                  <h3 className="my-3 font-semibold text-gray-700 dark:text-white text-base leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 dark:text-white/80 text-xs sm:text-sm leading-tight mb-4">
                    {card.description}
                  </p>
                </div>

                <button
                  type="button"
                  className="text-xs font-medium text-left text-indigo-600 dark:text-indigo-400 mt-auto transition-colors duration-200 hover:text-indigo-800 dark:hover:text-indigo-300 cursor-pointer"
                >
                  More details →
                </button>
              </li>
            ))}
          </ul>

          {/* Tools I Use */}
          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">
            Tools I use
          </h4>
          <ul className="flex items-center gap-3 sm:gap-5 flex-wrap">
            {TOOLS_LIST.map((tool, idx) => (
              <li
                key={idx}
                title={tool.name}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 bg-transparent"
              >
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  width={28}
                  height={28}
                  className="w-5 sm:w-7"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal Dialog for More details */}
      {activeModal && (
        <div
          onClick={() => setActiveModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-[#1f0238] text-gray-800 dark:text-white max-w-lg w-full rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-white/20 relative"
          >
            <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-white/10">
              <h3 className="text-xl font-bold font-Ovo">
                {activeModal.popupTitle}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-gray-700 dark:hover:text-white text-2xl font-bold px-2 cursor-pointer"
              >
                ×
              </button>
            </div>

            <div className="py-6">
              {activeModal.popupType === "education" ? (
                <div className="space-y-4 text-left font-Outfit">
                  {EDUCATION_HISTORY.map((edu, i) => (
                    <div key={i}>
                      <h4 className="font-bold text-base text-gray-800 dark:text-white">
                        {edu.period}
                      </h4>
                      <p className="font-medium text-gray-700 dark:text-gray-300 text-sm">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {edu.degree}
                      </p>
                      {i < EDUCATION_HISTORY.length - 1 && (
                        <hr className="border-gray-200 dark:border-gray-700 my-3" />
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="font-Ovo text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-200">
                  {activeModal.popupContent}
                </p>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-6 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-semibold hover:opacity-90 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
