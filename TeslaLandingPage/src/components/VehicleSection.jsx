import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Model1 from "./Models/Model1";
import Model2 from "./Models/Model2";
import Model3 from "./Models/Model3";
import Model4 from "./Models/Model4";
import DetailsCard from "./DetailsCard";
import useSlideUp from "../hooks/useSlideUp";
import VehicleScene from "./VehicleScene"; // ✅ import new reusable scene

gsap.registerPlugin(ScrollTrigger);

function VehicleSection() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const spacerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const model1TiltleRef = useRef(null);
  const model2TiltleRef = useRef(null);
  const model3TiltleRef = useRef(null);
  const model4TiltleRef = useRef(null);
  const model1DetailsRef = useRef(null);
  const model2DetailsRef = useRef(null);
  const model3DetailsRef = useRef(null);
  const model4DetailsRef = useRef(null);

  useSlideUp(model1TiltleRef, div1Ref);
  useSlideUp(model1DetailsRef, div1Ref);
  useSlideUp(model2TiltleRef, div2Ref);
  useSlideUp(model2DetailsRef, div2Ref);
  useSlideUp(model3TiltleRef, div3Ref);
  useSlideUp(model3DetailsRef, div3Ref);
  useSlideUp(model4TiltleRef, div4Ref);
  useSlideUp(model4DetailsRef, div4Ref);

  useGSAP(() => {
    const section = sectionRef.current;
    const container = scrollRef.current;

    gsap.from(section, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 100%",
        scrub: true,
      },
    });

    const scrollWidth = container.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = scrollWidth - viewportWidth;

    gsap.to(container, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        delay: 1,
        start: "top-=50 top",
        end: () => `+=${scrollDistance}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    ScrollTrigger.refresh();
  });

  return (
    <>
      <h1 className="relative text-3xl text-[var(--color-tesla-red)] mt-16 mb-8 inline-block">
        <span
          className="relative 
          after:content-[''] after:absolute after:left-0 
          after:-bottom-2 after:block after:w-full after:h-[3px] 
          after:bg-[var(--color-tesla-red)]
          after:shadow-[0_0_30px_3px_var(--color-tesla-red)]"
        >
          Vehicles
        </span>
      </h1>

      <section
        ref={sectionRef}
        className="w-full h-screen bg-black overflow-x-scroll scroll scrollbar-hide mt-8"
      >
        <div ref={scrollRef} className="flex w-[400vw] h-full">
          {/* --- MODEL 1 --- */}
          <div
            ref={div1Ref}
            className="w-screen h-full border-4 border-[var(--color-neon)] shadow-[inset_0_0_50px_10px_var(--color-neon)] rounded-xl flex items-center justify-center text-white text-4xl"
          >
            <h1
              ref={model1TiltleRef}
              className="absolute top-[-1rem] text-[10rem] text-white/30 font-bold"
            >
              MODEL S PRIOR
            </h1>
            <VehicleScene
              Model={Model1}
              camPos={[0, 1.5, 8]}
              ambientIntensity={4}
            />
            <div ref={model1DetailsRef}>
              <DetailsCard
                modelName="Tesla Model S Plaid"
                topSpeed="322 km/h (200 mph)"
                range="637 km (396 miles) – EPA estimated"
                battery="100 kWh"
                price="$112,990+"
              />
            </div>
          </div>

          {/* --- MODEL 2 --- */}
          <div
            ref={div2Ref}
            className="w-screen h-full border-4 border-[var(--color-neon)] shadow-[inset_0_0_50px_10px_var(--color-neon)] rounded-xl flex items-center justify-center text-white text-4xl"
          >
            <h1
              ref={model2TiltleRef}
              className="absolute top-[-1rem] text-[8rem] text-white/30 font-bold"
            >
              TESLA ROADSTER
            </h1>
            <VehicleScene
              Model={Model2}
              camPos={[0, 1.5, 8]}
              ambientIntensity={1.75}
            />
            <div ref={model2DetailsRef}>
              <DetailsCard
                modelName="Tesla Roadster"
                topSpeed="400 km/h (250 mph)"
                range="1,000 km (620 miles)"
                battery="200 kWh"
                price="$200,000+"
              />
            </div>
          </div>

          {/* --- MODEL 3 --- */}
          <div
            ref={div3Ref}
            className="w-screen h-full border-4 border-[var(--color-neon)] shadow-[inset_0_0_50px_10px_var(--color-neon)] rounded-xl flex items-center justify-center text-white text-4xl"
          >
            <h1
              ref={model3TiltleRef}
              className="absolute top-[-1rem] text-[8rem] text-white/30 font-bold"
            >
              TESLA MODEL 3
            </h1>
            <VehicleScene
              Model={Model3}
              camPos={[0, 1.5, 6]}
              ambientIntensity={0.3}
            />
            <div ref={model3DetailsRef}>
              <DetailsCard
                modelName="Tesla Model 3"
                topSpeed="261 km/h (162 mph)"
                range="614 km (382 miles) – Long Range AWD"
                battery="82 kWh"
                price="$46,990+"
              />
            </div>
          </div>

          {/* --- MODEL 4 --- */}
          <div
            ref={div4Ref}
            className="w-screen h-full border-4 border-[var(--color-neon)] shadow-[inset_0_0_50px_10px_var(--color-neon)] rounded-xl flex items-center justify-center text-black text-4xl"
          >
            <h1
              ref={model4TiltleRef}
              className="absolute top-[-1rem] text-[8rem] text-white/30 font-bold"
            >
              TESLA CYBER TRUCK
            </h1>
            <VehicleScene
              Model={Model4}
              camPos={[0, 1.5, 6]}
              ambientIntensity={0.3}
            />
            <div ref={model4DetailsRef}>
              <DetailsCard
                modelName="Tesla Cybertruck"
                topSpeed="210 km/h (130 mph)"
                range="805 km (500 miles)"
                battery="≈200 kWh"
                price="$69,900+"
              />
            </div>
          </div>
        </div>
      </section>
      <div ref={spacerRef}></div>
    </>
  );
}

export default VehicleSection;
