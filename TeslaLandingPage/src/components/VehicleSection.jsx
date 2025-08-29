import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import VehicleScene from "./VehicleScene";
import Model1 from "./Models/Model1";
import Model2 from "./Models/Model2";
import Model3 from "./Models/Model3";
import Model4 from "./Models/Model4";
import DetailsCard from "./DetailsCard";
import useSlideUp from "../hooks/useSlideUp";
gsap.registerPlugin(ScrollTrigger);

function VehicleSection() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const spacerRef = useRef(null);

  const divRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const titleRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const detailsRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const models = [Model1, Model2, Model3, Model4];
  const titles = [
    "MODEL S PRIOR",
    "TESLA ROADSTER",
    "TESLA MODEL 3",
    "TESLA CYBERTRUCK",
  ];
  const details = [
    {
      modelName: "Tesla Model S Plaid",
      topSpeed: "322 km/h (200 mph)",
      range: "637 km (396 miles) – EPA estimated",
      battery: "100 kWh",
      price: "$112,990+",
      camPos: [0, 1.5, 8],
      ambientIntensity: 4,
      topLightIntensity: 10,
      frontLightIntensity: 4,
      backLightIntensity: 2,
      sideLightIntensity: 2,
    },
    {
      modelName: "Tesla Roadster",
      topSpeed: "400 km/h (250 mph)",
      range: "1,000 km (620 miles)",
      battery: "200 kWh",
      price: "$200,000+",
      camPos: [0, 1.5, 8],
      ambientIntensity: 1.75,
      topLightIntensity: 5,
      frontLightIntensity: 4,
      backLightIntensity: 4,
      sideLightIntensity: 4,
    },
    {
      modelName: "Tesla Model 3",
      topSpeed: "261 km/h (162 mph)",
      range: "614 km (382 miles) – Long Range AWD",
      battery: "82 kWh",
      price: "$46,990+",
      camPos: [0, 1.5, 6],
      ambientIntensity: 0.3,
      topLightIntensity: 4,
      frontLightIntensity: 2,
      backLightIntensity: 2,
      sideLightIntensity: 2,
    },
    {
      modelName: "Tesla Cybertruck",
      topSpeed: "210 km/h (130 mph)",
      range: "805 km (500 miles)",
      battery: "≈200 kWh",
      price: "$69,900+",
      camPos: [0, 1.5, 6],
      ambientIntensity: 0.3,
      topLightIntensity: 4,
      frontLightIntensity: 2,
      backLightIntensity: 2,
      sideLightIntensity: 2,
    },
  ];
  for (let i = 0; i < 4; i++) {
    useSlideUp(titleRefs[i], divRefs[i]);
    useSlideUp(detailsRefs[i], divRefs[i]);
  }

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
      <h1 className="relative hidden md:block text-3xl text-[var(--color-tesla-red)] mt-16 mb-8 ">
        <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:block after:w-full after:h-[3px] after:bg-[var(--color-tesla-red)] after:shadow-[0_0_30px_3px_var(--color-tesla-red)]">
          Vehicles
        </span>
      </h1>

      <section
        ref={sectionRef}
        className="hidden md:block w-full h-screen bg-black overflow-x-scroll scroll scrollbar-hide mt-16"
      >
        <div ref={scrollRef} className="flex w-[400vw] h-full">
          {models.map((Model, i) => (
            <div
              key={i}
              ref={divRefs[i]}
              className="w-screen h-full border-4 border-[var(--color-neon)] shadow-[inset_0_0_50px_10px_var(--color-neon)] rounded-xl flex items-center justify-center text-white text-4xl relative"
            >
              <h1
                ref={titleRefs[i]}
                className={`absolute top-[-1rem] font-bold text-white/30 ${
                  i === 0 ? "text-[10rem]" : "text-[8rem]"
                }`}
              >
                {titles[i]}
              </h1>

              <VehicleScene {...details[i]} Model={Model} />

              <div ref={detailsRefs[i]}>
                <DetailsCard {...details[i]} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <div ref={spacerRef}></div>
    </>
  );
}

export default VehicleSection;
