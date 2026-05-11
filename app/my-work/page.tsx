import { WORKJOURNEY } from "./data/work-journey";

export default function MyWork() {
  return (
    <div className="max-w-5xl mx-auto px-5 md:px-8 py-12 md:py-16">
      {/* Header */}
      <div className="mb-10 md:mb-12">
        <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-[0.1em] mb-2">
          Experience
        </p>
        <h1 className="text-[24px] md:text-[28px] font-light text-neutral-900 tracking-[-0.03em]">
          Things I&apos;ve been trusted with.
        </h1>
      </div>

      {/* Jobs */}
      <div>
        {WORKJOURNEY.map((job, i) => (
          <div
            key={i}
            className="py-6 border-t border-black/[0.06] last:border-b last:border-black/[0.06]
                       flex flex-col gap-3
                       md:grid md:grid-cols-[160px_1fr] md:gap-x-12"
          >
            {/* Period + Company — row on mobile */}
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
    </div>
  );
}