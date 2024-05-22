import About from "@/components/About"
import ContactMe from "@/components/ContactMe"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import RobotModel from "@/components/RobotModel"
import { socialMedia } from "@/constants/list"

const Home = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-4" >
        <Navbar />
      </header>

      <main >
      <div className="w-full h-screen relative">
          <RobotModel />
          <div className="w-full flexCenter absolute top-[18%] left-0 px-14">
            <div className="boxWidth flex flex-col gap-5">
              <div className="flex flex-col leading-[60px] font-bold text-[50px] tracking-tight">
                <span>Hi, I'm Bima 👋</span>
                <span>A <span className="text-white text-glow">Fullstack Developer</span></span>
              </div>
              <div className="w-[35%] font-medium text-slate-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima neque non, debitis quasi asperiores ipsa, animi, cumque fuga nobis 
              </div>
            </div>
          </div>
      </div>
      <section>
      <Projects />
      </section>
            <Footer />
      </main>
    </>
  )
}

export default Home


