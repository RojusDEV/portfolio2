const SKILLS = [
  {
    name: "Frontend development",
    technologies: [
      "React (TypeScript)",
      "Next.js",
      "Vite",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "SASS",
    ],
  },
  {
    name: "Backend development",
    technologies: ["Node.js", "Express.js", "Java", "Spring Boot"],
  },
  {
    name: "Databases",
    technologies: ["Oracle SQL", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    name: "DevOps",
    technologies: ["Docker", "Git"],
  },
  {
    name: "Tools & technologies",
    technologies: ["Git", "NPM / PNPM", "VS Code", "IntelliJ IDEA"],
  },
  {
    name: "Other skills",
    technologies: ["Agile methodologies"],
  },
];

const Skills = () => {
  return (
    <section
      className="font-archivo mx-auto max-w-7xl scroll-mt-[5vh] px-5 md:mt-15.75 md:px-10"
      id="skills"
    >
      <div className="grid gap-3 pt-32 pb-6">
        <div className="border-border grid gap-2 border-b-2 pb-6 lg:border-none">
          <span className="text-eden text-sm font-extrabold uppercase">
            02 / Skills
          </span>
          <h2 className="text-ink text-3xl font-extrabold uppercase">
            What I work with
          </h2>
        </div>
        <div className="gap-2 lg:grid lg:grid-cols-3">
          {SKILLS.map(({ name, technologies }, index) => (
            <div className="border-border lg:border-border border-b-2 py-6 lg:border-2 lg:p-6" key={index}>
              <span className="text-ink font-extrabold uppercase">{name}</span>
              <ul className="mt-3">
                {technologies.map((tech) => (
                  <li className="text-ink" key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
