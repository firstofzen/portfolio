import "/src/sass/pages/page2.sass"
import CardInfo from "../components/CardInfo.jsx";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Page2 = () => {
    const circle1Ref = useRef()
    const circle2Ref = useRef()
    const circle3Ref = useRef()
    const circle4Ref = useRef()
    const circle5Ref = useRef()
    const layer1Ref = useRef()

    useGSAP(() => {
        gsap.to(circle1Ref.current, {
            xPercent: 150, yPercent: 160, duration: 7, ease: "none", yoyo: true, repeat: -1
        })
        gsap.to(circle2Ref.current, {
            xPercent: -90, yPercent: -160, duration: 7, ease: "none", yoyo: true, repeat: -1
        })
        gsap.to(circle3Ref.current, {
            xPercent:-140, yPercent: 100, duration: 7, ease: "none", yoyo: true, repeat: -1
        })
        gsap.to(circle4Ref.current, {
            xPercent: 80, yPercent: -90, duration: 7, ease: "none", yoyo: true, repeat: -1
        })
        gsap.to(circle5Ref.current, {
            xPercent: -30, yPercent: -100, duration: 7, ease: "none", yoyo: true, repeat: -1
        })
    }, {scope: layer1Ref.current})

    return (
        <section className={"section"}>

            <div ref={layer1Ref} className={"layer1"}>
                <div ref={circle1Ref} className={"circle"} style={{backgroundColor: "red"}}></div>
                <div ref={circle2Ref} className={"circle"} style={{backgroundColor: "blue"}}></div>
                <div ref={circle3Ref} className={"circle"} style={{backgroundColor: "violet"}}></div>
                <div ref={circle4Ref} className={"circle"} style={{backgroundColor: "lightyellow"}}></div>
                <div ref={circle5Ref} className={"circle"} style={{backgroundColor: "green"}}></div>
            </div>
            <div className={"layer2"}>

            </div>
                <div className={"page2"}>
                    <CardInfo name={"java"} tile={"java"} level={"useful"}
                              skills={["spring framework", "build tool", "java 21", "common library"]}/>
                    <CardInfo isRight={true} name={"golang"} tile={"golang"} level={"useful"}
                              skills={["common library", "core syntax", "goroutines", "gin framework"]}/>
                    <CardInfo name={"devops"} tile={"devops"} level={"basic"}
                              skills={["docker", "kubernetes", "git github", "ci cd tools", "cloud native"]}/>
                    <CardInfo isRight={true} name={"frontend"} tile={"frontend"} level={"useful"}
                              skills={["reactjs", "html css", "threejs", "common javascript library"]}/>
                </div>

        </section>
    )
}
export default Page2
