import About from "@/components/About"
import ContactMe from "@/components/ContactMe"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import { socialMedia } from "@/constants/list"

const Home = () => {
  return (
    <>
      <header >
      <nav className="boxWidth flexBetween pt-[12px] pb-[15px]">
          <div>
            <span className="font-bold text-2xl">BimaP</span>
          </div>
          <div>
            <ul className="flex items-center gap-4 font-semibold text-[15px] text-slate-500">
              <li className="text-black">Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>
         </nav>
      </header>

      <main >
        <Hero />
        <About />
        <Projects />
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
