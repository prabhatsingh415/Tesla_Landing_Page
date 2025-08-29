// App.jsx
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

export default function App() {
  const [resourcesLoaded, setResourcesLoaded] = useState(false); // true when window 'load' fired (or readyState complete)
  const [showIntro, setShowIntro] = useState(false); // true => play intro
  const lenisRef = useRef(null);

  useEffect(() => {
    // disable browser auto-scroll-restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // always start at top
    window.scrollTo(0, 0);

    // if page already fully loaded (cached), go ahead
    if (document.readyState === "complete") {
      console.log("[App] document.readyState === complete -> resourcesLoaded");
      setResourcesLoaded(true);
      setShowIntro(true); // start intro immediately
      return;
    }

    // otherwise wait for window 'load'
    const onLoad = () => {
      console.log("[App] window.load fired -> resourcesLoaded");
      setResourcesLoaded(true);
      setShowIntro(true);
    };

    window.addEventListener("load", onLoad);

    // safety fallback: if load never fires (rare), clear after 20s to avoid permanent spinner
    const fallback = setTimeout(() => {
      if (!resourcesLoaded) {
        console.warn(
          "[App] load event timeout -> forcing resourcesLoaded (fallback)"
        );
        setResourcesLoaded(true);
        setShowIntro(true);
      }
    }, 20000);

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(fallback);
    };
  }, []); // run once

  // Toggle body scroll only while loading/intro shown
  useEffect(() => {
    if (!resourcesLoaded || showIntro) {
      // block scroll while loading or intro
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [resourcesLoaded, showIntro]);

  // init Lenis + sync ScrollTrigger AFTER resourcesLoaded && intro finished
  useEffect(() => {
    if (!resourcesLoaded || showIntro) return;

    console.log("[App] initializing Lenis + ScrollTrigger");
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;
    lenis.scrollTo(0, { immediate: true });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);
    setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [resourcesLoaded, showIntro]);

  return (
    <>
      {/* Loading overlay — show while resources not fully loaded */}
      {!resourcesLoaded && (
        <div
          id="site-loading-overlay"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
        >
          <span className="text-xl md:text-3xl animate-pulse">Loading...</span>
        </div>
      )}

      {/* Intro video — shown only when resourcesLoaded true and until it calls onFinish */}
      {resourcesLoaded && showIntro && (
        <IntroVideo
          onFinish={() => {
            // hide intro, then ensure Lenis scrollTo(0)
            setShowIntro(false);
            // small RAF to ensure DOM updates applied
            requestAnimationFrame(() => {
              lenisRef.current?.scrollTo(0, { immediate: true });
            });
          }}
        />
      )}

      {/* Page content (always in DOM; overlay/intro control interaction via body overflow and overlays above) */}
      <div className="flex flex-col gap-32 lg:gap-[10vh]">
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
