"use client"
import { motion } from "framer-motion"

const variants = {
  hidden: {
    height: "100vh"
  },
  show: {
    height: "0vh",
    transition:{duration:.3}
  }
}
const Template = ({children}:{children?: React.ReactNode}) => {
  return (
    <div> 
      <motion.div initial="hidden" animate="show" className="relative z-[15]" transition={{ staggerChildren:.15 }} > 
        <motion.div variants={variants} className="bg-primary fixed bottom-0 left-0 w-1/4 origin-top" />
        <motion.div variants={variants} className="bg-primary fixed bottom-0 left-1/4 w-1/4 origin-top" />
        <motion.div variants={variants} className="bg-primary fixed bottom-0 left-2/4 w-1/4 origin-top" />
        <motion.div variants={variants} className="bg-primary fixed bottom-0 left-3/4 w-1/4 origin-top" />
      </motion.div>
      <motion.div initial={{ opacity:0,}} animate={{ opacity:1, transition:{delay:1} }}> 
        {children}
      </motion.div>
    </div>
  )
}

export default Template
