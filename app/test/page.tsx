"use client"

import { Group, MeshStandardMaterial, Vector3 } from "three"
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, useGLTF, ContactShadows, useTexture } from '@react-three/drei'
import { motion } from "framer-motion-3d"
import { videoElement, videos } from "@/constants/videos"

function Model({isOpen, videoIndex}:{isOpen:boolean, videoIndex: number}) {
  const group = useRef<Group>(null)
  const { nodes, materials } = useGLTF('/laptop2.glb') as any
  const image = useTexture("/image.png")
  const customMaterial = new MeshStandardMaterial({ map: image })

  return (
    <group ref={group} dispose={null} position={[-3,-1,0]} rotation={[.1,.2,0]}>
      <motion.group 
      initial={{ rotateY: 0, rotateZ: 0, rotateX: 0 }}
      animate={{ rotateX: isOpen ? 0 : 1.58, transition:{duration:.7, type: "spring", bounce:0} }}
      position={[0, -0.04, 0.41]}
      >
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh geometry={nodes['Cube008_2'].geometry}> 
            <meshBasicMaterial> 
              <videoTexture attach={`map`} flipY={false} args={[videoElement(videos[videoIndex])]}/>
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
    </group>
  )
}

const Rig = () => {
  const { camera, mouse } = useThree()
  const vec = new Vector3()

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x, -mouse.y, camera.position.z), 1)
    camera.lookAt(0, 0, 0)
  })
}
const page = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [videoIndex, setVideoIndex] = useState(0)
  return (
    <div className="h-screen bg-white flexCenter text-black">
        <Canvas camera={{ position: [20, 100, -25], fov: 35 }} className="w-1/2">
        <Suspense fallback={null}>
          <group rotation={[0, Math.PI, 0]} >
            <Model isOpen={isOpen} videoIndex={videoIndex} />
          </group>
          <Environment preset="city" />
        </Suspense>
        <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={1.75} far={4.5} />
        <Rig />
      </Canvas>
      <div className="w-1/2 flex flex-col items-start">
        <span>fuck you</span>
        <button className="font-bold text-5xl" onClick={() => setIsOpen((prev) => !prev)} >Click</button>
        {[0, 1, 2].map((item) => (
          <button key={item} onClick={() => setVideoIndex(item)}>video {item}</button>
        ))}
      </div>

    </div>
  )
}

export default page
