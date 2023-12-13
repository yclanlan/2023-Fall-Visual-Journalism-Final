import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { CameraTimeline } from "./AnimatedCamera";

export default function AnimatedCapsule(props) {
  const { position, rotation, scale, modelUrl, rotationSpeed } = props;

  const gltf = useGLTF(modelUrl);
  const objectRef = useRef();

  useEffect(() => {
    CameraTimeline.to(
      objectRef.current.position,
      { x: 13, y: 4.8, z: 25 },
      "animation1"
    );
    CameraTimeline.to(
      objectRef.current.scale,
      { x: 0.01, y: 0.01, z: 0.01 },
      "animation1"
    );

    CameraTimeline.to(
      objectRef.current.position,
      { x: 13, y: 4.8, z: 25 },
      "animation2"
    );
    CameraTimeline.to(
      objectRef.current.scale,
      { x: 0.01, y: 0.01, z: 0.01 },
      "animation2"
    );

    CameraTimeline.to(
      objectRef.current.position,
      { x: 13, y: 5, z: 25 },
      "animation3"
    );
    CameraTimeline.to(
      objectRef.current.scale,
      { x: 0.001, y: 0.001, z: 0.001 },
      "animation3"
    );

    CameraTimeline.to(
      objectRef.current.position,
      { x: 15, y: 4.8, z: 25 },
      "animation4"
    );
    CameraTimeline.to(
      objectRef.current.scale,
      { x: 0.03, y: 0.03, z: 0.03 },
      "animation4"
    );

    CameraTimeline.to(
      objectRef.current.position,
      { x: 15, y: 4.2, z: 25 },
      "animation5"
    );
    CameraTimeline.to(
      objectRef.current.scale,
      { x: 0.01, y: 0.01, z: 0.01 },
      "animation5"
    );
  }, [objectRef]);

  return (
    <primitive
      ref={objectRef}
      position={position ? position : [0, 0, 0]}
      rotation={rotation ? rotation : [0, 0, 0]}
      scale={scale ? scale : [1, 1, 1]}
      object={gltf.scene}
    ></primitive>
  );

  // <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 2, 8]} />;
}
