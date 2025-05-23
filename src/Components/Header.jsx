import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Test from "./SvgBorderAnimation";

const Header = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row" id="home">
      <header
        id="header"
        className="bg-opacity-50 flex grow flex-col items-center justify-center p-10 text-center"
      >
        <h1 className="mb-4 text-xl font-bold backdrop-blur-lg sm:text-4xl sm:font-semibold">
          Md. Firoz Mahmud Nur
        </h1>
        <h2 className="mb-4 max-w-min text-lg text-nowrap backdrop-blur-lg sm:text-xl">
          Front-End Web Developer
        </h2>
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center">
          <div className="backdrop-blur-lg">
            I&apos;m a passionate and dedicated front-end developer with a keen
            eye for design and a strong understanding of user experience. I am
            currently looking for opportunities to work on challenging projects
            and contribute to the growth of the industry. Feel free to reach out
            if you&apos;re interested in collaborating on a project or just want
            to know more about me.
          </div>
          <div className="text-xl font-semibold backdrop-blur-lg">
            <br />
            <br />
            Let&apos;s work together
            <div className="flex items-center justify-center gap-4 py-4">
              <a
                href="https://www.linkedin.com/in/md-firoz-mahmud-nur"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
              >
                <FaLinkedin className="size-8" />
              </a>
              <a
                href="https://wa.me/8801797626050?text=Hi%20Md.%20Firoz%20Mahmud%20Nur,%20I%20came%20across%20your%20portfolio%20website%20and%20would%20like%20to%20connect%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="size-8" />
              </a>
              <a
                href="https://github.com/Md-Firoz-Mahmud-Nur"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="size-8" />
              </a>
              <a href="mailto:firoznur5@gmail.com" aria-label="Gmail">
                <SiGmail className="size-8" />
              </a>
            </div>
            {/* <a
              href="/Resume of Md Firoz Mahmud Nur.pdf"
              download="/Resume of Md Firoz Mahmud Nur.pdf"
              className="btn btn-outline border-base-content text-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Download Resume
            </a>
            <br /> */}
            <Test></Test>
          </div>
        </div>
      </header>
      <div className="flex items-center justify-center p-10">
        <div className="relative">
          <img
            style={{
              clipPath:
                "polygon(8px 0%, calc(100% - 8px) 0%, calc(100% + 1px) 8px, calc(100% + 1px) calc(100% - 8px), calc(100% - 8px) calc(100% - 8px),calc(100% - 8px) 100%, 8px 100%, 8px calc(100% - 8px),0% calc(100% - 8px),0% 8px)",
            }}
            className="h-56 min-w-[168px] border object-cover object-bottom backdrop-blur-lg"
            src="https://i.ibb.co.com/TxhSx7r8/Apply-Basic-Image.png"
            alt="Md. Firoz Mahmud Nur - Web Developer"
            loading="lazy"
          />
          <div className="absolute top-0 size-4 translate-[-50%] translate-y-[-50%] border bg-transparent backdrop-blur-lg"></div>
          <div className="absolute top-0 right-0 size-4 translate-[50%] translate-y-[-50%] border bg-transparent backdrop-blur-lg"></div>
          <div className="absolute bottom-0 size-4 translate-[-50%] translate-y-[50%] border bg-transparent backdrop-blur-lg"></div>
          <div className="absolute right-0 bottom-0 size-4 translate-[50%] translate-y-[50%] border bg-transparent backdrop-blur-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
