// function MySkills() {
//   const skills = [
//     "HTML",
//     "CSS",
//     "SCSS",
//     "JavaScript",
//     "Tailwind css",
//     "React",
//     "Python",
//     "Django",
//     "Django rest framework",
//     "PostgreSQL",
//     "Docker",
//     "Cpanel",
//     "Agile Management",
//     "Git & Github",
//     "Data Structure",
//     "Algorithms",
//   ];

//   return (
//     <div>
//       <section className="mb-24 mt-8 grid grid-cols-4 justify-between items-start flex-wra gap-16 gap-y-24">
//         {/* Education */}
//         <div className=" col-span-2">
//           <div className="flex items-center gap-3 text-sky-500">
//             {/* <span className=" w-10 h-[2px] bg-sky-500"></span> */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
//               />
//             </svg>

//             <h3 className=" tracking-wider font-semibold text-xl">Education</h3>
//           </div>
//           <div className="flex flex-col gap-2 mt-6">
//             <p className=" font-semibold text-sky-400">
//               2021 <span className=" font-extrabold">-</span> 2023{" "}
//               <span className=" font-extrabold">.</span> Kolea
//             </p>
//             <p className=" font-semibold text-xl">
//               Master of Product Management and Entrepreneurship
//             </p>
//             <p className=" opacity-45 font-medium">
//               Agile Methodology, Scrum, Marketing, Risk Management{" "}
//             </p>
//           </div>
//           <div className="flex flex-col gap-2 mt-6">
//             <p className=" font-semibold text-sky-400">
//               2018 <span className=" font-extrabold">-</span> 2021{" "}
//               <span className=" font-extrabold">.</span> Batna
//             </p>
//             <p className=" font-semibold text-xl">
//               Bachelor of Software Engineering
//             </p>
//             <p className=" opacity-45 font-medium">
//               Fullstack web development, Network & Database fundamentals, Data
//               Structure and Algorithms{" "}
//             </p>
//           </div>
//         </div>
//         {/* Volunteering Work */}
//         <div className=" col-span-2 ml-20">
//           <div className="flex items-center gap-3 text-orange-500">
//             {/* <span className=" w-10 h-[2px] bg-orange-500"></span> */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
//               />
//             </svg>

//             <h3 className=" tracking-wider font-semibold text-xl">
//               Volunteering Work
//             </h3>
//           </div>
//           <div className="flex flex-col gap-2 mt-6">
//             <p className=" font-semibold text-orange-400">
//               2021 <span className=" font-extrabold">-</span> 2023{" "}
//               <span className=" font-extrabold">.</span> Kolea
//             </p>
//             <p className=" font-semibold text-xl">
//                 Community Lead & Founder - Google Developer Student Club
//             </p>
//             <p className=" opacity-45 font-medium">
//               Agile Methodology, Scrum, Marketing, Risk Management{" "}
//             </p>
//           </div>
//           <div className="flex flex-col gap-2 mt-6">
//             <p className=" font-semibold text-orange-400">
//               2018 <span className=" font-extrabold">-</span> 2021{" "}
//               <span className=" font-extrabold">.</span> Batna
//             </p>
//             <p className=" font-semibold text-xl">
//               President - Future Managers Club (ENSM)
//             </p>
//             <p className=" opacity-45 font-medium">
//               Agile Methodology, Scrum, Marketing, Risk Management{" "}
//             </p>
//           </div>
//           <div className="flex flex-col gap-2 mt-6">
//             <p className=" font-semibold text-orange-400">
//               2018 <span className=" font-extrabold">-</span> 2021{" "}
//               <span className=" font-extrabold">.</span> Batna
//             </p>
//             <p className=" font-semibold text-xl">
//               Lead Organizer - TEDx Batna 2 University
//             </p>
//             <p className=" opacity-45 font-medium">
//               Agile Methodology, Scrum, Marketing, Risk Management{" "}
//             </p>
//           </div>
//         </div>
//         {/* Work history */}
//         <div className=" col-span-4 ">
//           <div className="flex justify-center items-center gap-3 text-green-500 mb-5">
//             {/* <span className=" w-10 h-[2px] bg-green-500"></span> */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
//               />
//             </svg>

