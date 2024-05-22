"use client"
import { projects } from "@/constants/projects"
import { Canvas } from "@react-three/fiber"
import { useMotionValueEvent, useScroll } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Suspense, useRef, useState } from "react"
import { PiArrowRightBold } from "react-icons/pi"
import Laptop3D, { Rig } from "./Laptop3D"
import { Environment } from "@react-three/drei"

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if(latest <= 0.25) {
      setCurrentProject(1)
    }else if(latest > 0.25 && latest <= 0.50) {
      setCurrentProject(2)
    }else if(latest > 0.50 && latest <= 0.75) {
      setCurrentProject(3)
    }else {
      setCurrentProject(4)
    }
  })
  return (
    <div ref={containerRef} className="boxWidth h-[350vh] flex gap-8 justify-between mt-5 relative">
      <div className="w-[60%] h-screen flexCenter gap-3 sticky top-0">
       <Canvas camera={{ position: [0, 10, -25], fov: 35 }}>
        <Suspense fallback={null}>
          <group rotation={[0, Math.PI, 0]} >
            <Laptop3D currentVideo={currentProject} />
          </group>
          <Environment preset="city" />
        </Suspense>
        <Rig />
      </Canvas>
      </div>

      <div className="w-[40%] h-screen flexCenter sticky top-0 px-3 py-4">
        <div className="flex flex-col">
          <div>
            <span className="font-medium text-lg text-slate-400">Selected project</span>
          </div>
          <div className="flex flex-col">
            {projects.map((project) => (
              <div key={project.id} className={`flex flex-col gap-[10px] py-6 ${project.id !== currentProject && "text-slate-500"}`}>
                <div className="flexBetween"> 
                  <Link href={`/projects/${project.slug}`} className="font-semibold text-3xl">{project.title}</Link>
                  {project.id === currentProject && (
                    <PiArrowRightBold className="text-2xl" />
                  )}
                </div>
                {project.id === currentProject && (
                  <span>{project.description}</span>
                )}

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
