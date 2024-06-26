import { useState, useEffect } from "react";

const Education = () => {
  const [hightSchoolAccordion, setHightSchoolAccordion] = useState(false);
  const [bachelorAccordion, setBachelorAccordion] = useState(false);
  const [masterAccordion, setMasterAccordion] = useState(false);

  useEffect(() => {
    setMasterAccordion(true);
  }, []);
  const handleClick = (degree) => {
    if (degree === "master") {
      setBachelorAccordion(false);
      setHightSchoolAccordion(false);
      setMasterAccordion(true);
    }
    if (degree === "bachelor") {
      setMasterAccordion(false);
      setHightSchoolAccordion(false);
      setBachelorAccordion(true);
    }
    if (degree === "highSchool") {
      setBachelorAccordion(false);
      setMasterAccordion(false);
      setHightSchoolAccordion(true);
    }
  };
  return (
    <div className=" pb-6 order-b  border-[#E2E8F0] dark:border-[#ffffff29] ">
      <h2 className="font-black text-xl border-b pb-3 border-[#E2E8F0] dark:border-[#ffffff29]">
        🎓 Education
      </h2>
      <ul className="flex flex-col mt-7">
        <li className="dark:bg-[#ffffff14] px-3 py-[2.5px] rounded-md dark:hover:bg-[#ffffff30]  bg-[#0000000a] transition-colors duration-500 my-2 shadow-lg">
          <h2
            onClick={() => {
              handleClick("master");
            }}
            className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer dark:hover:b-[#3F444E]"
          >
            <p>
              <span className="font-bold">2021 - 2023: </span>
              Master Degree in Entrepreneurship and Project Management
            </p>
            <svg
              className={` ${
                masterAccordion ? " rotate-180" : " rotate-0"
              } fill-current text-darkGreen  w-6 h-6 shrink-0  transition-transform duration-500`}
              viewBox="0 0 20 20"
            >
              <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
            </svg>
          </h2>
          <div
            className={`${
              masterAccordion ? "max-h-96" : "max-h-0"
            } mb-4 border-l-2 border-darkGreen overflow-hidden duration-500 transition-all`}
          >
            <p className="p-3 pb-3 opacity-80 overflow-hidden font-medium">
              Throughout this dynamic program, I specialized in{" "}
              <span className=" text-darkGreen font-semibold underline">
                agile methodologies
              </span>{" "}
              and the software development lifecycle, leading teams to develop
              and launch innovative tech products. I gained hands-on experience
              with Scrum and Kanban, managing projects from ideation through
              deployment.
            </p>
          </div>
        </li>
        <li className="dark:bg-[#ffffff14] px-3 py-[2.5px] rounded-md dark:hover:bg-[#ffffff30] hover:bg-[#0000000a]  transition-colors duration-500 my-2 shadow-lg">
          <h2
            onClick={() => {
              handleClick("bachelor");
            }}
            className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
          >
            <p>
              <span className="font-bold">2018 - 2021: </span>
              Bachelor Degree in Computer Science & Software Engineering
            </p>
            <svg
              className={` ${
                bachelorAccordion ? " rotate-180" : " rotate-0"
              } fill-current text-darkGreen  w-6 h-6 shrink-0  transition-transform duration-500`}
              viewBox="0 0 20 20"
            >
              <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
            </svg>
          </h2>
          <div
            className={`${
              bachelorAccordion ? "max-h-96" : "max-h-0"
            }  mb-4 border-l-2  border-darkGreen overflow-hidden  duration-500 transition-all`}
          >
            <p className="p-3 pb-3 opacity-80 overflow-hidden font-medium">
              I actively engaged in coursework, online modules, and
              collaborative projects, mastering programming languages,
              algorithms, and system design. This relentless pursuit of
              knowledge and practical experience prepared me to adapt quickly to
              new technologies and excel in the fast-evolving tech industry.
            </p>
          </div>
        </li>
        <li className="dark:bg-[#ffffff14] px-3 py-[2.5px] rounded-md dark:hover:bg-[#ffffff30] hover:bg-[#0000000a] transition-colors duration-500 my-2 shadow-lg">
          <h2
            onClick={() => {
              handleClick("highSchool");
            }}
            className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
          >
            <p>
              <span className="font-bold">2015 - 2018: </span>
              High School Diploma in Mathematics
            </p>
            <svg
              className={` ${
                hightSchoolAccordion ? " rotate-180" : " rotate-0"
              } fill-current text-darkGreen w-6 h-6 shrink-0  transition-transform duration-500`}
              viewBox="0 0 20 20"
            >
              <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
            </svg>
          </h2>
          <div
            className={`${
              hightSchoolAccordion ? "max-h-96" : "max-h-0"
            }  mb-4 border-l-2  border-darkGreen overflow-hidden  duration-500 transition-all`}
          >
            <p className="p-3 pb-3 opacity-80 overflow-hidden font-medium">
              Developed strong analytical and problem-solving skills through
              rigorous coursework in advanced mathematics.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Education;
