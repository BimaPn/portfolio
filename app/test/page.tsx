"use client"

import { Group, Vector3 } from "three"
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, useGLTF, ContactShadows } from '@react-three/drei'
import { motion } from "framer-motion-3d"

function Model({isOpen}:{isOpen:boolean}) {
  const group = useRef<Group>(null)
  // Load model
  const { nodes, materials } = useGLTF('/laptop.glb') as any
  // Take care of cursor state on hover
  // Make it float in the air when it's opened
  useFrame((state) => {
    if(!group.current) return;
    // const t = state.clock.getElapsedTime()
    // group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 10) / 10 + 0.25 , 0.1)
    // group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 10) / 4 , 0.1)
    // group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 10) / 10, 0.1)
    // group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t)) / 3 , 0.1)
  })
  return (
    <group ref={group} dispose={null} position={[-3,-1,0]} rotation={[.1,.2,0]}>
      <motion.group 
      initial={{ rotateY: 0, rotateZ: 0 }}
      animate={{ rotateX: isOpen ? 0 : 1.58, transition:{duration:.7, type: "spring", bounce:0} }}
      position={[0, -0.04, 0.41]}
      >
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh material={materials['screen.001']} geometry={nodes['Cube008_2'].geometry} />
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
    camera.position.lerp(vec.set(mouse.x, -mouse.y, camera.position.z), .5)
    camera.lookAt(0, 0, 0)
  })
}
const page = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className="h-screen bg-white flexCenter">
        <Canvas camera={{ position: [20, 70, -25], fov: 35 }} className="w-1/2">
        <Suspense fallback={null}>
          <group rotation={[0, Math.PI, 0]} onClick={() => setIsOpen((prev) => !prev)}>
            <Model isOpen={isOpen} />
          </group>
          <Environment preset="city" />
        </Suspense>
        <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={1.75} far={4.5} />
        <Rig />
      </Canvas>
      <div className="w-1/2 border">
        <span>fuck you</span>
        <button className="font-bold text-5xl" >Click</button>
      </div>

    </div>
  )
}

export default page
