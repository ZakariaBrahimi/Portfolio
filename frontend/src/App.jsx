import Header from "./components/1-Header"
import Hero from "./components/2-Hero"
import Main from "./components/3-Main"
import Contact from "./components/4-Contact"
import Footer from "./components/5-Footer"
import MySkills from "./components/MySkills"
import "./index.css"


function App() {

  return (
    <div className='dark:bg-primary dark:text-white w-full md:w-10/12 mx-auto dark:border-x dark:border-borderColor min-h-screen px-12 md:px-24 '>
        <Header />
        <Hero/>
        <div id="devider" className="border border-borderColor"></div>
        <Main />
        <div id="devider" className="border border-borderColor"></div>
        <MySkills />
        <div id="devider" className="border border-borderColor"></div>
        <Contact />
        <div id="devider" className="border border-borderColor"></div>
        <Footer />
    </div>
  )
}
export default App
