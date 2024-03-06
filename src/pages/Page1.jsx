import "/src/sass/pages/page1.sass"
import {memo, useRef} from "react";
import {TypeAnimation} from "react-type-animation";
import {useGSAP} from "@gsap/react";
import MusicPlayer from "../components/MusicPlayer.jsx";
import MyTitle from "../components/MyTitle.jsx";
import BufferLayer from "../components/BufferLayer.jsx";

const Page1 = memo(function Page1() {

    const card3 = useRef()

    useGSAP(() => {

    }, {scope: card3})

    return (
        <section className={"section page1"}>

            <BufferLayer />

            <MyTitle/>

            <MusicPlayer/>

            <div ref={card3} className={"card-3"}>

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
})
export default Page1