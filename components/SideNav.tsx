"use client"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import LinkTransition from "./LinkTransition"

const sideScreenVariants = {
    initial: { scaleY: 0 },
    animate: { 
      scaleY: 1,
      transition: {
        duration: .5,
        ease: [.12, 0, .39, 0]
      }
    },
    exit: { 
      scaleY: 0 ,
      transition: {
        duration: .5,
        delay:.5,
        ease: [.12, 0, .39, 0]
      }
    } 
}
const parentListVariants = {
  initial: {
    transition: {
      staggerChildren: .09,
      staggerDirection: -1
    } 
  },
  animate: {
    transition: {
      delayChildren: .3,
      staggerChildren: .09,
      staggerDirection: 1
    } 
  },

}
const listVariants = {
  initial: {
    y: "35vh" ,
    transition: {
      duration: .5,
      ease: [.37, 0, .63, 1]
    }
  },
  animate: {
    y: 0,
    transition: {
      duration: .7,
      ease: [0, .55, .45, 1]
    }
  },
}

const SideNav = ({activePage}:{activePage: string}) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  },[activePage])
  const leftVariants = {
    closed: {
      rotate: "0deg",
      height: 2.5
    },
    open: { 
      rotate: "45deg",
      height: 3.1
    }
  }
  const rightVariants = {
    closed: {
      rotate: "0deg",
      height: 2.5,
      translateY:0,
    },
    open: { 
      rotate: "-45deg",
      height: 3,
      translateY:2,
    }
  }
  return (
      <div className="w-[24px] aspect-[4/3.6] relative z-[10] ">
      <button onClick={() => setIsOpen(prev => !prev)} className='absolute top-0 left-0 z-[11] w-full h-full grid grid-cols-1 grid-rows-3'>
        <motion.div
        variants={leftVariants}
        animate={isOpen ? "open":"closed"} 
        transition={{ bounce: 0 }}
        className='bg-slate-300 w-full rounded-full origin-top-left'/>
        <motion.div animate={{ opacity: isOpen ? "0" : "1"  }} className={`bg-slate-300 w-[60%] justify-self-end h-[3px] rounded-full`}/>
        <motion.div 
        variants={rightVariants}
        animate={isOpen ? "open":"closed"} 
        transition={{ bounce: 0 }}
        className='bg-slate-300 w-full rounded-full origin-bottom-left'/>
      </button>
      <AnimatePresence>
      {isOpen && (
          <motion.div
          variants={sideScreenVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-[10] bg-netral origin-top"
          >
            <div className="text-slate-500 mt-14 px-4">
              <div>
                <motion.ul
                variants={parentListVariants}
                initial="initial" 
                animate="animate" 
                exit="initial" 
                className="flex flex-col text-[52px] font-bold"
                >
                  <li className="overflow-hidden -mb-4">
                    <motion.div variants={listVariants}>
                      <span className="text-sm font-semibold text-slate-400">Navigation</span>
                    </motion.div>
                  </li>
                  <li className="overflow-hidden">
                    <motion.div 
                    variants={listVariants} 
                    className={`${activePage === "home" && "text-light"}`}
                    >
                      <LinkTransition href="/#home" label="Home" />
                    </motion.div>
                  </li>
                  <li className="overflow-hidden">
                    <motion.div 
                    variants={listVariants} 
                    className={`${activePage === "about" && "text-light"}`}
                    >
                      <LinkTransition href="/about" label="About" />
                    </motion.div>
                  </li>

                  <li className="overflow-hidden">
                    <motion.div 
                    variants={listVariants} 
                    className={`${activePage === "projects" && "text-light"}`}
                    >
                      <LinkTransition href="/#projects" label="Projects" />
                    </motion.div>
                  </li>
                  <li className="overflow-hidden">
                    <motion.div  
                    variants={listVariants} 
                    className={`${activePage === "contact" && "text-light"}`}
                    >
                      <LinkTransition href="/#contact" label="Contact" />
                    </motion.div>
                  </li>
                </motion.ul>
              </div>
            </div>
          </motion.div>
      )}
      </AnimatePresence>
    </div>
  )
}

export default SideNav
