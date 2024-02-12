import About from "@/components/About"
import ContactMe from "@/components/ContactMe"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"

const Home = () => {
  return (
    <>
      <header >
      <nav className="boxWidth flexBetween pt-[12px] pb-[15px]">
          <div>
            <span className="font-bold text-2xl">Bima Pn</span>
          </div>
          <div>
            <ul className="flex items-center gap-4 text-[17px]">
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>
         </nav>
      </header>

      <main>
        <Hero />
      </main>
    </>
  )
}

export default Home
