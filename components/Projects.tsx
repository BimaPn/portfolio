"use client"
import { projects } from "@/constants/projects"
import { useMotionValueEvent, useScroll } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import { PiArrowRightBold } from "react-icons/pi"

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
    <div ref={containerRef} className="boxWidth h-[400vh] flex justify-between mt-5 relative">
      <div className="w-[40%] h-fit flex flex-col gap-3 sticky top-[30%]">

      </div>

      <div className="w-1/2 h-fit sticky top-[22%] px-3 py-4">
        <div>
          <span className="font-medium text-xl text-slate-400">Selected project</span>
        </div>
        <div className="flex flex-col my-2">
          {projects.map((project) => (
            <div key={project.id} className={`flex flex-col gap-[10px] py-6 border-b ${project.id !== currentProject && "border-slate-500 text-slate-500"}`}>
              <div className="flexBetween"> 
                <Link href={`/projects/${project.slug}`} className="font-semibold text-4xl">{project.title}</Link>
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
  )
}

export default Projects
