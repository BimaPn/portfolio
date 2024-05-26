"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"

const variants = {
  hidden: {
    height: "0vh"
  },
  show: {
    height: "100vh",
    transition:{duration:.5}
  }
}

const LinkTransition = ({href, label}:{href: string, label: string}) => {
  const path = usePathname()
  const router = useRouter()
  const [active, setActive] = useState(false)

  const activateLink = () => {
    if(active || path === href) return;
    setActive(true)
  }
  const animationFinished = () => {
    console.log("finished")
    router.push(href) 
  }
  return (
    <> 
      <button onClick={activateLink}>{label}</button>

      {active && (
        <motion.div 
        initial="hidden"
        animate="show" 
        className="relative z-[15]"
        transition={{ staggerChildren:.25 }}
        onAnimationComplete={animationFinished}> 
          <motion.div variants={variants} className="bg-primary fixed top-0 left-0 w-1/4 origin-top" />
          <motion.div variants={variants} className="bg-primary fixed top-0 left-1/4 w-1/4 origin-top" />
          <motion.div variants={variants} className="bg-primary fixed top-0 left-2/4 w-1/4 origin-top" />
          <motion.div variants={variants} className="bg-primary fixed top-0 left-3/4 w-1/4 origin-top" />
        </motion.div>
      )}
    </>
  )
}

export default LinkTransition
