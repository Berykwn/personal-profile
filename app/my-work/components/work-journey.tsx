'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { WORKJOURNEY } from '../data/work-journey';

export default function WorkJourney() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (expandedIndex !== null && itemRefs.current[expandedIndex]) {
      itemRefs.current[expandedIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [expandedIndex]);

  return (
    <ul className="relative w-full max-w-lg space-y-2" aria-label="Work Experience List">
      {WORKJOURNEY.map((job, index) => {
        const isExpanded = expandedIndex === index;
        const panelId = `job-panel-${index}`;
        const headingId = `job-title-${index}`;

        return (
          <li key={index}>
            <motion.article
              layout
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`border-b border-neutral-300 dark:border-neutral-600 py-4 transition-all hover:rounded-xl hover:px-5 ${isExpanded ? 'bg-tranparent px-5 rounded-xl border border-neutral-300' : ''
                } hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer`}
            >
              <header
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                aria-expanded={isExpanded}
                aria-controls={panelId}
                id={headingId}
              >
                <h2 className="text-base font-semibold text-neutral-800 dark:text-neutral-100">
                  {job.title}
                </h2>
                <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <svg width="15px" height="15px" viewBox="0 0 1024 1024" className="icon" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
                      fill="#000000"
                    />
                  </svg>
                </motion.div>
              </header>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{job.description}</p>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.section
                    key="content"
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden mt-4 space-y-3"
                  >
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, i) => (
                        <span key={i} className="text-xs bg-amber-200 text-neutral-700 px-2.5 py-0.5 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <ul className="list-disc list-inside text-sm space-y-1.5 text-neutral-700 dark:text-neutral-300">
                      {job.responsibilities.map((res, i) => (
                        <li key={i}>
                          <span className="font-medium">{res.title}</span> – {res.detail}
                        </li>
                      ))}
                    </ul>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">{job.date}</div>
                  </motion.section>
                )}
              </AnimatePresence>
            </motion.article>
          </li>
        );
      })}
    </ul>
  );
}
