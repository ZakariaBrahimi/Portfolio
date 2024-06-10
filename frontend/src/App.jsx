import Home from "./components/0-Home";
import Header from "./components/1-Header";
import Hero from "./components/2-Hero";
import Main from "./components/3-Main";
import Contact from "./components/4-Contact";
import Education from "./components/4-Education";
import Footer from "./components/5-Footer";
import Works from "./components/5-Works";
// import MySkills from "./components/MySkills"
import "./index.css";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="dark:bg-primary bg-[#F5F5F5] b-[#f0f0f0] b-[#f2f3f4]   dark:text-white w-full    min-h-screen px-12 md:px-24 ">
        <Header />
        <Outlet/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/works" element={<Works />} />
        
      </Routes>
    </div>
  );
}
export default App;
