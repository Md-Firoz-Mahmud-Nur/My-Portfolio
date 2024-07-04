import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="bg-red-100 p-20">
      <h2 className="mb-10 text-center text-4xl">Projects</h2>
      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex h-full flex-col rounded bg-white p-6 shadow">
          <h3 className="mb-2 text-2xl">Fit N Flex Arena</h3>
          <p className="mb-2">
            Fit n Flex Arena is a comprehensive gym website designed to offer a
            seamless experience for gym enthusiasts. It aims to help users stay
            fit and achieve their fitness goals through a user-friendly
            platform.
          </p>
          <div className="flex-grow"></div>
          <hr className="border-dashed border-black" />
          <p>Technologies Used: React, Firebase, MongoDb, TailwindCSS</p>
          <hr className="border-dashed border-black" />{" "}
          <p>
            Client Side Link :{" "}
            <a
              href="https://simple-firebase-module-49-a.web.app/"
              className="text-blue-500"
            >
              Live Link
            </a>
            |
            <a
              href="https://github.com/Md-Firoz-Mahmud-Nur/0163-Fit-N-Flex-Arena-client-assignment-12-module-72"
              className="text-blue-500"
            >
              GitHub
            </a>
          </p>
          <p>
            Server Side Link :{" "}
            <a
              href="https://github.com/Md-Firoz-Mahmud-Nur/0164-Fit-N-Flex-Arena-server-assignment-12-module-72"
              className="text-blue-500"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="flex h-full flex-col rounded bg-white p-6 shadow">
          <h3 className="mb-2 text-2xl">Food Fare</h3>
          <p className="mb-2">
            Food Fare is a food donation website dedicated to connecting donors
            with local food banks and shelters. The platform aims to reduce food
            waste.
          </p>{" "}
          <div className="flex-grow"></div>
          <hr className="border-dashed border-black" />{" "}
          <p>Technologies Used: React, Firebase, MongoDb, TailwindCSS</p>
          <hr className="border-dashed border-black" />{" "}
          <p>
            Client Side Link :{" "}
            <a
              href="https://s0142-food-fare-ass-11-mod-63.web.app/"
              className="text-blue-500"
            >
              Live Link
            </a>
            |
            <a
              href="https://github.com/Md-Firoz-Mahmud-Nur/0142-Food-Fare-client-assignment-11-module-63"
              className="text-blue-500"
            >
              GitHub
            </a>
          </p>
          <p>
            Server Side Link :{" "}
            <a
              href="https://github.com/Md-Firoz-Mahmud-Nur/0143-Food-Fare-server-assignment-11-module-63"
              className="text-blue-500"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="flex h-full flex-col rounded bg-white p-6 shadow">
          <h3 className="mb-2 text-2xl">Dream Tourism</h3>
          <p className="mb-2">
            Explore the world with Dream Tourism. Discover curated travel
            packages and personalized itineraries for your next adventure. Start
            planning your dream vacation today!
          </p>{" "}
          <div className="flex-grow"></div>
          <hr className="border-dashed border-black" />{" "}
          <p>Technologies Used: React, Firebase, MongoDb, TailwindCSS</p>
          <hr className="border-dashed border-black" />
          <p>
            Client Side Link :{" "}
            <a
              href="https://s0125-dream-tourism-a10-mod-57.web.app/"
              className="text-blue-500"
            >
              Live Link
            </a>
            |
            <a
              href="https://github.com/Md-Firoz-Mahmud-Nur/0125-dream-tourism-client-assignment-10-module-57"
              className="text-blue-500"
            >
              GitHub
            </a>
          </p>
          <p>
            Server Side Link :{" "}
            <a
              href="https://github.com/Md-Firoz-Mahmud-Nur/0124-dream-tourism-server-assignment-10-module-57"
              className="text-blue-500"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
