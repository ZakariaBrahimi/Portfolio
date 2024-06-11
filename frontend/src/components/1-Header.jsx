import verifiedAnimation from "../assets/verifiedAnimation1.json";
import Lottie from "lottie-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  //   TODO: When clicked on any point in the menu, we should close the modal window
  //   const popUpRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className=" flex justify-between py-5 text-[#1A202C] mb-8">
      <nav className=" animate-fade hidden md:flex   dark:text-white opacity-90 ">
        <Link
          to={"/"}
          className=" flex items-center mr-8 gap-2 text-darkGree cursor-pointer text-xl font-extrabol font-black"
        >
          <Lottie
            className="w-9 h-9   bg-green-30"
            animationData={verifiedAnimation}
            loop={true}
          />
          {"Portfolio."}
        </Link>
        <ul className="flex items-center gap-3 font-bold">
          <li className="dark:bg-[#3F444E] bg-[#EDF2F7] px-3 py-1 rounded-lg transition-all  duration-500 cursor-pointer">
            <Link className=" " to="/">
              Home
            </Link>
          </li>
          <li className="dark:hover:bg-[#3F444E] hover:bg-[#EDF2F7] px-3 py-1 rounded-lg transition-all  duration-500 cursor-pointer">
            <a
              className=" opacity-80 hover:opacity-100 transition-opacity"
              href="#education"
            >
              Education
            </a>
          </li>
          <li className="dark:hover:bg-[#3F444E] hover:bg-[#EDF2F7] px-3 py-1 rounded-lg transition-all  duration-500 cursor-pointer">
            <Link
              className="opacity-80 hover:opacity-100 transition-opacity "
              to="/works"
            >
              Projects
            </Link>
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
      <button className="rounded-full p-2 dark:border-borderColor transition-colors duration-500 hover:bg[] border dark:bg-bgHeader dark:hover:bg-[#3F444E] bg-transparent hover:bg-[#EDF2F7]">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="hidde w-4 h-4 sm:h-5 sm:w-5 dark:fill-zinc-700 dark:stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"
        >
          <path
            d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
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
            ? "absolute inset-0 bg-[#050505] z-40 md:hidden outline-none"
            : "hidden"
        }
      >
        <nav className="z-50 animate-jump-in animate-duration-600 outline-none border rounded-xl p-4 text-white w-8/12 mx-auto mt-6 bg-primary border-borderColor">
          <div className="w-full flex justify-between items-center mb-5 opacity-80 font-normal">
            <p className="">Navigation</p>
            <button onClick={() => setIsOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col font-medium  opacity-95">
            <li className="border-b  border-borderColor py-3 hover">
              <a href="#">About</a>
            </li>
            <li className="border-b border-borderColor py-3">
              <a href="#">Articles</a>
            </li>
            <li className="border-b border-borderColor py-3">
              <a href="#">Projects</a>
            </li>
            <li className="border-b border-borderColor py-3">
              <a href="#">Speaking</a>
            </li>
            <li className="border-none py-3">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
