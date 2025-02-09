const Header = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row" id="home">
      <header
        id="header"
        className="flex flex-grow flex-col items-center justify-center bg-opacity-50 p-10 text-center text-gray-800"
      >
        <h1 className="mb-4 text-xl font-bold backdrop-blur-lg sm:text-4xl sm:font-semibold">
          Md. Firoz Mahmud Nur
        </h1>
        <p className="mb-4 max-w-min text-nowrap text-lg backdrop-blur-lg sm:text-xl">
          Front-End Web Developer
        </p>
        <p className="mx-auto flex max-w-xl flex-col items-center justify-center">
          <div className="backdrop-blur-lg">
            I&apos;m a passionate and dedicated front-end developer with a keen
            eye for design and a strong understanding of user experience. I am
            currently looking for opportunities to work on challenging projects
            and contribute to the growth of the industry. Feel free to reach out
            if you&apos;re interested in collaborating on a project or just want
            to know more about me.
          </div>
          <div className="backdrop-blur-lg">
            <br />
            <br />
            Connect with me on
            <br />
            <a
              href="https://wa.me/8801797626050?text=Hi%20Md.%20Firoz%20Mahmud%20Nur,%20I%20came%20across%20your%20portfolio%20website%20and%20would%20like%20to%20connect%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="pl-1 text-blue-500 hover:underline"
            >
              WhatsApp
            </a>
            ,
            <a
              href="https://github.com/Md-Firoz-Mahmud-Nur"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-1 text-blue-500 hover:underline"
            >
              GitHub
            </a>{" "}
            or{" "}
            <a
              href="mailto:firoznur5@gmail.com"
              className="text-blue-500 hover:underline"
            >
              Email
            </a>
            .
            <br />
            <button className="btn btn-outline mt-4 text-lg">
              <a
                href="/Resume of Md Firoz Mahmud Nur.pdf"
                download="/Resume of Md Firoz Mahmud Nur.pdf"
                className="mx-2"
              >
                Download Resume
              </a>
            </button>
          </div>
        </p>
      </header>
      <div className="flex items-center justify-center p-10">
        <img
          className="h-56 min-w-[168px] border border-black object-cover object-bottom"
          src="https://i.ibb.co/ZMzsPbm/Apply-Basic-Image.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
