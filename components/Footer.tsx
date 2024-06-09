"use client"
import { Stars } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";

import React, { useEffect, useRef } from "react";

import { FiArrowRight } from "react-icons/fi";

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { socials } from "@/constants/socialMedia";
import { PiArrowUpRightBold } from "react-icons/pi";
import LinkTransition from "./LinkTransition";


const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];


const Footer = () => {
  const containerRef = useRef<HTMLElement>(null)
  const color = useMotionValue(COLORS_TOP[0]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });
  const y = useTransform(scrollYProgress, [0,1],["-100%","0%"])
  const opacity = useTransform(scrollYProgress, [0,1],["0%","100%"])

  useEffect(() => {

    animate(color, COLORS_TOP, {

      ease: "easeInOut",

      duration: 10,

      repeat: Infinity,

      repeatType: "mirror",

    });

  }, []);


  const backgroundImage = useMotionTemplate`radial-gradient(150% 150% at 50% 0%, #020413 50%, ${color})`;

  const border = useMotionTemplate`1px solid ${color}`;

  const boxShadow = useMotionTemplate`0px 4px 20px ${color}`;


  return (

    <motion.section
      ref={containerRef}
      style={{
        opacity,
        backgroundImage
      }}

      className="relative grid min-h-[100vh] place-content-center overflow-hidden bg-dark px-4 py-24"

    >

      <div className="absolute left-0 bottom-0 right-0 z-[5]"> 
        <FooterSimple />
      </div>  
      <motion.div style={{ y }} className="relative z-10 flex flex-col items-center">

        <h1 className="max-w-3xl text-center text-3xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight md:text-[50px] md:leading-tight">

        Let's Get in Touch 

        </h1>

        <p className="mb-8 mt-4 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
         I'm always excited to connect and collaborate on new projects. Let's create something amazing together.
        </p>

        <motion.button

          style={{

            border,

            boxShadow,

          }}

          whileHover={{

            scale: 1.015,

          }}

          whileTap={{

            scale: 0.985,

          }}

          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"

        >

          Contact me 

          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />

        </motion.button>

      </motion.div>


      <div className="absolute inset-0 z-0">

        <Canvas>

          <Stars radius={50} count={150} factor={4} fade speed={2} />

        </Canvas>

      </div>

    </motion.section>

  );

};


export const FooterSimple = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 text-sm sm:text-[15px] text-white">
      <div className="w-full xl:w-[1440px] px-3 xs:px-6 sm:px-8 flexBetween sm:flex-row flex-col-reverse gap-3 py-4 sm:py-5 mx-auto">
        <div className="font-medium ">
          <span>© 2024 <LinkTransition label={<span className="font-semibold">Bima Pn</span>} href="/about" />. Made with love ❤️</span>
        </div>
        <div className="flex items-center gap-5 sm:gap-7">
        {socials.map((social) => (
          <Link href={social.link} key={social.label} className="font-medium hover:text-white flexCenter gap-1">
            <span>{social.label}</span>
            <PiArrowUpRightBold className="-mb-[1px]" />
          </Link>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
