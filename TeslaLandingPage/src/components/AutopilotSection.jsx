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
        delay: i * 0.3,
        scrollTrigger: {
          trigger: "#autopilot",
          start: "top 50%",
          toggleActions: "play none none reverse",
          scrub: 0.5,
        },
      });
    });
  }, []);

  return (
    <section
      id="autopilot"
      className="relative w-full min-h-[80vh] md:h-screen overflow-hidden"
    >
      <video
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 sm:px-10 md:px-20 lg:px-32 text-white space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold opacity-0 translate-y-10 autopilot-animate">
          Autopilot
        </h2>
        <p className="max-w-full sm:max-w-lg md:max-w-xl text-base sm:text-lg md:text-xl opacity-0 translate-y-10 autopilot-animate">
          Experience the future of driving with Tesla Autopilot — advanced
          safety and convenience features designed to assist you on every
          journey.
        </p>
        <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg lg:text-xl">
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
