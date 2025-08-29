import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollFadeIn(modelRef, triggerRef) {
  useEffect(() => {
    if (!modelRef.current || !triggerRef.current) return;

    gsap.from(modelRef.current, {
      x: -2,
      duration: 3,
      delay: 2,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
    console.log("TriggerRef:", triggerRef.current);
    console.log("ModelRef:", modelRef.current?.position);
  }, [modelRef, triggerRef]);
}
