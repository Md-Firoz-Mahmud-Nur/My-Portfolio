const Footer = () => {
  return (
    <div className="border-t shadow-md shadow-[rgba(0,0,15,1)_0px_-8px_20px_-10px]">
      <div className="container mx-auto">
        <footer className="footer sm:footer-horizontal container mx-auto py-10">
          <aside>
            <h2 className="text-xl font-semibold">Md. Firoz Mahmud Nur</h2>
            <p className="mt-2">
              Full-Stack Web Developer
              <p className="pt-2">
                Passionate about building web applications with modern
                technologies.
              </p>
            </p>
          </aside>
          <nav className="backdrop-blur-lg">
            <h6 className="footer-title">Quick Links</h6>
            <a href="#home" className="link link-hover">
              Home
            </a>
            <a href="#skills" className="link link-hover">
              Skills
            </a>
            <a href="#projects" className="link link-hover">
              Projects
            </a>
            <a href="#education" className="link link-hover">
              Education
            </a>
            <a href="#contact" className="link link-hover">
              Contact
            </a>
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
        <div className="border-t border-gray-600 p-4 text-center">
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
