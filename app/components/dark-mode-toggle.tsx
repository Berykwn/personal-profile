import { useEffect, useState } from 'react'

interface Props {
    isDark: boolean
    onToggle: () => void
}

const lightEmojis = ['🐣']
const darkEmojis = ['🦇']

export default function AnimatedThemeToggle({ isDark, onToggle }: Props) {
    const [emoji, setEmoji] = useState('🐣')

    useEffect(() => {
        const getRandomEmoji = (arr: string[]) =>
            arr[Math.floor(Math.random() * arr.length)]
        setEmoji(isDark ? getRandomEmoji(darkEmojis) : getRandomEmoji(lightEmojis))
    }, [isDark])

    return (
        <button
            onClick={onToggle}
            className="text-xl transition-transform duration-300 hover:scale-125"
            title="Toggle Theme"
            aria-label="Toggle Theme"
        >
            {emoji}
        </button>
    )
}
