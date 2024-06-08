import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import StarsBackground from "@/components/StarsBackground"
import { socialMedia } from "@/constants/list"

const Home = () => {
  return (
    <>
      <main className="relative z-[1]">
          <Hero />
          <StarsBackground> 
            <Projects />
          </StarsBackground>
          <Footer />
      </main>
    </>
  )
}

export default Home




