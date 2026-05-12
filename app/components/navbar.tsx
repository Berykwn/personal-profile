"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "About" },
  { href: "/my-work", label: "Work & Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-black/[0.06] h-12">
        <div className="max-w-5xl mx-auto px-5 md:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-[13.5px] font-medium text-neutral-900 tracking-tight hover:opacity-60 transition-opacity"
            onClick={() => setOpen(false)}
          >
            Berry Kurniawan
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex">
            {links.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-[12.5px] px-3 py-1.5 rounded transition-colors ${
                    isActive
                      ? "text-neutral-900 font-medium"
                      : "text-neutral-400 hover:text-neutral-900"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Desktop available */}
          <div className="hidden md:flex items-center gap-1.5 text-[11px] text-neutral-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            Open to opportunities
          </div>

          {/* Mobile: available dot + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Open to opportunities
            </div>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
            >
              <span
                className={`block w-5 h-px bg-neutral-700 transition-all duration-200 origin-center ${
                  open ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-neutral-700 transition-all duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-neutral-700 transition-all duration-200 origin-center ${
                  open ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden fixed top-12 left-0 right-0 z-10 bg-white border-b border-black/[0.06] overflow-hidden transition-all duration-200 ${
          open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {links.map(({ href, label }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`flex items-center px-5 py-4 text-[14px] border-b border-black/[0.04] last:border-b-0 ${
                isActive
                  ? "text-neutral-900 font-medium"
                  : "text-neutral-400"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </>
  );
}