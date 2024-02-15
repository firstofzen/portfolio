import "/src/sass/pages/page1.sass"
import {memo} from "react";
import {TypeAnimation} from "react-type-animation";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap"
import InlineSVG from "react-inlinesvg";
import SvgDrawPage1 from "../animations/SvgDrawPage1.jsx";

const Page1 = memo(function Page1() {
    const card1 = useRef()
    const card2 = useRef()
    const card3 = useRef()

    const p11 = useRef()
    const p12 = useRef()
    const p13 = useRef()
    const p21 = useRef()
    const p22 = useRef()
    const p23 = useRef()

    const svg1 = useRef()
    const svg2 = useRef()

    useGSAP(() => {
        //appear
        gsap.fromTo(p11.current, {
            translateX: -500, ease: "expo.out"
        }, {
            translateX: 0, duration: 2, ease: "expo.out"
        })

        gsap.fromTo(p12.current, {
            translateX: -500, ease: "expo.out"
        }, {
            translateX: 0, duration: 1.5, ease: "expo.out"
        })

        gsap.fromTo(p13.current, {
            translateY: -200
        }, {
            translateY: 0, ease: "bounce.out", duration: 2, delay: 1
        })

        gsap.fromTo(p21.current, {
            translateY: 150
        }, {
            translateY: 0, duration: 1, ease: "elastic.out"
        })

        gsap.fromTo(p22.current, {
            rotation: 180

        }, {
            rotation: 0, duration: 2, ease: "bounce.out", delay: 0.5

        })

        gsap.fromTo(p23.current, {
            translateX: 200
        }, {
            translateX: 0, duration: 2, ease: "elastic.out"
        })

        let tlp11 = gsap.timeline({
            repeat: -1,
            yoyo: true
        })
        let tlp21 = gsap.timeline({
            repeat: -1,
            yoyo: true
        })

        //first text
        tlp11.fromTo(p11.current, {
            rotation: 0
        }, {
            rotation: 180, duration: 2, ease: "elastic.out"
        }, 2)
        tlp21.fromTo(p21.current, {
            rotation: 0
        }, {
            rotation: 45, duration: 2, ease: "elastic.out"
        }, 2)


    }, {scope: card1})

    //svg card1
    useGSAP(() => {
        // loop
        let tlsvg = gsap.timeline({
            repeat: -1,
            yoyo: true
        })

        let tl3 = gsap.timeline({
            repeat: -1, yoyo: true, repeatRefresh: true
        })


        //appear-svg
        gsap.fromTo(svg2.current, {
            translateX: 500, rotation: 0
        }, {
            translateX: 0, rotation: 360, duration: 1, ease: "expo.out", delay: 1
        })
        //svg
        tl3.fromTo(svg2.current, {
            rotation: 0
        }, {
            rotation: 720, duration: 5, ease: "elastic.out"
        })
        tlsvg.fromTo(svg1.current, {
            translateY: 50, height: 0, width: 0, opacity: 0
        }, {
            translateY: 0, duration: 1, height: "4rem", width: "4rem", ease: "expo.out", opacity: 1, delay: 2
        })
        tlsvg.to(svg1.current, {
            rotation: 60, duration: 1, ease: "elastic.out", yoyo: false
        })
    }, {scope: card1})

    useGSAP(() => {

    }, {scope: card2})

    useGSAP(() => {

    }, {scope: card3})
    return (
        <section className={"section page1"}>
            <div ref={card1} className={"card card-1"}>
                <h1>
                    <p ref={p11}>D</p>
                    <p ref={p12}>u</p>
                    <p ref={p13}>c</p>
                </h1>
                <div ref={svg1}><InlineSVG src={"static/svg1.svg"}/></div>
                <h1>
                    <p ref={p21}>A</p>
                    <p ref={p22}>n</p>
                    <p ref={p23}>h</p>
                </h1>
                <div ref={svg2}><InlineSVG src={"static/svg2.svg"}/></div>
            </div>

            <div ref={card2} className={"card card-2"}>

            </div>
            <div ref={card3} className={"card card-3"}>

            </div>
            <div className={"card my-typing"}>
                <TypeAnimation
                    sequence={[
                        500,
                        "hi, i'm Duc Anh",
                        800,
                        "i come from Vietnam",
                        800,
                        "i'm backend developer",
                        800,
                        "i can build api with golang and java and kafka, later deploy them to cloud platform",
                        2500,
                        "i can too build web application with reactjs",
                        1500,
                        "and more...",
                        800,
                        "thanks for visit my portfolio "
                    ]}
                    speed={30}
                    repeat={Infinity}
                    style={{color: "#b8bedd"}}
                    deletionSpeed={70}
                />
            </div>
            <SvgDrawPage1 />
        </section>
    )
})
export default Page1