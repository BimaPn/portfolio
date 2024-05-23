"use client"
import Spline from "@splinetool/react-spline"
import Link from "next/link"
import { MdOutlineArrowForward } from "react-icons/md"
import { motion } from "framer-motion"
import { splitText } from "@/utils/string"


const title = "Let's get in touch 😙"
const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aut quo suscipit minima. Voluptatem, consequatur."
const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

export const viewport = {
  once: true,
  margin: "0% 0% -50% 0%"  
}
export const parentVariant = {
  show: { opacity:1 },
  hidden: {opacity:0}
}

const Footer = () => {
  return (
    <motion.section
    viewport={viewport}
    variants={parentVariant}
    initial="hidden"
    whileInView="show"
    className="-mt-20 relative"
    >
      <motion.div variants={parentVariant} transition={{ delay: 1 }} className="w-full">
        <Spline scene="https://prod.spline.design/Cy04erwI2vDlOuEr/scene.splinecode" />
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 flexCenter py-5 font-medium text-slate-400 text-[15px]">
        <span>© 2024 <Link href={`/about`} className="text-white">Bima PN</Link>. Made with love ❤️</span>
      </div>

      <div className="absolute inset-0 flexCenter pointer-events-none">
        <div className="boxWidth">
          <div className="w-[40%] flex flex-col gap-3">
                <motion.div className="font-bold text-white text-[52px]" variants={parentVariant} transition={{ staggerChildren: 0.04 }}> 
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
                <motion.div className="font-medium" variants={parentVariant} transition={{ staggerChildren: 0.01 }}> 
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
            <Link href={`/contact`} > 
              <motion.div className="font-medium mt-2 text-glow-sm text-white" variants={parentVariant} transition={{ staggerChildren: 0.07 }}> 
                {splitText("👉 Message me 👈").map((char, index) => (
                  <motion.span 
                  transition={{ duration:0.7 }} 
                  variants={variants} 
                  key={index}
                  >
                  {char} 
                  </motion.span>
                ))} 
              </motion.div>
            </Link>
          </div>
        </div>
      </div>  

    </motion.section> 
  )
}

export default Footer
