'use client'

import { Typewriter } from "react-simple-typewriter";

export default function TypewriterName() {
    return (
        <Typewriter
            words={['Hello, I’m Berry!']}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
        />
    )
}