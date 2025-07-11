'use client';

import Link from "next/link";
import { useState } from "react";
import InstagramIcon from "./icons/instagram";
import GithubIcon from "./icons/github";
import LinkedinIcon from "./icons/linkedin";

export default function SocialMediaLink() {
    const [hovered, setHovered] = useState({
        linkedin: false,
        instagram: false,
        github: false,
    });

    return (
        <aside className="fixed left-4 top-1/2 -translate-y-1/2 lg:flex flex-col hidden items-center gap-3 z-40">
            {/* LinkedIn */}
            <Link
                href="https://www.linkedin.com/in/berrykwn/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered((prev) => ({ ...prev, linkedin: true }))}
                onMouseLeave={() => setHovered((prev) => ({ ...prev, linkedin: false }))}
                className="p-1 rounded-lg transition-all duration-300 ease-in-out hover:bg-[#0a66c2] hover:scale-110"
            >
                <div className="transition-all duration-300 ease-in-out">
                    <LinkedinIcon size={32} color={hovered.linkedin ? '#ffffff' : '#404040'} />
                </div>
            </Link>

            {/* Instagram */}
            <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered((prev) => ({ ...prev, instagram: true }))}
                onMouseLeave={() => setHovered((prev) => ({ ...prev, instagram: false }))}
                className="p-1 rounded-lg transition-all duration-300 ease-in-out hover:bg-[#d62976] hover:scale-110"
            >
                <div className="transition-all duration-300 ease-in-out">
                    <InstagramIcon size={32} color={hovered.instagram ? '#ffffff' : '#404040'} />
                </div>
            </Link>

            {/* GitHub */}
            <Link
                href="https://github.com/Berykwn"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered((prev) => ({ ...prev, github: true }))}
                onMouseLeave={() => setHovered((prev) => ({ ...prev, github: false }))}
                className="p-1 rounded-lg transition-all duration-300 ease-in-out hover:bg-[#181717] hover:scale-110"
            >
                <div className="transition-all duration-300 ease-in-out">
                    <GithubIcon size={32} color={hovered.github ? '#ffffff' : '#404040'} />
                </div>
            </Link>

        </aside>
    );
}
