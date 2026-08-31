import { Link } from "react-router";
import portrait from "../assets/images/portrait.jpg";
import { BsArrowUpRight } from "react-icons/bs";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="font-archivo border-border mx-auto max-w-7xl text-sm font-extrabold md:grid md:grid-cols-2 md:border-b-2 lg:grid-cols-[1fr_auto]">
      <div className="border-border grid content-start gap-5.75 border-b-2 px-5 py-18 md:border-b-0 md:px-10">
        <span className="text-eden uppercase">
          Software engineering student, Vilnius
        </span>
        <h1 className="text-hero lg:text-hero-lg text-ink font-extrabold uppercase">
          <span className="bg-sage box-decoration-clone px-1 lg:block lg:w-fit">
            Clean
          </span>{" "}
          <span className="bg-sage box-decoration-clone px-1 lg:block lg:w-fit">
            interfaces.
          </span>{" "}
          <span className="bg-sage box-decoration-clone px-1 lg:block lg:w-fit">
            Reliable
          </span>{" "}
          <span className="bg-sage box-decoration-clone px-1 lg:block lg:w-fit">
            systems.
          </span>
        </h1>
        <p className="text-ink max-w-[55ch] font-medium">
          I study Software Engineering at Vilnius Tech and I am looking for my
          first job. The degree gave me the theory; the side projects gave me
          the craft.
        </p>
        <div className="grid grid-flow-row gap-2 sm:max-w-92 sm:grid-flow-col">
          <button
            onClick={() => scrollToSection("projects")}
            className="group text-pampas bg-genoa relative isolate cursor-pointer overflow-hidden px-4 py-3 text-start font-extrabold transition-colors duration-200"
          >
            <span className="bg-ink absolute inset-0 -z-10 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            View projects
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="group text-ink border-border hover:border-genoa relative isolate cursor-pointer overflow-hidden border-2 px-4 py-3 text-start font-extrabold transition-colors duration-200 hover:text-white"
          >
            <span className="bg-genoa absolute inset-0 -z-10 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            About me
          </button>
        </div>
      </div>
      <div className="border-border md:border-l-2 lg:px-7.5">
        <div className="mt-18 px-1.5 pb-4 pl-8 lg:pl-4">
          <div className="bg-accent lg:max-w-71">
            <img
              className="border-ink aspect-square -translate-x-4 -translate-y-4 border-2 object-cover"
              src={portrait}
              alt="portrait"
            />
          </div>
        </div>
        <div className="px-5 pb-18 lg:px-0">
          <div className="border-border grid border-b-2 pb-18 md:border-none">
            <div className="border-border grid border-b-2 pt-6">
              <span className="text-ink/55 text-[0.6875rem] font-light tracking-wider">
                STATUS
              </span>
              <div className="flex items-center gap-2 pb-4.5">
                <div className="bg-accent h-2 w-2 animate-pulse"></div>
                <span className="text-ink text-lg">Open to junior roles</span>
              </div>
            </div>
            <div className="border-border grid border-b-2 pt-6 pb-4.5">
              <span className="text-ink/55 text-[0.6875rem] font-light tracking-wider">
                CURRENTLY
              </span>
              <span className="text-ink text-lg">QA Intern, Edenred</span>
            </div>
            <div className="border-border grid border-b-2 pt-6 pb-4.5">
              <span className="text-ink/55 text-[0.6875rem] font-light tracking-wider">
                STUDYING
              </span>
              <span className="text-ink text-lg">Vilnius Tech, from 2024</span>
            </div>
            <ul className="text-genoa mt-6 grid gap-1">
              <li className="flex items-center gap-1">
                <Link
                  to="https://www.linkedin.com/in/rojus-balciunas/"
                  target="_blank"
                  className="text-sm font-light underline"
                >
                  LinkedIn
                </Link>
                <BsArrowUpRight />
              </li>
              <li className="flex items-center gap-1">
                <Link
                  to="https://x.com/devRojka"
                  target="_blank"
                  className="text-sm font-light underline"
                >
                  X
                </Link>
                <BsArrowUpRight />
              </li>
              <li className="flex items-center gap-1">
                <Link
                  to="https://www.facebook.com/rojus.balciunas"
                  target="_blank"
                  className="text-sm font-light underline"
                >
                  Facebook
                </Link>
                <BsArrowUpRight />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
