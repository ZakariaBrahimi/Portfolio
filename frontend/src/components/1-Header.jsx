import verifiedAnimation from "../assets/verifiedAnimation1.json";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  //   TODO: When clicked on any point in the menu, we should close the modal window
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(localStorage.getItem('isDark'));
  const handleThemeToggle = () => {
    let isDark = document.documentElement.classList.contains('dark')
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('isDark', false)
      setIsDark(false)
      
      }else{
        document.documentElement.classList.add('dark')
        localStorage.setItem('isDark', true)
        setIsDark(true)
    }
  };

  useEffect(()=>{
    localStorage.setItem('isDark', document.documentElement.classList.contains('dark'))
  }, [])



  
  return (
    <header className=" flex justify-between py-5 text-[#1A202C] mb-8">
      <nav className=" animate-fade hidden sm:flex   dark:text-white opacity-90 ">
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            `flex items-center mr-8 gap-2 text-darkGree cursor-pointer text-xl font-black `
          }
        >
          <Lottie
            className="w-9 h-9 bg-green-30"
            animationData={verifiedAnimation}
            loop={true}
          />
          {"Portfolio."}
        </NavLink>
        <ul className="flex items-center gap-3 font-bold">
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                `   px-3 py-1 rounded-lg transition-all  duration-500 cursor-pointer hover:dark:bg-[#3F444E] hover:bg-[#EDF2F7] ${
                  isActive ? "dark:bg-[#3F444E] bg-[#EDF2F7]" : ""
                }`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                `   px-3 py-1 rounded-lg transition-all  duration-500 cursor-pointer hover:dark:bg-[#3F444E] hover:bg-[#EDF2F7] ${
                  isActive ? "dark:bg-[#3F444E] bg-[#EDF2F7]" : ""
                }`
              }
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={({ isActive, isPending }) =>
                `   px-3 py-1 rounded-lg transition-all  duration-500 cursor-pointer hover:dark:bg-[#3F444E] hover:bg-[#EDF2F7] ${
                  isActive ? "dark:bg-[#3F444E] bg-[#EDF2F7]" : ""
                }`
              }
              to="volunteering"
            >
              Volunteering
            </NavLink>
          </li>
        </ul>
      </nav>
      <Link
        to={"/"}
        className=" sm:hidden text-white  flex items-center mr-8 gap-2 text-darkGree cursor-pointer text-xl font-extrabol font-black"
      >
        <Lottie
          className="w-9 h-9   bg-green-30"
          animationData={verifiedAnimation}
          loop={true}
        />
        {"Portfolio."}
      </Link>
      <div className="flex gap-4">
        <button
          onClick={handleThemeToggle}
          className="rounded-full p-2 dark:border-borderColor transition-colors duration-500 hover:bg[] border dark:bg-bgHeader dark:hover:bg-[#3F444E] bg-transparent hover:bg-[#EDF2F7]"
        >
          {
             isDark ? 
            <svg className="w-4 h-4 sm:h-5 sm:w-5 dark:fill-zinc-700 dark:stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.9 4.9 1.4 1.4"/><path d="m17.7 17.7 1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.3 17.7-1.4 1.4"/><path d="m19.1 4.9-1.4 1.4"/></svg>
            :
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-4 h-4 sm:h-5 sm:w-5 dark:fill-zinc-700 dark:stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"
            >
              <path
                d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          }
        </button>

        <button
          onClick={() => setIsOpen(true)}
          className="sm:hidden rounded-full p-2 dark:border-borderColor transition-colors duration-500 hover:bg[] border dark:bg-bgHeader dark:hover:bg-[#3F444E] bg-transparent hover:bg-[#EDF2F7]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div
        className={
          isOpen
            ? "absolute inset-0 bg-[#050505]  z-40 sm:hidden outline-none"
            : "hidden"
        }
      >
        {/* Navigation menu */}
        <nav className="z-50 animate-jump-in animate-duration-600 outline-none border rounded-xl p-4 text-white w-8/12 mx-auto mt-6 bg-primary border-borderColor">
          <div className="w-full flex justify-between items-center mb-5 opacity-80 font-normal">
            <p className=""></p>
            {/* Close button */}
            <button className=" hover:rotate-180 transition-all duration-500" onClick={() => setIsOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className=" w-6 h-6 hover:w-[1.53rem] hover:h-[1.53rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* Navigation links */}
          <div className="flex flex-col items-start gap-4 w-full font-bold">
         
            <NavLink
            onClick={()=>setIsOpen(false)}
              className={({ isActive, isPending }) =>
                `   px-3 w-full py-2 rounded-lg transition-all  duration-500 cursor-pointer hover:dark:bg-[#3F444E] hover:bg-[#EDF2F7] ${
                  isActive ? "dark:bg-[#3F444E] bg-[#EDF2F7]" : ""
                }`
              }
              to="/"
            >
              Home
            </NavLink>



            <NavLink
            onClick={()=>setIsOpen(false)}
              className={({ isActive, isPending }) =>
                `   px-3 w-full py-2 rounded-lg transition-all  duration-500 cursor-pointer hover:dark:bg-[#3F444E] hover:bg-[#EDF2F7] ${
                  isActive ? "dark:bg-[#3F444E] bg-[#EDF2F7]" : ""
                }`
              }
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
            onClick={()=>setIsOpen(false)}
              className={({ isActive, isPending }) =>
                `   px-3 py-2 w-full rounded-lg transition-all  duration-500 cursor-pointer hover:dark:bg-[#3F444E] hover:bg-[#EDF2F7] ${
                  isActive ? "dark:bg-[#3F444E] bg-[#EDF2F7]" : ""
                }`
              }
              to="volunteering"
            >
              Volunteering
            </NavLink>
        </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
