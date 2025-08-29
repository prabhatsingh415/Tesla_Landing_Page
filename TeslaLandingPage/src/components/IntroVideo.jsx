import { useEffect, useRef } from "react";
import introVideo from "../assets/videos/Intro.mp4";

export default function IntroVideo({ onFinish }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;

    const timer = setTimeout(() => {
      onFinish?.();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9998] bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        src={introVideo}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={() => onFinish?.()}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
