import { useMemo } from "react";
import { sections } from "./Navbar";

const Footer = () => {
  const links = useMemo(
    () => (
      <>
        {sections.map((section) => (
          <div key={section}>
            <a
              href={`#${section}`}
              className={`hover:text-primary transition-all duration-300 ease-in-out`}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: document.getElementById(section).offsetTop - 145,
                  behavior: "smooth",
                });
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </div>
        ))}
      </>
    ),
    [],
  );

  return (
    <div className="shadow-[0_-4px_0px_-1px_rgba(0,0,0,0.1),0_-2px_0px_-2px_rgba(0,0,0,0.1)] backdrop-blur-lg">
      <div className="container mx-auto">
        <footer className="footer sm:footer-horizontal container mx-auto pt-10 pb-6">
          <aside>
            <h2 className="text-xl font-semibold">Md. Firoz Mahmud Nur</h2>
            <p className="mt-2 text-base">
              Full-Stack Web Developer
              <p className="pt-2">
                Passionate about building web applications with modern
                technologies.
              </p>
            </p>
          </aside>
          <nav className="backdrop-blur-lg">
            <h6 className="footer-title">Quick Links</h6>
            {links}
            <a href="/resume" className="link link-hover">
              Resume
            </a>
          </nav>
          <nav className="backdrop-blur-lg">
            <h6 className="footer-title">Connect</h6>
            <a
              href="https://github.com/Md-Firoz-Mahmud-Nur"
              className="link link-hover"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/md-firoz-mahmud-nur"
              className="link link-hover"
              target="_blank"
            >
              LinkedIn
            </a>
            <a href="mailto:firoznur5@gmail.com" className="link link-hover">
              Email Me
            </a>
          </nav>
        </footer>
        <div className="mr-4 ml-4 border-t-1 border-gray-400 md:mr-0 md:ml-0"></div>
        <div className="pt-6 pb-10 text-center">
          <p>
            &copy; {new Date().getFullYear()} Md. Firoz Mahmud Nur. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
