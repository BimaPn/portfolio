"use client"
import { colors, projects } from "@/constants/projects"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import { PiArrowRightBold } from "react-icons/pi"
import { splitText } from "@/utils/string"
import { Laptop } from "./Laptop3D"
import LinkTransition from "./LinkTransition"

const variants = {
  hidden: {y:300, opacity: 0},
  show: {y:0, opacity: 1}
}
export const viewport = {
  margin: "-20% 0% -80% 0%"  
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

  const bgVariant = {
    hidden: { 
      opacity: 0,
      transition: {delay:.7}
    },
    show: {
      opacity: 1,

    },
    color: {
      backgroundColor: colors[currentProject-1]
    }
  }
  return (
  <> 
  <div  className="mt-12 sm:-mt-12 sm:py-24">
    <motion.div 
    ref={containerRef}
    viewport={viewport}
    variants={parentVariant}
    initial="hidden"
    id="cursor-active"
    whileInView="show" 
    className="w-full h-[350vh] relative z-[6] px-3 xs:px-6 sm:px-8"
    >
      <div className="w-full xl:w-[1440px] mx-auto h-screen sticky top-0 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-5 sm:gap-2">

        <div id="projects" className="w-full sm:w-[60%] xl:w-[70%] flexCenter gap-3 relative">
          <motion.div variants={bgVariant} animate="color" className="absolute top-[6%] left-[6%] w-[85%] aspect-[4/3] rounded-full blur-[90px]"/>
          <div className="w-full h-fit aspect-[4/3]">
            <Laptop currentVideo={currentProject} />
          </div>
        </div>

        <div className="w-full sm:w-[40%] flexCenter px-3 py-4">
          <div className="flex flex-col">
            <motion.div 
            variants={parentVariant} className="text-sm xs:text-base sm:text-sm md:text-base" transition={{ staggerChildren: 0.02 }}> 
              {splitText("Selected project 🖥️").map((char, index) => (
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
                <motion.div 
                key={project.id} 
                variants={variants}
                transition={{ duration: .7 }}
                className={`flex flex-col gap-[10px] py-3 lg:py-5`}
                >
                  <div className="flexBetween"> 
                    <LinkTransition href={`/projects/${project.slug}`} label={ 
                      <motion.span
                      className={`${project.id === currentProject ? "text-white" : "text-slate-500 hover:text-white"}
                      text-2xl xs:text-[28px] md:text-3xl lg:text-[34px] font-semibold origin-left`}
                      animate={{
                      scale: project.id === currentProject ? 1.1 : 1,
                      transition: { duration: .3, bounce: 0 }
                      }}
                      >{project.title}</motion.span>
                    } />
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
                  <div className="w-full text-sm sm:text-sm md:text-base overflow-hidden">
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
  </div>
  </>
  )
}

export default Projects
