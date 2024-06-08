"use client"
import { motion } from "framer-motion"
import { splitText } from "@/utils/string"

const title = "Hi, I'm Bima 👋"
const highlight = "Fullstack Developer"
const description = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima neque non, debitis quasi asperiores ipsa, animi, cumque"

const variants = {
  hidden: {  y: 15, opacity: 0 },
  show: {  y: 0, opacity: 1 }
}

const HeroContent = () => {
  return (
          <div className="w-full flexCenter absolute top-[10%] sm:top-[15%] lg:top-[18%] left-0 px-4 xs:px-6 sm:px-8 md:px-14">
            <div className="boxWidth flex flex-col gap-3 sm:gap-5">
              <div className="flex flex-col leading-[44px] xs:leading-[52px] sm:leading-[60px] font-bold text-[36px] xs:text-[46px] md:text-[50px] tracking-tight">
                <div> 
                 <motion.span 
                 variants={variants} 
                 initial="hidden" 
                 animate="show" 
                 transition={{ duration:.3 }} 
                 className="inline-block">
                 {title}</motion.span>
                </div>
                <div> 
                  <motion.span 
                  variants={variants} 
                  initial="hidden" 
                  animate="show" 
                  transition={{ delay:.2, duration:.3 }} 
                  className="inline-block" 
                  >A <span className="text-white text-glow-lg">Fullstack Developer</span> 
                  </motion.span>
                </div>
              </div>

              <div 
              className="w-full xs:w-[90%] sm:w-1/2 lg:w-[40%] font-medium text-slate-300"
              > 
                <motion.span 
                variants={variants} 
                initial="hidden" 
                animate="show"  
                transition={{ delay:.5, duration:.3  }} 
                >{description}</motion.span>
              </div>
            </div>
          </div>
  )
}

export default HeroContent
