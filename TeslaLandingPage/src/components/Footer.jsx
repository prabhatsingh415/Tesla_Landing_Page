import React, { useRef } from "react";
import Lottie from "lottie-react";
import xIcon from "../assets/icons/x.json";
import linkedinIcon from "../assets/icons/linkedin.json";
import githubIcon from "../assets/icons/github.json";

function Footer() {
  const xRef = useRef(null);
  const linkedinRef = useRef(null);
  const githubRef = useRef(null);

  return (
    <div className="w-full  grid gap-2 p-8 lg:grid-cols-12 bg-[var(--color-steel-gray)] border-4 border-[var(--color-neon)] rounded-xl shadow-[0_0_30px_5px_var(--color-neon)] text-[var(--color-shadow-gray)]">
      {/* Column 1: Left Links */}
      <div className="flex flex-col items-center justify-center lg:col-span-3 m-4 ">
        <div className="flex flex-col sm:items-center lg:items-start sm:hidden lg:flex text-sm gap-1 sm:gap-3 m-4">
          <a className="link-underline w-fit" href="/">
            Privacy & Legal
          </a>
          <a className="link-underline w-fit" href="/">
            Vehicles
          </a>
          <a className="link-underline w-fit" href="/">
            News
          </a>
          <a className="link-underline w-fit" href="/">
            Learn
          </a>
          <a className="link-underline w-fit" href="/">
            Locations
          </a>
          <a className="link-underline w-fit" href="/">
            Get Updates
          </a>
        </div>
      </div>

      {/* Column 2: Credits */}
      <div className="text-center flex flex-col lg:col-span-6">
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
              style={{ width: 50, height: 50 }}
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
              style={{ width: 50, height: 50 }}
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
              style={{ width: 50, height: 50 }}
            />
          </a>
        </div>
        <p className="m-4 font-bold">Made with ❤️ by Prabhat Singh...</p>
        <div className="overflow-x-hidden overflow-y-auto max-h-[300px] sm:max-h-none flex flex-col gap-4 text-[13px] leading-relaxed">
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
              "Tesla Model 3"
            </a>
            &nbsp;by&nbsp;
            <a
              href="https://sketchfab.com/ChoochooLi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-neon)] hover:underline"
            >
              ChoochooLi
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
              "Tesla Model S Prior Design"
            </a>
            &nbsp;by&nbsp;
            <a
              href="https://sketchfab.com/RPMRender"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-neon)] hover:underline"
            >
              RPMRender
            </a>
            , licensed under&nbsp;
            <a
              href="https://sketchfab.com/licenses"
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
      <div className="flex flex-col flex-wrap items-center lg:col-span-3 m-8">
        <button
          className="w-full md:w-1/3 lg:w-fit lg:mt-[30%] px-4 py-2 bg-black text-[var(--color-neon)] font-bold border-2 border-[var(--color-neon)] rounded-full hover:scale-105 transition"
          onClick={() =>
            window.open("https://www.fiverr.com/s/vvkBRqz", "_blank")
          }
        >
          Hire Me on Fiverr
        </button>
        <div className="flex flex-col text-sm gap-1 sm:gap-3 m-4">
          <a className="link-underline" href="/">
            About This Project
          </a>
          <a className="link-underline" href="/">
            GitHub Source
          </a>
          <a className="link-underline" href="/">
            Contact Developer
          </a>
          <a className="link-underline" href="/">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
