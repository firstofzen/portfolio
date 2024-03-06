import "/src/sass/components/SvgDrawing.sass";
import {useEffect, useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";
const SvgDrawing = () => {
    const path = useRef(null)
    const svgRef = useRef()

    const page1 = document.querySelector("section.page1")

    const [totalLength, setTotalLength] = useState(0)
    useEffect(() => {
        if(path.current) {
            setTotalLength(path.current.getTotalLength())
        }
    }, []);
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        let scroll = gsap.timeline({
            scrollTrigger: {
                scrub: true,
                trigger: page1,
                start: "top top",
                end: "bottom",
            }
        })
        scroll.to(path.current, {
            duration: 3 , ease: "expo.out", strokeDashoffset: path.current.getTotalLength() - 100
        })
    }, {scope: page1})
    const ConfuseSvg = () => (
        <svg ref={svgRef} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={path} strokeDasharray={totalLength} strokeDashoffset={totalLength}
                d="M1 1.5C16.5 8 17.5 20.5 16.5 25.5C15.5 30.5 7 31.5 5.5 30C4 28.5 3.5 21.5 8.5 21C13.5 20.5 19 21 21.5 24.5C24 28 19 32 20.5 34C22 36 24.5 37 27.5 35C30.5 33 27.5 25 32 24.5C36.5 24 45 29 44 34C43.2 38 48 35.3333 50.5 33.5"
                stroke="#808080" strokeWidth="2"/>
        </svg>
    )

    return (
        <div className={"svg-draw"}>
            <ConfuseSvg/>
        </div>
    )
}
export default SvgDrawing