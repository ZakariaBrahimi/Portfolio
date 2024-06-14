import myResume from '../assets/ResumeV2.pdf'

const works = [
  {
    companyName: "SenaResearch",
    role: "Fullstack developer & Product Manager",
    description:
      "Sena Research is a platform designed to serve as an intermediary between students and university professors across all academic disciplines. The platform's mission is to deliver top-notch educational services, facilitating students in successfully navigating their academic endeavors.",
    period: "Jan, 2024 - Present",
    link: "https://senaresearch-dz.com",
    tags: [
      "Educational Services",
      "Academic Intermediary",
      "Student Support",
      "University Collaboration",
    ],
  },
  {
    companyName: "Moustachir",
    role: "Freelance Fullstack developer",
    description: "Moustachir is an online consulting platform that offers you the opportunity to benefit from professional consultations by the best Algerian and international specialists in various fields ",
    period: "Dec, 2022 - Feb 2024",
    link: "https://moustachir.dz/en/",
    tags: ["Professional Consultations", 'Remote Advisory Services', 'Client-Centered Approach'],
  },
  {
    companyName: "Ma Nanny Parisienne",
    role: "Fullstack Developer",
    description: "Top of the range babysitting and childcare service available 24/7",
    period: "Nov, 2023 - Apr 2024",
    link: "https://www.manannyparisienne.com/en.html",
    tags: ['High-End Childcare', 'Hotel Collaboration'],
  },
  {
    companyName: "The Sparks Foundation",
    role: "Frontend Developer Intern",
    description: "The sparks foundation is working to bring parity in education, making sure children have equal opportunity at success, irrespective of the financial background.",
    period: "Jan, 2022 - Mar 2022",
    link: "https://www.thesparksfoundationsingapore.org/",
    tags: [
      'Skill Development',
      'Community Engagement',
      'Student Mentorship'
    ],
  },
  {
    companyName: "Alpha Center",
    role: "Web Development Inspector",
    description: "taught almost 42 learners how the internet works and Practiced HTML, CSS, Git, Tailwind css, and Javascript - Covered advanced frontend skills such as flexbox, grid, asynchronous javascript, and a little bit of reactjs framework - built together several web apps such as todo app, URL shortener, landing pages, and many others from frontendmentor.io",
    period: "May, 2021 - Mar, 2022",
    link: "https://web.facebook.com/p/Alpha-Center-100069073866473/?_rdc=1&_rdr",
    tags: [
      'Youth Development',
      'Social Services',
      'Skill Training'
    ],
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
          <li key={work.role} className="mb-12 ">
            <div className="group  relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block dark:lg:group-hover:bg-slate-800/50 lg:group-hover:bg-[#0000000a] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header
                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                aria-label={work.period}
              >
                {work?.period}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-20">
                  <div>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight dark:text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                      href={work.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Developer at Scout Studio (opens in a new tab)"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span className=" font-bold">
                        {work?.role} ·{" "}
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
                  {work?.description}
                </p>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  {work?.tags?.map((tag, index) => (
                    <li key={index} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full dark:bg-teal-500/10 bg-[#14b8a629] text-[#14b8a6] px-3 py-1 text-xs font-medium leading-5 font-semibold dark:text-teal-300 ">
                        {tag}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
      {/* <div className="bg-[#ffffff0f] mb-12 rounded-xl text-center "> */}
      <div className="dark:bg-[#ffffff0f] bg-[#EDF2F7] mb-12 rounded-xl text-cente    flex items-center justify-center gap-3 py-4 px-5  ">
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

          <a href={myResume}
            target="_blank"
            rel="noopener noreferrer"
            className=" md:inline-block  underline font-semibold hover:text-darkGreen transition-colors"
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
}

export default Main;
