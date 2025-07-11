import { useEffect, useState } from 'react';

export function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setIsDarkMode(true);
        } else if (storedTheme === 'light') {
            setIsDarkMode(false);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDarkMode(prefersDark);
            localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
        }
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
        document.documentElement.style.setProperty('--background', isDarkMode ? '#0a0a0a' : '#ffffff');
        document.documentElement.style.setProperty('--foreground', isDarkMode ? '#ededed' : '#171717');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

    return { isDarkMode, toggleDarkMode };
}
