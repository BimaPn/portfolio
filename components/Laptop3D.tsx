"use client"
import {  Vector3 } from "three"
import {  useFrame, useThree } from '@react-three/fiber'
import { Environment, useGLTF } from '@react-three/drei'
import { motion } from "framer-motion-3d"
import { videoElement, videos } from "@/constants/videos"


const parentVariant = {
  hidden: {x:0, y: -3.5, z: 1},
  show: {y:-2, transition:{duration:1.5, type: "spring", bounce:0}}
}
const screenVariant = {
 hidden: {rotateY: 0, rotateZ: 0, rotateX: 1.59},
 show: {rotateX: -.2, transition:{duration:1.5, type: "spring", bounce:0}}
}

const Laptop3D = ({currentVideo=1}:{currentVideo: number}) => {
  const { nodes, materials } = useGLTF('/laptop3.glb') as any
  return (
    <motion.group
    dispose={null}
    variants={parentVariant}
    initial="hidden"
    animate="show"
    rotation={[.17,0,0]}>

      <motion.group 
      variants={screenVariant}
      position={[0, -0.04, 0.41]}
      >
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh geometry={nodes['Cube008_2'].geometry}> 
            <meshBasicMaterial> 
              {currentVideo === 1 && <videoTexture attach={`map`} flipY={false} args={[videoElement(videos[0])]}/>}
              {currentVideo === 2 && <videoTexture attach={`map`} flipY={false} args={[videoElement(videos[1])]}/>}
              {currentVideo === 3 && <videoTexture attach={`map`} flipY={false} args={[videoElement(videos[2])]}/>}
              {currentVideo === 4 && <videoTexture attach={`map`} flipY={false} args={[videoElement(videos[3])]}/>}
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

export const Rig = () => {
  const { camera, mouse } = useThree()
  const vec = new Vector3()

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x/5, -mouse.y/5, camera.position.z), .1)
    camera.lookAt(0, 0, 0)
  })
}

export default Laptop3D
