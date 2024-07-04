import React from "react";

const Header = () => {
  return (
    <header id="header" className="bg-gray-900 p-20 text-center text-white">
      <h1 className="mb-4 text-5xl font-semibold">Md. Firoz Mahmud Nur</h1>
      <p className="mb-4 text-2xl">Front-End Web Developer</p>
      <p className="mx-auto max-w-xl">
        I'm a passionate and dedicated front-end developer who has a keen eye
        for design and a strong understanding of user experience. I am currently
        looking for opportunities to work on challenging projects and contribute
        to the growth of the industry. Feel free to reach out if you're
        interested in collaborating on a project or just want to know more about
        me.
        <br />
        <br />
        Connect with me on
        <a
          href="https://github.com/Md-Firoz-Mahmud-Nur"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        , or <a href="mailto:firoznur5@gmail.com">Email</a> to
      </p>
    </header>
  );
};

export default Header;
