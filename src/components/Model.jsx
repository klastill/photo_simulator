import * as THREE from 'three'
function Box({ position = [0, 1, 0], rotation = [0, 0, 0], color = "#fff", size = [1, 1, 1] }) {
  return (
    <mesh castShadow receiveShadow position={position} rotation={rotation} >
      <boxGeometry attach="geometry" args={size} />
      <meshStandardMaterial attach="material" color={new THREE.Color(color)} />
    </mesh>
  )
}

function Model() {
  return (
    <>
      <Box position={[0, 1.5, 0]} rotation={[0, 45,0]} size={[1, 2, 1]} />
      <Box position={[0.25, 1, 1]} rotation={[30, 35, 0]} size={[2.5, 0.5, 0.5]} />
      <Box position={[-0.5, 0.5, 1]} rotation={[0, 15, 25]} size={[2.5, 0.5, 1]} />
    </>
  )
}

export default Model