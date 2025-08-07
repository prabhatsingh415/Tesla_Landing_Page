import {useRef} from "react";
import {useGLTF} from "@react-three/drei";

export default function Model1({triggerRef}) {
    const model = useGLTF("/threeDModels/tesla-cyberTruck/scene.gltf");
    const modelRef = useRef();

    // useScrollFadeIn(modelRef, triggerRef);
    return (
        <group ref={modelRef}>
            <primitive object={model.scene} scale={2} rotation={[0, 0.4, 0]}/>
        </group>
    );
}
