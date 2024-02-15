import Lottie from "lottie-react";
import heroAnimation from "../../public/heroAnimation.json";
import myPicture from "../assets/myPic3.jpg";
import verifiedAnimation from '../assets/verifiedAnimation1.json'

const Hero = () => {
  return (
    <section className=" text-white my-12 flex gap-16 py-10">
      <div className="w-full flex flex-col gap-6 bg-sky-60">
        <div className="flex gap-6 items-end">
          <img
            className=" h-32 w-32 border-4 shadow-md shadow-darkGreen border-darkGreen rounded-full"
            src={myPicture}
            alt=""
          />
          <Lottie
            className="w-12 h-12 bg-green-30"
            animationData={verifiedAnimation}
            loop={false}
          />
        </div>
        <h1 className=" font-bold text-4xl leading-[3.3rem] text-title">
          Software Developer | Bridging Ideas into Reality.
        </h1>
        <p className="opacity- leading-7 text-base text-subtitle">
          👋 Solution-oriented and problem solver with 2 years of experience
          building and maintaining software. Enthusiastic about Agile management
          and collaborating with teams to deliver impactful products. Currently
          looking for opportunities as a{" "}
          <span className=" text-darkGreen font-semibold underline">
            Django & React Developer{" "}
          </span>{" "}
          with a passionate and ambitious team. Let's tackle major problems
          together!{" "}
          <p className="font-semibold mt-3">
            #SoftwareDevelopment #AgileEnthusiast #TeamPlayer
          </p>
        </p>
        {/* SOCIAL ACCOUNTS */}
        <div className="flex gap-16 items-center">
            <div className="flex items-center justify-start gap-6 text-subtitle">
            <button
                type="button"
                className="hover:opacity-40 transition-opacity duration-500"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 hover:h-6 hover:w-6 transition-all "
                fill="currentColor"
                viewBox="0 0 24 24"
                >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
            </button>
            <button
                type="button"
                className="hover:opacity-40 transition-opacity duration-500"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 hover:h-6 hover:w-6 transition-all"
                fill="currentColor"
                viewBox="0 0 24 24"
                >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            </button>
            <button
                type="button"
                className="hover:opacity-40 transition-opacity duration-500 "
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 hover:h-6 hover:w-6 transition-all"
                fill="currentColor"
                viewBox="0 0 24 24"
                >
                {/* <title>LeetCode</title> */}
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            </button>
            <button
                type="button"
                className="hover:opacity-40 transition-opacity duration-500"
            >
                <svg
                fill="currentColor"
                className="w-5 h-5 hover:h-6 hover:w-6 transition-all"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                >
                <title>LeetCode</title>
                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
                </svg>
            </button>
            </div>
            {/* <button className="border-2 shadow-lg font-medium hover:border-darkGreen transition-all duration-500 hover:text-[1.008rem] border-borderColor rounded-full px-4 py-2">
                <span>Download Resume</span>
            </button> */}

        </div>
      </div>
      <div className=" bg-red-40 hidden xl:flex justify-end items-center">
        <Lottie
          className="w-[25rem] bg-green-00 -mr-10 mt-24"
          animationData={heroAnimation}
          loop={true}
        />
      </div>
    </section>
  );
};

export default Hero;
