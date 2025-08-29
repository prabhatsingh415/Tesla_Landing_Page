// OtherProducts.jsx
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import product1 from "../assets/images/solar-panels.jpg";
import product2 from "../assets/images/solar-roof.jpg";
import product3 from "../assets/images/powerwall.jpg";
import product4 from "../assets/images/megaPack.jpg";

export default function OtherProducts() {
  const products = [
    {
      id: 1,
      title: "Solar Panels",
      sub: "Use Solar Energy to Power Your Home and Charge Your Tesla",
      img: product1,
      link: "#",
    },
    {
      id: 2,
      title: "Solar Roof",
      sub: "Generate Clean Energy With Your Roof",
      img: product2,
      link: "#",
    },
    {
      id: 3,
      title: "Powerwall",
      sub: "Keep Your Lights On During Outages",
      img: product3,
      link: "#",
    },
    {
      id: 4,
      title: "Megapack",
      sub: "Massive Batteries for Massive Energy Support",
      img: product4,
      link: "#",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full py-16 bg-black text-white">
      <h2 className="text-center text-[var(--color-tesla-red)] text-4xl font-bold mb-12">
        Other Tesla Products
      </h2>

      <div className="relative px-8">
        <Swiper
          modules={[EffectCoverflow, Navigation, Pagination]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{ clickable: true }}
          className="py-8"
          onSwiper={(swiper) => {
            // Delay execution for refs to be defined
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              className="w-72 md:w-80 lg:w-96 flex justify-center"
            >
              <div className="relative group rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between bg-gray-900">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-[35rem] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-500 flex flex-col justify-between p-6">
                  <div>
                    <h3 className="text-2xl font-semibold">{product.title}</h3>
                    <p className="text-sm mt-2 opacity-90">{product.sub}</p>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={product.link}
                      className="px-4 py-2 bg-white text-black font-medium rounded-full shadow-md hover:bg-gray-200 transition"
                    >
                      Order Now
                    </a>
                    <a
                      href={product.link}
                      className="px-4 py-2 bg-transparent border border-white text-white font-medium rounded-full shadow-md hover:bg-white hover:text-black transition"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div
          ref={prevRef}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer z-20 text-white text-3xl"
        >
          &#10094;
        </div>
        <div
          ref={nextRef}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer z-20 text-white text-3xl"
        >
          &#10095;
        </div>
      </div>
    </section>
  );
}
