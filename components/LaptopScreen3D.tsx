"use client"
import {  Vector3 } from "three"
import { Suspense, useState } from 'react'
import {  useFrame, useThree } from '@react-three/fiber'
import { Environment, useGLTF } from '@react-three/drei'
import { motion } from "framer-motion-3d"
import {  videos } from "@/constants/videos"


const parentVariant = {
  hidden: {x:0, y: -3.8, z: 8.2},
  show: {y:-2.6, transition:{duration:1.5, type: "spring", bounce:0}}
}
const screenVariant = {
 hidden: {rotateY: 0, rotateZ: 0, rotateX: 1.59},
 show: {rotateX: 0, transition:{duration:1.5, type: "spring", bounce:0}}
}

const LaptopScreen3D = ({currentVideo=1}:{currentVideo: number}) => {
  const { nodes, materials } = useGLTF('/laptop3.glb') as any

  return (
    <motion.group
    dispose={null}
    initial="hidden"
    animate="show"
    variants={parentVariant}
    >

      <motion.group 
      variants={screenVariant}
      initial="hidden"
      animate="show"
      position={[0, -0.04, 0.41]}
      >
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh geometry={nodes['Cube008_2'].geometry}> 
            <meshBasicMaterial> 
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


export default LaptopScreen3D
