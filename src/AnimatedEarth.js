import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import {CameraTimeline} from "./AnimatedCamera"

export default function Earth(props) {

  const { position, rotation, scale, modelUrl, rotationSpeed} = props;

  const gltf = useGLTF(modelUrl);
  const objectRef = useRef();


  useFrame(() => {
    // We can access the mesh of the planet using the planetRef
    // objectRef.current.rotation.x += rotationSpeed;
    objectRef.current.rotation.y += rotationSpeed;
    // objectRef.current.rotation.z += rotationSpeed;

  });

  return (
    <primitive
      ref={objectRef}
      position={position ? position : [0, 0, 0]}
      rotation={rotation ? rotation : [0, 0, 0]}
      scale={scale ? scale : [1,1,1]}
      object={gltf.scene}
    ></primitive>
  );

  // <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 2, 8]} />;
}


