const works = [
  {
    companyName: "SenaResearch",
    role: "Fullstack developer & Product Manager",
    Description: "Sena Research is",
    period: "June 01, 2024",
    link: "sena-research-dz.com",
    tags: [],
  },
  {
    companyName: "Moustachir",
    role: "Freelance Fullstack developer",
    Description: "Moustachir is ....",
    period: "December, 2022 - ",
    link: "moustachir.com",
    tags: ["Education", ],
  },
  {
    companyName: "Ma Nanny Partissien",
    role: "Fullstack developer",
    Description: "Moustachir is ....",
    period: "June 01, 2024",
    link: "moustachir.com",
    tags: [],
  },
  {
    companyName: "Ma Nanny Partissien",
    role: "Fullstack developer",
    Description: "Moustachir is ....",
    period: "June 01, 2024",
    link: "moustachir.com",
    tags: [],
  },
];

const Main = () => {
  return (
    <div className="">
      <h2 className="font-black text-xl border-b pb-3 border-[#E2E8F0] dark:border-[#ffffff29]">
        🌍 Work Experience
      </h2>
      {/* <div  className="" aria-label="Work experience" > */}
      <ol id="experience" className=" pt-12">
        {works.map((work) => (
          <li key={work.role} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header
                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                aria-label={work.period}
              >
                {work?.period}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                      href="https://scout.camd.northeastern.edu/"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Developer at Scout Studio (opens in a new tab)"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span className=" font-bold">
                        {work?.role} {' '} · {' '}
                        <span className="inline-block">
                          {work?.companyName}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Collaborated with other student designers and engineers on
                  pro-bono projects to create new brands, design systems, and
                  websites for organizations in the community.
                </p>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  {work?.tags?.map((tag, index)=>(
                    <li key={index} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        {tag}
                      </div>
                    </li>
                  )
                  )}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
      {/* <div className="bg-[#ffffff0f] mb-12 rounded-xl text-center "> */}
        <div className="bg-[#ffffff0f] mb-12 rounded-xl text-cente    flex items-center justify-center gap-3 py-4 px-5  ">
          <div>

          <svg viewBox="0 0 24 24" focusable="false" className=" w-4 h-4">
            <g
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="square"
              strokeWidth="2"
            >
              <circle
                cx="12"
                cy="12"
                fill="none"
                r="11"
                stroke="currentColor"
              ></circle>
              <line fill="none" x1="11.959" x2="11.959" y1="11" y2="17"></line>
              <circle cx="11.959" cy="7" r="1" stroke="none"></circle>
            </g>
          </svg>
          </div>
          <p>
            <span>Currently available for work, download my Resume by </span>
            
            <a
              target="_blank"
              rel="noopener noreferrer"
              className=" md:inline-block underline font-semibold hover:text-darkGreen transition-colors"
              href="/static/lucas-r-zain-resume.pdf"
              download=""
            >
              Clicking here!
            </a>

          </p>
        </div>
        {/* <a
            target="_blank"
            rel="noopener noreferrer"
            className=" md:hidden underline font-semibold hover:text-darkGreen transition-colors"
            href="/static/lucas-r-zain-resume.pdf"
            download=""
          >
            Clicking here!
          </a> */}

      {/* </div> */}

      {/* </div> */}
    </div>
  );
};

export default Main;
