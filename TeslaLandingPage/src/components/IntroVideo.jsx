import React, {useEffect, useState} from "react";
import introVideo from "../assets/videos/Intro.mp4";

function IntroVideo() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(false);
        }, 4000);

        return () => {
            clearTimeout(timer)
        }
    }, [])

    if (!showIntro) return null;

    return (
        <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden z-50 ">
            <video src={introVideo} autoPlay muted className="w-full h-full object-cover"/>
        </div>
    );
}

export default IntroVideo;