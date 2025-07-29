import React, {useRef} from "react";
import Lottie from "lottie-react";
import xIcon from "../assets/icons/x.json"
import linkedinIcon from "../assets/icons/linkedin.json"
import githubIcon from "../assets/icons/github.json"

function Footer() {
    const xRef = useRef(null);
    const linkedinRef = useRef(null);
    const githubRef = useRef(null);

    return (
        <footer className="w-full rounded-2xl mt-12">

            <div className="w-full">
                <div
                    className="w-full grid grid-cols-1 lg:grid-cols-3 md:gap-1 gap-8 bg-[var(--color-steel-gray)] rounded-xl shadow-[0_0_20px_5px_var(--color-neon)] text-xs text-[var(--color-shadow-gray)]">
                    {/* Column 1: Left Links */}
                    <div className="flex flex-col items-center gap-2 md:mt-16">
                        <a className="link-underline w-fit" href="/">Privacy & Legal</a>
                        <a className="link-underline w-fit" href="/">Vehicles</a>
                        <a className="link-underline w-fit" href="/">News</a>
                        <a className="link-underline w-fit" href="/">Learn</a>
                        <a className="link-underline w-fit" href="/">Locations</a>
                        <a className="link-underline w-fit" href="/">Get Updates</a>
                    </div>

                    {/* Column 2: Credits */}
                    <div className="text-center px-2 flex flex-col gap-4 md:gap-8">
                        <div className="flex gap-3 justify-center md:mt-8">
                            <a
                                onMouseEnter={() => xRef.current?.goToAndPlay(0, true)}
                                onMouseLeave={() => xRef.current?.stop()}
                                href="https://x.com/Prabhatsingh415"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Lottie
                                    lottieRef={xRef}
                                    animationData={xIcon}
                                    loop={false}
                                    autoplay={false}
                                    style={{width: 50, height: 50}}
                                />
                            </a>
                            <a
                                onMouseEnter={() => linkedinRef.current?.goToAndPlay(0, true)}
                                onMouseLeave={() => linkedinRef.current?.stop()}
                                href="https://www.linkedin.com/in/prabhat-singh-rj415/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Lottie
                                    lottieRef={linkedinRef}
                                    animationData={linkedinIcon}
                                    loop={false}
                                    autoplay={false}
                                    style={{width: 50, height: 50}}
                                />
                            </a>
                            <a
                                onMouseEnter={() => githubRef.current?.goToAndPlay(0, true)}
                                onMouseLeave={() => githubRef.current?.stop()}
                                href="https://github.com/prabhatsingh415"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Lottie
                                    lottieRef={githubRef}
                                    animationData={githubIcon}
                                    loop={false}
                                    autoplay={false}
                                    style={{width: 50, height: 50}}
                                />
                            </a>
                        </div>
                        <p className="mt-2">Made with ❤️ by Prabhat Singh...</p>
                        <div
                            className="overflow-x-hidden overflow-y-auto max-h-[300px] sm:max-h-none flex flex-col gap-4 text-[13px] leading-relaxed">
                            <p className="font-semibold text-base mb-2">Credits</p>
                            <p>
                                This work is based on&nbsp;
                                <a
                                    href="https://sketchfab.com/3d-models/tesla-roadster-2020-1fbf29e297bd4a17ac39a00a378441d8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-neon)] hover:underline"
                                >
                                    "Tesla Roadster 2020"
                                </a>
                                &nbsp;by&nbsp;
                                <a
                                    href="https://sketchfab.com/metarex.4d"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-neon)] hover:underline"
                                >
                                    metarex.4d
                                </a>
                                , licensed under&nbsp;
                                <a
                                    href="http://creativecommons.org/licenses/by/4.0/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-neon)] hover:underline"
                                >
                                    CC-BY-4.0
                                </a>
                                .
                            </p>

                            <p>
                                This work is based on&nbsp;
                                <a
                                    href="https://sketchfab.com/3d-models/tesla-cybertruck-f12e67159f75486bb21213e573520612"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-neon)] hover:underline"
                                >
                                    "Tesla Cybertruck"
                                </a>
                                &nbsp;by&nbsp;
                                <a
                                    href="https://sketchfab.com/Lexyc16"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-neon)] hover:underline"
                                >
                                    Lexyc16
                                </a>
                                , licensed under&nbsp;
                                <a
                                    href="http://creativecommons.org/licenses/by/4.0/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-neon)] hover:underline"
                                >
                                    CC-BY-4.0
                                </a>
                                .
                            </p>

                            <p>
                                This work is based on&nbsp;
                                <a
                                    href="https://sketchfab.com/3d-models/tesla-model-x-6a5469a1b776431cb1e1e17a72a2c4f5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-neon)] hover:underline"
                                >
                                    "Tesla Model X"
                                </a>
                                &nbsp;by&nbsp;
                                <a
                                    href="https://sketchfab.com/Abdul.Hannan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-neon)] hover:underline"
                                >
                                    Abdul.Hannan
                                </a>
                                , licensed under&nbsp;
                                <a
                                    href="http://creativecommons.org/licenses/by/4.0/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-neon)] hover:underline"
                                >
                                    CC-BY-4.0
                                </a>
                                .
                            </p>

                            <p>
                                This work is based on&nbsp;
                                <a
                                    href="https://sketchfab.com/3d-models/tesla-model-3-5af35a4772f240039a6e58c58998555b"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-neon)] hover:underline"
                                >
                                    "Tesla model 3"
                                </a>
                                &nbsp;by&nbsp;
                                <a
                                    href="https://sketchfab.com/dannzjs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-neon)] hover:underline"
                                >
                                    dannzjs
                                </a>
                                , licensed under&nbsp;
                                <a
                                    href="http://creativecommons.org/licenses/by/4.0/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-neon)] hover:underline"
                                >
                                    CC-BY-4.0
                                </a>
                                .
                            </p>

                            <p>
                                This work is based on&nbsp;
                                <a
                                    href="https://sketchfab.com/3d-models/tesla-2018-model-3-5ef9b845aaf44203b6d04e2c677e444f"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-neon)] hover:underline"
                                >
                                    "Tesla 2018 Model 3"
                                </a>
                                &nbsp;by&nbsp;
                                <a
                                    href="https://sketchfab.com/uchiha.321abc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-neon)] hover:underline"
                                >
                                    Ameer Studio
                                </a>
                                , licensed under&nbsp;
                                <a
                                    href="http://creativecommons.org/licenses/by/4.0/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-neon)] hover:underline"
                                >
                                    CC-BY-4.0
                                </a>
                                .
                            </p>

                            <p>
                                This work is based on&nbsp;
                                <a
                                    href="https://sketchfab.com/3d-models/tesla-logo-983236803bbf4475a6f6a558522833e3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-neon)] hover:underline"
                                >
                                    "Tesla Logo"
                                </a>
                                &nbsp;by&nbsp;
                                <a
                                    href="https://sketchfab.com/delt.morph"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-neon)] hover:underline"
                                >
                                    delt.morph
                                </a>
                                , licensed under&nbsp;
                                <a
                                    href="http://creativecommons.org/licenses/by/4.0/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-neon)] hover:underline"
                                >
                                    CC-BY-4.0
                                </a>
                                .
                            </p>
                        </div>

                    </div>

                    {/* Column 3: Socials + Fiverr Button + Contact */}
                    <div className="flex flex-col items-center gap-4 mt-12">
                        <button
                            className="w-full max-w-[200px] px-4 py-2 bg-black text-[var(--color-neon)] font-bold border-2 border-[var(--color-neon)] rounded-full hover:scale-105 transition"
                            onClick={() => window.open("https://www.fiverr.com/s/vvkBRqz", "_blank")}
                        >
                            Hire Me on Fiverr
                        </button>
                        <div className="flex flex-col items-center text-sm gap-1 md: mt-2">
                            <a className="link-underline" href="/">About This Project</a>
                            <a className="link-underline" href="/">GitHub Source</a>
                            <a className="link-underline" href="/">Contact Developer</a>
                            <a className="link-underline" href="/">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;