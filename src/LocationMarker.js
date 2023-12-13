import { useState } from "react";
import { Html, MeshTransmissionMaterial } from "@react-three/drei";
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
                background: "white",
                borderRadius: "2rem",
                color: "black",
                minWidth: "30vw",
              }}
            >
              <h3>{name}</h3>
              <p>{context}</p>
            </div>
          </Html>
        )}
        <sphereGeometry args={[isExpanded ? 0.022 : 0.02]} />
        <meshBasicMaterial color="white" />
        {/* <MeshTransmissionMaterial color = "white"/> */}
      </mesh>
    </>
  );
}

export default LocationMarker;
