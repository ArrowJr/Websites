import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Cube(props)
{
  const wireframe  = useRef();
  return (
      <mesh {...props} ref={wireframe}>
        <boxGeometry args={[2,2,2]}></boxGeometry>
        <meshDepthMaterial blendColor={"blue"}></meshDepthMaterial>
      </mesh>  
  )
}


export default App() {
  return (
    <Canvas>
      <ambientLight castShadow="true"></ambientLight>
      <Box position={[0,0,0]}></Box>
    </Canvas>
  )

}