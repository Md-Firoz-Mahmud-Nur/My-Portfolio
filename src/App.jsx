import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hr from "./Components/Hr";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

import wordpress from "../src/assets/particles/wordpressIcon.svg";
import shopify from "../src/assets/particles/shopifyIcon.svg";
import htmlIcon from "../src/assets/particles/htmlIcon.svg";
import cssIcon from "../src/assets/particles/cssIcon.svg";
import sassIcon from "../src/assets/particles/sassIcon.svg";
import jsIcon from "../src/assets/particles/jsIcon.svg";
import nodeIcon from "../src/assets/particles/nodeIcon.svg";
import reactIcon from "../src/assets/particles/reactIcon.svg";
import typescriptIcon from "../src/assets/particles/typescriptIcon.svg";
import vueIcon from "../src/assets/particles/vueIcon.svg";
import bootstrapIcon from "../src/assets/particles/bootstrapIcon.svg";

export default function App() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="container mx-auto">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: {
              enable: true,
              zIndex: -1,
            },
            background: {
              color: {
                value: "#fff",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#f00",
              },
              links: {
                color: "#000",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                character: {
                  fill: false,
                  font: "Verdana",
                  style: "",
                  value: "*",
                  weight: "400",
                },
                image: [
                  {
                    src: bootstrapIcon,
                    width: 20,
                    height: 20,
                  },
                  {
                    src: cssIcon,
                    width: 20,
                    height: 20,
                  },
                  {
                    src: wordpress,
                    width: 20,
                    height: 20,
                  },
                  {
                    src: shopify,
                    width: 20,
                    height: 20,
                  },
                  {
                    src: htmlIcon,
                    width: 20,
                    height: 20,
                  },
                  {
                    src: jsIcon,
                    width: 20,
                    height: 20,
                  },
                  {
                    src: nodeIcon,
                    width: 20,
                    height: 20,
                  },
                  {
                    src: reactIcon,
                    width: 20,
                    height: 20,
                  },
                  {
                    src: sassIcon,
                    width: 20,
                    height: 20,
                  },
                  {
                    src: typescriptIcon,
                    width: 20,
                    height: 20,
                  },
                  {
                    src: vueIcon,
                    width: 20,
                    height: 20,
                  },
                ],
                polygon: {
                  sides: 5,
                },
                stroke: {
                  color: "#000000",
                  width: 0,
                },
                type: "image",
              },
              size: {
                animation: {
                  enable: false,
                  minimumValue: 0.1,
                  speed: 40,
                  sync: false,
                },
                random: false,
                value: 16,
              },
            },
            detectRetina: true,
          }}
        />
      )}
      <Navbar></Navbar>
      <Header></Header>
      <Hr></Hr>
      <Skills></Skills>
      <Hr></Hr>
      <Projects></Projects>
      <Hr></Hr>
      <Education></Education>
      <Hr></Hr>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
