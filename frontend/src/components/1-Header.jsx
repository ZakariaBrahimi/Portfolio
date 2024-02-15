import {  useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
//   TODO: When clicked on any point in the menu, we should close the modal window
//   const popUpRef = useRef(null)
  return (
    <header className="flex justify-between px- md:px-0 py-4 ">
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-full hover:icon-hover p-3 border-borderColor border-2 bg-bgHeader md:hidden"
      >
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
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
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
      <div className="hidden md:flex"></div>
      <nav className="border-2 animate-fade bg-bgHeader hidden md:flex rounded-full px-4 text-white opacity-90 border-borderColor">
        <ul className="flex items-center gap-6 font-semibold">
          <li className="">
            <a
              className="hover:text-darkGreen transition-all text-sm hover:text-base duration-500 "
              href="#"
            >
              About
            </a>
          </li>
          <li className="">
            <a
              className="hover:text-darkGreen transition-all text-sm hover:text-base duration-500  "
              href="#"
            >
              Education
            </a>
          </li>
          <li className="">
            <a
              className="hover:text-darkGreen transition-all text-sm hover:text-base duration-500  "
              href="#"
            >
              Projects
            </a>
          </li>
          <li className="">
            <a
              className="hover:text-darkGreen transition-all text-sm hover:text-base duration-500  "
              href="#"
            >
              Speaking
            </a>
          </li>
          <li className="">
            <a
              className="hover:text-darkGreen transition-all text-sm hover:text-base duration-500  "
              href="#"
            >
              My Skills
            </a>
          </li>
          <li className="">
            <a
              className="hover:text-darkGreen transition-all text-sm hover:text-base duration-500  "
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <button className="rounded-full p-3 border-borderColor border-2 bg-bgHeader ">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"
        >
          <path
            d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
    </header>
  );
};
export default Header;
