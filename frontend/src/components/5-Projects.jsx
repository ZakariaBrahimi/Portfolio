import { Link } from "react-router-dom";

const projects = [
  {
    name: "Tayssir POS Software ",
    githubLink: "https://github.com/ZakariaBrahimi/TayssirSoftware-Electron-App",
    livePreview: null,
    description: "",
    technologies: ["Electron js", "React", "Sqlite", "Sequelize ORM"],
    screenshots: [],
    bgColor: "#881337",
  },
  {
    name: "Btrahimi Store",
    githubLink: "https://github.com/ZakariaBrahimi/brahimi-store",
    livePreview: "https://www.brahimi.store/",
    description:
      "Algeriann elegant and modern e-commerce platform built with React.js and powered by Sanity as the headless CMS. This project aims to provide a seamless and delightful shopping experience for users, with a focus on a clean and intuitive user interface.",
    technologies: ["React", "Sanity", "Tailwind Css", "Figma"],
    screenshots: [],
    bgColor: "#0F766E",
  },
  {
    name: "SenaResearch Platform",
    githubLink: "https://github.com/ZakariaBrahimi/SenaResearch",
    livePreview: "senaresearch-dz.com/",
    description:
      "the platform designed to serve as an intermediary between students and university professors across all academic disciplines. The mission is to deliver top-notch educational services, facilitating students in successfully navigating their academic endeavors. In this project, I managed a diverse development team consisting of UI/UX designers, graphic designers, and marketing members. Additionally, I served as the Scrum Master, facilitating effective communication between the development team and the business owners. Furthermore, I actively contributed as a full-stack developer within the team.",
    technologies: [
      "Agile Project Management",
      "React",
      "Django rest Framework",
      "Cpanel",
      "Business Development",
    ],
    screenshots: [],
    bgColor: "#0369A1",
  },
  {
    name: "Hashnode Clone ",
    githubLink: "https://github.com/ZakariaBrahimi/Hashnode-Clone",
    livePreview: "https://hashnode-clone-one.vercel.app/",
    description:
      "Created a Hashnode clone from scratch, leveraging Django and React to develop a robust and user-friendly platform. Implemented key features such as user authentication, blog post creation, commenting, and liking functionality. Utilized RESTful APIs for seamless communication between the frontend and backend. Designed with a responsive layout to ensure optimal user experience across devices. This project showcases my proficiency in full-stack web development and demonstrates my ability to bring complex ideas to life.",
    technologies: [
      "Dajngo",
      "React",
      "Tailwindcss",
      "PostgreSQL",
      "Responsive Design",
    ],
    screenshots: [],
    bgColor: "#5B2180",
    markDownContent: ''
  },
];
const Projects = () => {
  return (
    <div className="animate-fade-up text-[#ffffffeb]">
      <header className="flex flex-col gap-4 ">
        <div className="flex gap-3 items-center">
          <h1 className=" text-4xl font-black">Showcase </h1>
          <span className=" font-bold text-sm bg-[#14b8a629] rounded-lg px-2 py-1 text-[#14b8a6]">
            {projects.length} Projects
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
        {projects.map((project, index) => (
          <li key={index} className="flex flex-col gap-3">
            <span className=" text-xs">June 01, 2024</span>
            <h3 className="font-black text-xl"> {project.name} </h3>
            <div className=" ">
              <div
                style={{ backgroundColor: project.bgColor }}
                className={` w-full h-96 h- rounded-lg font-black text-4xl flex items-center justify-center`}
              >
                {" "}
                {project.name}
              </div>
              {/* <img className=" w-full max-h-96 h- rounded-lg" src="https://www.rofazayn.com/static/images/work/cover-lihlih.png" alt="" /> */}
            </div>
            <div className="flex flex-wrap gap-3 items-center font-semibold">
              {project.technologies.map((technology, index) => (
                <span
                  key={index}
                  className=" font-bold text-sm bg-[#14b8a629] rounded-lg px-2 py-1 text-[#14b8a6]"
                >
                  {technology}
                </span>
              ))}
            </div>
            <p>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-5">
              {/* <Link className="flex gap-3 items-center font-bold text-sm bg-[#ffffff14] hover:bg-[#ffffff29] transition-all duration-500 w-fit py-2 px-3 rounded-md" to={`/project/${project.name.replace(/\s+/g, '')}`} state={{projectData: project}}> */}
              <Link
                to={project.githubLink}
                className="flex gap-3 items-center font-bold text-sm bg-[#ffffff14] hover:bg-[#ffffff29] transition-all duration-500 w-fit py-2 px-3 rounded-md"
              >
                Continue Reading on GitHub
                {/* <svg
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
              </svg> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>
              {project.livePreview && 
              <Link
                to={project.livePreview}
                className="flex gap-2 items-center font-bold text-sm bg-[#ffffff14] hover:bg-[#ffffff29] transition-all duration-500 w-fit py-2 px-3 rounded-md"
              >
                Live Demo
                {/* <svg
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
              </svg> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <line x1="6" x2="6" y1="4" y2="20" />
                  <polygon points="10,4 20,12 10,20" />
                </svg>
              </Link>
              }
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Projects;
