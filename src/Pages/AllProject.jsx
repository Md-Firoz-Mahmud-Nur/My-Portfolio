import ProjectCard from "../Components/ProjectCard";

const AllProject = () => {
  const projectsInfo = [
    {
      title: "1. DevDive (Team Project)",
      image: "https://i.ibb.co/SDKzkyfD/Nur-Mock-Up-03.png",
      description:
        "DevDive boosts developer collaboration with real-time posts, AI chatbot, live coding, mentoring, and more.",
      clientLink: "https://devdive1.netlify.app/",
      clientGithub: "https://github.com/MDRUHULAMIN7/DevDive-Client-Side",
      serverGithub: "https://github.com/MDRUHULAMIN7/Dev-Dive-Server-Side",
      technologies: "React, AI Chatbot, MongoDb, Node.js",
    },
    {
      title: "2. QutorOn (Corporate)",
      image: "https://i.ibb.co/k6Jmb5xZ/Nur-Mock-Up-04.png",
      description:
        "Built a responsive, modern e-learning platform with dynamic content, and optimized UI/UX for all devices.",
      clientLink: "https://qutoron.com/",
      clientGithub: "Not Available",
      serverGithub: "Not Available",
      technologies: "React, UI/UX Prototyping, MongoDb, TailwindCSS",
    },
    {
      title: "3. Fit N Flex Arena",
      image: "https://i.ibb.co/jb9sd3J/Screenshot-2024-07-04-172855.png",
      description:
        "Fit n Flex Arena is a comprehensive gym website designed to offer a seamless experience for gym enthusiasts.",
      clientLink: "https://simple-firebase-module-49-a.web.app/",
      clientGithub:
        "https://github.com/Md-Firoz-Mahmud-Nur/0163-Fit-N-Flex-Arena-client-assignment-12-module-72",
      serverGithub:
        "https://github.com/Md-Firoz-Mahmud-Nur/0164-Fit-N-Flex-Arena-server-assignment-12-module-72",
      technologies: "React, Firebase, MongoDb, TailwindCSS",
    },
    {
      title: "4. Food Fare",
      image: "https://i.ibb.co/ZMp1FJT/Screenshot-2024-07-04-172925.png",
      description:
        "Food Fare is a food donation website dedicated to connecting donors with local food banks and shelters.",
      clientLink: "https://s0142-food-fare-ass-11-mod-63.web.app/",
      clientGithub:
        "https://github.com/Md-Firoz-Mahmud-Nur/0142-Food-Fare-client-assignment-11-module-63",
      serverGithub:
        "https://github.com/Md-Firoz-Mahmud-Nur/0143-Food-Fare-server-assignment-11-module-63",
      technologies: "React, Firebase, MongoDb, TailwindCSS",
    },
    {
      title: "5. Dream Tourism",
      image: "https://i.ibb.co/dJwqRMs/Screenshot-2024-07-04-173015.png",
      description:
        "Explore the world with Dream Tourism. Discover curated travel packages and personalized itineraries for your next adventure.",
      clientLink: "https://s0125-dream-tourism-a10-mod-57.web.app/",
      clientGithub:
        "https://github.com/Md-Firoz-Mahmud-Nur/0125-dream-tourism-client-assignment-10-module-57",
      serverGithub:
        "https://github.com/Md-Firoz-Mahmud-Nur/0124-dream-tourism-server-assignment-10-module-57",
      technologies: "React, Firebase, MongoDb, TailwindCSS",
    },
  ];

  return (
    <section id="projects">
      <h2 className="mx-auto mb-12 max-w-max pb-2 text-center text-3xl font-bold tracking-tight backdrop-blur-lg md:mb-16 md:text-4xl">
        Projects
      </h2>
      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projectsInfo.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default AllProject;
