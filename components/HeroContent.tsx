"use client"
import { motion } from "framer-motion"
import { splitText } from "@/utils/string"

const title = "Hi, I'm Bima 👋"
const highlight = "Fullstack Developer"
const description = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima neque non, debitis quasi asperiores ipsa, animi, cumque"

const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const HeroContent = () => {
  return (
          <div className="w-full flexCenter absolute top-[10%] sm:top-[15%] lg:top-[18%] left-0 px-4 xs:px-6 sm:px-8 md:px-14">
            <div className="boxWidth flex flex-col gap-3 sm:gap-5">
              <div className="flex flex-col leading-[44px] xs:leading-[52px] sm:leading-[60px] font-bold text-[36px] xs:text-[46px] md:text-[50px] tracking-tight">

                <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.02 }}> 
                  {splitText(title).map((char, index) => (
                    <motion.span 
                    transition={{ duration:0.7 }} 
                    variants={variants} 
                    key={index}
                    >
                    {char} 
                    </motion.span>
                  ))} 
                </motion.div>

                <motion.div initial="hidden" animate="show" transition={{ staggerChildren: .02 }}>
                  {["A", " "].map((char) => (
                    <motion.span 
                    transition={{ duration:.7 }} 
                    variants={variants} 
                    key={char}
                    >
                    {char} 
                    </motion.span>
                  ))}
                  {splitText(highlight).map((char, index) => (
                    <motion.span 
                    transition={{ duration:.7 }} 
                    variants={variants} 
                    key={index}
                    className="text-white text-glow-lg"
                    >
                    {char} 
                    </motion.span>
                  ))}
                </motion.div>

              </div>
              <motion.div
              initial="hidden"
              animate="show"
              transition={{ staggerChildren: 0.01 }}
              className="w-full xs:w-[90%] sm:w-1/2 lg:w-[40%] font-medium text-slate-300"
              >
                {splitText(description).map((char, index) => (
                  <motion.span 
                  transition={{ duration:0.1 }} 
                  variants={variants} 
                  key={index}
                  >
                  {char} 
                  </motion.span>
                ))} 
              </motion.div>
            </div>
          </div>
  )
}

export default HeroContent
