import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useSlideUp(ref, delay = 0, duration = 1) {
  useEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current, {
      y: 50,
      opacity: 0,
      duration: duration,
      delay: delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, [ref, delay, duration]);
}
