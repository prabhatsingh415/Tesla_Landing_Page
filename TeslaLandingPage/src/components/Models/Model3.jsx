import { useRef } from "react";
import { useGLTF, Center } from "@react-three/drei";
import useRotation from "../../hooks/useRotation";

useGLTF.preload("/threeDModels/tesla_model_3/scene.gltf");

export default function Model3() {
  const model = useGLTF("/threeDModels/tesla_model_3/scene.gltf");
  const modelRef = useRef();

  useRotation(modelRef, 0.01);
  return (
    <group ref={modelRef} position={[0, -0.5, 1]}>
      <Center>
        <primitive
          ref={modelRef}
          object={model.scene}
          scale={0.8}
          position={[0, 0, 0]}
        />
      </Center>
    </group>
  );
}
