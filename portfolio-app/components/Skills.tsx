"use client";

import Image from "next/image";
import { SKILLS_LIST } from "@/data/portfolioData";

export default function Skills() {
  return (
    <div id="skills" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Expertise</h4>
      <h2 className="text-center text-5xl font-Ovo">My Skills &amp; Specialties</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Focused on building clean, high-performance web applications using modern full-stack workflows and user-first design.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {SKILLS_LIST.map((item, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white transition-all flex flex-col justify-between"
          >
            <div>
              <Image
                src={item.icon}
                alt={item.title}
                width={40}
                height={40}
                className="w-10"
              />
              <h3 className="text-lg my-4 text-gray-700 dark:text-white font-medium">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-5 dark:text-white/80 font-Ovo">
                {item.description}
              </p>
            </div>

            <a
              href={item.link || "#skills"}
              className="flex items-center gap-2 text-sm mt-5 font-Outfit text-gray-700 dark:text-white/90"
            >
              Read more{" "}
              <Image
                src="/assets/right-arrow.png"
                alt=""
                width={16}
                height={16}
                className="w-4"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
