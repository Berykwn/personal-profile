'use client';

import CodeIcon from '@/app/components/icons/code';
import { WORKJOURNEY } from '../data/work-journey';

export default function WorkJourney() {
  return (
    <div className="mx-auto max-w-xl">
      <ul className="relative">
        {WORKJOURNEY.map((job, index) => (
          <li key={index}>
            <div className="relative pb-8">
              {index !== WORKJOURNEY.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-5 left-5 -ml-px h-full w-[1px] bg-neutral-200 dark:bg-neutral-700"
                />
              )}

              <div className="relative flex items-start space-x-3">
                <div className="relative px-1">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 ring-8 ring-teal-50 dark:ring-neutral-900">
                    <CodeIcon />
                  </div>
                </div>

                <div className="flex-1 min-w-0 py-0">
                  <header>
                    <div className="flex flex-wrap items-center">
                      <span className="mr-2 font-medium text-neutral-900 dark:text-neutral-100">
                        {job.title}
                      </span>
                    </div>

                    {job.date && (
                      <span className="text-xs whitespace-nowrap text-neutral-400">
                        {job.date}
                      </span>
                    )}
                  </header>

                  {job.description && (
                    <div className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                      <p>{job.description}</p>
                    </div>
                  )}

                  {job.skills?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {job.skills.map((skill: string, i: number) => (
                        <span
                          key={i}
                          className="rounded-full bg-amber-200 px-2.5 py-0.5 text-xs text-neutral-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
