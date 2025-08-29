import React, { useEffect } from "react";
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
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Refresh ScrollTrigger after mount
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col gap-32 lg:gap-[10vh]">
      <IntroVideo />
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
