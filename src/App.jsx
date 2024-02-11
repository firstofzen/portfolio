import './sass/App.sass'
import Header from "./Header.jsx";
import Page1 from "./pages/Page1.jsx";
import Page2 from "./pages/Page2.jsx";
import Page3 from "./pages/Page3.jsx";
import Footer from "./pages/Footer.jsx";
import {Suspense} from "react";

function App() {
    return (
        <Suspense fallback={null}>
        <main className={"container is-large"}>
            <Header />
            <div className={"container is-fullhd"}>
                <Page1/>
                <Page2/>
                <Page3/>
                <Footer />
            </div>
        </main>
        </Suspense>
    )
}

export default App
