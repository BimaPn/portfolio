"use client"
import { Rig } from "@/components/Laptop3D"
import { splitText } from "@/utils/string"
import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"
import { viewport } from "@/components/Projects"


const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const page = () => {
  return (
    <section className="px-3 ss:px-6 sm:px-8 mt-20 sm:mt-24 pb-36 relative"> 
      <Hero />
      <div className="boxWith-md flex flex-col gap-16 sm:gap-20 mx-auto">
        <motion.div variants={variants} initial="hidden" whileInView="show" viewport={viewport} className="flexCenter gap-4 sm:gap-7 py-2 ss:py-4 relative z-[2]">
          <Link href={`/test`} className="font-semibold text-white text-glow-sm"> 
          Live Demo
          </Link>
          <Link href={`/test`} className="font-semibold text-slate-400">View github</Link>
        </motion.div>  
        
        <Section2 /> 
        <Section3 /> 
      </div>
      <Footer />
    </section>  
  ) 
}

const Hero = () => {
  return (
    <div className="boxWith-md  flexCenter flex-col">
      <div className="flex flex-col items-center relative text-center z-[2]">
        <motion.h1
        initial="hidden" 
        animate="show" 
        transition={{ staggerChildren: 0.02 }} 
        className="text-[32px] ss:text-[36px] sm:text-[42px] md:text-[50px] font-bold text-white text-glow-lg"
        > 
          {splitText("Europark Museum").map((char, index) => (
            <motion.span 
            transition={{ duration:0.7 }} 
            variants={variants} 
            key={index}
            >
            {char} 
            </motion.span>
            ))} 
        </motion.h1>

        <motion.span 
        initial="hidden" 
        animate="show"
        transition={{ staggerChildren: 0.02 }} 
        className="font-medium text-slate-300 text-sm sm:text-base md:text-lg"
        >
          {splitText("Web Application").map((char, index) => (
            <motion.span 
            transition={{ duration:0.7 }} 
            variants={variants} 
            key={index}
            >
            {char} 
            </motion.span>
           ))} 
        </motion.span>
      </div>

      <div className="w-full flexCenter my-4 sm:my-2">
       <div className="w-full aspect-[16/10.5] h-fit relative z-[0]">
        <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1, transition:{delay:0.7} }}
        className="absolute left-[10%] -top-16 w-[80%] aspect-[4/3.5] h-fit rounded-full bg-netral blur-[90px]"
        />
         <Canvas camera={{ position: [0, 12, -40], fov: 13 }}>
          <Suspense fallback={null}>
            <group rotation={[0, Math.PI, 0]} >
            </group>
            <Environment preset="city" />
          </Suspense>
          <Rig />
          </Canvas>
       </div>
      </div>
    </div>
  )
}
const Section2 = () => {
  return (
  <motion.div 
  variants={variants}
  viewport={viewport}
  initial="hidden"
  whileInView="show"
  transition={{ staggerChildren: 0.02 }}
  className="flex flex-col-reverse gap-6 sm:gap-0 sm:flex-row sm:justify-between"
  >

     <motion.div 
     className="w-full sm:w-[45%] flex flex-col gap-2 text-slate-300"
     transition={{ staggerChildren: .02 }}
     >
        <motion.span 
        transition={{ staggerChildren: 0.02 }} 
        className="font-semibold text-white text-sm"
        >
          {splitText("Overview").map((char, index) => (
            <motion.span 
            transition={{ duration:0.7 }} 
            variants={variants} 
            key={index}
            >
            {char} 
            </motion.span>
            ))} 
        </motion.span>
        <motion.span variants={variants} transition={{ duration:.7 }} className="text-sm sm:text-base leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem distinctio quis ex consequatur cum corporis omnis ea, quod illum perferendis earum ad dignissimos nisi necessitatibus praesentium soluta unde eligendi voluptatem quo blanditiis vero illo ipsa? Lorem ipsum dolor sit amet.</motion.span>
     </motion.div> 

      <motion.div 
      className="w-full sm:w-[50%] h-auto"
      >
        <Image src={`/mockup/2.png`} width={1980} height={1080} alt="project image" className="w-full h-auto" />
      </motion.div>
    </motion.div>

  )
}

const Section3 = () => {
  return (
   <motion.div  
    variants={variants}
    viewport={viewport}
    initial="hidden"
    whileInView="show"
    transition={{ staggerChildren: 0.01 }}
    className="flex flex-col sm:flex-row gap-7 sm:gap-12"
    >
      <motion.div
      className="w-full ss:w-[80%] sm:w-[40%] h-auto"
      >
        <Image src={`/mockup/1.png`} width={1980} height={1080} alt="project image" className="w-full h-auto" />
      </motion.div>

          <motion.div className="w-full sm:w-[45%] flex flex-col gap-6">
            <motion.div transition={{ staggerChildren: .02 }} className="flex flex-col gap-2 text-slate-300">
              <motion.span 
              transition={{ staggerChildren: 0.02 }} 
              className="font-semibold text-white text-sm" 
              >  
                {splitText("My role").map((char, index) => (
                  <motion.span 
                  transition={{ duration:0.7 }} 
                  variants={variants} 
                  key={index}
                  >
                  {char} 
                  </motion.span>
                  ))} 
              </motion.span>
              <motion.span variants={variants} transition={{ duration: .7 }}>Full-Stack Developer</motion.span>
            </motion.div>
            <div className="flex flex-col gap-2 text-slate-300">
              <motion.span 
              transition={{ staggerChildren: 0.02 }} 
              className="font-semibold text-white text-sm" 
              >
                {splitText("Development Stack").map((char, index) => (
                  <motion.span 
                  transition={{ duration:0.7 }} 
                  variants={variants} 
                  key={index}
                  >
                  {char} 
                  </motion.span>
                  ))} 
              </motion.span>
              <motion.span transition={{ duration: .7 }}>For the stack, I used the following : </motion.span>
              <motion.div transition={{ duration:.7 }} className="flex flex-col gap-2">
                <span>- Nextjs for the front-end</span>
                <span>- Node for the server side</span>
                <span>- Redis for the caching</span>
                <span>- MongoDB</span>
              </motion.div>
            </div>
          </motion.div>
    </motion.div>

  )
}

export default page
