import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import IntroVideo from "./components/IntroVideo.jsx";
import Header from "./components/Header/Header.jsx";
import LogoIntro from "./components/LogoIntro.jsx";
import Footer from "./components/Footer.jsx";
import VehicleSection from "./components/VehicleSection.jsx";
import AutopilotSection from "./components/AutopilotSection.jsx";
import ChargingNetwork from "./components/ChargingNetwork.jsx";
import OtherProducts from "./components/OtherProducts.jsx";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isIntroPlaying, setIsIntroPlaying] = useState(true);

  useEffect(() => {
    // Browser scroll restoration ko disable karo
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Force scroll to top on mount
    window.scrollTo(0, 0);

    // Intro video ke liye 4 sec ka timer
    const timer = setTimeout(() => {
      setIsIntroPlaying(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    let lenis;

    if (isIntroPlaying) {
      // Intro ke time scroll lock karo
      document.body.classList.add("no-scroll");
    } else {
      // Intro khatam hone ke baad scroll unlock aur Lenis start
      document.body.classList.remove("no-scroll");

      lenis = new Lenis({
        duration: 1.2,
        smooth: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      // Force scroll to top with Lenis
      lenis.scrollTo(0, { immediate: true });

      // GSAP ticker ke saath Lenis sync karo (RAF se better hai)
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      // Lenis scroll events ko ScrollTrigger ke saath sync
      lenis.on("scroll", ScrollTrigger.update);

      // Thodi der baad ScrollTrigger refresh karo (layout settle hone ke liye)
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }

    return () => {
      if (lenis) {
        lenis.destroy();
        gsap.ticker.remove((time) => {
          lenis.raf(time * 1000);
        });
      }
      document.body.classList.remove("no-scroll");
    };
  }, [isIntroPlaying]);

  return (
    <div className="flex flex-col gap-32 lg:gap-[10vh]">
      <IntroVideo setIsIntroPlaying={setIsIntroPlaying} />
      <Header />
      <LogoIntro />
      <VehicleSection />
      <AutopilotSection />
      <ChargingNetwork />
      <OtherProducts />
      <Footer />
    </div>
  );
}

export default App;
