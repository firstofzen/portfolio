import "/src/sass/components/CardInfo.sass"
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import {useInView} from "react-intersection-observer";

const CardInfo = ({name, tile, level, skills, isRight}) => {
    const contentRef = useRef()
    const innerRef = useRef()
    const h1Ref = useRef()
    const h2Ref = useRef()


    const card = document.querySelector("section .page2 .card-info")

    const [cardRef, inView, entry] = useInView({threshold: 0.3})

    useGSAP(() => {
        let tl = gsap.timeline();
        if (inView) {
            gsap.to(innerRef.current, {display: "flex" , delay: 0.4})
            tl.to(h1Ref.current, {
                x: 0, opacity: 1, duration: 1.5, ease: "power4.out"
            })
            tl.to(h2Ref.current, {
                x: 0, opacity: 1, duration: 1.6, ease: "power4.out"
            }, 0.4)
            tl.to(contentRef.current, {
                x: 0,opacity: 1, duration: 1.2, ease: "power4.out",
            }, 0.3)
        }
    }, {scope: card, dependencies: [inView], revertOnUpdate: true})


    return (
        <div ref={cardRef} className={"card-info"}>
            <div ref={innerRef} className={`${name}`}>
                <h1 ref={h1Ref}
                    style={isRight ? {transform: "translateX(60%)"} : {transform: "translateX(-60%)"}}>{tile}</h1>
                <h2 ref={h2Ref}
                    style={isRight ? {transform: "translateX(60%)"} : {transform: "translateX(-60%)"}}>level: {level}</h2>
                <ul ref={contentRef}
                    style={isRight ? {borderRight: "3px solid white", transform: "translateX(60%)"} : {borderLeft: "3px solid white", transform: "translateX(-60%)"}}>
                    {skills.map((s, i) => <li id={"content-card"} key={i}
                                              style={isRight ? {justifyContent: "flex-end"} : {}}>
                        <p style={isRight ? {transform: "translateX(-2.2rem) translateY(-0.2em)"} : {transform: "translateX(2.2rem) translateY(-0.2em)"}}>{s}</p>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}
export default CardInfo