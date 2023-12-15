import { PerspectiveCamera } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export const CameraTimeline = new gsap.timeline({
  paused: true,
});

function AnimatedCamera(props) {
  
  const cameraRef = useRef();

  useEffect(() => {
    CameraTimeline.to(
      cameraRef.current.position,
      { x: 15, y: 3, z: 5 },
      "animation1"
    );

    CameraTimeline.to(
      cameraRef.current.rotation,
      { x: 0, y: 0, z: 0 },
      "animation1"
    );

    CameraTimeline.to(
      cameraRef.current.position,
      { x: 18, y: 3, z: 0 },
      "animation2"
    );

    CameraTimeline.to(
      cameraRef.current.rotation,
      { x: 0, y: Math.PI / 2, z: 0 },
      "animation2"
    );

    CameraTimeline.to(
      cameraRef.current.position,
      { x: 15, y: 3, z: 20 },
      "animation3"
    );

    CameraTimeline.to(
      cameraRef.current.rotation,
      { x: 0, y: Math.PI, z: 0 },
      "animation3"
    );
    // animation3 -> animation4: zoom in

    // CameraTimeline.to(
    //   cameraRef.current.position,
    //   { x: 15, y: 4.1, z: 23 },
    //   "animation4"
    // );

    // CameraTimeline.to(
    //   cameraRef.current.position,
    //   { x: 15, y: 4.1, z: 23 },
    //   "animation5"
    // );

    CameraTimeline.to(
      cameraRef.current.position,
      { x: 14.1, y: 4.4, z: 23.5 },
      "animation4"
    );

    CameraTimeline.to(
      cameraRef.current.rotation,
      { x: 0, y: 1.25 * Math.PI, z: 0 },
      "animation4"
    );

    CameraTimeline.to(
      cameraRef.current.position,
      { x: 14, y: 4.3, z: 25 },
      "animation5"
    );

    CameraTimeline.to(
      cameraRef.current.rotation,
      { x: 0, y: (3 * Math.PI) / 2, z: 0 },
      "animation5"
    );
    CameraTimeline.to(
      cameraRef.current.position,
      { x: 12, y: 4.3, z: 25 },
      "animation6"
    );
  }, [cameraRef]);

  console.log(cameraRef);

  return (
    <PerspectiveCamera ref={cameraRef} makeDefault position={[-3, 2, 8]} />
  );
}

export default AnimatedCamera;
