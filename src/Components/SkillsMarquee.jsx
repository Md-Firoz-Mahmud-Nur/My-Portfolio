import { useContext } from "react";
import Marquee from "react-fast-marquee";
import css3 from "../assets/css3.png";
import express from "../assets/express.png";
import firebase from "../assets/firebase.png";
import html5 from "../assets/html5.png";
import js from "../assets/js.png";
import mongo from "../assets/mongo.png";
import nextJS from "../assets/nextJS.png";
import node from "../assets/node.png";
import postgresql from "../assets/postgresql.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";
import { Context } from "../Context/Context";

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
    nextJS,
    redux,
    typescript,
    postgresql,
  ];

  const { isDark } = useContext(Context);

  return (
    <div className="mb-12 md:mb-16 lg:mb-24" id="skills">
      <h2 className="mx-auto mb-12 max-w-max pb-2 text-center text-3xl font-bold tracking-tight backdrop-blur-lg md:mb-16 md:text-4xl">
        My Skills
      </h2>
      <Marquee
        className="h-53.75 w-full overflow-hidden"
        direction="left"
        scrollDelay={0}
        pauseOnHover
        speed={130}
        gradient={true}
        gradientColor={
          isDark === "dark" ? "rgba(29,35,42,1)" : "rgba(255,255,255,1)"
        }
        gradientWidth={100}
      >
        {image.map((img, i) => (
          <div
            key={i}
            className="mx-3 w-25 rounded-lg border p-3 shadow-lg backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-600 md:w-37.5 lg:mx-4"
          >
            <img src={img} loading="lazy" alt="" className="w-full" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SkillsMarquee;
