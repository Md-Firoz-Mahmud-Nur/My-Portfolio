import { useMemo, useState } from "react";
const sections = ["home", "skills", "projects", "education", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  const links = useMemo(
    () => (
      <>
        {sections.map(
          (section) => (
            console.log(section),
            (
              <li key={section}>
                <a
                  href={`#${section}`}
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
            )
          ),
        )}
        <li>
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
      </>
    ),
    [],
  );
  return (
    <div className="sticky top-0 z-20 shadow-md backdrop-blur-lg">
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
