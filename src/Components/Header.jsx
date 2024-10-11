const Header = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <header
        id="header"
        className="flex-grow bg-white p-10 text-center text-gray-800"
      >
        <h1 className="mb-4 text-4xl font-semibold">Md. Firoz Mahmud Nur</h1>
        <p className="mb-4 text-xl">Front-End Web Developer</p>
        <p className="mx-auto max-w-xl">
          I&apos;m a passionate and dedicated front-end developer with a keen
          eye for design and a strong understanding of user experience. I am
          currently looking for opportunities to work on challenging projects
          and contribute to the growth of the industry. Feel free to reach out
          if you&apos;re interested in collaborating on a project or just want
          to know more about me.
          <br />
          <br />
          Connect with me on
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
          </a>
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
        </p>
      </header>
      <div className="relative flex items-center justify-center p-10">
        <div className="relative z-10 h-48 w-48">
          <img
            className="h-56 w-56 border border-black object-cover object-top"
            src="https://i.ibb.co/ZMzsPbm/Apply-Basic-Image.jpg"
            alt=""
          />
        </div>
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div
            className="h-64 w-64 rotate-45 transform rounded-full bg-blue-500"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
