"use client";

import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  return (
    <div className="mt-20">
      <div className="text-center">
        <a href="#top" className="inline-block mb-3">
          <span className="text-3xl sm:text-4xl font-Outfit font-bold tracking-tight text-gray-900 dark:text-white">
            {PERSONAL_INFO.name}
            <span className="text-rose-500 font-extrabold text-3xl sm:text-4xl">.</span>
          </span>
        </a>

        <div className="w-max flex items-center gap-2 mx-auto font-Outfit text-sm text-gray-700 dark:text-gray-300">
          <Image
            src="/assets/mail_icon.png"
            alt="Mail"
            width={24}
            height={18}
            className="w-6 dark:hidden"
          />
          <Image
            src="/assets/mail_icon_dark.png"
            alt="Mail"
            width={24}
            height={18}
            className="w-6 hidden dark:block"
          />
          <a
            href="#contact"
            className="hover:underline text-gray-800 dark:text-gray-200 font-medium"
          >
            Send a message via Contact Form
          </a>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 dark:border-white/30 mx-[10%] mt-12 py-6 font-Outfit text-sm text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href={PERSONAL_INFO.github}
              className="hover:underline hover:text-black dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href={PERSONAL_INFO.linkedin}
              className="hover:underline hover:text-black dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href={PERSONAL_INFO.leetcode}
              className="hover:underline hover:text-black dark:hover:text-white transition-colors"
            >
              LeetCode
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
