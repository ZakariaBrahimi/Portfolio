import Hero from "./2-Hero"
import Main from "./3-Main"
import Education from "./4-Education"

const Home = () => {
  return (
    <div className="animate-fade-up  mx-auto ">
        <Hero />
        <Main />
        <Education />
    </div>
  )
}

export default Home