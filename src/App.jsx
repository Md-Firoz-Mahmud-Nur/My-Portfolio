import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

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

import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hr from "./Components/Hr";

export default function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = () => {};
  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto">
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
              fullScreen: {
                enable: true,
                zIndex: -10,
              },
              background: { color: "#fff" },
              detectRetina: true,
              fpsLimit: 60,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "bubble",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.2,
                    size: 3,
                  },
                  connect: {
                    distance: 80,
                    lineLinked: {
                      opacity: 0.5,
                    },
                    radius: 60,
                  },
                  grab: {
                    distance: 400,
                    lineLinked: {
                      opacity: 1,
                    },
                  },
                  push: {
                    quantity: 3,
                  },
                  remove: {
                    quantity: 3,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                links: {
                  blink: true,
                  color: "#000",
                  distance: 150,
                  enable: true,
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 3,
                },
                number: {
                  density: {
                    enable: false,
                    width: 1920,
                    height: 1080,
                  },
                  limit: {
                    mode: "delete",
                    value: 20,
                  },
                  value: 15,
                },
                opacity: {
                  value: {
                    min: 0.2,
                    max: 1,
                  },
                  animation: {
                    count: 0,
                    enable: true,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: false,
                    mode: "auto",
                    startValue: "random",
                    destroy: "none",
                  },
                },
                rotate: {
                  animation: {
                    enable: true,
                    speed: 10,
                    sync: false,
                  },
                  direction: "random",
                  random: true,
                  value: 0,
                },
                shape: {
                  options: {
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
            }}
          />
        )}
        <Header></Header>
        <Hr></Hr>
        <Skills></Skills>
        <Hr></Hr>
        <Projects></Projects>
        <Hr></Hr>
        <Education></Education>
        <Hr></Hr>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </>
  );
}
