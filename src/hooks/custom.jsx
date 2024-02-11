import { useEffect, useState, useCallback } from "react";

function useTimer(speed = 1) {
    const [pausedLyric, setPaused] = useState(false);
    const playLyric = useCallback(() => setPaused(false), []);
    const pauseLyric = useCallback(() => setPaused(true), []);

    const [currentMillisecond, setCurrentMillisecond] = useState(0);
    const resetLyric = useCallback(() => setCurrentMillisecond(0), []);

    useEffect(() => {
        if (!pausedLyric) {
            let last = Date.now();
            const timer = window.setInterval(() => {
                const now = Date.now();
                setCurrentMillisecond((cm) => cm + (now - last) * speed);
                last = now;
            }, 0);
            return () => window.clearInterval(timer);
        }
    }, [pausedLyric, speed]);

    return {
        currentMillisecond,
        setCurrentMillisecond,
        resetLyric,
        pausedLyric,
        playLyric,
        pauseLyric
    };
}

export default useTimer;
