"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS_LIST, Project, PERSONAL_INFO } from "@/data/portfolioData";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">
        Showcasing My Engineering Projects
      </h4>
      <h2 className="text-center text-5xl font-Ovo">My Tech Journey</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of projects
        showcasing my expertise in front-end development.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-x-6 gap-y-8 dark:text-black">
        {PROJECTS_LIST.map((proj, idx) => (
          <div key={idx} className="flex flex-col group">
            <div
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative w-full shadow-sm"
              style={{ backgroundImage: `url(${proj.bgImage})` }}
            >
              <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex flex-col justify-center duration-500 group-hover:bottom-6 shadow-md border border-gray-100">
                <h2 className="font-semibold text-base text-gray-900 truncate">
                  {proj.title}
                </h2>
                <p className="text-xs text-gray-600 mt-0.5 truncate">{proj.description}</p>
              </div>
            </div>

            <button
              onClick={() => setSelectedProject(proj)}
              className="w-full mt-3 text-center text-xs font-semibold uppercase tracking-wider py-2.5 px-4 rounded-md border outline-none select-none transition-all duration-200 border-black shadow-[2px_2px_0_#000] hover:bg-lime-300 hover:text-black focus:bg-lime-300 focus:text-black bg-white text-gray-800 cursor-pointer"
            >
              View Info
            </button>
          </div>
        ))}
      </div>

      {/* Show more button */}
      <a
        href={PERSONAL_INFO.github}
        target="_blank"
        rel="noreferrer"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover font-Outfit text-sm"
      >
        Show more
        <Image
          src="/assets/right-arrow-bold.png"
          alt="Right arrow"
          width={16}
          height={16}
          className="w-4 dark:hidden"
        />
        <Image
          src="/assets/right-arrow-bold-dark.png"
          alt="Right arrow"
          width={16}
          height={16}
          className="w-4 hidden dark:block"
        />
      </a>

      {/* View Info Modal */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-[#1a0033] text-gray-900 dark:text-white max-w-2xl w-full rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-white/20 relative max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start pb-4 border-b border-gray-200 dark:border-white/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-lime-600 dark:text-lime-400 font-semibold">
                  {selectedProject.description}
                </span>
                <h3 className="text-2xl font-bold font-Ovo mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-gray-700 dark:hover:text-white text-2xl font-bold px-2 cursor-pointer"
              >
                ×
              </button>
            </div>

            <div className="py-6 space-y-5 text-sm font-Outfit leading-relaxed">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-lime-300 uppercase tracking-wide text-xs mb-1">
                  Problem Statement
                </h4>
                <p className="text-gray-700 dark:text-gray-200">
                  {selectedProject.problemStatement}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-lime-300 uppercase tracking-wide text-xs mb-1">
                  Solution
                </h4>
                <p className="text-gray-700 dark:text-gray-200">
                  {selectedProject.solution}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-lime-300 uppercase tracking-wide text-xs mb-1">
                  Implementation
                </h4>
                <p className="text-gray-700 dark:text-gray-200">
                  {selectedProject.implementation}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-lime-300 uppercase tracking-wide text-xs mb-1">
                  Tech Stack
                </h4>
                <p className="text-gray-700 dark:text-gray-200 font-mono text-xs bg-gray-100 dark:bg-white/10 p-2.5 rounded-md">
                  {selectedProject.techStack}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-lime-300 uppercase tracking-wide text-xs mb-1">
                  Conclusion
                </h4>
                <p className="text-gray-700 dark:text-gray-200">
                  {selectedProject.conclusion}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-black dark:border-white text-xs font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                  >
                    GitHub Repo ↗
                  </a>
                )}
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-lime-400 text-black text-xs font-semibold hover:bg-lime-300 transition-all shadow-sm"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
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
