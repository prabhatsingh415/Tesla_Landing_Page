import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useSlideUp(
  ref,
  containerRef = null,
  delay = 1,
  duration = 2
) {
  useGSAP(() => {
    if (!ref.current) return;

    const section = containerRef?.current || window;

    return gsap.from(ref.current, {
      y: -100,
      opacity: 0,
      duration: duration,
      delay: delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef?.current || ref.current, // horizontal scroll section
        scroller: window, // hum window scroll ke hisaab se trigger kar rahe
        start: "top 80%", // jab section top 100px from viewport top aaye
        toggleActions: "play none none none",
        markers: true,
        scrub: true,
      },
    });
  }, [ref, containerRef, delay, duration]);
}
