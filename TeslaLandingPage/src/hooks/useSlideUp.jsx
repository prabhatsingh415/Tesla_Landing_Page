import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useSlideUp(
  ref,
  containerRef = null,
  delay = 0.5,
  duration = 1
) {
  useGSAP(() => {
    if (!ref.current || !containerRef?.current) return;

    gsap.from(ref.current, {
      y: 100, // Slide up from below
      opacity: 0,
      duration: duration,
      delay: delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current, // Trigger based on the element itself
        scroller: containerRef.current, // Use the horizontal scrolling container
        start: "left center", // Trigger when the left edge of the element hits the center of the viewport
        end: "right center", // End when the right edge hits the center
        toggleActions: "play none none none",
        scrub: 1, // Smooth scrubbing tied to scroll
        markers: false, // Set to true for debugging
      },
    });
  }, [ref, containerRef, delay, duration]);
}
