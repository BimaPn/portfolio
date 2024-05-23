"use client"
import { projects } from "@/constants/projects"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import { PiArrowRightBold } from "react-icons/pi"
import { splitText } from "@/utils/string"
import LaptopPreview from "./LaptopPreview"

const variants = {
  hidden: {y:300, opacity: 0},
  show: {y:0, opacity: 1}
}

export const viewport = {
  margin: "0% 0% -80% 0%"  
}
export const parentVariant = {
  show: { opacity:1 },
  hidden: {opacity:0}
}
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
    <motion.div 
    ref={containerRef}
    viewport={viewport}
    variants={parentVariant}
    initial="hidden"
    whileInView="show" 
    className="w-full xl:w-[1440px] h-[350vh] relative mx-auto px-3 xs:px-6 sm:px-8"
    >

      <div className="w-full h-screen sticky top-0 flex flex-col sm:flex-row items-center justify-between">
      
        <div className="w-full sm:w-[60%] xl:w-[70%] h-1/2 xs:h-screen flexCenter gap-3 overflow-hidden">
          <div className="w-full h-[52vh] xs:h-[65vh] ssi:h-[80vh] sm:h-fit sm:aspect-[1/1.1] xl:aspect-auto xl:h-full">
          <LaptopPreview currentProject={currentProject} />
          </div>
        </div>

        <div className="w-full sm:w-[40%] flexCenter px-3 py-4 -translate-y-[84px] xs:-translate-y-[40px] sm:translate-y-0 sm:mt-0">
          <div className="flex flex-col">
            <motion.div variants={parentVariant} className="text-sm xs:text-base sm:text-sm md:text-base" transition={{ staggerChildren: 0.02 }}> 
              {splitText("Selected project 🤓 🖥️").map((char, index) => (
                <motion.span 
                transition={{ duration:0.7 }} 
                variants={variants} 
                key={index}
                className="font-medium"
                >
                {char} 
                </motion.span>
              ))} 
            </motion.div>
            <motion.div variants={parentVariant} transition={{ staggerChildren:.05 }} className="flex flex-col">
              {projects.map((project) => (
                <motion.div key={project.id} variants={variants} transition={{ duration: .7 }} className={`flex flex-col gap-[10px] py-3 lg:py-5`}>
                  <div className="flexBetween"> 
                    <motion.a
                    href={`/projects/${project.slug}`}
                    className={`${project.id === currentProject ? "text-white text-glow-sm" : "text-slate-500"}
                    text-2xl xs:text-[28px] sm:text-xl lg:text-3xl font-semibold origin-left`}
                    animate={{
                      scale: project.id === currentProject ? 1.1 : 1,
                      color: project.id === currentProject ? "white" : "#64748B",
                      transition: { duration: .3, bounce: 0 }
                      }}
                    >{project.title}</motion.a>
                      {project.id === currentProject && (
                        <div className="w-7 aspect-square flexCenter overflow-hidden">
                          <motion.div
                          initial={{ x: -50 }}
                          animate={{ x: 0 }}
                          transition={{ type: "spring", bounce: 0, duration: .6 }}
                          >
                            <PiArrowRightBold className="text-lg xs:text-xl sm:text-lg md:text-2xl" />
                          </motion.div>
                        </div>
                      )}
                  </div>
                  <div className="w-full text-base sm:text-sm md:text-base overflow-hidden">
                    {project.id === currentProject && (
                      <motion.span 
                      initial={{  opacity: 0 }}
                      animate={{ opacity: 1 }} 
                      transition={{ bounce: 0, duration:.5 }}
                      >{project.description}</motion.span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>

    </motion.div>
  )
}

export default Projects

      //  <Canvas camera={{ position: [0, 10, -25], fov: 35 }}>
      //   <Suspense fallback={null}>
      //     <group rotation={[0, Math.PI, 0]} >
      //       <Laptop3D currentVideo={currentProject} />
      //     </group>
      //     <Environment preset="city" />
      //   </Suspense>
      //   <Rig />
      // </Canvas>
