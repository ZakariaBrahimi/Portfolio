import project1 from "../assets/project-1.jpg";

const Main = () => {
  return (
    <main className="flex my-24 gap-12 md:flex-row flex-col">
      <div className=" flex flex-wrap justify-center md:justify-normal md:flex-col items-center gap-6 ">
        <button
          className="bg-borderColor border-darkGreen border transition duration-300 text-white opacity-100 text-center w-36 py-2 rounded-lg font-semibold"
          type="button"
        >
          All Projects
        </button>
        <button
          className="bg-borderColor opacity-50 transition duration-300 hover:opacity-100 text-center py-2 w-36 rounded-lg font-semibold"
          type="button"
        >
          HTML & CSS
        </button>
        <button
          className="bg-borderColor opacity-50 transition duration-300 hover:opacity-100 text-center py-2 w-36 rounded-lg font-semibold "
          type="button"
        >
          Javascript
        </button>
        <button
          className="bg-borderColor opacity-50 transition-transform hover:opacity-100 text-center w-36 py-2 rounded-lg font-semibold"
          type="button"
        >
          React & Django
        </button>
      </div>

      <div className="grid grid-cols-1 mx-12 sm:mx-0 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-12 gap-x-6">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="flex hover:border-darkGreen hover:border rounded-lg flex-col hover:cursor-pointer hover:rotate-1 duration-500 hover:scale-105 transition-transform">
            <div className="rounded-lg">
              <img className="h-full w-full rounded-lg" src={project1} alt="" />
            </div>
            <div className=" flex flex-col gap-2 p-3 cardBGColor rounded-md">
              <h2 className="font-semibold text-base text-title">
                Landing Page 1
              </h2>
              <p className=" text-subtitle text-sm ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
                vel beatae totam quam dolores! Harum!
              </p>
              <div className="flex justify-between mt-3 items-center">
                <div className="flex gap-3">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                      />
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
                </div>
                <button
                  className=" text-darkGreen font-semibold flex gap-2 items-center justify-end"
                  type="button"
                >
                  <span>more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 -mb-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
