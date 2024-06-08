"use client"
import { Html, useProgress } from "@react-three/drei"

const Loader3D = () => {
  const { progress, active } = useProgress()
  return <Html center>{progress.toFixed(1)} % loaded</Html> 
}

export default Loader3D

