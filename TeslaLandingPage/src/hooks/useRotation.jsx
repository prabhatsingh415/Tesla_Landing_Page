import { useFrame } from "@react-three/fiber";

export default function useRotation(modelRef, speed = 0.01) {
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += speed;
    }
  });
}
