import { useState } from "react";
import { Html, Outlines } from "@react-three/drei";
import "./App.css";

function LocationMarker({ position, name, context, scale }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <mesh
        onPointerOver={() => {
          if (!isExpanded) setIsExpanded(true);
        }}
        onPointerLeave={() => {
          if (isExpanded) setIsExpanded(false);
        }}

        position={position}
        scale={scale ? scale : [1, 1, 1]}

      >
        {isExpanded && (
          <Html>
            <div className="locationMarker"
              style={{
                paddingLeft: "2rem",
                paddingRight: "2rem",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                minWidth: "30vw",
                border: "1px solid",
              }}
            >
              <h3>{name}</h3>
              <p>{context}</p>
            </div>
          </Html>
        )}
        
        <sphereGeometry args={[isExpanded ? 0.02 : 0.02]} />
        <meshBasicMaterial transparent={"true"} opacity={0} />
        <Outlines thickness={0.005} color="hotpink" />
        {/* <MeshTransmissionMaterial color = "white"/> */}
      </mesh>
    </>
  );
}

export default LocationMarker;
