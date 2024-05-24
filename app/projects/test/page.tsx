"use client"
import { Rig } from "@/components/Laptop3D"
import LaptopPreview from "@/components/LaptopPreview"
import LaptopScreen3D from "@/components/LaptopScreen3D"
import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Link from "next/link"
import { Suspense } from "react"

const page = () => {
  return (
    <section className="mt-28 pb-96"> 

      <div className="w-full lg:w-[1280px] px-8 mx-auto flexCenter flex-col">
        <h1 className="text-[50px] font-semibold text-white font-highlight text-glow-lg mb-1">Europark Museum</h1>
        <span className="font-medium text-slate-400 text-lg">Web Application</span>

        <div className="w-full h-[80vh] flexCenter">
         <div className="w-full aspect-[16/9.5] lg:aspect-auto h-fit lg:h-full">

         <Canvas camera={{ position: [0, 12, -23], fov: 35 }}>
          <Suspense fallback={null}>
          <pointLight position={[-4, 3, 1]} color={"#6B8AFD"} intensity={100} />
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

      <div className="w-full lg:w-[1280px] flex flex-col gap-20 mx-auto">
        <div className="flexCenter gap-6 py-4">
          <Link href={`/test`} className="font-semibold text-white text-glow-sm"> 
          Live Demo
          </Link>
          <Link href={`/test`} className="font-semibold text-slate-400">View in github</Link>
        </div>  
        
        <div className="flex justify-center gap-32">
           <div className="w-[45%] flex flex-col gap-2 text-slate-300">
            <span className="font-semibold text-white text-sm">Overview</span>
            <span className="leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem distinctio quis ex consequatur cum corporis omnis ea, quod illum perferendis earum ad dignissimos nisi necessitatibus praesentium soluta unde eligendi voluptatem quo blanditiis vero illo ipsa? Lorem ipsum dolor sit amet.</span>
         </div> 

          <div className="w-[30%] flex flex-col gap-6">
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

    </section>  
  ) 
}

export default page
