"use client";

import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  return (
    <>
      {/* Ambient Top Background Image for Light Mode */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden pointer-events-none">
        <Image
          src="/assets/header-bg-color.png"
          alt=""
          width={3276}
          height={2496}
          priority
          className="w-full"
        />
      </div>

      <div
        id="top"
        className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-10"
      >
        <div>
          <Image
            src="/assets/mani_photo.jpg"
            alt={PERSONAL_INFO.name}
            width={128}
            height={128}
            priority
            className="rounded-full w-32 h-32 object-cover object-top shadow-md border-2 border-white dark:border-purple-500/30"
          />
        </div>

        <h3 className="flex items-end justify-center gap-2 text-xl md:text-2xl mb-1 font-Ovo">
          Hi! I&apos;m {PERSONAL_INFO.name}{" "}
          <Image
            src="/assets/hand-icon.png"
            alt="Waving hand"
            width={24}
            height={24}
            className="w-6 inline-block mb-1"
          />
        </h3>

        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo leading-tight">
          {PERSONAL_INFO.roleTitle1}
          <br />
          {PERSONAL_INFO.roleTitle2}
        </h1>

        <p className="max-w-2xl mx-auto font-Ovo text-gray-700 dark:text-white/90 text-sm sm:text-base leading-relaxed">
          {PERSONAL_INFO.summary}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="#contact"
            className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent dark:border-white/50 hover:bg-gray-800 transition-all font-Ovo text-sm sm:text-base"
          >
            contact me{" "}
            <Image
              src="/assets/right-arrow-white.png"
              alt=""
              width={16}
              height={16}
              className="w-4"
            />
          </a>

          <a
            href={PERSONAL_INFO.resumeUrl}
            download="Mani_Joshi_Alokam_Resume.pdf"
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black hover:bg-gray-100 transition-all font-Ovo text-sm sm:text-base shadow-sm"
          >
            my resume{" "}
            <Image
              src="/assets/download-icon.png"
              alt=""
              width={16}
              height={16}
              className="w-4"
            />
          </a>
        </div>
      </div>
    </>
  );
}
