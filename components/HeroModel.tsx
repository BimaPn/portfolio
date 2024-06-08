"use client"
import { lazy, useState } from "react"
import LoadingSpinner from "./LoadingSpinner"
const Spline = lazy(() => import("@splinetool/react-spline"))

const HeroModel = () => {
  const [loading, setLoading] = useState(true)
  return (
    <div className="w-full h-full"> 
      {loading && <Loading />}
       <Spline scene="https://prod.spline.design/pUlNw0mQaVItd3XC/scene.splinecode" onLoad={() => setLoading(false)} />
    </div>
  )
}

const Loading = () => {
  return (  
    <div className="w-full h-screen flex justify-center sm:justify-end"> 
      <div className="w-1/2 h-full flexCenter">
        <LoadingSpinner />
      </div>
    </div>  
  )
}


export default HeroModel
