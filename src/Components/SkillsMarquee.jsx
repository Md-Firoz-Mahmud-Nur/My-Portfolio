import Marquee from "react-fast-marquee";
import html5 from "../assets/html5.png";
import css3 from "../assets/css3.png";
import tailwind from "../assets/tailwind.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import firebase from "../assets/firebase.png";

const SkillsMarquee = () => {
  const image = [
    html5,
    css3,
    tailwind,
    js,
    react,
    mongo,
    node,
    express,
    firebase,
  ];

  return (
    <div className="mb-12 md:mb-16 lg:mb-24" id="skills">
      <h2 className="mx-auto mb-12 max-w-max pb-2 text-center text-3xl font-bold tracking-tight md:mb-16 md:text-4xl">
        My Skills
      </h2>
      <Marquee
        className="h-[215px] w-full overflow-hidden"
        direction="left"
        scrollDelay={0}
        pauseOnHover
        speed={130}
      >
        {image.map((img, i) => (
          <div
            key={i}
            className="mx-3 w-[100px] rounded-lg border border-gray-600 p-3 shadow-lg backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-600 md:w-[150px] lg:mx-4"
          >
            <img src={img} loading="lazy" alt="" className="w-full" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SkillsMarquee;
