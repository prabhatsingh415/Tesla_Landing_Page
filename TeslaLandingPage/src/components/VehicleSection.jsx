import {useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function VehicleSection() {
    const sectionRef = useRef(null);
    const scrollRef = useRef(null);
    const spacerRef = useRef(null);

    useGSAP(() => {
        const section = sectionRef.current;
        const container = scrollRef.current;

        // 1) ENTRY animation — once
        gsap.from(section, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                scrub: true,    // run once
            },
        });

        // 2) HORIZONTAL SCROLL + PIN
        const scrollWidth = container.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = scrollWidth - viewportWidth;

        gsap.to(container, {
            x: -scrollDistance,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",                // pin as soon as section top hits viewport top
                end: () => `+=${scrollDistance}`,// pin duration = exactly horizontal distance
                scrub: true,
                pin: true,
                pinSpacing: true,
                markers: true,
            },
        });

        // Important: recalc markers & pin
        ScrollTrigger.refresh();
    });

    return (
        <>
            <section
                ref={sectionRef}
                className=" w-full h-screen bg-black overflow-x-scroll scroll scrollbar-hide mt-8"
            >
                <div
                    ref={scrollRef}
                    className="flex w-[400vw] h-full"
                >
                    <div className="w-screen h-full bg-red-500 flex items-center justify-center text-white text-4xl">
                        Vehicle Section
                    </div>
                    <div className="w-screen h-full bg-blue-500 flex items-center justify-center text-white text-4xl">
                        Item 2
                    </div>
                    <div className="w-screen h-full bg-green-500 flex items-center justify-center text-white text-4xl">
                        Item 3
                    </div>
                    <div className="w-screen h-full bg-yellow-500 flex items-center justify-center text-black text-4xl">
                        Item 4
                    </div>
                </div>
            </section>
            <div ref={spacerRef}></div>
        </>
    );
}

export default VehicleSection;
