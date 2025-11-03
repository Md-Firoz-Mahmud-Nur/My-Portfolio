import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Test from "./SvgBorderAnimation";

const Header = () => {
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    const splitName = SplitText.create(nameRef.current, {
      type: "chars",
      mask: "lines",
      autoSplit: true,
    });

    tl.from(splitName.chars, {
      duration: 0.2,
      y: 100,
      x: 50,
      opacity: 0,
      autoAlpha: 0,
      stagger: 0.05,
      ease: "power4.out",
    });

    const splitTitle = SplitText.create(titleRef.current, {
      type: "words",
      autoSplit: true,
    });

    tl.from(splitTitle.words, {
      duration: 0.2,
      y: 50,
      x: 30,
      rotate: 45,
      opacity: 0,
      autoAlpha: 0,
      stagger: 0.15,
      ease: "power4.out",
    });

    const splitPara1 = SplitText.create(para1Ref.current, {
      type: "words",
      autoSplit: true,
    });

    tl.from(splitPara1.words, {
      duration: 0.3,
      y: 40,
      opacity: 0,
      autoAlpha: 0,
      stagger: 0.04,
      ease: "power4.out",
    });

    const splitPara2 = SplitText.create(para2Ref.current, {
      type: "lines",
      autoSplit: true,
    });

    tl.from(splitPara2.lines, {
      duration: 0.2,
      y: 30,
      opacity: 0,
      autoAlpha: 0,
      stagger: 0.15,
      ease: "power4.out",
    });

    return () => {
      splitName.revert();
      splitTitle.revert();
      splitPara1.revert();
      splitPara2.revert();
    };
  }, []);

  return (
    <div className="flex flex-col-reverse md:flex-row" id="home">
      <header
        id="header"
        className="bg-opacity-50 flex grow flex-col items-center justify-center p-10 text-center"
      >
        <h1
          ref={nameRef}
          className="mb-4 text-xl font-bold backdrop-blur-lg sm:text-4xl sm:font-semibold"
        >
          Md. Firoz Mahmud Nur
        </h1>
        <h2
          ref={titleRef}
          className="mb-4 max-w-min text-lg text-nowrap backdrop-blur-lg sm:text-xl"
        >
          Full-Stack Web Developer
        </h2>
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center">
          <div className="flex flex-col gap-4 backdrop-blur-lg">
            <p ref={para1Ref}>
              Hi, I&apos;m a passionate and dedicated full-stack web developer
              with a keen eye for design and a strong understanding of user
              experience.
            </p>
            <p ref={para2Ref}>
              <strong>Nur</strong> is currently looking for opportunities to
              work on challenging projects and contribute to the growth of the
              industry. Feel free to reach out if you&apos;re interested in
              collaborating on a project or just want to know more about me.
            </p>
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
            alt="Md. Firoz Mahmud Nur - Full-Stack Web Developer"
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
