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


const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];


const FooterContent = () => {
  const containerRef = useRef<HTMLElement>(null)
  const color = useMotionValue(COLORS_TOP[0]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0,1],["-100%","100%"])

  useEffect(() => {

    animate(color, COLORS_TOP, {

      ease: "easeInOut",

      duration: 10,

      repeat: Infinity,

      repeatType: "mirror",

    });

  }, []);


  const backgroundImage = useMotionTemplate`radial-gradient(145% 145% at 50% 0%, #020413 50%, ${color})`;

  const border = useMotionTemplate`1px solid ${color}`;

  const boxShadow = useMotionTemplate`0px 4px 20px ${color}`;


  return (

    <motion.section
      ref={containerRef}
      style={{

        backgroundImage,

      }}

      className="relative grid min-h-[80vh] place-content-center overflow-hidden bg-dark px-4 py-24"

    >

      <motion.div style={{ y }} className="relative z-10 flex flex-col items-center">

        <h1 className="max-w-3xl  text-center text-3xl font-bold leading-tight title sm:text-5xl sm:leading-tight md:text-[50px] md:leading-tight">

        Let's Get in Touch 

        </h1>

        <p className="mb-8 mt-4 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">

          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, et,

          distinctio eum impedit nihil ipsum modi.

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

          <Stars radius={50} count={100} factor={4} fade speed={2} />

        </Canvas>

      </div>

    </motion.section>

  );

};
export default FooterContent
