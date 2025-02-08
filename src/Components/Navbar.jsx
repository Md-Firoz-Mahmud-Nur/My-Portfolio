const Navbar = () => {
  const links = (
    <>
      <li>
        <a href="#" className="mx-2">
          Home
        </a>
      </li>
      <li>
        <a href="#skills" className="mx-2">
          Skills
        </a>
      </li>
      <li>
        <a href="#projects" className="mx-2">
          Projects
        </a>
      </li>
      <li>
        <a href="#education" className="mx-2">
          Education
        </a>
      </li>
      <li>
        <a href="#contact" className="mx-2">
          Contact
        </a>
      </li>
      <li>
        <a
          href="/Resume of Md Firoz Mahmud Nur.pdf"
          download="/Resume of Md Firoz Mahmud Nur.pdf"
          className="mx-2"
        >
          Resume
        </a>
      </li>
    </>
  );
  return (
    <div className="navbar sticky top-0 z-20 rounded bg-base-300 via-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Md. Firoz Mahmud Nur</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
