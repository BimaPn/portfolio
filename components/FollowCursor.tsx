"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const variant = {
  hidden: {scale : 0}
}
const FollowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [position]);

  const variant = {
    initial: {
      opacity: 0,
      x: -200
    },
    default: {
      opacity: 1,
      x: position.x-128,
      y:position.y-128,
      transition: {
        type: "smooth",
        duration: 0
      }
    }
  }
  return (
    <motion.div 
    variants={variant}
    initial="initial"
    animate="default"
    className="w-64 aspect-square rounded-full bg-netral blur-[90px] fixed pointer-events-none top-0 sm:block hidden"
    />
  )
}

export default FollowCursor
