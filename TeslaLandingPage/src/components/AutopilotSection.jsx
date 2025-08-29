import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgVideo from "../assets/videos/Autopilot_bg.mp4";

gsap.registerPlugin(ScrollTrigger);

export default function AutopilotSection() {
  useGSAP(() => {
    gsap.utils.toArray(".autopilot-animate").forEach((el, i) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: i * 2,
        scrollTrigger: {
          trigger: "#autopilot",
          start: "top 50%",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section
      id="autopilot"
      className="relative w-full h-screen overflow-hidden scrollbar-hide my-32"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-10 text-white space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold opacity-0 translate-y-10 autopilot-animate">
          Autopilot
        </h2>
        <p className="max-w-xl text-lg md:text-xl opacity-0 translate-y-10 autopilot-animate">
          Experience the future of driving with Tesla Autopilot — advanced
          safety and convenience features designed to assist you on every
          journey.
        </p>
        <ul className="space-y-4 text-lg md:text-xl">
          <li className="opacity-0 translate-y-10 autopilot-animate">
            🚗 Automatic Lane Change
          </li>
          <li className="opacity-0 translate-y-10 autopilot-animate">
            🛣️ Navigate on Autopilot
          </li>
          <li className="opacity-0 translate-y-10 autopilot-animate">
            ⚡ Smart Summon
          </li>
          <li className="opacity-0 translate-y-10 autopilot-animate">
            🛡️ Safety First Approach
          </li>
        </ul>
      </div>
    </section>
  );
}
