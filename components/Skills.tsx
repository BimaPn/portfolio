"use client"
import Link from "next/link"
import { skills } from "@/constants/skills"
import { motion } from "framer-motion"
import { textVariants } from "@/constants/framer"


const viewport = {
  once: true,
  margin: "0% 0% -50% 0%"  
}
const parentVariant = {
  show: { opacity:1 },
  hidden: {opacity:0}
}

const lineVariant = { 
  show: {  
    x:"0%", 
    scaleX:1
  },
  hidden: {  
    x:"80%", 
    scaleX:3
  }
}
const Skills = () => {
  return (
     <motion.div variants={parentVariant} initial="hidden" viewport={viewport} whileInView="show" className="w-full flexCenter lg:w-[1200px] mx-auto relative z-[2] mt-12 sm:mt-20"> 
        <div className="w-full">
          <motion.h2 variants={textVariants} transition={{ duration:.4 }} className="flex items-center gap-3 font-semibold tracking-tight text-slate-400"> 
            <div className="w-2 aspect-square rounded-full bg-white -mb-[1px] box-glow" />
            <span>My skills</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 mt-4">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col gap-1">
                <div className="flex flex-col gap-2 pb-1 mb-2">
                  <motion.span variants={textVariants} transition={{ duration: .4,delay:.4 }}  className="font-semibold text-[34px] text-white">{skill.name}</motion.span>
                  <motion.div variants={lineVariant} transition={{ duration:.4 }} className="w-1/4 sm:w-1/4 border-t-2 border-primary origin-left" />
                </div>

                <motion.span variants={textVariants} transition={{ duration:.4, delay:.7 }}>{skill.description}</motion.span>
                <motion.div variants={textVariants} transition={{ duration:.4, delay: .8 }} className="flex items-center flex-nowrap gap-5 mt-5">
                  {skill.stacks.map((stack) => (
                  <Link href={stack.link} key={stack.link}> 
                    {stack.icon}
                  </Link>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

  )
}

export default Skills
