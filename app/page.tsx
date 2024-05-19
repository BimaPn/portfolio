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

      <main className="h-[2000px]" >
      <div className="w-full h-screen relative">
          <RobotModel />
          <div className="w-full flexCenter absolute top-[20%] left-0 px-14">
            <div className="boxWidth flex flex-col gap-5">
              <div className="flex flex-col leading-[60px] font-bold text-[50px] tracking-tight text-white">
                <span>Hallo Everyone 👋</span>
                <span>I'm Software Engineer</span>
              </div>
              <div className="w-[35%]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima neque non, debitis quasi asperiores ipsa, animi, cumque fuga nobis consequatur corrupti 
              </div>
            </div>
          </div>
      </div>

      </main>

      <footer className="boxWidth mt-5">
       <section className="h-[384px] flexCenter gap-5 bg-red-200 rounded-3xl"></section>
       <div className="flexBetween px-3 my-3">
        <span className="text-[15px] font-semibold">Created By BimaP copyright@2024</span>
        <ul className="flex items-center gap-6 text-[22px]">
          {socialMedia.map((item) => (
            <li key={item.link}>
              {item.icon}
            </li>
          ))}
        </ul>
       </div>
      </footer> 
    </>
  )
}

export default Home


      // <div className="w-96 bg-gray-500/50 absolute top-0 left-1/2 aspect-square rounded-full blur-[120px]" />
