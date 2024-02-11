import "/src/sass/pages/page2.sass"

const Page2 = () => {

    return (
        <section className={"section page2"}>
            <div className={"my-card java"}>
                <div className={"glass-card gc-front"}>
                    <h1 className={"my-tile"}>Java</h1>
                </div>
                <div className={"glass-card gc-back"}>
                    <ul>
                        <li><h1>level: useful</h1></li>
                        <li><p>java core</p></li>
                        <li><p>spring framework</p></li>
                        <li><p>common lib</p></li>
                        <li><p>build tool</p></li>
                    </ul>
                </div>
            </div>
            <div className={"my-card golang"}>
                <div className={"glass-card gc-front"}>
                    <h1 className={"my-tile"}>golang</h1>
                </div>
                <div className={"glass-card gc-back"}>
                    <ul>
                        <li><h1>level: useful</h1></li>
                        <li><p>basic-syntax</p></li>
                        <li><p>common lib</p></li>
                        <li><p>gin framework</p></li>
                    </ul>
                </div>
            </div>
            <div className={"my-card frontend"}>
                <div className={"glass-card gc-front"}>
                    <h1 className={"my-tile"}>frontend</h1>
                </div>
                <div className={"glass-card gc-back"}>
                    <ul>
                        <li><h1>level: useful</h1></li>
                        <li><p>html, css, js</p></li>
                        <li><p>reactjs</p></li>
                        <li><p>threejs</p></li>
                    </ul>
                </div>

            </div>
            <div className={"my-card devops"}>
                <div className={"glass-card gc-front"}>
                    <h1 className={"my-tile"}>devops</h1>
                </div>
                <div className={"glass-card gc-back"}>
                    <ul>
                        <li><h1>level: basic</h1></li>
                        <li><p>aws</p></li>
                        <li><p>docker, k8s</p></li>
                        <li><p>teamcity</p></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Page2
