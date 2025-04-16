import {
  FaGithub,
  FaLinkedin,
  FaPhoneSquareAlt,
  FaWhatsappSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Contact = () => {
  return (
    <div id="contact" className="my-12 md:my-16 lg:my-24">
      <h2
        className="mx-auto mb-12 max-w-max pb-2 text-center text-3xl font-bold tracking-tight backdrop-blur-lg md:mb-16 md:text-4xl"
        data-aos="fade-down"
        data-aos-duration="500"
      >
        Contact Me
      </h2>

      <div className="grid grid-cols-1 items-center gap-6 overflow-hidden lg:grid-cols-2">
        <div className="w-full">
          <div className="flex flex-col justify-center gap-6 md:gap-8 lg:flex-row lg:items-center">
            <img
              src="https://i.ibb.co.com/TxhSx7r8/Apply-Basic-Image.png"
              alt="Md. Firoz Mahmud Nur - Web Developer"
              loading="lazy"
              className="mx-auto size-[280px] rounded-full border-2 object-cover object-top backdrop-blur-lg lg:mx-0"
              data-aos="zoom-in"
              data-aos-duration="500"
            />
            <div className="max-w-min space-y-4 px-4 text-nowrap backdrop-blur-lg lg:px-0">
              <a
                href="tel:+880 1797-626050"
                className="flex items-center text-lg"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <FaPhoneSquareAlt className="mr-2 inline" />
                <span className="font-medium">+880 1797-626050</span>
              </a>
              <a
                href="https://wa.me/8801797626050?text=Hi%20Md.%20Firoz%20Mahmud%20Nur,%20I%20came%20across%20your%20portfolio%20website%20and%20would%20like%20to%20connect%20with%20you."
                target="_blank"
                className="flex items-center text-lg"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <FaWhatsappSquare className="mr-2 inline" />
                <span className="font-medium">+880 1797-626050</span>
              </a>
              <a
                href="https://www.linkedin.com/in/md-firoz-mahmud-nur"
                target="_blank"
                className="flex items-center text-lg"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <FaLinkedin className="mr-2 inline" />
                <span className="font-medium">Md. Firoz Mahmud Nur</span>
              </a>
              <a
                href="https://github.com/Md-Firoz-Mahmud-Nur"
                target="_blank"
                className="flex items-center text-lg"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <FaGithub className="mr-2 inline" />
                <span className="font-medium">Md-Firoz-Mahmud-Nur</span>
              </a>
              <a
                href="mailto:firoznur5@gmail.com"
                target="_blank"
                className="flex items-center text-lg"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <MdEmail className="mr-2 inline" />
                <span className="font-medium">firoznur5@gmail.com</span>
              </a>
              <a
                href="https://www.facebook.com/firoz.nur"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <FaFacebook className="mr-2 inline" />
                <span className="font-medium">Nur</span>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full px-4 lg:px-0">
          <form action="https://getform.io/f/bxojjzpa" method="post">
            <div className="mb-3 w-full">
              <label
                className="mb-[2px] block max-w-min font-medium backdrop-blur-lg"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full rounded-md border px-2 py-2 outline-hidden backdrop-blur-lg"
                id="name"
                placeholder="Name"
                autoComplete="name"
                required
              />
            </div>

            <div className="mb-3 w-full">
              <label
                className="mb-[2px] block max-w-min font-medium backdrop-blur-lg"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full rounded-md border px-2 py-2 outline-hidden backdrop-blur-lg"
                id="email"
                placeholder="Enter your email address"
                autoComplete="email"
                required
              />
            </div>

            <div className="mb-3 w-full">
              <label
                className="mb-[2px] block max-w-min font-medium backdrop-blur-lg"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="h-20 w-full rounded-[5px] border px-2 py-2 outline-hidden backdrop-blur-lg"
                name="message"
                id="message"
                placeholder="Enter your thoughts"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="mb-6 inline-block w-full rounded-sm border px-6 py-2.5 text-lg leading-normal font-medium uppercase backdrop-blur-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
