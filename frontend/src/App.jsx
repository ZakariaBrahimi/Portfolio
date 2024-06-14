import Home from "./components/0-Home";
import Header from "./components/1-Header";

import Projects from "./components/5-Projects";
import Footer from './components/6-Footer'
import ProjectDetails from "./components/ProjectDetails";
import Volunteering from "./components/Volunteering";
import "./index.css";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  
  return (
    <div className="dark:bg-primary bg-[#FFFFFF] b-[#f0f0f0] b-[#f2f3f4] dark:text-white min-h-screen  ">
      <div className=" container w-full px-9 sm:w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
          <Header />
          <Outlet/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="project/:project_name" element={<ProjectDetails/>}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/volunteering" element={<Volunteering />} />
          
        </Routes>
          <Footer/>

      </div>
    </div>
  );
}
export default App;
