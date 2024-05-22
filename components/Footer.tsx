"use client"
import { socialMedia } from "@/constants/list"
import Spline from "@splinetool/react-spline"
import Link from "next/link"

const Footer = () => {
  return (
    <section className="-mt-20 relative">
      <div className="absolute inset-0 flexCenter">
        <div className="boxWidth">
          <div className="w-[40%] flex flex-col gap-3">
            <span className="font-bold text-[52px]">Let's get in touch</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aut quo suscipit minima. Voluptatem, consequatur.</span>
            <Link href={`/contact`} className="font-medium mt-2">Message me</Link>
          </div>
        </div>
      </div>  
      <Spline scene="https://prod.spline.design/Cy04erwI2vDlOuEr/scene.splinecode" />
    </section> 
  )
}

export default Footer
