"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { colors } from "@/constants/projects"

const FollowCursor = ({color}:{color?:string}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false)

  const handleMouseMove = (event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const mouseEnter = () => setShow(true)
  const mouseLeave = () => setShow(false)

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    const element = document.getElementById("cursor-active")
    element!.addEventListener("mouseenter", mouseEnter)
    element!.addEventListener("mouseleave", mouseLeave)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      element!.removeEventListener("mouseenter", mouseEnter)
      element!.removeEventListener("mouseleave", mouseLeave)
    };
  }, []);

  const variant = {
    initial: {
      x: -200
    },
    default: {
      x: position.x-75,
      y:position.y-75,
      transition: {
        type: "smooth",
        duration: 0,
      },
      backgroundColor: color ?? colors[0] 
    },
  }
  return (
      <motion.div 
      variants={variant}
      initial="initial"
      animate="default"
      className={`w-40 aspect-square rounded-full blur-[90px] fixed pointer-events-none top-0 sm:block hidden
      transition-opacity duration-500 ${show ? "opacity-1":"opacity-0"} z-[5]`}
      />
  )
}

export default FollowCursor

