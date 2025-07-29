import {useEffect, useRef, useState} from "react"
import {Center, Environment, OrbitControls, useGLTF} from "@react-three/drei";
import {Canvas, useFrame} from "@react-three/fiber";

const Teslalogo = () => {
    const gltf = useGLTF("/threeDModels/tesla-logo/source/tesla/tesla.gltf")
    const ref = useRef();

    const timer = useRef(0);
    const speed = useRef(0.75);

    useFrame((state, delta) => {
        timer.current += delta;    // adding the time

        if (timer.current > 4 && timer.current <= 6) {   // if the time of animation is > 3 and <= 5 th
            speed.current = 12;                         // increase the rotation speed
        }

        if (timer.current > 5) {       // Then after a 2 sec reset the timer to normal the rotation speed
            speed.current = 0.75;
            timer.current = 0;
        }

        ref.current.rotation.y += speed.current * delta // adding a rotating animation on logo model
    })
    return (

        <group ref={ref} position={[0, 0.75, 0]}>
            <Center>
                <primitive object={gltf.scene} scale={0.75}/>
                //projecting model on screen
            </Center>
        </group>
    );
}

function LogoIntro() {

    const [fadeOut, setFadeOut] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current) {
                // 👇 Scrolling down
                setFadeOut(true);
            } else {
                // 👆 Scrolling up
                setFadeOut(false);
            }

            lastScrollY.current = currentScrollY; // Update the scroll position
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    })
    return (
        <div className="flex flex-wrap items-center justify-center gap-y-5">
            <div className="w-full h-screen">
                <Canvas>
                    <ambientLight intensity={0.5}/>
                    <Environment preset="sunset"/>
                    <directionalLight position={[0, 2, 5]}/>
                    <spotLight
                        position={[0, 0, -2]}
                        angle={1}
                        intensity={20}
                        penumbra={0.5}
                        color="red"
                        castShadow
                        target-position={[0, 1, 5]} // aim at the logo
                    />
                    <Teslalogo/>
                    <OrbitControls enableZoom={false}
                                   minPolarAngle={Math.PI / 2} // to prevent the vertical control over the logo model
                                   maxPolarAngle={Math.PI / 2}/>
                </Canvas>
            </div>
            <div className="absolute bottom-10 text-center">
                <h1 className={`text-[var(--color-bright-white)] text-[100px] uppercase animate__animated animate__fadeIn animate__slower ${fadeOut ? "animate__fadeOut" : "animate__fadeIn"}`}>Tesla</h1>

                <p className={`text-[var(--color-tesla-red)] text-2xl italic animate__animated animate__fadeIn animate__slower ${fadeOut ? "animate__fadeOut" : "animate__fadeIn"}`}>
                    Accelerating the Future
                </p>

                <p className={`text-[var(--color-shadow-gray)] text-lg animate__animated animate__fadeIn animate__slower ${fadeOut ? "animate__fadeOut" : "animate__fadeIn"}`}>
                    A project by Prabhat Singh
                </p>
            </div>

        </div>
    );
}

export default LogoIntro;
