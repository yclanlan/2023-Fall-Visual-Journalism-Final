import { Link } from "react-router-dom";
import { Canvas ,} from "@react-three/fiber";
import {
  Stars,
  OrbitControls,

  PerspectiveCamera,
  Environment,
 
} from "@react-three/drei";

import Object from "../Object";
import SimpleSlide from "../SimpleSlide";
import LocationMarker from "../LocationMarker";

export default function SpaceCraft() {
  return (
    <div className="model_canvas_wrapper">
    <div style={{zIndex:"10", 
    position:"absolute",
    margin:" 5rem  0 0 3rem"}}>

        <div class={"section1"} 
        style={{zIndex:"10", 
        margin:"  0 0 0 -1rem "
        }}>OSIRIS-REx</div>
   
        <div
          style={{
            zIndex:"10", 
            position:"absolute",
            margin:" 5rem  0 0 4rem",
            
            width:"25vw",
            color:"white",
           
            fontSize: "1.2rem",
            fontFamily: "Lora",
            fontWeight: "500",
            lineHeight:"2rem" , 
            wordSpacing:"0.1rem"
          }}
        >
Dimensions: <br/>
Length 2.4 m (7 ft 10 in), <br/>
width 2.4 m (7 ft 10 in), <br/>
height 3.15 m (10.3 ft)<br/>
<br/>
Width with solar arrays deployed:<br/> 6.17 m (20.2 ft)<br/>
<br/>
{/* 
Propulsion system:
<br/>Based on a hydrazine monopropellant system developed for the Mars Reconnaissance Orbiter, carrying 1,230 kg (2,710 lb) of propellant and helium.
<br/> */}
        </div>
      </div>

      <Link to="/"  className='hover'
          style={{
            padding:"0.8rem 1rem",
            marginLeft: "6rem",
            position: "fixed",
            bottom:"5rem",
            fontSize: "1.35rem",
            fontFamily: "Lora",
            fontWeight: "500",
            border: "1px solid",
            borderColor:"white",
            borderRadius:"2rem",
          }}> ＜  </Link>



          <p  
          style={{
            color:"white",
            padding:"0.8rem 1rem",
            marginLeft: "6rem",
            position: "fixed",
            bottom:"3rem",
            right:"5rem",
            fontSize: "1.1rem",
            fontFamily: "Lora",
            fontWeight: "500",
            
          }}> drag and zoom to see details  </p>


      <Canvas>
        <PerspectiveCamera position={[7, 1, 7]} 
         
         makeDefault near={0.0001} />

        
        <OrbitControls         
         minDistance={3}  
         maxDistance={10} />

        {/* bg col */}
        {/* <Environment preset="dawn" resolution={256} background blur={1} /> */}
        {/* <color args={["white"]} attach="background" /> */}

        {/* Lights 💡 */}
        <ambientLight intensity={1} />
        <Stars />
        {/* <spotLight distance={2} attenuation={5} anglePower={5} />
         */}
        <pointLight position={[0, 1, 3]} intensity={10} />
        <pointLight position={[0, 1, -3]} intensity={10} />
        <pointLight position={[0, -3, 0]} intensity={10} />
        <pointLight position={[0, -3, 3]} intensity={10} />

        <Stars />
        {/* <gridHelper /> */}

        {/* import model */}
        <Object
          scale={(0.6, 0.6, 0.6)}
          position={[0, -0.3, 0]}
          modelUrl={"Osiris-Rex03.glb"}>
            <meshBasicmaterial />
        </Object>

        <LocationMarker
          position={[-1.37, 2, 0]}
          scale={[6, 6, 6]}
          name={"Touch-and-Go Sample Acquisition Mechanism (TAGSAM)"}
          context={
            "This is the part of the spacecraft that actually touched Bennu, slapping its surface at the same time that it sucked up loose rocks with nitrogen gas"
          }
        />

        <LocationMarker
          position={[0.1, -1.15, -0.03]}
          scale={[6, 6, 6]}
          name={"Thrusters"}
          context={"OSIRIS-REx has thrusters to adjust its trajectory."}
        />

        <LocationMarker
          position={[0.7, -0.42, 2.9]}
          scale={[6, 6, 6]}
          name={"Solar Arrays"}
          context={
            "MAVEN has two deployable solar arrays providing about 1,200 Watts of electrical power."
          }
        />

        <LocationMarker
          position={[0.15, 0.92, 0]}
          scale={[6, 6, 6]}
          name={"Sample Return Capsule (SRC)"}
          context={
            "The OSIRIS-REx mission successfully gathered a sample from Bennu and stowed it in the SRC."
          }
        />
      </Canvas>
    </div>
  );
}


