import { useRef, useState } from "react";

const Footer = () => {
  const emailRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    if (emailRef.current) {
      navigator.clipboard.writeText(emailRef.current.value);
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 1500);
    }
  };
  return (
    <footer className=" mt-14 pb-9">
      <div className="flex flex-col gap-3">
        <h2 className="font-black text-xl pb-3 border-b border-[#E2E8F0] dark:border-[#ffffff29] ">
          📣 Contact me
        </h2>
        <p className=" pb-8 pt-3">
          I’m looking for a chance to put my knowledge and skills to use with a
          great team, feel free to contact me if you think that I'm a great fit.
        </p>
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex gap-3 items-center dark:bg-[#ffffff14] font-extrabold px-3 py-2 rounded-md dark:hover:bg-[#3F444E] bg-[#EDF2F7] hover:bg-[#E2E8F0] transition-colors duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                />
              </svg>
              <span>Email me</span>
            </button>
            <input
              ref={emailRef}
              className="bg-transparent px-3 py-2 rounded-md dark:border-[#ffffff29] border outline-transparent outline-2 outline-offset-2 select-all cursor-pointer focus:outline-darkGreen  w-[20.3rem] "
              type="email"
              readOnly
              value={"zakaria.abdessamede.brahimi@gmail.com"}
            />
            <button
              onClick={handleClick}
              className="dark:bg-[#ffffff14] p-3 rounded-md dark:hover:bg-[#3F444E] bg-[#EDF2F7] hover:bg-[#E2E8F0] transition-all duration-500 hover: hover:outline-darkGreen"
            >
              {isClicked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 h-4 font-bold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-[#A0AEC0]">Or find me out on</p>
            <div className="flex gap-4 items-center ">
              <a
                className="dark:bg-[#ffffff14] p-3 rounded-md dark:hover:bg-[#3F444E] bg-[#EDF2F7] hover:bg-[#E2E8F0] transition-colors duration-500"
                aria-label="My Github"
                href="https://github.com/rofazayn"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 480 512"
                  aria-hidden="true"
                  focusable="false"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Github</title>
                  <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path>
                </svg>
              </a>
              <a
                className="dark:bg-[#ffffff14] p-3 rounded-md dark:hover:bg-[#3F444E] bg-[#EDF2F7] hover:bg-[#E2E8F0] transition-colors duration-500"
                aria-label="My Github"
                href="https://github.com/rofazayn"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" w-[1em] h-[1em] "
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>LinkedIn</title>
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a
                className="dark:bg-[#ffffff14] p-3 rounded-md dark:hover:bg-[#3F444E] bg-[#EDF2F7] hover:bg-[#E2E8F0] transition-colors duration-500"
                aria-label="My Github"
                href="https://github.com/rofazayn"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  fill="currentColor"
                  className="w-[1em] h-[1em]"
                  viewBox="0 0 24 24"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>LeetCode</title>
                  <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
                </svg>
              </a>
              <a
                className="dark:bg-[#ffffff14] p-3 rounded-md dark:hover:bg-[#3F444E] bg-[#EDF2F7] hover:bg-[#E2E8F0] transition-colors duration-500"
                aria-label="My Github"
                href="https://github.com/rofazayn"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[1em] h-[1em]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Instagram</title>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center font-bold mt-28 ">
        <p>Developed in Algeria with ♥️</p>
        <p className="hidden md:inline-block">© 2024 Lucas' Portfolio</p>
      </div>
    </footer>
  );
};

export default Footer;
