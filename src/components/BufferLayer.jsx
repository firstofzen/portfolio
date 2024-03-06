import "/src/sass/components/BufferLayer.sass"
import InlineSVG from "react-inlinesvg";
import {useLayoutEffect, useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const BufferLayer = () => {
    const bufferLayerRef = useRef()
    const shapes = []
    const colors = ["#f94144", "#f3722c", "#43aa8b", "#f9844a", "#f9c74f", "#90be6d", "#277da1"]

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        const svgs  = document.querySelectorAll("#svgBuffer")
        // let scroll = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: bufferLayerRef.current,
        //         scrub: true,
        //         start: "top top",
        //         end: "bottom",
        //         snap: {
        //             snapTo: "labels",
        //             duration:{min: 3, max: 7},
        //             delay: 0.2,
        //             ease: "elastic.out"
        //         }
        //     }
        // })
        // scroll.addLabel("start")
        //     .addLabel("move").to(svgs, {y: 200, duration: 7}).addLabel("end")

        gsap.to(svgs, {
            scrollTrigger: {
                trigger: bufferLayerRef.current,
                scrub: true,
                start: "top top",
                end: "bottom"
            },
            y: 100,
            duration: 10,
            delay: 0.2,
            ease: "elastic.out"
        })

    }, {scope: bufferLayerRef.current})

    for (let i = 1; i <= 30; i++) {
        const c = colors.at(randomInRange(0, colors.length))
        shapes.push(<div key={i} style={{
            top: `${randomInRange(10, 95)}svh`,
            left: `${randomInRange(1, 95)}svw`,
        }}><InlineSVG src={`/static/shape${randomInRange(1, 6)}.svg`} id={"svgBuffer"} fill={c} style={{
            height: `${randomInRange(3, 6)}svh`,
            width: `${randomInRange(3, 6)}svw`
        }}/></div>)
    }

    return (
        <div className={"buffer-layer"} ref={bufferLayerRef}>
            {shapes}
        </div>
    )
}
export default BufferLayer