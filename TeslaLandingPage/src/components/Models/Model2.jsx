import { useRef } from "react";
import { useGLTF, Center } from "@react-three/drei";
import useRotation from "../../hooks/useRotation";
import { scale } from "framer-motion";

export default function Model1() {
  const model = useGLTF("/threeDModels/tesla_roadster_2020/scene.gltf");
  const modelRef = useRef();

  useRotation(modelRef, 0.01);
  return (
    <group ref={modelRef} position={[0, -0.5, 1]}>
      <Center>
        <primitive
          ref={modelRef}
          object={model.scene}
          scale={1.5}
          position={[0, 0, 0]}
        />
      </Center>
    </group>
  );
}
