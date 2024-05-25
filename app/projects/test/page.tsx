"use client"
import { FooterSimple } from "@/components/Footer"
import { Rig } from "@/components/Laptop3D"
import LaptopPreview from "@/components/LaptopPreview"
import LaptopScreen3D from "@/components/LaptopScreen3D"
import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

const page = () => {
  return (
    <section className="w-full lg:w-[1280px] px-3 ss:px-6 sm:px-8 mt-20 sm:mt-24 pb-36 relative"> 
      <div className="w-full flexCenter flex-col">
        <div className="flex flex-col items-center relative text-center z-[2]">
          <h1 className="text-[36px] sm:text-[42px] md:text-[50px] font-bold text-white text-glow-lg">Europark Museum</h1>
          <span className="font-medium text-slate-300 text-sm sm:text-base md:text-lg">Web Application</span>
        </div>

        <div className="w-full flexCenter md:-mt-6">
         <div className="w-full aspect-[16/9.5] lg:aspect-[16/9.5] h-fit relative z-[0]">
          <div className="absolute left-[20%] -top-4 w-[60%] aspect-square h-fit rounded-full bg-netral blur-[90px]" />
           <Canvas camera={{ position: [0, 12, -23], fov: 35 }}>
            <Suspense fallback={null}>
              <group rotation={[0, Math.PI, 0]} >
                <LaptopScreen3D currentVideo={1} />
              </group>
              <Environment preset="city" />
            </Suspense>
            <Rig />
            </Canvas>
         </div>
        </div>
      </div>

      <div className="flex flex-col gap-20 mx-auto">
        <div className="flexCenter gap-4 sm:gap-7 py-4 relative z-[2]">
          <Link href={`/test`} className="font-semibold text-white text-glow-sm"> 
          Live Demo
          </Link>
          <Link href={`/test`} className="font-semibold text-slate-400">View github</Link>
        </div>  
        
        <div className="flex flex-col-reverse gap-6 sm:gap-0 sm:flex-row sm:justify-between">
         <div className="w-full sm:w-[45%] flex flex-col gap-2 text-slate-300">
            <span className="font-semibold text-white text-sm">Overview</span>
            <span className="text-sm sm:text-base leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem distinctio quis ex consequatur cum corporis omnis ea, quod illum perferendis earum ad dignissimos nisi necessitatibus praesentium soluta unde eligendi voluptatem quo blanditiis vero illo ipsa? Lorem ipsum dolor sit amet.</span>
         </div> 
          <div className="w-full sm:w-[50%] h-auto">
            <Image src={`/mockup/2.png`} width={1980} height={1080} alt="project image" className="w-full h-auto" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-7 sm:gap-12">
          <div className="w-[85%] ss:w-[80%] sm:w-[40%] h-auto">
            <Image src={`/mockup/1.png`} width={1980} height={1080} alt="project image" className="w-full h-auto" />
          </div>

          <div className="w-full sm:w-[45%] flex flex-col gap-6">
            <div className="flex flex-col gap-2 text-slate-300">
              <span className="font-semibold text-white text-sm">My role</span>
              <span>Full-Stack Developer</span>
            </div>
            <div className="flex flex-col gap-2 text-slate-300">
              <span className="font-semibold text-white text-sm">Development Stack</span>
              <span>For the stack, I used the following : </span>
              <div className="flex flex-col gap-2">
                <span>- Nextjs for the front-end</span>
                <span>- Node for the server side</span>
                <span>- Redis for the caching</span>
                <span>- MongoDB</span>
              </div>
            </div>
          </div>

        </div>

      </div>
      <FooterSimple />
    </section>  
  ) 
}

export default page
