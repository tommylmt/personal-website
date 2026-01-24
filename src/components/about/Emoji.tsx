import {useEffect, useState} from "react";

export default function Emoji() {
    const emojis = ['✊', '🤘', '🤙', '✌', '🖕'];
    const [emoji, setEmoji] = useState<string>('🤙');
    const [emojiClass, setEmojiClass] = useState<string>('');
    const [timeouts, setTimeouts] = useState<number[]>([]);

    const randomEmoji = () => {
        let globalIndex = 0

        emojis.forEach((e: string, index: number) => {
            const newTimeouts: number[] = structuredClone(timeouts);
            newTimeouts.push(
                setTimeout(() => {
                    setEmoji(e)
                }, (index + 1) * 500)
            )

            setTimeouts(newTimeouts);
            globalIndex = index
        })

        const newTimeouts = structuredClone(timeouts);
        newTimeouts.push(
            setTimeout(() => {
                randomEmoji()
            }, (globalIndex + 1) * 500)
        )
        setTimeouts(newTimeouts);
    }

    const stopAnimation = () => {
        timeouts.forEach((t) => clearTimeout(t))
        setEmoji('🤙');
    }

    useEffect(() => {
        setEmojiClass('emoji-change')

        setTimeout(() => {
            setEmojiClass('emoji-ready')
        }, 250)
    }, [emoji]);

    return (
        <div
            onMouseOver={randomEmoji}
            onMouseLeave={stopAnimation}
            className={['cursor-pointer', 'transition-all', emojiClass].join(' ')}
        >
            { emoji }
        </div>
    )
}
