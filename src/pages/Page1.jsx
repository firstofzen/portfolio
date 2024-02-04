import "/src/sass/pages/page1.sass"
import {TypeAnimation} from "react-type-animation";
const Page1 = () => {
    return (
        <section className={"section page1"}>
            <div className={"my-avatar"}>
                <figure className={"image is-square"}>
                    <img src={"/static/xie.jpg"}></img>
                </figure>
            </div>
            <div className={"my-tile"}>
                <p>Duc Anh</p>
            </div>
            <div className={"my-description"}>

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
                    style={{color: "whitesmoke"}}
                    deletionSpeed={70}
                />
            </div>
        </section>
    )
}
export default Page1