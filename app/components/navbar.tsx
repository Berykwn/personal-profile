'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDarkMode } from '../hooks/use-dark-mode';
import DarkModeToggle from './dark-mode-toggle';
import TiltedCard from './tilted-card';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
    { href: '/', label: 'About me' },
    { href: '/my-work', label: 'My Work' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (href: string) => pathname === href;

    const navLinkClass = (href: string) =>
        clsx(
            'px-3 py-1 text-sm rounded-md',
            isActive(href)
                ? 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-white'
                : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-300 dark:hover:text-white'
        );

    return (
        <header
            className={clsx(
                'fixed top-0 left-0 w-full z-50 transition-all duration-300',
                isScrolled ? 'bg-white shadow-md dark:bg-neutral-900' : 'bg-transparent'
            )}
        >
            <div className="font-[family-name:var(--font-geist-sans)] flex justify-between items-center py-6 px-6 md:px-12">
                <Link href="/" className="text-lg font-semibold text-neutral-700 dark:text-neutral-200">
                    Berry Kurniawan.
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-2">
                    {navLinks.map(({ href, label }) => (
                        <Link key={href} href={href} className={navLinkClass(href)}>
                            {label}
                        </Link>
                    ))}

                    <div className="flex items-center space-x-2 bg-neutral-100 px-2 py-1 rounded-xl border-neutral-300">
                        <DarkModeToggle isDark={isDarkMode} onToggle={toggleDarkMode} />
                        <label
                            onClick={toggleDarkMode}
                            className="text-xs text-neutral-500 hover:text-neutral-700"
                        >
                            {isDarkMode ? 'Dark mode' : 'Light mode'}
                        </label>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center space-x-3 md:hidden">
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
                        className="p-2 rounded-md text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                    >
                        {isMenuOpen ? (
                            /* Ikon Close (X) */
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            /* Ikon Menu (Hamburger) */
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ y: '-100%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: '-100%', opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="fixed inset-0 z-50 bg-white dark:bg-neutral-900 flex flex-col"
                    >
                        <div className="flex justify-end p-6">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                aria-label="Tutup menu"
                                className="p-2 rounded-md text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                            >
                                {/* Ikon Close (X) */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>

                        <nav className="flex-grow flex flex-col items-center justify-center space-y-4">
                            <aside
                                className="relative animate-fire-bounce flex justify-center"
                                aria-label="Profile picture decoration"
                            >
                                <TiltedCard
                                    imageSrc="/profile-picture-4.png"
                                    altText="Generate by ChatGPT"
                                    captionText="Hello, I’m Berry!"
                                    containerHeight="260px"
                                    containerWidth="180px"
                                    imageHeight="260px"
                                    imageWidth="180px"
                                    rotateAmplitude={12}
                                    scaleOnHover={1.2}
                                    showMobileWarning={false}
                                    showTooltip={true}
                                    displayOverlayContent={true}
                                />
                            </aside>

                            {navLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg font-medium text-neutral-800 dark:text-neutral-200 hover:underline"
                                >
                                    {label}
                                </Link>
                            ))}

                            <div className="flex items-center space-x-2 bg-neutral-100 px-4 py-1.5 rounded-xl border-neutral-300">
                                <DarkModeToggle isDark={isDarkMode} onToggle={toggleDarkMode} />
                                <label
                                    onClick={toggleDarkMode}
                                    className="text-sm text-neutral-500 hover:text-neutral-700"
                                >
                                    {isDarkMode ? 'Dark mode' : 'Light mode'}
                                </label>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
