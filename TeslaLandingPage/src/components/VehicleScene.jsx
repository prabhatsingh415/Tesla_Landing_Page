// VehicleScene.jsx
import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  AdaptiveDpr,
  AdaptiveEvents,
} from "@react-three/drei";

export default function VehicleScene({
  Model,
  camPos = [0, 1.5, 7],
  fov = 45,
  ambientIntensity = 0.5,
  envPreset = "city",
}) {
  const cam = useMemo(() => ({ position: camPos, fov }), [camPos, fov]);

  return (
    <Canvas
      camera={cam}
      dpr={[1, 1.5]}
      gl={{ antialias: false, powerPreference: "high-performance" }}
      shadows={false}
      className="absolute inset-0"
    >
      {/* Adaptive performance */}
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />

      {/* Simple optimized lighting */}
      <Environment preset={envPreset} />
      <ambientLight intensity={ambientIntensity} />

      <Suspense fallback={null}>
        <Model />
      </Suspense>

      {/* Universal controls */}
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
