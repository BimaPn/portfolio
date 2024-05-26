"use client"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Laptop3D, { Rig } from "./Laptop3D"
import { Environment } from "@react-three/drei"

const LaptopPreview = ({currentProject}:{currentProject: number}) => {
  return (
   <Canvas camera={{ position: [0, 0, -26], fov: 20 }}>
    <Suspense fallback={null}>
    <pointLight position={[-4, 3, 1]} color={"#6B8AFD"} intensity={100} />
      <group rotation={[0, Math.PI, 0]} >
        <Laptop3D currentVideo={currentProject} />
      </group>
      <Environment preset="city" />
    </Suspense>
    <Rig />
  </Canvas>
  )
}

export default LaptopPreview
