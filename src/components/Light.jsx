import { useControls } from "leva";
import { useEffect } from "react";

function Lighting() {
  return (
    <>
      <RoomLight />
      <MainLight />
      <SubLight />
    </>
  )
}

function RoomLight() {
  const { Enable, Intensity } = useControls(
    "Room Light", {
    Enable: true,
    Intensity: {
      value: 0.25,
      min: 0,
      max: 1,
      step: 0.01,
    }
  });
  return (
    <>
      {Enable && <ambientLight intensity={Intensity} />}
    </>
  )
}

function MainLight() {
  const { Enable, Intensity, Color } = useControls(
    "Main Light", {
    Enable: true,
    Intensity: {
      value: 0.75,
      min: 0,
      max: 1,
      step: 0.01,
    },
    Color: "#0ff"
  });

  return (
    <>
      {Enable && <directionalLight color={Color} position={[3, 2, 4]} castShadow intensity={Intensity} shadow-mapSize={2048} shadow-bias={-0.001}>
        <orthographicCamera attach="shadow-camera" args={[-8.5, 8.5, 8.5, -8.5, 0.1, 20]} />
      </directionalLight>}
    </>
  )
}


function SubLight() {
  const { Enable, Intensity, Color } = useControls(
    "Sub Light", {
    Enable: true,
    Intensity: {
      value: 0.75,
      min: 0,
      max: 1,
      step: 0.01,
    },
    Color: "#f0f"
  });
  return (
    <>
      {Enable && <directionalLight color={Color} position={[-3, 2, 4]} castShadow intensity={Intensity} shadow-mapSize={2048} shadow-bias={-0.001}>
        <orthographicCamera attach="shadow-camera" args={[-8.5, 8.5, 8.5, -8.5, 0.1, 20]} />
      </directionalLight>}
    </>
  )
}


export default Lighting;