import { useRef, useState } from "react";
import { Center, Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Teslalogo = ({ play }) => {
  const gltf = useGLTF("/threeDModels/tesla-logo/source/tesla/tesla.gltf");
  const ref = useRef(null);

  const timer = useRef(0);
  const speed = useRef(0.75);

  useFrame((state, delta) => {
    if (!play) return;

    timer.current += delta;

    if (timer.current > 4 && timer.current <= 6) {
      speed.current = 12;
    }

    if (timer.current > 6) {
      speed.current = 0.75;
      timer.current = 0;
    }

    ref.current.rotation.y += speed.current * delta;
  });

  return (
    <group ref={ref} position={[0, 0.75, 0]}>
      <Center>
        <primitive object={gltf.scene} scale={0.75} />
      </Center>
    </group>
  );
};

function LogoIntro() {
  const [fadeOut, setFadeOut] = useState(false);
  const [play, setPlay] = useState(false);
  const sectionRef = useRef(null);

  useGSAP(() => {
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => setPlay(true),
      onLeave: () => setPlay(false),
      onEnterBack: () => setPlay(true),
      onLeaveBack: () => setPlay(false),
    });

    return () => st.kill();
  }, []);

  useGSAP(() => {
    const handleScroll = () => {
      setFadeOut(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-wrap items-center justify-center "
    >
      <div className="w-full h-[80vh] min-h-[400px] relative z-10">
        <Canvas>
          <ambientLight intensity={0.5} />
          <Environment preset="sunset" />
          <directionalLight position={[0, 2, 5]} />
          <spotLight
            position={[0, 0, -2]}
            angle={1}
            intensity={20}
            penumbra={0.5}
            color="red"
            castShadow
          />

          <Teslalogo play={play} />

          <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      <div className="w-full mt-[-210px] bottom-10 text-center">
        <h1
          className={`text-[var(--color-bright-white)] text-6xl lg:text-[100px] uppercase animate__animated animate__fadeIn animate__slower ${
            fadeOut ? "animate__fadeOut" : "animate__fadeIn"
          }`}
        >
          Tesla
        </h1>

        <p
          className={`text-[var(--color-tesla-red)] text-2xl italic animate__animated animate__fadeIn animate__slower ${
            fadeOut ? "animate__fadeOut" : "animate__fadeIn"
          }`}
        >
          Accelerating the Future
        </p>

        <p
          className={`text-[var(--color-shadow-gray)] text-lg animate__animated animate__fadeIn animate__slower ${
            fadeOut ? "animate__fadeOut" : "animate__fadeIn"
          }`}
        >
          A project by Prabhat Singh
        </p>
      </div>
    </div>
  );
}

export default LogoIntro;
