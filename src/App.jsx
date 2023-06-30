import { Canvas } from "@react-three/fiber"
import SceneRoot from "./components/SceneRoot"
import "./App.css"

function App() {

  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 50,
          near: 0.1,
          far: 1000,
          position: [0, 1, 5]
        }}
      >
        <SceneRoot />
      </Canvas>
    </>
  )
}

export default App
