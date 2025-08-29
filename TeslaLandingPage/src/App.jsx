import React, { useEffect, useState, useRef } from "react";
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

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Disable scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    // Agar resources already load ho chuki hain
    if (document.readyState === "complete") {
      setResourcesLoaded(true);
      setShowIntro(true);
    } else {
      // Wait for full page load
      window.addEventListener("load", () => {
        setResourcesLoaded(true);
        setShowIntro(true);
      });
    }
  }, []);

  useEffect(() => {
    if (!resourcesLoaded || showIntro) return;

    // Start Lenis scroll after intro
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;
    lenis.scrollTo(0, { immediate: true });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);
    setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      lenis.destroy();
    };
  }, [resourcesLoaded, showIntro]);

  return (
    <>
      {/* Show loading only if resources not yet loaded */}
      {!resourcesLoaded && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black z-50 flex items-center justify-center">
          <span className="text-white text-3xl animate-pulse">Loading...</span>
        </div>
      )}

      {/* Show intro video */}
      {showIntro && (
        <IntroVideo
          onFinish={() => {
            setShowIntro(false);
            if (lenisRef.current)
              lenisRef.current.scrollTo(0, { immediate: true });
          }}
        />
      )}

      {/* Page content */}
      <div
        className={`flex flex-col gap-32 lg:gap-[10vh] ${
          !resourcesLoaded || showIntro ? "pointer-events-none" : ""
        }`}
      >
        <Header />
        <LogoIntro />
        <VehicleSection />
        <AutopilotSection />
        <ChargingNetwork />
        <OtherProducts />
        <Footer />
      </div>
    </>
  );
}

export default App;
