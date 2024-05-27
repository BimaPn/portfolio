"use client"
import { createContext, useContext, useEffect, useState } from "react"
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

type TransitionProvider = {
  changeHref: (destination: string) => void
}
const transitionContext = createContext<TransitionProvider | null>(null)

const PageTransitionStart = ({children}:{children: React.ReactNode}) => {
  const [href, setHref] = useState<string | null>(null)
  const path = usePathname()
  const router = useRouter()

  const changeHref = (destination: string) => setHref(destination)

  useEffect(() => {
    if(href && path === href) {
      setHref(null)
    }
  },[path, href])

  const animationFinished = () => {
    if(!href) return
    router.push(href) 
  }
  return (
    <transitionContext.Provider value={{ changeHref }}> 
      {href && ( 
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
      {children}
    </transitionContext.Provider>
  )
}

export const usePageTransition = () => { 
  return useContext(transitionContext) as TransitionProvider
}

export default PageTransitionStart












