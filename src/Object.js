import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import {CameraTimeline} from "./AnimatedCamera"

function Object(props) {
  const { position, rotation, scale, modelUrl } = props;

  const gltf = useGLTF(modelUrl);

  const objectRef = useRef();

  useEffect(() => {
    
  }, [objectRef]);

  return (
    <primitive
      ref={objectRef}
      position={position ? position : [0, 0, 0]}
      rotation={rotation ? rotation : [0, 0, 0]}
      scale={scale ? scale : [1,1,1]}
      object={gltf.scene}
    >
      <meshBasicMaterial />
            {/* <meshToonMaterial /> */}
    </primitive>
  );

  // <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 2, 8]} />;
}

export default Object;
