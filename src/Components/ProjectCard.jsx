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
    <div className="mx-4 flex h-full flex-col rounded border border-black p-6 shadow backdrop-blur-lg hover:shadow-2xl sm:mx-1">
      <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="mb-4 h-48 w-full rounded border border-black object-cover object-top shadow"
      />
      <p className="mb-2">{description}</p>
      <div className="flex-grow"></div>
      <hr className="border-dashed border-gray-300" />
      <p>Technologies Used: {technologies}</p>
      <hr className="my-2 border-dashed border-gray-300" />
      <p className="flex items-center gap-2 pb-1 font-semibold">
        Client Side Link:{" "}
        <a href={clientLink} className="text-[#0056b3]">
          <CiGlobe className="size-5" />
        </a>{" "}
        |{" "}
        <a href={clientGithub}>
          <FaGithub className="size-5" />
        </a>
      </p>
      <p className="flex items-center gap-2 font-semibold">
        Server Side Link:{" "}
        <a href={serverGithub}>
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
