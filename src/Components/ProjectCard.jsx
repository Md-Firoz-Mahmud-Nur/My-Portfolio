import PropTypes from "prop-types";

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
    <div className="mx-4 flex h-full flex-col rounded border border-black p-6 shadow hover:shadow-2xl sm:mx-1">
      <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
      <img
        src={image}
        alt={title}
        className="mb-4 h-48 w-full rounded border border-black object-cover object-top shadow"
      />
      <p className="mb-2">{description}</p>
      <div className="flex-grow"></div>
      <hr className="border-dashed border-gray-300" />
      <p>Technologies Used: {technologies}</p>
      <hr className="my-2 border-dashed border-gray-300" />
      <p className="font-semibold">
        Client Side Link:{" "}
        <a href={clientLink} className="text-blue-500 hover:underline">
          Live Link
        </a>{" "}
        |{" "}
        <a href={clientGithub} className="text-blue-500 hover:underline">
          GitHub
        </a>
      </p>
      <p className="font-semibold">
        Server Side Link:{" "}
        <a href={serverGithub} className="text-blue-500 hover:underline">
          GitHub
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
