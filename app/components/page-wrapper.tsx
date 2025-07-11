'use client';

import { ReactNode, useEffect, useState } from "react";

interface PageWrapperProps {
    children: ReactNode;
    className?: string;
}

export default function PageWrapper({ children, className = "" }: PageWrapperProps) {
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAnimation(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            className={`
                transition-all duration-700 ease-out
                ${showAnimation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                ${className}
            `}
        >
            {children}
        </section>
    );
}
