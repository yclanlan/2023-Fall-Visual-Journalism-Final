import { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  PerspectiveCamera,
  OrbitControls,
  Stars,
  Sparkles,
  Trail
} from "@react-three/drei";
import Background from "./Background";
import AnimatedCamera from "./AnimatedCamera";

import Object from "./Object";
import RotatedObject from "./AnimatedEarth";
import AnimatedSpacecraft from "./AnimatedSpacecraft";
import AnimatedCapsule from "./AnimatedCapsule";
import AnimatedEnding from "./AnimatedEnding";
import FX from "./FX";

import { LensFlare  } from '@react-three/postprocessing'
import { BlurPass} from 'postprocessing'

function Scene() {
  return (
    <div id="canvas_wrapper">
      <Canvas>
  
        <FX /> 
        


        <Background
          scale={[100, 100, 100]}
          texturePath={"./starmap_2020_4k.png"}
        />
        <AnimatedCamera />
        {/* <PerspectiveCamera makeDefault position={[0, 2, 8]} />; */}
        {/* <gridHelper /> */}
        {/* <OrbitControls enableZoom={false} /> */}

        <Stars />
        <Sparkles size={0.8} scale={200} count={10000} speed={0.3} />





        {/* Lights 💡 */}
        <ambientLight intensity={2} />
        {/* <pointLight color={0x404040} position={[0, 3, 0]} intensity={3} /> */}
        <pointLight color={0x7F6051} position={[0, 3, 0]} intensity={30} />
        <pointLight position={[-3, 5, 2]} intensity={50} />
        <pointLight position={[18, 3, 0]} intensity={30} />
        <pointLight color={0x7F6051} position={[0, -5, 2]} intensity={30} />
        {/*  */}
        <pointLight position={[15.2, 6, 24.5]} intensity={10} />

        {/* We can create a background color as a child element of the canvas we just have to attach it */}
        <color args={["black"]} attach="background" />

        {/* Objects 📦 */}
        <Suspense fallback={null}>



        
        <Trail
              width={3} // Width of the line
              color={'blue'} // Color of the line
              length={10} // Length of the line
              decay={1} // How fast the line fades away
              local={false} // Wether to use the target's world or local positions
              stride={0} // Min distance between previous and current point
              interval={1} // Number of frames to wait before next calculation
              target={undefined} // Optional target. This object will produce the trail.
              attenuation={(width) => width} // A function to define the width in each point along it.
            >
          <AnimatedSpacecraft
            position={[0, 0.5, 0]}
            rotation={[0.1, (-Math.PI / 4) * 3, 0]}
            modelUrl={"Osiris-Rex03.glb"}
            opacity={0.3}
            // rotationSpeed={0.01}
          />
          </Trail>
         

          

          <RotatedObject
            scale={[0.001, 0.001, 0.001]}
            position={[15, 3, 0]}
            rotation={[0.1, (-Math.PI / 4) * 3, 0]}
            modelUrl={"Bennu_small.glb"}
            rotationSpeed={0.001}
          >
          </RotatedObject>
          

          <RotatedObject
            scale={[0.0025, 0.0025, 0.0025]}
            position={[15, 3, 25]}
            rotation={[0.1, (-Math.PI / 4) * 3, 0]}
            modelUrl={"Earth.glb"}
            rotationSpeed={0.001}
          />

         

          <AnimatedCapsule 
          position={[15, 4.8, 25]} 
          modelUrl={"capsule.glb"} />
         


        </Suspense>
        <AnimatedEnding />
      </Canvas>
    </div>
  );
}

export default Scene;
