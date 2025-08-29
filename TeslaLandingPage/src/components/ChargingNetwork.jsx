import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import chargingNetwork from "../assets/images/chargingNetwork.jpg";
gsap.registerPlugin(ScrollTrigger);

export default function ChargingNetwork() {
  useEffect(() => {
    gsap.utils.toArray(".charge-animate").forEach((el, i) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: i * 0.2,
        scrollTrigger: {
          trigger: "#charging",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <section
      id="charging"
      className="relative w-full bg-black text-white flex flex-col gap-[8rem] items-center "
    >
      <div className="w-full h-[70vh] flex justify-center items-center px-6">
        <img
          src={chargingNetwork}
          alt="Tesla Supercharger Network"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Content Below */}
      <div className="relative z-10 text-center text-[var(--color-tesla-red)] max-w-4xl px-6 py-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 charge-animate opacity-0 translate-y-6">
          Find Your Charge
        </h2>
        <p className="text-lg md:text-xl text-red-500 mb-12 charge-animate opacity-0 translate-y-6">
          View the network of Tesla Superchargers and Destination Chargers
          available near you.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
          <div className="charge-animate opacity-0 translate-y-6">
            <h3 className="text-5xl font-bold">32,783</h3>
            <p className="text-lg text-red-500">Superchargers</p>
          </div>
          <div className="charge-animate opacity-0 translate-y-6">
            <h3 className="text-5xl font-bold">10,389</h3>
            <p className="text-lg text-red-500">Destination Chargers</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 charge-animate opacity-0 translate-y-6">
          <button className="px-6 py-3 bg-[var(--color-tesla-red)] text-black font-semibold rounded-lg hover:bg-gray-200 transition">
            View Network
          </button>
          <button className="px-6 py-3 border border-[var(--color-tesla-red)] font-semibold rounded-lg hover:bg-[var(--color-tesla-red)] hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
