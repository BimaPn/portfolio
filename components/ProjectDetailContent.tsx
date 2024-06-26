"use client"
import { splitText } from "@/utils/string"
import { motion } from "framer-motion"
import Image from "next/image"
import FullScreenLaptop from "./FullScreenLaptop"
import { textVariants } from "@/constants/framer"
import { FaGithub } from "react-icons/fa"

const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}
export const viewport = {
  once:true,
  margin: "0% 0% -50% 0%"  
}
export const Header = ({videoSrc, type, title, color}:{videoSrc: string, title: string, type: string, color: string}) => {
  return (
    <div className="boxWith-md flexCenter flex-col">
      <div className="flex flex-col items-center relative text-center z-[2] gap-1">
        <motion.h1
        variants={textVariants}
        initial="hidden" 
        animate="show" 
        transition={{ duration:.4, delay:1 }}
        className="text-[32px] ss:text-[36px] sm:text-[42px] md:text-[46px] font-bold text-white text-glow-sm"
        > 
          {title}
        </motion.h1>

        <motion.span 
        variants={textVariants}
        initial="hidden" 
        animate="show" 
        transition={{ duration:.4, delay:1.1 }}
        className="font-medium text-slate-300 text-sm sm:text-base"
        >
          {type} 
        </motion.span>
      </div>

      <div className="w-full flexCenter mb-4 sm:mb-2 md:mb-4 mt-4 sm:mt-6">
       <div className="w-full aspect-[16/10.5] h-fit relative z-[0]">
        <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1, transition:{delay:0.7} }}
        style={{ backgroundColor: color }}
        className="absolute left-[10%] -top-16 w-[80%] aspect-[4/3.5] h-fit rounded-full blur-[90px]"
        />
          <FullScreenLaptop videoSrc={videoSrc}/> 
       </div>
      </div>
    </div>
  )
}
const Content1 = ({imagePreview, overview}:{imagePreview: string, overview: string}) => {
  return (
  <motion.div 
  variants={variants}
  viewport={viewport}
  initial="hidden"
  whileInView="show"
  className="flex flex-col-reverse gap-6 sm:gap-0 sm:flex-row sm:justify-between"
  >

     <motion.div 
     className="w-full sm:w-[45%] flex flex-col gap-2 text-slate-300"
     >
        <motion.span 
        variants={textVariants}
        transition={{ duration:.4, delay: .1 }}
        className="font-semibold text-white text-sm inline-block"
        >
        Overview
        </motion.span>
        <motion.span 
        variants={textVariants} 
        transition={{ duration:.4, delay:.2 }}  
        className="leading-7">{overview}</motion.span>
     </motion.div> 

      <motion.div 
      variants={textVariants}
      transition={{ duration:.4, delay:.4 }}  
      className="w-full sm:w-[50%] h-auto"
      >
        <Image src={imagePreview} width={1980} height={1080} alt="project image" className="w-full h-auto" />
      </motion.div>
    </motion.div>

  )
}

const Content2 = ({imagePreview, stacks, role}:{imagePreview: string, stacks: React.ReactNode[], role: string}) => {
  return (
   <motion.div  
    variants={variants}
    viewport={viewport}
    initial="hidden"
    whileInView="show"
    className="flex flex-col sm:flex-row gap-7 sm:gap-12"
    >
      <motion.div
      className="w-full ss:w-[80%] sm:w-[40%] h-auto"
      variants={textVariants}
      transition={{ duration:.4, delay: .1 }}
      >
        <Image src={imagePreview} width={1980} height={1080} alt="project image" className="w-full h-auto" />
      </motion.div>

          <div className="w-full sm:w-[45%] flex flex-col gap-6">
            <motion.div transition={{ staggerChildren: .02 }} className="flex flex-col gap-2 text-slate-300">
              <motion.span 
              className="font-semibold text-white text-sm" 
              variants={textVariants} 
              transition={{ duration:.4, delay:.2 }}  
              >  
                My role
              </motion.span>
              <motion.span 
              variants={textVariants} 
              transition={{ duration:.4, delay:.3 }}  
              >{role}</motion.span>
            </motion.div>
            <div className="flex flex-col gap-2 text-slate-300">
              <motion.span 
              variants={textVariants} 
              transition={{ duration:.4, delay:.4 }}  
              className="font-semibold text-white text-sm" 
              >
                Development stack 
              </motion.span>
              <motion.span  
              variants={textVariants} 
              transition={{ duration:.4, delay:.5 }}  
              >For the stack, I used the following : </motion.span>
              <motion.div 
              variants={textVariants} 
              transition={{ duration:.4, delay:.6 }}  
              className="flex flex-col gap-2">
                {stacks.map((stack, i) => ( 
                  <div key={i}>{stack}</div>
                ))}
              </motion.div>
            </div>
          </div>
    </motion.div>
  )
}

export const Content = ({...props}:{previewImages: string[], demoLink: string, codeLink: string, overview: string, role: string, stacks: React.ReactNode[]}) => {
  return ( 
    <div className="boxWith-md flex flex-col gap-16 sm:gap-20 mx-auto">
      <div className="flexCenter gap-5 sm:gap-7 py-2 ss:py-4 relative z-[2]">
        <a 
        href={props.demoLink} 
        target="_blank" 
        className="flex items-center gap-[6px] font-semibold text-white hover:scale-105 transition-transform" 
        > 
          <Image src={`/icons/play.png`} alt="icon" width={40} height={40} className="w-[13px] h-auto" />
          <span>Live Demo</span>
        </a>
        <a 
        href={props.codeLink}
        target="_blank" 
        className="flex items-center gap-[6px] font-semibold text-slate-400 hover:scale-105 hover:text-white transition-transform"
        > 
          <FaGithub className="text-[19px]" />
          <span>View repo</span>
        </a>
      </div>  
      <Content1 overview={props.overview} imagePreview={props.previewImages[0]} /> 
      <Content2 role={props.role} imagePreview={props.previewImages[1]} stacks={props.stacks} /> 
    </div>
  )
}

