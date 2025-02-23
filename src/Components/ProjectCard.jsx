import PropTypes from "prop-types";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({
  title,
  image,
  description,
  clientLink,
  clientGithub,
  serverGithub,
  technologies,
}) => {
  return (
    <div className="mx-4 flex h-full flex-col rounded-sm border border-black p-6 shadow-sm backdrop-blur-lg hover:shadow-2xl sm:mx-1">
      <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="mb-4 h-48 w-full rounded-sm border border-black object-cover object-top shadow-sm"
      />
      <p className="mb-2">{description}</p>
      <div className="grow"></div>
      <hr className="border-dashed border-gray-300" />
      <p>Technologies Used: {technologies}</p>
      <hr className="my-2 border-dashed border-gray-300" />
      <p className="flex items-center gap-2 pb-1 font-semibold">
        Client Side Link:{" "}
        <a href={clientLink} className="text-[#0056b3]" aria-label="Live Link">
          <CiGlobe className="size-5" />
        </a>{" "}
        |{" "}
        <a href={clientGithub} aria-label="GitHub Client">
          <FaGithub className="size-5" />
        </a>
      </p>
      <p className="flex items-center gap-2 font-semibold">
        Server Side Link:{" "}
        <a href={serverGithub} aria-label="GitHub Server">
          <FaGithub className="size-5" />
        </a>
      </p>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  clientLink: PropTypes.string.isRequired,
  clientGithub: PropTypes.string.isRequired,
  serverGithub: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
};

export default ProjectCard;
