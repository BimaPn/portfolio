import About from "@/components/About"
import Footer from "@/components/Footer"
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
        <div className="flex flex-col gap-6 pt-6 rounded-t-xl bg-white relative z-[100]">
          <About />
          <Projects />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
