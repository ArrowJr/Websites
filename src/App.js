import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Cube(props)
{
  const wireframe  = useRef();
  useFrame(() => (wireframe.current.rotation.x = wireframe.current.rotation.y += 0.01));
  return (
      <mesh {...props} ref={wireframe}>
        <boxGeometry args={[3,3,3]}></boxGeometry>
        <meshStandardMaterial color={"red"}></meshStandardMaterial>
      </mesh>  
  )
}


export default function App() {
  return (
    <Canvas>
      <ambientLight castShadow="true"></ambientLight>
      <Cube position={[0,0,0]}></Cube>
    </Canvas>
  );
}