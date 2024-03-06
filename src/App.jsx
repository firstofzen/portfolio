import {lazy, Suspense} from "react";
import './sass/App.sass';

const Footer = lazy(() => import("./pages/Footer.jsx"))
const Page1 = lazy(() => import("./pages/Page1.jsx"))
const Page2  = lazy(() => import("./pages/Page2.jsx"))
const Page3 = lazy(() => import("./pages/Page3.jsx"))
const Header = lazy(() => import("./Header.jsx"))
function App() {
    const  suspense = (
        <div className={"suspend section"}>
            <p>Loading...</p>
        </div>
    )    
    return (
        <Suspense fallback={suspense}>
            <main className={"container is-large"}>
                <Header/>
                <div className={"container is-fullhd"}>
                    <Page1/>
                    <Page2/>
                    <Page3/>
                    <Footer/>
                </div>
            </main>
        </Suspense>
    )
}

export default App
