import { Link } from "react-router-dom";



const projects = [
  {
    name: 'TayssirSoft ',
    githubLink: '',
    livePreview: '',
    description: '',
    technologies: [],
    screenshots: [],
  },
  {
    name: 'Btrahimi Store ',
    githubLink: 'https://github.com/ZakariaBrahimi/brahimi-store',
    livePreview: 'https://www.brahimi.store/',
    description: 'Algeriann elegant and modern e-commerce platform built with React.js and powered by Sanity as the headless CMS. This project aims to provide a seamless and delightful shopping experience for users, with a focus on a clean and intuitive user interface.',
    technologies: ['React', 'Sanity','Tailwind Css', 'Figma',  ],
    screenshots: [],
  },
  {
    name: 'SenaResearch ',
    githubLink: '',
    livePreview: '',
    description: "the platform designed to serve as an intermediary between students and university professors across all academic disciplines. The mission is to deliver top-notch educational services, facilitating students in successfully navigating their academic endeavors. In this project, I managed a diverse development team consisting of UI/UX designers, graphic designers, and marketing members. Additionally, I served as the Scrum Master, facilitating effective communication between the development team and the business owners. Furthermore, I actively contributed as a full-stack developer within the team.",
    technologies: ['Agile Project Management', 'React', 'Django rest Framework', 'Cpanel', 'Business Development'],
    screenshots: [],
  },
  {
    name: 'Hashnode Clone ',
    githubLink: '',
    livePreview: '',
    description: 'Created a Hashnode clone from scratch, leveraging Django and React to develop a robust and user-friendly platform. Implemented key features such as user authentication, blog post creation, commenting, and liking functionality. Utilized RESTful APIs for seamless communication between the frontend and backend. Designed with a responsive layout to ensure optimal user experience across devices. This project showcases my proficiency in full-stack web development and demonstrates my ability to bring complex ideas to life.',
    technologies: ['Dajngo', 'React', 'Tailwindcss', 'PostgreSQL', 'Responsive Design'],
    screenshots: [],
  },
  {
    name: 'Hashnode Clone ',
    githubLink: '',
    livePreview: '',
    description: '',
    technologies: [],
    screenshots: [],
  },
  {
    name: 'Hashnode Clone ',
    githubLink: '',
    livePreview: '',
    description: '',
    technologies: [],
    screenshots: [],
  },
]
const Projects = () => {
  return (
    <div className="animate-fade-up text-[#ffffffeb]">
      <header className="flex flex-col gap-4 ">
        <div className="flex gap-3 items-center">
          <h1 className=" text-4xl font-black">Showcase </h1>
          <span className=" font-bold text-sm bg-[#14b8a629] rounded-lg px-2 py-1 text-[#14b8a6]">
            10 Projects
          </span>
        </div>
        <p>
          Recently, I've ventured into showcasing my work online, blending
          passion with profession. It's a burgeoning collection that reflects my
          journey and growth in the digital realm. Feel free to use the search
          field below to discover projects that resonate with your interests or
          inspire your next big idea.
        </p>
        <input
          className=" bg-transparent border-subtitle border-2 px-2 py-2 rounded-xl opacity-85 mt-6 outline-none active:outline-[#14b8a6] active:border-none"
          type="text"
          placeholder="Search Works..."
        />
      </header>
      <ol className="py-16 flex flex-col gap-6">
        {projects.map((project, index)=>(

        <li key={index} className="flex flex-col gap-3">
          <span className=" text-xs">June 01, 2024</span>
          <h3 className="font-black text-xl"> cred
            Lihlih: Transforming Visa Procedures and Services
          </h3>
          <div className=" "> 
            <img className=" w-full max-h-96 h- rounded-lg" src="https://www.rofazayn.com/static/images/work/cover-lihlih.png" alt="" />

          </div>
          <div className="flex gap-3 items-center font-semibold">
            <span className=" font-bold text-sm bg-[#14b8a629] rounded-lg px-2 py-1 text-[#14b8a6]">
              Visa Procedures
            </span>
            <span className=" font-bold text-sm bg-[#14b8a629] rounded-lg px-2 py-1 text-[#14b8a6]">
              Global Services
            </span>
            <span className=" font-bold text-sm bg-[#14b8a629] rounded-lg px-2 py-1 text-[#14b8a6]">
              Innovation
            </span>
          </div>
          <p>Lihlih is set to revolutionize the visa application process, offering streamlined procedures for multiple countries and enabling agencies to leverage our services through paid subscriptions.</p>
          <Link className="flex gap-3 items-center font-bold text-sm bg-[#ffffff14] hover:bg-[#ffffff29] transition-all duration-500 w-fit py-2 px-3 rounded-md" to={''}>
            Continue Reading
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
              className=" w-4 h-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              ></path>
            </svg>
          </Link>
        </li>
        ))}
        
      </ol>
    </div>
  );
};

export default Projects;
