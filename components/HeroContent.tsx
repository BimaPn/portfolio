"use client"
import { motion } from "framer-motion"
import { splitText } from "@/utils/string"
import { textVariants } from "@/constants/framer"

const title = "Hi, I'm Bima 👋"
const highlight = "Fullstack Developer"
const description = "I'm passionate about creating dynamic and responsive web applications."

const HeroContent = () => {
  return (
          <div className="w-full flexCenter absolute top-[10%] sm:top-[15%] lg:top-[18%] left-0 px-4 xs:px-6 sm:px-8 md:px-14">
            <div className="boxWidth flex flex-col gap-4">
              <div className="flex flex-col leading-[44px] xs:leading-[50px] sm:leading-[55px] font-bold text-[36px] xs:text-[46px] tracking-tight">
                <div> 
                 <motion.span 
                 variants={textVariants} 
                 initial="hidden" 
                 animate="show" 
                 transition={{ duration:.4 }} 
                 className="inline-block">
                 {title}</motion.span>
                </div>
                <div> 
                  <motion.span 
                  variants={textVariants} 
                  initial="hidden" 
                  animate="show" 
                  transition={{ delay:.2, duration:.4 }} 
                  className="inline-block" 
                  >A <span className="text-white text-glow-sm">Fullstack Developer</span> 
                  </motion.span>
                </div>
              </div>

              <div 
              className="w-full xs:w-[90%] sm:w-1/2 lg:w-[35%] font-medium text-slate-300 sm:text-lg sm:leading-7 leading-6"
              > 
                <motion.span 
                variants={textVariants} 
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
