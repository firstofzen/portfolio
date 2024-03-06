import "/src/sass/components/MusicPlayer.sass"
import cogaivang from "/static/cogaivang.mp3?url"
import useSound from "use-sound";
import {CiPause1, CiPlay1} from "react-icons/ci";
import {useEffect, useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";

const MusicPlayer = () => {

    const musicPlayerRef = useRef()
    const page1 = document.querySelector("section.page1")

    const [playSound, {stop, sound, duration}] = useSound(cogaivang)
    const [playingSound, setPlayingSound] = useState(false)
    const [currTime, setCurrTime] = useState({
        min: "",
        sec: ""
    })
    const [time, setTime] = useState({
        min: "",
        sec: ""
    })
    const [seconds, setSeconds] = useState()

    useEffect(() => {
        if (duration) {
            const sec = duration / 1000;
            const min = Math.floor(sec / 60);
            const secRemain = Math.floor(sec % 60);
            setTime({
                min: min,
                sec: secRemain
            });
        }
    }, [playingSound]);
    useEffect(() => {
        const interval = setInterval(() => {
            if (sound) {
                setSeconds(sound.seek([]));
                const min = Math.floor(sound.seek([]) / 60);
                const sec = Math.floor(sound.seek([]) % 60);
                setCurrTime({
                    min,
                    sec
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [sound]);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        let scroll = gsap.timeline({
            scrollTrigger: {
                scrub: true,
                trigger: page1,
                start: "top top",
                end: "bottom"
            }
        })
        scroll.to(musicPlayerRef.current, {
            yPercent: -50, duration: 6, ease: "sine.out",
        })
    }, {scope: page1})
    return (
        <div className={"music-player"} ref={musicPlayerRef}>
            <div className={"disc"}>
                <p>Co Gai Vang</p>
                <span><img className={"image "} src={"/static/xie.jpg"} alt={"image"}/></span>
            </div>
            <div className={"lyric"}>

            </div>
            <div className={"music-controls"}>
                <div className="time">
                    <p>
                        {currTime.min}:{currTime.sec}
                    </p>
                    <p>
                        {time.min}:{time.sec}
                    </p>
                </div>
                <input
                    type="range"
                    min="0"
                    max={duration / 1000}
                    step={1}
                    value={seconds}
                    className="timeline"
                    defaultValue={0}
                    onChange={(e) => {
                        sound.seek([e.target.value]);
                    }}

                />
                <div className={"controls"}>
                    <button onClick={() => {
                        if (playingSound) {
                            stop()
                            setPlayingSound(false)
                        } else {
                            playSound()
                            setPlayingSound(true)
                        }
                    }}>{playingSound ? <CiPause1/> : <CiPlay1/>}</button>
                </div>
            </div>
        </div>
    )
}
export default MusicPlayer