//             <h3 className=" tracking-wider font-semibold text-xl">
//               Work History
//             </h3>
//             {/* <span className=" w-10 h-[2px] bg-green-500"></span> */}
//           </div>
//           <div className="grid grid-cols-2 justify-between gap-5">
//             <div className="flex flex-col gap-2 mt-6 col-span-1">
//               <p className=" font-semibold text-green-500">
//                 Dec, 2022 <span className=" font-extrabold">-</span> Sept, 2023{" "}
//                 <span className=" font-extrabold">.</span> Ben Aknon
//               </p>
//               <p className=" font-semibold text-xl">
//                 <span>Fullstack developer - </span> Moustachir (Remote)
//               </p>
//               <p className=" opacity-45 font-medium">
//                 Moustachir is an online consulting platform that offers you the
//                 opportunity to benefit from professional consultations by the
//                 best Algerian and international specialists in various fields{" "}
//               </p>
//             </div>
//             <div className="flex flex-col gap-2 mt-6">
//               <p className=" font-semibold text-green-500">
//                 2018 <span className=" font-extrabold">-</span> 2021{" "}
//                 <span className=" font-extrabold">.</span> ALger Center
//               </p>
//               <p className=" font-semibold text-xl">
//                 Product Manager & Fullstack developer - Sena Research
//               </p>
//               <p className=" opacity-45 font-medium">
//                 It's an educational platform connecting university students with
//                 top-notch professors, doctors, and professionals for
//                 high-quality assistance, quickly. Acting as a bridge between
//                 students and educators{" "}
//               </p>
//             </div>
//             <div className="flex flex-col gap-2 mt-6">
//               <p className=" font-semibold text-green-500">
//                 May, 2021 <span className=" font-extrabold">-</span> Mar, 2022{" "}
//                 <span className=" font-extrabold">.</span> Batna
//               </p>
//               <p className=" font-semibold text-xl">
//                 <span>Web Development Instructor - </span> Alpha Center
//               </p>
//               <p className=" opacity-45 font-medium">
//               Experienced in the fundamental principles of the internet and proficient in HTML, CSS, Git, Tailwind CSS, and JavaScript. Advanced frontend skills include mastery of Flexbox, Grid, Asynchronous JavaScript, and ReactJS framework. Developed and collaborated on multiple web applications, including a Todo app, URL shortener, landing page, and more.
//               </p>
//             </div>
//             <div className="flex flex-col gap-2 mt-6">
//               <p className=" font-semibold text-green-500">
//                 2018 <span className=" font-extrabold">-</span> 2021{" "}
//                 <span className=" font-extrabold">.</span> ALger Center
//               </p>
//               <p className=" font-semibold text-xl">
//                 Remote Internship - The Sparks Foundation
//               </p>
//               <p className=" opacity-45 font-medium">
//               - Created and tested applications for several clients.
//               - Created guides to document the processes of completeing the given tasks
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Tools I use */}
//       <div className="mb-24 mt-8">
//         <h1 className="text-title text-3xl font-semibold mb-12 flex gap-3 items-center justify-center">
//           <span>Tech Stack</span>
//         </h1>
//         <ul className="flex flex-wrap gap-x-3 gap-y-6 items-center justify-center">
//           {skills.map((skill, index) => (
//             <li
//               className="border-2 hover:border-darkGreen hover:cursor-pointer transition-all duration-500 hover:text-[1.02rem] border-borderColor px-5 p-1 font-semibold rounded-lg"
//               key={index}
//             >
//               {skill}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
// export default MySkills;

function MySkills() {
    const skills = ['HTML', 'CSS', 'SCSS', 'JavaScript', 'Tailwind css', 'React', 'Python', 'Django', 'Django rest framework', 'PostgreSQL', 'Docker', 'Cpanel', 'Agile Management', 'Git & Github', 'Data Structure', 'Algorithms']
  return (
    <section className="mb-24 mt-8">
      <h1 className="text-title text-3xl font-semibold mb-12 flex gap-3 items-center justify-center">
        <span>Tech Skills</span>
      </h1>
        <ul className="flex flex-wrap gap-x-3 gap-y-6 items-center justify-center">
            {
                skills.map((skill, index)=>(
                    <li className="border-2 hover:border-green-500 hover:cursor-pointer transition-all duration-500 hover:text-[1.02rem] border-borderColor px-5 p-1 font-semibold rounded-lg" key={index}>{skill}</li>
                ))
            }
        </ul>
    </section>
  );
}

export default MySkills;
