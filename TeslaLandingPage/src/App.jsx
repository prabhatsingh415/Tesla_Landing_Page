import React from "react";
import Header from "./components/Header/Header.jsx";
import LogoIntro from "./components/LogoIntro.jsx";
import Footer from "./components/Footer.jsx";
import IntroVideo from "./components/IntroVideo.jsx";

function App() {

    return (
        <div className="flex flex-col gap-32 lg:gap-[10vh]">
            <Header/>
            <IntroVideo/>
            <LogoIntro/>
            <Footer/>
        </div>
    )
}

export default App
