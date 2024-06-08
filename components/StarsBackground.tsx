"use client"
import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const StarsBackground = ({children, count=1500}:{children: React.ReactNode, count?: number}) => {
  return (
    <div className='relative'> 
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={count} factor={4} fade speed={2} />
        </Canvas>
      </div>
      {children}
    </div>
  )
}

export default StarsBackground
