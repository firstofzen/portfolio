import "/src/sass/pages/page1.sass"
import {TypeAnimation} from "react-type-animation";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import {ReactSVG} from "react-svg";
import gsap from "gsap"

const Page1 = () => {
    const card1 = document.querySelector("section .card-1")
    const card2 = document.querySelector("section .card-2")
    const card3 = document.querySelector("section .card-3")

    useGSAP(() => {
        const h1Card1 = document.querySelector("section .card-1 h1")
        const svgCard1 = document.querySelector("section .card-1 .svg1 svg")
        const svgCard2 = document.querySelector("section .card-1 .svg2 svg")

        const p11 = document.querySelector("#p11")
        const p12 = document.querySelector("#p12")
        const p13 = document.querySelector("#p13")
        const p21 = document.querySelector("#p21")
        const p22 = document.querySelector("#p22")
        const p23 = document.querySelector("#p23")

        //appear

        gsap.fromTo(p11, {
            translateX: -500, ease: "expo.out"
        }, {
            translateX: 0, duration: 2, ease: "expo.out"
        })

        gsap.fromTo(p12, {
            translateX: -500, ease: "expo.out"
        }, {
            translateX: 0, duration: 1.5, ease: "expo.out"
        })

        gsap.fromTo(p13, {
            translateY: -200
        }, {
            translateY: 0, ease: "bounce.out", duration: 2, delay: 1
        })

        gsap.fromTo(p21, {

        }, {

        })

        gsap.fromTo(p22, {

        }, {

        })

        gsap.fromTo(p23, {

        }, {

        })

        //appear-svg
        gsap.fromTo(svgCard2, {
            translateX: 1000, rotation: 0
        }, {
            translateX: 0,rotation: 360, duration: 1, ease: "expo.out", delay: 1
        })

        // loop
        let tl1 = gsap.timeline({
            repeat: -1,
            yoyo: true
        })
        let tl2 = gsap.timeline({
            repeat: -1,
            yoyo: true
        })
        let tl3 = gsap.timeline({
            repeat: -1, yoyo: true
        })

        //first text
        tl2.fromTo(p11, {
            rotation: 0
        }, {
            rotation: 180, duration: 2, ease: "elastic.out", delay: 2
        })

        //svg
        tl1.fromTo(svgCard1, {
            translateY: 50, height: 0, width: 0, opacity: 0.2
        }, {
            translateY: 0, duration: 1, height: "5rem", width: "5rem", ease: "expo.out", opacity: 1, delay: 2
        })
        tl1.to(svgCard1, {
            rotation: 60, duration: 1, ease: "elastic.out", yoyo: false
        })
        tl3.to(svgCard2, {
            rotate: 720, duration: 5, ease: "elastic.out"
        })

    }, {scope: card1})

    useGSAP(() => {

    }, {scope: card2})

    useGSAP(() => {

    }, {scope: card3})
    return (
        <section className={"section page1"}>
            <div className={"card card-1"}>
                <h1>
                    <p id={"p11"}>D</p>
                    <p id={"p12"}>u</p>
                    <p id={"p13"}>c</p>
                </h1>
                <ReactSVG src={"/static/svg1.svg"} className={"svg1"}/>
                <h1>
                    <p id={"p21"}>A</p>
                    <p id={"p22"}>n</p>
                    <p id={"p23"}>h</p>
                </h1>
                <ReactSVG src={"/static/svg2.svg"} className={"svg2"}/>
            </div>

            <div className={"card card-2"}>

            </div>
            <div className={"card card-3"}>

            </div>
            <div className={"my-typing"}>
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
        </section>
    )
}
export default Page1