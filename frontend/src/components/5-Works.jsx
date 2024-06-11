import { Link } from "react-router-dom";

const Works = () => {
  return (
    <div className="md:w-6/12 mx-auto text-[#ffffffeb]">
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
        <li className="flex flex-col gap-3">
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
        <li className="flex flex-col gap-3">
          <span className=" text-xs">June 01, 2024</span>
          <h3 className="font-black text-xl">
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
        <li className="flex flex-col gap-3 border-b border-[#ffffff29] pb-7">
          <span className=" text-xs">June 01, 2024</span>
          <h3 className="font-black text-xl">
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
        <li className="flex flex-col gap-3 border-b border-[#ffffff29] pb-7">
          <span className=" text-xs">June 01, 2024</span>
          <h3 className="font-black text-xl">
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
        <li className="flex flex-col gap-3 border-b border-[#ffffff29] pb-7">
          <span className=" text-xs">June 01, 2024</span>
          <h3 className="font-black text-xl">
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
        <li className="flex flex-col gap-3 border-b border-[#ffffff29] pb-7">
          <span className=" text-xs">June 01, 2024</span>
          <h3 className="font-black text-xl">
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
        <li className="flex flex-col gap-3 border-b border-[#ffffff29] pb-7">
          <span className=" text-xs">June 01, 2024</span>
          <h3 className="font-black text-xl">
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
      </ol>
    </div>
  );
};

export default Works;
