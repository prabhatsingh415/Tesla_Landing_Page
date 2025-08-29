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
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef(null);

  // Full-page splash / loading control
  useEffect(() => {
    // Disable browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0); // force scroll top
  }, []);

  useEffect(() => {
    if (!loading) {
      // Initialize Lenis when loading is done
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

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      return () => {
        lenis.destroy();
      };
    }
  }, [loading]);

  return (
    <>
      {/* Splash screen while loading */}
      {loading && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black z-50 flex items-center justify-center">
          <span className="text-white text-3xl animate-pulse">Loading...</span>
        </div>
      )}

      {/* Main content only renders when loading is false */}
      {!loading && (
        <div className="flex flex-col gap-32 lg:gap-[10vh]">
          <Header />
          <LogoIntro />
          <VehicleSection />
          <AutopilotSection />
          <ChargingNetwork />
          <OtherProducts />
          <Footer />
        </div>
      )}

      {/* Intro video (always rendered but triggers end callback) */}
      <IntroVideo
        onFinish={() => {
          setLoading(false); // hide splash screen after intro finishes
        }}
      />
    </>
  );
}

export default App;
