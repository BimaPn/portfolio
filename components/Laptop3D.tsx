"use client"
import { Group, MeshStandardMaterial, Vector3 } from "three"
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, useGLTF, ContactShadows, useTexture } from '@react-three/drei'
import { motion } from "framer-motion-3d"
import { videoElement, videos } from "@/constants/videos"

const Laptop3D = ({currentVideo=1}:{currentVideo: number}) => {
  const group = useRef<Group>(null)
  const { nodes, materials } = useGLTF('/laptop2.glb') as any
  const image = useTexture("/image.png")
  const customMaterial = new MeshStandardMaterial({ map: image })

  return (
    <group ref={group} dispose={null} position={[-0.7,-2,0]} rotation={[.2,.1,0]}>
      <motion.group 
      initial={{ rotateY: 0, rotateZ: 0, rotateX: 0 }}
      animate={{ rotateX: 0 , transition:{duration:.7, type: "spring", bounce:0} }}
      position={[0, -0.04, 0.41]}
      >
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh geometry={nodes['Cube008_2'].geometry}> 
            <meshBasicMaterial> 
              <videoTexture attach={`map`} flipY={false} args={[videoElement(videos[currentVideo-1])]}/>
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

export const Rig = () => {
  const { camera, mouse } = useThree()
  const vec = new Vector3()

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x, -mouse.y, camera.position.z), 1)
    camera.lookAt(0, 0, 0)
  })
}

export default Laptop3D
