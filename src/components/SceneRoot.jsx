import { AccumulativeShadows, Backdrop, OrbitControls, PerspectiveCamera, RandomizedLight, SoftShadows } from "@react-three/drei";
import Ground from "./Ground";
import Model from "./Model";
import Lighting from "./Light";
import { useControls } from "leva";
import { useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useState } from "react";

function SceneRoot() {
  const [prevDistance, setPrevDistance] = useState(5)
  const { FocalLength, Distance } = useControls("Camera", {
    FocalLength: {
      value: 50,
      min: 12,
      max: 120,
      step: 1,
    },
    Distance: {
      value: 5,
      min: 3,
      max: 20,
    }
  })
  const {camera} = useThree()
  useEffect(() => {

    const delta = Math.pow(Distance / prevDistance, 2)
    const cx = camera.position.x * delta
    const cy = (camera.position.y - 1.5) * delta + 1.5
    const cz = camera.position.z * delta
    camera.position.set(cx, cy, cz)
  

    setPrevDistance(Distance)
  }, [Distance])
  return (
    <>
      <ambientLight intensity={0.1} />
      <OrbitControls enablePan={false} enableZoom={false} enableDamping={false} target={[0, 1.5, 0]} />
      <PerspectiveCamera makeDefault position={[0, 1.5, 5]} fov={FocalLength} />
      <Lighting />

      <Model />
      <Backdrop
        floor={0.25} // Stretches the floor segment, 0.25 by default
        segments={20} // Mesh-resolution, 20 by default
        receiveShadow={true} // Whether to receive shadows, false by default
        scale={[10, 5, 5]} // Scales the backdrop
        position={[0, 0, -1]} // Position of the backdrop
      >
        <meshStandardMaterial color="#ddd" />
      </Backdrop>
      <Ground />
    </>
  );
}

export default SceneRoot;