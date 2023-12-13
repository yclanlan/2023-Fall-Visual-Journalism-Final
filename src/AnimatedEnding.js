import { useEffect, useRef } from "react";

import { CameraTimeline } from "./AnimatedCamera";

export default function AnimatedEnding() {
  const highlightRef = useRef();

  // Effect where we write the animation to play along with the camera
  useEffect(() => {
    CameraTimeline.to(
      highlightRef.current.material,
      {
        opacity: 0,
      },
      "animation5"
    );

    CameraTimeline.to(
      highlightRef.current.material,
      {
        opacity: 1,
      },
      "animation6"
    );
  }, [highlightRef]);

  return (
    <mesh
      ref={highlightRef}
      scale={[40, 40, 40]}
      position={[13.8, 3, 25]}
      rotation={[0, (3 * Math.PI) / 2, 0]}
    >
      <planeGeometry />
      <meshBasicMaterial transparent opacity={0} color="black" />
    </mesh>
  );
}
