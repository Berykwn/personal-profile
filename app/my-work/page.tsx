'use client'

import { useState } from "react";
import { WORKJOURNEY } from "./data/work-journey";
import { PROJECTS } from "./data/projects";

export default function MyWork() {
  const [tabName, setTabName] = useState("work");

  return (
    <div className="max-w-5xl mx-auto px-5 md:px-8 py-12 md:py-16">
      <div className="mb-10 md:mb-12">
        <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-[0.1em] mb-2">
          Experience
        </p>
        <h1 className="text-[24px] md:text-[28px] font-light text-neutral-900 tracking-[-0.03em]">
          Things I&apos;ve been trusted with.
        </h1>
      </div>

      {/* Tab bar */}
      <div className="flex border-b border-black/[0.06] mb-8">
        {["work", "projects"].map((tab) => (
          <button
            key={tab}
            onClick={() => setTabName(tab)}
            className={`
              text-[11px] font-mono uppercase tracking-[0.08em] pb-3 mr-7
              border-b-[1.5px] -mb-px transition-colors duration-150
              ${tabName === tab
                ? "border-neutral-900 text-neutral-900"
                : "border-transparent text-neutral-400 hover:text-neutral-600"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Work tab */}
      {tabName === "work" && (
        <div>
          {WORKJOURNEY.map((job, i) => (
            <div
              key={i}
              className="py-6 border-t border-black/[0.06] last:border-b last:border-black/[0.06]
                         flex flex-col gap-3
                         md:grid md:grid-cols-[160px_1fr] md:gap-x-12"
            >
              {/* Period + Company */}
              <div className="flex items-baseline gap-3 md:flex-col md:gap-0 md:pt-0.5">
                <span className="text-[11px] text-neutral-400 font-mono leading-[1.5]">
                  {job.period[0]} – {job.period[1]}
                </span>
                <span className="text-[11.5px] text-neutral-400">
                  {job.company}
                </span>
              </div>

              {/* Role + desc + tags */}
              <div>
                <h2 className="text-[13.5px] md:text-[14px] font-medium text-neutral-900 mb-2 tracking-[-0.01em]">
                  {job.role}
                </h2>
                <p className="text-[12.5px] text-neutral-500 leading-[1.7] mb-3">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono text-neutral-500 border border-black/[0.1] px-[7px] py-[2px] rounded-[3px]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Projects tab */}
      {tabName === "projects" && (
        <div>
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className="py-6 border-t border-black/[0.06] last:border-b last:border-black/[0.06]
                         flex flex-col gap-3
                         md:grid md:grid-cols-[160px_1fr] md:gap-x-12"
            >
              {/* Year + Type */}
              <div className="flex items-baseline gap-3 md:flex-col md:gap-0 md:pt-0.5">
                <span className="text-[11px] text-neutral-400 font-mono leading-[1.5]">
                  {project.year}
                </span>
                <span className="text-[11.5px] text-neutral-400">
                  {project.type}
                </span>
              </div>

              {/* Name + desc + tags + links */}
              <div>
                <h2 className="text-[13.5px] md:text-[14px] font-medium text-neutral-900 mb-2 tracking-[-0.01em]">
                  {project.name}
                </h2>
                <p className="text-[12.5px] text-neutral-500 leading-[1.7] mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono text-neutral-500 border border-black/[0.1] px-[7px] py-[2px] rounded-[3px]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-neutral-400 hover:text-neutral-900 transition-colors duration-150 flex items-center gap-1"
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live
                  </a>
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-neutral-400 hover:text-neutral-900 transition-colors duration-150 flex items-center gap-1"
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}