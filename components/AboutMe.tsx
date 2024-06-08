"use client"
import { textVariants } from "@/constants/framer"
import { motion } from "framer-motion"
import Image from "next/image"

const AboutMe = () => {
  return (
      <div className="w-full lg:w-[1200px] mx-auto mt-6">
        <div className="w-fit flex flex-col gap-4 xs:gap-7">
          <motion.h2 
          variants={textVariants} 
          initial="hidden" 
          animate="show" 
          transition={{ duration:.4, delay:1}} 
          className="flex items-center gap-3 font-semibold tracking-tight text-slate-400 -mb-[14px]" 
          > 
            <div className="w-2 aspect-square rounded-full bg-white box-glow" />
            <span>About me</span>
          </motion.h2>
          <h1 className="font-semibold text-[36px] xs:text-[46px] md:text-[50px] tracking-tight flex flex-col leading-[44px] xs:leading-[52px] sm:leading-[60px] text-slate-200"> 
            <motion.span 
            variants={textVariants} 
            initial="hidden" 
            animate="show" 
            transition={{ duration:.4, delay: 1.1 }} 
            className="inline-block"
            >Hello Everyone Hahi</motion.span>
            <motion.span 
            variants={textVariants} 
            initial="hidden" 
            animate="show" 
            transition={{ duration:.4, delay:1.2 }} 
            className="inline-block"
            >I'm <span className="text-white text-glow-sm">Inspiration</span> Person Bro</motion.span>
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between mt-6 sm:mt-8 gap-6 sm:gap-0">
          <motion.div variants={textVariants} initial="hidden" animate="show" transition={{ duration:.3, delay: 1.3 }} className="w-full sm:w-[50%] flex flex-col gap-5">
            <span className="sm:text-lg leading-[30px] tracking-wide sm:leading-[32px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eaque neque vitae reprehenderit totam nobis sapiente eius minus! Tempore numquam nobis hic consectetur? Fugit inventore, obcaecati fuga consequatur iure commodi.</span>

          </motion.div>

          <div className="w-full sm:w-[45%] aspect-[3/4] relative mt-3 overflow-hidden">
            <motion.div initial={{ scale: 1.03}} animate={{ scale:1 }} transition={{ delay: 1.5, duration:.5 }} className="w-full h-full relative z-0"> 
              <Image src={`/person.jpg`} alt="the creator" fill className="object-cover rounded-lg" />
            </motion.div>
            <motion.div 
            initial={{ height:"100%" }}  
            animate={{ height: "0%" }} 
            transition={{ delay:1.5}} 
            className="absolute top-0 left-0 w-full bg-primary z-[1] origin-bottom rounded-lg" />

          </div>
        </div>
      </div>
  )
}

export default AboutMe