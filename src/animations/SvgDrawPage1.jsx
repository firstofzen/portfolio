import "/src/sass/animations/SvgDrawPage1.sass"
import InlineSVG from "react-inlinesvg";

import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";


const SvgDrawPage1 = () => {
    const svgDraw = useRef();
    const ani1Svg = useRef();
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)
        let tl = gsap.timeline()
        tl.to(ani1Svg.current, {
            motionPath: {
                path: "#path-plane",
                align: "#path-plane",
                autoRotate: true
            },
            repeat: 10,
            repeatDelay: 2,
            yoyo: true,
            transformOrigin: "50% 50%",
            duration: 5,
            ease: "power1.inOut"
        })
    }, {scope: svgDraw.current})
    return (
        <div ref={svgDraw} className={"svg-draw"}>
            <div className={"ani1"}>
                <InlineSVG src={"/static/path-plane.svg"} className={"path-plane"} />
                <div ref={ani1Svg} className={"airplane"}><InlineSVG src={"/static/svg3.svg"}/></div>
            </div>
        </div>
    )
}
export default SvgDrawPage1