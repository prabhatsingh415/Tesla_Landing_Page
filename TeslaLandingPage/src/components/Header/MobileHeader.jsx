import React, {useRef, useState} from "react";
import Lottie from "lottie-react";
import {AnimatePresence, motion} from "motion/react"
import close from "../../assets/icons/close.json"
import useMediaQuery from "../../hooks/useMediaQuery.jsx";

function MobileHeader() {

    const [navOpen, setNavOpen] = useState(false);
    const closeBtnRef = useRef(null);
    const pausedFrame = useRef(0);
    const handleClick = () => {
        if (!navOpen) {
            // Play from start
            closeBtnRef.current.goToAndPlay(0, true);
            setTimeout(() => {
                closeBtnRef.current.pause();
                pausedFrame.current = closeBtnRef.current.currentFrame;
            }, 1334)
        } else {
            closeBtnRef.current.goToAndPlay(pausedFrame.current, true);
            setTimeout(() => {
                closeBtnRef.current.goToAndStop(0, true);
            }, 125);
        }
        setNavOpen(!navOpen);
    };
    const isDesktop = useMediaQuery(1024) //for devices >= lg
    return (
        <header className="z-50">

            <motion.div whileTap={{y: 1}} className="absolute top-0 right-0 visible flex justify-end m-2">
                <Lottie
                    lottieRef={closeBtnRef}
                    animationData={close}
                    loop={false}
                    autoplay={false}
                    style={{width: 50, height: 50}}
                    onClick={handleClick}
                />
            </motion.div>

            <AnimatePresence initial={false}>
                {navOpen && (<motion.div
                        initial={{opacity: 0, x: 100}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: 100}}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30
                        }}
                        className={"h-[calc(100vh-2rem)] mt-2 mb-2 w-[80%] flex flex-col bg-[var(--color-steel-gray)] border-solid border-[var(--color-tesla-red)] shadow-[0_0_30px_5px_var(--color-tesla-red)] ml-auto"}
                    >
                        <div className="my-3 h-2/5 flex flex-col items-start gap-3 mt-16">
                            <a href="/TeslaLandingPage/public"
                               className="text-[var(--color-bright-white)] text-2xl mx-8 border-b-2 border-transparent hover:border-[var(--color-neon)] hover:border-solid hover:scale-125 transition duration-300">
                                Tesla
                            </a>

                            <div className=" h-3/5  flex flex-col items-center gap-3 m-8">
                                <a href="/TeslaLandingPage/public"
                                   className="text-[var(--color-bright-white)] border-b-2 border-transparent hover:border-[var(--color-tesla-red)] transition duration-300">
                                    Vehicles
                                </a>
                                <a href="/TeslaLandingPage/public"
                                   className="text-[var(--color-bright-white)] border-b-2 border-transparent hover:border-[var(--color-tesla-red)] transition duration-300">
                                    Energy
                                </a>
                                <a href="/TeslaLandingPage/public"
                                   className="text-[var(--color-bright-white)] border-b-2 border-transparent hover:border-[var(--color-tesla-red)] transition duration-300">
                                    Charging
                                </a>
                                <a href="/TeslaLandingPage/public"
                                   className="text-[var(--color-bright-white)] border-b-2 border-transparent hover:border-[var(--color-tesla-red)] transition duration-300">
                                    AutoPilot
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </header>

    )
}

export default MobileHeader;