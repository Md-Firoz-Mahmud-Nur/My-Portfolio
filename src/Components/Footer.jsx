import { useMemo } from "react";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const sections = ["home", "skills", "projects", "education", "contact"];

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
            <a
              href="/Resume of Md Firoz Mahmud Nur.pdf"
              download="/Resume of Md Firoz Mahmud Nur.pdf"
              className="link link-hover"
            >
              Resume
            </a>
          </nav>
          <nav className="backdrop-blur-lg">
            <h6 className="footer-title">Connect</h6>
            <div className="flex flex-col items-start justify-center gap-2">
              <a
                href="https://www.linkedin.com/in/md-firoz-mahmud-nur"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
              >
                <div className="flex items-center gap-2">
                  <FaLinkedin className="size-6" />
                  <p>Linkedin</p>
                </div>
              </a>
              <a
                href="https://wa.me/8801797626050?text=Hi%20Md.%20Firoz%20Mahmud%20Nur,%20I%20came%20across%20your%20portfolio%20website%20and%20would%20like%20to%20connect%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <div className="flex items-center gap-2">
                  <FaWhatsapp className="size-6" />
                  <p>WhatsApp</p>
                </div>
              </a>
              <a
                href="https://github.com/Md-Firoz-Mahmud-Nur"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <div className="flex items-center gap-2">
                  <FaGithub className="size-6" />
                  <p>GitHub</p>
                </div>
              </a>
              <a href="mailto:firoznur5@gmail.com" aria-label="Gmail">
                <div className="flex items-center gap-2">
                  <SiGmail className="size-6" />
                  <p>Gmail</p>
                </div>
              </a>
            </div>
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
