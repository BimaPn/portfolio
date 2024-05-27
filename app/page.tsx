import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import { socialMedia } from "@/constants/list"

const Home = () => {
  return (
    <>
      <main className="relative z-[1]">
        <Hero />
        <Projects />
        <div className="w-full h-screen sm:h-[75vh] overflow-hidden flex items-end">
          <Footer />
        </div>
      </main>
    </>
  )
}

export default Home


