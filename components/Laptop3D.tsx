"use client"
import {  Vector3 } from "three"
import {  Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, useGLTF, useVideoTexture } from '@react-three/drei'
import { motion } from "framer-motion-3d"
import {  videos } from "@/constants/videos"
import { Suspense, useEffect, useRef, useState } from "react"

const parentVariant = {
  hidden: {x:0, y: -3.5, z: 1},
  show: {y:-2, transition:{duration:1.5, type: "spring", bounce:0}}
}
const screenVariant = {
 hidden: {rotateY: 0, rotateZ: 0, rotateX: 1.59},
 show: {rotateX: -.2, transition:{duration:1.5, type: "spring", bounce:0}}
}

const videoElement = (url: string) => {    
  const vid = document.createElement("video");  
  vid.src = url;  
  vid.crossOrigin = "Anonymous";   
  vid.loop = true;   
  vid.muted = true; 
  return vid;  
}
const Laptop3D = ({currentVideo=1}:{currentVideo: number}) => {
  const { nodes, materials } = useGLTF('/laptop3.glb') as any
  const [loading, setLoading] = useState<boolean>(false)
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const loadingVideoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    setLoading(true);

    videoRefs.current.forEach((video) => {
      video.pause();
      video.removeAttribute('src');
      video.load();
    });

    const vid = videoElement(videos[currentVideo - 1]);
    vid.play()
    videoRefs.current = [vid];

    const loadedData = () => {
      setLoading(false)
      vid.removeEventListener("loadeddata", loadedData)
    }
    vid.addEventListener('loadeddata', loadedData);
    
    if (!loadingVideoRef.current) {
      const loadingVid = videoElement('/videos/loading.mp4');
      loadingVideoRef.current = loadingVid;
    }
    return () => {
      vid.pause();
      vid.removeAttribute('src');
      vid.load();
    };
  }, [currentVideo]);

  return videoRefs.current[0] && loadingVideoRef.current && (
    <motion.group
    dispose={null}
    variants={parentVariant}
    rotation={[.17,0,0]}>
      <motion.group 
      variants={screenVariant}
      position={[0, -0.04, 0.41]}
      >
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh geometry={nodes['Cube008_2'].geometry}> 
            <meshBasicMaterial > 
              {loading && <videoTexture  attach={`map`} args={[loadingVideoRef.current]}/>}
              {!loading && <videoTexture  attach={`map`} flipY={false} args={[videoRefs.current[0]]}/>}
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

export const Laptop = ({currentVideo=1}:{currentVideo?:number}) => {
  return ( 
   <Canvas camera={{ position: [0, 0, -26], fov: 20 }}>
    <Suspense fallback={null}>
    <pointLight position={[-4, 3, 1]} color={"#6B8AFD"} intensity={100} />
      <group rotation={[0, Math.PI, 0]} >
      <Laptop3D currentVideo={currentVideo} />
      </group>
      <Environment preset="city" />
    </Suspense>
    <Rig />
  </Canvas>
  )
}

export default Laptop3D
