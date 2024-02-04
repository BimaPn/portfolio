import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import { HiOutlineMenu } from "react-icons/hi"

const Home = () => {
  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-[1000]">
        <nav className="boxWidth flexBetween py-[14px]">

          <div>
            <span className="font-bold text-2xl">Bima Pn</span>
          </div>
          <div>
            <HiOutlineMenu className="text-2xl" /> 
          </div>
         </nav>
      </header>

      <main>
        <Hero />
        <Projects />
      </main>
    </>
  )
}

export default Home
