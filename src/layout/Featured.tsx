import { useState } from "react";
import driftlytics from "../assets/images/driftlytics.png";
import losion from "../assets/images/losionMockup.png";
import neapsikrauk from "../assets/images/neapsikrauk.png";
import ebejus from "../assets/images/ebejus.png";
const TECHNOLOGIES = [
  "All",
  "React",
  "TypeScript",
  "Node.js",
  "Spring Boot",
  "Supabase",
  "Java",
];

const PROJECTS = [
  {
    img: driftlytics,
    name: "Driftlytics",
    description:
      "Finance tracking application that lets you track expenses efficiently, identify anomalies, and gain insights.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Docker",
    ],
    demoLink: "https://github.com/RojusDEV/expense-detector",
    sourceCodeLink: "https://github.com/RojusDEV/expense-detector",
  },
  {
    img: losion,
    name: "Losion",
    description:
      "A minimal note-taking app with a distraction-free writing interface. Deployed and live on Vercel.",
    technologies: ["React", "Supabase", "TypeScript"],
    demoLink: "https://losion.vercel.app/",
    sourceCodeLink: "https://github.com/RojusDEV/Notion_Clone",
  },
  {
    img: neapsikrauk,
    name: "neapsikrauk",
    description:
      "Job listings near you: location-based search with smart filtering that keeps only the relevant results.",
    technologies: ["Node.js", "Express.js", "React"],
    demoLink: "https://github.com/RojusDEV/neapsikrauk",
    sourceCodeLink: "https://github.com/RojusDEV/neapsikrauk",
  },
  {
    img: ebejus,
    name: "EbayClone",
    description:
      "A marketplace clone with product listings and a Redux-driven cart, styled in SCSS and backed by Supabase.",
    technologies: ["React", "Supabase", "SCSS", "Redux"],
    demoLink: "https://ebejus.vercel.app/",
    sourceCodeLink: "https://github.com/RojusDEV/EbayClone",
  },
];

const Featured = () => {
  const [selectedTech, setSelectedTech] = useState("All");
  const handleOpenInNewTab = (path: string) => {
    window.open(path, "_blank", "noopener,noreferrer");
  };
  return (
    <section
      className="font-archivo mx-auto max-w-7xl scroll-mt-[5vh] px-5 md:mt-15.75 md:px-10"
      id="projects"
    >
      <div className="border-border grid gap-3 border-b-2 pb-6">
        <div className="grid gap-2">
          <span className="text-eden text-sm font-extrabold uppercase">
            01 / My projects
          </span>
          <h2 className="text-ink text-3xl font-extrabold uppercase">
            Featured projects
          </h2>
        </div>
        <div className="flex flex-wrap gap-1">
          {TECHNOLOGIES.map((t, index) => (
            <button
              className={`${t === selectedTech ? "bg-accent text-pampas" : ""} border-accent text-accent cursor-pointer self-start border px-2.5 py-0.5 text-[0.6875rem] font-normal`}
              key={index}
              onClick={() => setSelectedTech(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="">
        {PROJECTS.filter(
          (p) =>
            selectedTech === "All" || p.technologies.includes(selectedTech),
        ).map((p, index) => (
          <div
            className="border-border lg:hover:bg-surface group grid gap-x-6 border-b-2 pb-6.5 hover:bg-transparent lg:grid-cols-[2rem_auto_minmax(14rem,1fr)_12rem_11rem] lg:items-start lg:px-3 lg:py-6"
            key={index}
          >
            <span className="group-hover:text-genoa text-ink/55 my-5 block font-extrabold lg:my-0">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </span>
            <div className="overflow-hidden lg:max-w-65">
              <img
                src={p.img}
                alt="Project showcase image"
                className="block w-full transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="">
              <h3 className="mt-4 text-2xl font-extrabold tracking-[-0.5px] uppercase lg:mt-0">
                {p.name}
              </h3>
              <p className="my-4 w-full max-w-[47ch] text-sm">
                {p.description}
              </p>
            </div>
            <ul className="flex flex-wrap gap-1">
              {p.technologies.map((t) => (
                <li
                  className="bg-gray-nurse text-tundora px-2.5 py-0.5 text-[0.6875rem] font-normal"
                  key={t}
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-4 grid gap-1 lg:mt-0">
              <button
                className="group/btn text-pampas bg-genoa relative isolate cursor-pointer overflow-hidden px-3.5 py-2 text-start font-extrabold transition-colors duration-200"
                onClick={() => handleOpenInNewTab(p.demoLink)}
              >
                <span className="bg-ink absolute inset-0 -z-10 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover/btn:scale-x-100" />
                Live demo
              </button>

              <button
                className="group/btn text-ink border-border hover:border-genoa relative isolate cursor-pointer overflow-hidden border-2 px-3.5 py-2 text-start font-extrabold transition-colors duration-200 hover:text-white"
                onClick={() => handleOpenInNewTab(p.sourceCodeLink)}
              >
                <span className="bg-genoa absolute inset-0 -z-10 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover/btn:scale-x-100" />
                View code
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
