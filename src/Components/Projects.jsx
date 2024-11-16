const Projects = () => {
  return (
    <section id="projects">
      <h2 className="mb-10 text-center text-4xl text-gray-800">Projects</h2>
      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="mx-4 flex h-full flex-col rounded border border-black p-6 shadow hover:shadow-2xl sm:mx-1">
          <h3 className="mb-2 text-2xl font-semibold">1. Fit N Flex Arena</h3>
          <img
            src="https://i.ibb.co/jb9sd3J/Screenshot-2024-07-04-172855.png"
            alt="Fit N Flex Arena"
            className="mb-4 h-48 w-full rounded border border-black object-cover object-top shadow"
          />
          <p className="mb-2">
            Fit n Flex Arena is a comprehensive gym website designed to offer a
            seamless experience for gym enthusiasts. It aims to help users stay
            fit and achieve their fitness goals through a user-friendly
            platform.
          </p>
          <div className="flex-grow"></div>
          <hr className="border-dashed border-gray-300" />
          <p>Technologies Used: React, Firebase, MongoDb, TailwindCSS</p>
          <hr className="my-2 border-dashed border-gray-300" />
          <p className="font-semibold">
            Client Side Link:{" "}
            <a
              href="https://simple-firebase-module-49-a.web.app/"
              className="text-blue-500 hover:underline"
            >
              Live Link
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/Md-Firoz-Mahmud-Nur/0163-Fit-N-Flex-Arena-client-assignment-12-module-72"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
          </p>
          <p className="font-semibold">
            Server Side Link:{" "}
            <a
              href="https://github.com/Md-Firoz-Mahmud-Nur/0164-Fit-N-Flex-Arena-server-assignment-12-module-72"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
          </p>
        </div>

        <div className="mx-4 flex h-full flex-col rounded border border-black p-6 shadow hover:shadow-2xl sm:mx-1">
          <h3 className="mb-2 text-2xl font-semibold">2. Food Fare</h3>
          <img
            src="https://i.ibb.co/ZMp1FJT/Screenshot-2024-07-04-172925.png"
            alt="Food Fare"
            className="mb-4 h-48 w-full rounded border border-black object-cover object-top shadow"
          />
          <p className="mb-2">
            Food Fare is a food donation website dedicated to connecting donors
            with local food banks and shelters. The platform aims to reduce food
            waste.
          </p>
          <div className="flex-grow"></div>
          <hr className="border-dashed border-gray-300" />
          <p>Technologies Used: React, Firebase, MongoDb, TailwindCSS</p>
          <hr className="my-2 border-dashed border-gray-300" />

          <p className="font-semibold">
            Client Side Link:{" "}
            <a
              href="https://s0142-food-fare-ass-11-mod-63.web.app/"
              className="text-blue-500 hover:underline"
            >
              Live Link
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/Md-Firoz-Mahmud-Nur/0142-Food-Fare-client-assignment-11-module-63"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
          </p>
          <p className="font-semibold">
            Server Side Link:{" "}
            <a
              href="https://github.com/Md-Firoz-Mahmud-Nur/0143-Food-Fare-server-assignment-11-module-63"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
          </p>
        </div>

        <div className="flex h-full flex-col rounded border border-black p-6 shadow hover:shadow-2xl mx-4 sm:mx-1">
          <h3 className="mb-2 text-2xl font-semibold">3. Dream Tourism</h3>
          <img
            src="https://i.ibb.co/dJwqRMs/Screenshot-2024-07-04-173015.png"
            alt="Dream Tourism"
            className="mb-4 h-48 w-full rounded border border-black object-cover object-top shadow"
          />
          <p className="mb-2">
            Explore the world with Dream Tourism. Discover curated travel
            packages and personalized itineraries for your next adventure. Start
            planning your dream vacation today!
          </p>
          <div className="flex-grow"></div>
          <hr className="border-dashed border-gray-300" />
          <p>Technologies Used: React, Firebase, MongoDb, TailwindCSS</p>
          <hr className="my-2 border-dashed border-gray-300" />
          <p className="font-semibold">
            Client Side Link:{" "}
            <a
              href="https://s0125-dream-tourism-a10-mod-57.web.app/"
              className="text-blue-500 hover:underline"
            >
              Live Link
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/Md-Firoz-Mahmud-Nur/0125-dream-tourism-client-assignment-10-module-57"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
          </p>
          <p className="font-semibold">
            Server Side Link:{" "}
            <a
              href="https://github.com/Md-Firoz-Mahmud-Nur/0124-dream-tourism-server-assignment-10-module-57"
              className="text-blue-500 hover:underline"
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
