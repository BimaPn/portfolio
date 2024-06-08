import HeroContent from "./HeroContent"
import HeroModel from "./HeroModel"

const Hero = () => {
  return (
     <div id="home" className="w-full h-screen bg-semiDark pt-[194px] sm:pt-0 relative z-[1]">
        <HeroContent />
        <HeroModel />
    </div> 
  )
}

export default Hero
