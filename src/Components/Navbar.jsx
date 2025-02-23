import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  const links = (
    <>
      <li>
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.getElementById("home").offsetTop - 68,
              behavior: "smooth",
            });
            closeDropdown();
          }}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#skills"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.getElementById("skills").offsetTop - 68,
              behavior: "smooth",
            });
            closeDropdown();
          }}
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.getElementById("projects").offsetTop - 68,
              behavior: "smooth",
            });
            closeDropdown();
          }}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#education"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.getElementById("education").offsetTop - 68,
              behavior: "smooth",
            });
            closeDropdown();
          }}
        >
          Education
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.getElementById("contact").offsetTop - 68,
              behavior: "smooth",
            });
            closeDropdown();
          }}
        >
          Contact
        </a>
      </li>
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
  );
  return (
    <div className="sticky top-0 z-20 shadow-md backdrop-blur-lg">
      <div className="container navbar mx-auto rounded-sm via-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
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
            </div>
            {isOpen && (
              <ul
                tabIndex={0}
                className="menu dropdown-content menu-sm z-1 mt-3 w-52 rounded-box bg-base-100 p-2 shadow-sm"
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
