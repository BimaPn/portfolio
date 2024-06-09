"use client"
import {  Canvas } from '@react-three/fiber'
import { Environment, useGLTF } from '@react-three/drei'
import { motion } from "framer-motion-3d"
import { Suspense, useEffect, useRef, useState } from "react"
import Loader3D from "./Loader3D"
import { Rig } from "./Laptop3D"
import { videoElement } from '@/constants/videos'

const parentVariant = {
  hidden: {x:0, y: -3, z: 7},
  show: {y:-2.2, transition:{  duration:1.5, type: "spring", bounce:0}}
}
const screenVariant = {
 hidden: {rotateY: 0, rotateZ: 0, rotateX: 1},
 show: {rotateX: -.2, transition:{duration:1.5, type: "spring", bounce:0}}
}


const Laptop3D = ({videoSrc}:{videoSrc: string}) => {
  const { nodes, materials } = useGLTF('/laptop3.glb') as any
  const [loading, setLoading] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const loadingVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setLoading(true);

    if (!videoRef.current) { 
      const vid = videoElement(videoSrc);
      vid.play()
      videoRef.current = vid;

      const loadedData = () => {
        setLoading(false)
        vid.removeEventListener("loadeddata", loadedData)
      }
      vid.addEventListener('loadeddata', loadedData);
    }
    
    if (!loadingVideoRef.current) {
      const loadingVid = videoElement('/videos/loading.mp4');
      loadingVideoRef.current = loadingVid;
    }

  }, [videoSrc]);

  return videoRef.current && loadingVideoRef.current && (
    <motion.group
    dispose={null}
    variants={parentVariant}
    initial="hidden"
    animate="show"
    rotation={[.1,0,0]}>
      <motion.group 
      variants={screenVariant}
      position={[0, 0, 0.41]}
      >
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh geometry={nodes['Cube008_2'].geometry}> 
            <meshBasicMaterial > 
              {loading && <videoTexture  attach={`map`} args={[loadingVideoRef.current]}/>}
              {!loading && <videoTexture  attach={`map`} flipY={false} args={[videoRef.current]}/>}
            </meshBasicMaterial>
          </mesh>
        </group>
      </motion.group>
      <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
        <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
      </group>
      <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
    </motion.group>
  )
}

const FullScreenLaptop = ({videoSrc}:{videoSrc: string}) => {
  return ( 
     <Canvas camera={{ position: [0, 12, -40], fov: 13 }}>
      <Suspense fallback={<Loader3D />}>
        <group rotation={[0, Math.PI, 0]} >
          <Laptop3D videoSrc={videoSrc} />
        </group>
        <Environment preset="city" />
      </Suspense>
      <Rig />
      </Canvas>
  )
}

export default FullScreenLaptop
