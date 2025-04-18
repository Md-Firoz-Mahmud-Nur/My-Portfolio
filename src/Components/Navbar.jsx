import { useContext, useEffect, useMemo, useState } from "react";
import "./Navbar.css";
import { Context } from "../Context/Context";
const sections = ["home", "skills", "projects", "education", "contact"];

const Navbar = () => {
  const { isDark, toggleTheme } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 145;
      const bottomThreshold =
        document.body.scrollHeight - window.innerHeight - 50;

      if (window.scrollY >= bottomThreshold) {
        setActiveSection("contact");
        return;
      }
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const links = useMemo(
    () => (
      <>
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={`transition-all duration-300 ease-in-out ${
                activeSection === section
                  ? "text-primary border-primary border-b-2 font-bold"
                  : "hover:text-primary"
              }`}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: document.getElementById(section).offsetTop - 145,
                  behavior: "smooth",
                });
                closeDropdown();
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
        <li className="before:content-[] after:content-[] before:animate relative max-w-min items-center justify-center overflow-hidden rounded-full bg-transparent before:absolute before:h-[240%] before:w-full before:animate-[spin_3s_linear_infinite] before:bg-[linear-gradient(black,white,blue)] after:absolute after:inset-[2px] after:rounded-full after:bg-white lg:items-center lg:justify-center lg:before:h-[220%] dark:before:bg-[linear-gradient(white,black,blue)] dark:after:bg-black [&>a]:z-10">
          <a
            href="/Resume of Md Firoz Mahmud Nur.pdf"
            download="/Resume of Md Firoz Mahmud Nur.pdf"
            onClick={() => {
              closeDropdown();
            }}
          >
            Resume
          </a>
        </li>
        <li>
          <label className="swap swap-rotate py-0">
            <input
              type="checkbox"
              name="theme"
              onChange={toggleTheme}
              className="theme-controller"
              checked={isDark === "dark"}
            />

            <svg
              className="swap-off size-[35px] fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-on size-[35px] fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </li>
      </>
    ),
    [activeSection, isDark, toggleTheme],
  );
  return (
    <div className="dark:shadow-base-100 sticky top-0 z-20 shadow-md backdrop-blur-lg dark:shadow-lg">
      <div className="navbar container mx-auto rounded-sm via-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {isOpen && (
              <ul
                tabIndex={0}
                className="menu dropdown-content menu-sm rounded-box bg-base-100 z-1 mt-3 w-52 p-2 shadow-sm"
              >
                {links}
              </ul>
            )}
          </div>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: document.getElementById("home").offsetTop - 68,
                behavior: "smooth",
              });
            }}
            className="btn btn-ghost text-xl"
          >
            Md. Firoz Mahmud Nur
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
