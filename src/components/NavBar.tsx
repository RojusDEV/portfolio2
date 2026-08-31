import { useTheme } from "../hooks/useTheme";

const NavBar = () => {
  const { theme, toggle } = useTheme();

  return (
    <nav className="border-border border-b-2">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-10">
        <span className="font-archivo text-ink text-lg font-extrabold uppercase">
          Rojus Balčiūnas
        </span>

        <div className="flex items-center gap-10">
          <ul className="hidden gap-6 lg:flex">
            <a
              href="#projects"
              className="group hover:text-genoa transition duration-200"
            >
              Projects
              <span className="bg-genoa block h-0.5 max-w-0 transition-all duration-300 group-hover:max-w-full"></span>
            </a>
            <a
              href="#skills"
              className="group hover:text-genoa transition duration-200"
            >
              Skills
              <span className="bg-genoa block h-0.5 max-w-0 transition-all duration-300 group-hover:max-w-full"></span>
            </a>
            <a
              href="#about"
              className="group hover:text-genoa transition duration-200"
            >
              About
              <span className="bg-genoa block h-0.5 max-w-0 transition-all duration-300 group-hover:max-w-full"></span>
            </a>
            <a
              href="#contact"
              className="group hover:text-genoa transition duration-200"
            >
              Contact
              <span className="bg-genoa block h-0.5 max-w-0 transition-all duration-300 group-hover:max-w-full"></span>
            </a>
          </ul>
          <button
            onClick={toggle}
            className="group text-ink border-border hover:text-pampas hover:border-genoa relative isolate cursor-pointer overflow-hidden border bg-transparent px-4 py-1 font-bold transition-colors duration-200"
          >
            <span className="bg-genoa absolute inset-0 -z-10 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            {theme === "light" ? "DARK" : "LIGHT"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
