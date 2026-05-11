import Link from "next/link";

const skills = [
  {
    cat: "Frontend",
    list: "React, Angular, Vue.js, Ionic, TypeScript, Tailwind",
  },
  {
    cat: "Backend",
    list: "Laravel, Node.js, PHP",
  },
  {
    cat: "Database",
    list: "MySQL, PostgreSQL, SQL DB2, Supabase",
  },
  {
    cat: "Tools",
    list: "IBM Maximo, BIRT, Git, Figma",
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-16">
      {/* ── Top section: hero left, meta right ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16 mb-16">
        {/* Left: hero */}
        <div>
          <p className="text-[13px] text-neutral-400 mb-5 tracking-[0.01em]">
            Berry Kurniawan — Lahat, South Sumatera
          </p>

          <h1 className="text-[40px] lg:text-[48px] font-light text-neutral-900 leading-[1.12] tracking-[-0.04em] mb-8">
            Code that works.
            <br />
            Work that <strong className="font-medium">lasts.</strong>
          </h1>

          <div className="text-[14px] text-neutral-500 leading-[1.75] mb-9 max-w-xl">
            <p>
              Software engineer with 2 years of experience building POS systems,
              workflow automation, and e-commerce platforms — across corporate,
              freelance, and internship projects. Currently at{" "}
              <Link
                href="/my-work"
                className="text-neutral-900 underline underline-offset-[3px] decoration-black/20 hover:decoration-black transition-[text-decoration-color]"
              >
                PT Priamanaya Energi
              </Link>
              , building operational reporting systems and workflow automation
              with IBM Maximo.
            </p>
            <p className="mt-4">
              I don&apos;t just build features. I build things people can rely on —
              readable code, sensible architecture, solutions that actually ship.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap gap-6">
            {[
              {
                href: "https://github.com/Berykwn",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.337-.012 2.416-.012 2.744 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                  </svg>
                ),
                label: "github.com/berykwn",
              },
              {
                href: "https://linkedin.com/in/berrykwn",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                    <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                ),
                label: "linkedin.com/in/Berykwn",
              },
              {
                href: "mailto:berykurniawan389@gmail.com",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3.5 h-3.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                label: "berrykurniawan22@gmail.com",
              },
            ].map(({ href, icon, label }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-1.5 text-[12.5px] text-neutral-400 hover:text-neutral-900 transition-colors"
              >
                {icon}
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Education + Certs */}
        <div className="lg:pt-14 space-y-8">
          <div>
            <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-[0.1em] mb-3">
              Education
            </p>
            <p className="text-[12.5px] text-neutral-600 mb-1.5">
              B.Sc. Information Systems{" "}
              <span className="text-[11px] text-neutral-400 ml-1">
                University of Amikom Yogyakarta, 2023
              </span>
            </p>
          </div>

          <div>
            <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-[0.1em] mb-3">
              Certifications
            </p>
            <p className="text-[12.5px] text-neutral-600 mb-1.5">
              Frontend Engineer{" "}
              <span className="text-[11px] text-neutral-400 ml-1">
                Alterra Academy, 2024
              </span>
            </p>
            <p className="text-[12.5px] text-neutral-600 mb-1.5">
              Golang Backend{" "}
              <span className="text-[11px] text-neutral-400 ml-1">
                Magang dan Studi Independen Bersertifikat (Hacktivate), 2023
              </span>
            </p>
            <p className="text-[12.5px] text-neutral-600 mb-1.5">
              Fullstack Developer Intern{" "}
              <span className="text-[11px] text-neutral-400 ml-1">
                Merdeka Belajar Kampus Merdeka (Citiasia), 2023
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* ── Skills table: full width ── */}
      <div className="border-t border-black/[0.07]">
        {skills.map(({ cat, list }) => (
          <div
            key={cat}
            className="flex items-baseline py-[10px] border-b border-black/[0.05] text-[12.5px]"
          >
            <span className="w-28 shrink-0 text-[10px] text-neutral-400 font-mono uppercase tracking-[0.08em] pt-px">
              {cat}
            </span>
            <span className="text-neutral-500 leading-relaxed">{list}</span>
          </div>
        ))}
      </div>
    </div>
  );
}