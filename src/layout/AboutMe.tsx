const EXPERIENCE = [
  {
    fieldTitle: "QA INTER / EDENRED",
    timespan: "March 2026 to Present",
    buttetPoints: [
      "QA process fundamentals: test planning, execution and results analysis",
      "JIRA and XRay for bug tracking and test management",
      "Manual testing against test plans to identify defects",
      "20+ test scenarios written, documented with clear reproduction steps",
      "10+ defects reported and tracked by severity and priority with developers",
      "Test reports with coverage and pass/fail metrics",
    ],
  },
  {
    fieldTitle: "SOFTWARE ENGINEERING / VILNIUS TECH",
    timespan: "2024 to Present",
    buttetPoints: [
      "Learning core computer science fundamentals and software engineering principles",
      "Building projects in multiple programming languages including Python, Java, and C++",
      "Studying data structures, algorithms, and software architecture patterns",
      "Gaining hands-on experience through practical lab work and academic projects",
    ],
  },
];

const AboutMe = () => {
  return (
    <section className="font-archivo mx-auto max-w-7xl px-5 md:mt-15.75 md:px-10" id="about">
      <div className="grid gap-3 pt-32 pb-6">
        <div className="border-border grid gap-2 border-b-2 pb-6 lg:border-none">
          <span className="text-eden text-sm font-extrabold uppercase">
            03 / About me
          </span>
          <h2 className="text-ink text-3xl font-extrabold uppercase">
            Where I come from
          </h2>
        </div>
        <div className="lg:border-border lg:grid lg:grid-cols-[26%_auto] lg:border-t-2">
          <div className="border-border border-b-2 pb-6 lg:border-r-2 lg:border-b-0 lg:pt-6 lg:pr-8">
            <p className="text-ink text-[1.375rem] leading-7.5 font-medium">
              I am a Software Engineering student at Vilnius Tech with a strong
              drive for{" "}
              <span className="text-eden">
                building software that solves practical problems.
              </span>
            </p>
            <p className="text-sm leading-6">
              My studies gave me a solid theoretical foundation, but I have
              learned much more from actually working on my own projects.
            </p>
            <p className="border-genoa mt-2 border-l-2 pl-4.5 text-sm leading-6">
              My QA internship taught me to look at software the way a user
              does:{" "}
              <span className="font-bold">
                what breaks, why, and how to describe it so it gets fixed.
              </span>
            </p>
          </div>
          <div className="">
            {EXPERIENCE.map((e, index) => (
              <div className="pt-6 pb-2 lg:pl-8" key={index}>
                <div className="border-border border-b-2 md:flex md:items-end md:justify-between">
                  <h2 className="text-ink text-xl font-extrabold lg:mb-2.5">
                    {e.fieldTitle}
                  </h2>
                  <span className="text-ink/55 text-[0.8125rem] py-2 block">
                    {e.timespan}
                  </span>
                </div>
                <ul className="mt-2.5 list-disc pl-4.5 text-[0.875rem]">
                  {e.buttetPoints.map((p, index) => (
                    <li className="font-normal" key={index}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
