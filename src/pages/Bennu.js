import { useNavigate, Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import {
  Stars,
  OrbitControls,
  PerspectiveCamera,
  Environment
} from "@react-three/drei";

import Object from "../Object";
import RotatedObject from "../AnimatedEarth";
import SimpleSlide from "../SimpleSlide";
import FX from "../FX";

export default function Bennu() {

  const navigate = useNavigate();

  return (
    <div className="model_canvas_wrapper">
      <SimpleSlide viewportPosition={5} width={"30vw"} >
        <div class={"section1"}       
        style={{zIndex:"10", 
        margin:"  0 0 0 -1.8rem " }}>Bennu</div>
        <br />
        <br />
        <br />
        <p
          style={{
            paddingLeft: "3rem",
            width:"30vw",
           
            fontSize: "1.2rem",
            fontFamily: "Lora",
            fontWeight: "500",
          }}
        >
          Bennu, a carbon-rich asteroid, is approximately half a kilometer wide
          and has witnessed over 4.5 billion years of solar system history. Its
          composition, established within 10 million years of the solar system's
          formation, suggests it broke off from a larger asteroid 700 million to
          2 billion years ago.
          <br />
          <br />
          Due to its ancient nature, scientists believe Bennu may contain
          organic molecules akin to those linked to the origins of life on
          Earth.
        </p>
      </SimpleSlide>

      
          <div onClick={() => navigate(-1) }
          className='hover'
          style={{
            padding:"0.8rem 1rem",
            marginLeft: "2rem",
            position: "fixed",
            bottom:"5rem",
            fontSize: "1.35rem",
            fontFamily: "Lora",
            fontWeight: "500",
            border: "1px solid",
            borderColor:"white",
            borderRadius:"2rem",
            color: "white",
            zIndex: "50",

          }}> ＜  </div>


<p  
          style={{
            color:"white",
            padding:"0.8rem 1rem",
            marginLeft: "6rem",
            position: "fixed",
            bottom:"3rem",
            right:"5rem",
            fontSize: "1.5rem",
            fontFamily: "Lora",
            fontWeight: "500",
            textAlign:"right",
            
          }}> Kindly await while the sizable model is loading. <br/>
          Thank you for your patience.  </p>
      

      <Canvas>
        <PerspectiveCamera position={[-0.8, 0, 0.1]} makeDefault near={0.01} />
        <OrbitControls
         minDistance={0.5}  
         maxDistance={2} 
        />

        {/* bg col */}
        {/* <Environment preset="dawn" resolution={256} background blur={1} /> */}
        {/* <color args={["white"]} attach="background" /> */}

        {/* Lights 💡 */}
        <ambientLight intensity={1} />

        <pointLight position={[0, 0.1, -0.5]} intensity={30} />
        <pointLight position={[0, -1.5, -0.5]} intensity={10} />

        <Stars />
       <FX />

  
        {/* import model */}
        <RotatedObject
          scale={[1, 1,1]}
          position={[0, -0.2, 0]}
          modelUrl={"Bennu-edited.glb"}
          rotationSpeed={0.001}
        />
      </Canvas>
    </div>
  );
}
