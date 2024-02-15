function MySkills() {
    const skills = ['HTML', 'CSS', 'SCSS', 'JavaScript', 'Tailwind css', 'React', 'Python', 'Django', 'Django rest framework', 'PostgreSQL', 'Docker', 'Cpanel', 'Agile Management', 'Git & Github', 'Data Structure', 'Algorithms']
  return (
    <section className="mb-24 mt-8">
      <h1 className="text-title text-3xl font-semibold mb-12 flex gap-3 items-center justify-center">
        <span>My Skills</span>
      </h1>
        <ul className="flex flex-wrap gap-x-3 gap-y-6 items-center justify-center">
            {
                skills.map((skill, index)=>(
                    <li className="border-2 hover:border-darkGreen hover:cursor-pointer transition-all duration-500 hover:text-[1.02rem] border-borderColor px-5 p-1 font-semibold rounded-lg" key={index}>{skill}</li>
                ))
            }
        </ul>
    </section>
  );
}

export default MySkills;
