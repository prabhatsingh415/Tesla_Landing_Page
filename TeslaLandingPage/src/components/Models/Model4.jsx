import { useRef } from "react";
import { useGLTF, Center } from "@react-three/drei";
import useRotation from "../../hooks/useRotation";

export default function Model4() {
  const model = useGLTF("/threeDModels/tesla-cyberTruck/scene.gltf");
  const modelRef = useRef();

  useRotation(modelRef, 0.01);
  return (
    <group ref={modelRef} position={[0, -0.9, 1]}>
      <Center>
        <primitive
          ref={modelRef}
          object={model.scene}
          scale={1.3}
          position={[0, 0, 0]}
        />
      </Center>
    </group>
  );
}
