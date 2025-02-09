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
// import bootstrapIcon from "../src/assets/particles/bootstrapIcon.svg";
// import bootstrapIcon from "/src/assets/particles/bootstrapIcon.svg";
// import bootstrapIcon from "./assets/particles/bootstrapIcon.svg";
// import bootstrapIcon from "/src/assets/particles/bootstrapIcon.svg";

// import bootstrapIcon from "/assets/particles/bootstrapIcon.svg";
// console.log("Bootstrap Icon Path:", bootstrapIcon);

console.log(
  // bootstrapIcon,
  cssIcon,
  wordpress,
  shopify,
  htmlIcon,
  jsIcon,
  nodeIcon,
  reactIcon,
  sassIcon,
  typescriptIcon,
  vueIcon,
);

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
            detectRetina: true,
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onDiv: {
                  elementId: "repulse-div",
                  enable: false,
                  mode: "repulse",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 2,
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
                  quantity: 2,
                },
                remove: {
                  quantity: 2,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#0ff",
              },
              lineLinked: {
                blink: false,
                color: "#000",
                consent: false,
                distance: 150,
                enable: false,
                opacity: 0.4,
                width: 1,
              },
              links: {
                color: "#f00",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                attract: {
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
                bounce: false,
                direction: "none",
                enable: true,
                outMode: "out",
                random: false,
                speed: 3,
                straight: false,

                // outModes: {
                //   default: "bounce",
                // },
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                // value: 80,
                // limit: 20,
                value: 80,
              },
              opacity: {
                // value: 0.5,
                animation: {
                  enable: true,
                  minimumValue: 0.2,
                  speed: 1,
                  sync: false,
                },
                random: true,
                value: 1,
              },
              rotate: {
                animation: {
                  enable: true,
                  speed: 5,
                  sync: false,
                },
                direction: "random",
                random: true,
                value: 0,
              },
              shape: {
                character: {
                  fill: false,
                  font: "Verdana",
                  style: "",
                  value: "*",
                  weight: "400",
                },
                options: {
                  image: [
                    {
                      // src: bootstrapIcon,
                      src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
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
                polygon: {
                  sides: 5,
                },
                stroke: {
                  color: "#ff0000",
                  width: 0,
                },
                type: "image",
              },

              // shape: {
              //   type: "image",
              //   options:{image: [
              //     {
              //       src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
              //       width: 32,
              //       height: 32,
              //     },
              //   ],},

              // },

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
            polygon: {
              draw: {
                enable: false,
                lineColor: "#ffffff",
                lineWidth: 0.5,
              },
              move: {
                radius: 10,
              },
              scale: 1,
              url: "",
            },
            // background: {
            //   color: {
            //     value: "#fff",
            //   },
            // },
            background: {
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
            },
          }}
          // options={{
          //   autoPlay: true,
          //   background: {
          //     color: {
          //       value: "#fff",
          //     },
          //     image: "",
          //     position: "",
          //     repeat: "",
          //     size: "",
          //     opacity: 1,
          //   },
          //   backgroundMask: {
          //     composite: "destination-out",
          //     cover: {
          //       opacity: 1,
          //       color: {
          //         value: "",
          //       },
          //     },
          //     enable: false,
          //   },
          //   clear: true,
          //   defaultThemes: {},
          //   delay: 0,
          //   fullScreen: {
          //     enable: true,
          //     zIndex: -10,
          //   },
          //   detectRetina: true,
          //   duration: 0,
          //   fpsLimit: 120,
          //   interactivity: {
          //     detectsOn: "window",
          //     events: {
          //       onClick: {
          //         enable: true,
          //         mode: "push",
          //       },
          //       onDiv: {
          //         selectors: {},
          //         enable: false,
          //         mode: {},
          //         type: "circle",
          //       },
          //       onHover: {
          //         enable: true,
          //         mode: "bubble",
          //         parallax: {
          //           enable: false,
          //           force: 60,
          //           smooth: 10,
          //         },
          //       },
          //       resize: {
          //         delay: 0.5,
          //         enable: true,
          //       },
          //     },
          //     modes: {
          //       trail: {
          //         delay: 1,
          //         pauseOnStop: false,
          //         quantity: 1,
          //       },
          //       attract: {
          //         distance: 200,
          //         duration: 0.4,
          //         easing: "ease-out-quad",
          //         factor: 1,
          //         maxSpeed: 50,
          //         speed: 1,
          //       },
          //       bounce: {
          //         distance: 200,
          //       },
          //       bubble: {
          //         distance: 400,
          //         duration: 2,
          //         mix: true,
          //         opacity: 0.8,
          //         color: {
          //           value: "#ff0000",
          //         },
          //         size: 40,
          //         divs: {
          //           distance: 200,
          //           duration: 0.4,
          //           mix: false,
          //           selectors: {},
          //         },
          //       },
          //       connect: {
          //         distance: 80,
          //         links: {
          //           opacity: 0.5,
          //         },
          //         radius: 60,
          //       },
          //       grab: {
          //         distance: 400,
          //         links: {
          //           blink: false,
          //           consent: false,
          //           opacity: 1,
          //         },
          //       },
          //       push: {
          //         default: true,
          //         groups: [],
          //         quantity: 4,
          //       },
          //       remove: {
          //         quantity: 2,
          //       },
          //       repulse: {
          //         distance: 200,
          //         duration: 0.4,
          //         factor: 100,
          //         speed: 1,
          //         maxSpeed: 50,
          //         easing: "ease-out-quad",
          //         divs: {
          //           distance: 200,
          //           duration: 0.4,
          //           factor: 100,
          //           speed: 1,
          //           maxSpeed: 50,
          //           easing: "ease-out-quad",
          //           selectors: {},
          //         },
          //       },
          //       slow: {
          //         factor: 3,
          //         radius: 200,
          //       },
          //       particle: {
          //         replaceCursor: false,
          //         pauseOnStop: false,
          //         stopDelay: 0,
          //       },
          //       light: {
          //         area: {
          //           gradient: {
          //             start: {
          //               value: "#ffffff",
          //             },
          //             stop: {
          //               value: "#000000",
          //             },
          //           },
          //           radius: 1000,
          //         },
          //         shadow: {
          //           color: {
          //             value: "#000000",
          //           },
          //           length: 2000,
          //         },
          //       },
          //     },
          //   },
          //   manualParticles: [],
          //   particles: {
          //     bounce: {
          //       horizontal: {
          //         value: 1,
          //       },
          //       vertical: {
          //         value: 1,
          //       },
          //     },
          //     collisions: {
          //       absorb: {
          //         speed: 2,
          //       },
          //       bounce: {
          //         horizontal: {
          //           value: 1,
          //         },
          //         vertical: {
          //           value: 1,
          //         },
          //       },
          //       enable: false,
          //       maxSpeed: 50,
          //       mode: "bounce",
          //       overlap: {
          //         enable: true,
          //         retries: 0,
          //       },
          //     },
          //     color: {
          //       value: "#1b1e34",
          //       animation: {
          //         h: {
          //           count: 0,
          //           enable: false,
          //           speed: 1,
          //           decay: 0,
          //           delay: 0,
          //           sync: true,
          //           offset: 0,
          //         },
          //         s: {
          //           count: 0,
          //           enable: false,
          //           speed: 1,
          //           decay: 0,
          //           delay: 0,
          //           sync: true,
          //           offset: 0,
          //         },
          //         l: {
          //           count: 0,
          //           enable: false,
          //           speed: 1,
          //           decay: 0,
          //           delay: 0,
          //           sync: true,
          //           offset: 0,
          //         },
          //       },
          //     },
          //     effect: {
          //       close: true,
          //       fill: true,
          //       options: {},
          //       type: {},
          //     },
          //     groups: [],
          //     move: {
          //       angle: {
          //         offset: 0,
          //         value: 90,
          //       },
          //       attract: {
          //         distance: 200,
          //         enable: false,
          //         rotate: {
          //           x: 3000,
          //           y: 3000,
          //         },
          //       },
          //       center: {
          //         x: 50,
          //         y: 50,
          //         mode: "percent",
          //         radius: 0,
          //       },
          //       decay: 0,
          //       distance: {},
          //       direction: "none",
          //       drift: 0,
          //       enable: true,
          //       gravity: {
          //         acceleration: 9.81,
          //         enable: false,
          //         inverse: false,
          //         maxSpeed: 50,
          //       },
          //       path: {
          //         clamp: true,
          //         delay: {
          //           value: 0,
          //         },
          //         enable: false,
          //         options: {},
          //       },
          //       outModes: {
          //         default: "out",
          //         bottom: "out",
          //         left: "out",
          //         right: "out",
          //         top: "out",
          //       },
          //       random: false,
          //       size: false,
          //       speed: 8,
          //       spin: {
          //         acceleration: 0,
          //         enable: false,
          //       },
          //       straight: false,
          //       trail: {
          //         enable: false,
          //         length: 10,
          //         fill: {},
          //       },
          //       vibrate: false,
          //       warp: false,
          //     },
          //     number: {
          //       density: {
          //         enable: true,
          //         width: 1920,
          //         height: 1080,
          //       },
          //       limit: {
          //         mode: "delete",
          //         value: 0,
          //       },
          //       value: 6,
          //     },
          //     opacity: {
          //       value: {
          //         min: 0.3,
          //         max: 0.5,
          //       },
          //       animation: {
          //         count: 0,
          //         enable: false,
          //         speed: 2,
          //         decay: 0,
          //         delay: 0,
          //         sync: false,
          //         mode: "auto",
          //         startValue: "random",
          //         destroy: "none",
          //       },
          //     },
          //     reduceDuplicates: false,
          //     shadow: {
          //       blur: 0,
          //       color: {
          //         value: "#000",
          //       },
          //       enable: false,
          //       offset: {
          //         x: 0,
          //         y: 0,
          //       },
          //     },
          //     shape: {
          //       close: true,
          //       fill: true,
          //       options: {
          //         polygon: {
          //           sides: 6,
          //         },
          //         image: [
          //           {
          //             src: cssIcon,
          //             width: 20,
          //             height: 20,
          //           },
          //           {
          //             src: wordpress,
          //             width: 20,
          //             height: 20,
          //           },
          //         ],
          //       },

          //       type: "image",
          //     },
          //     size: {
          //       value: {
          //         min: 100,
          //         max: 160,
          //       },
          //       animation: {
          //         count: 0,
          //         enable: false,
          //         speed: 5,
          //         decay: 0,
          //         delay: 0,
          //         sync: false,
          //         mode: "auto",
          //         startValue: "random",
          //         destroy: "none",
          //       },
          //     },
          //     stroke: {
          //       width: 0,
          //     },
          //     zIndex: {
          //       value: 0,
          //       opacityRate: 1,
          //       sizeRate: 1,
          //       velocityRate: 1,
          //     },
          //     destroy: {
          //       bounds: {},
          //       mode: "none",
          //       split: {
          //         count: 1,
          //         factor: {
          //           value: 3,
          //         },
          //         rate: {
          //           value: {
          //             min: 4,
          //             max: 9,
          //           },
          //         },
          //         sizeOffset: true,
          //         particles: {},
          //       },
          //     },
          //     roll: {
          //       darken: {
          //         enable: false,
          //         value: 0,
          //       },
          //       enable: false,
          //       enlighten: {
          //         enable: false,
          //         value: 0,
          //       },
          //       mode: "vertical",
          //       speed: 25,
          //     },
          //     tilt: {
          //       value: 0,
          //       animation: {
          //         enable: false,
          //         speed: 0,
          //         decay: 0,
          //         sync: false,
          //       },
          //       direction: "clockwise",
          //       enable: false,
          //     },
          //     twinkle: {
          //       lines: {
          //         enable: false,
          //         frequency: 0.05,
          //         opacity: 1,
          //       },
          //       particles: {
          //         enable: false,
          //         frequency: 0.05,
          //         opacity: 1,
          //       },
          //     },
          //     wobble: {
          //       distance: 5,
          //       enable: false,
          //       speed: {
          //         angle: 50,
          //         move: 10,
          //       },
          //     },
          //     life: {
          //       count: 0,
          //       delay: {
          //         value: 0,
          //         sync: false,
          //       },
          //       duration: {
          //         value: 0,
          //         sync: false,
          //       },
          //     },
          //     rotate: {
          //       value: 0,
          //       animation: {
          //         enable: false,
          //         speed: 0,
          //         decay: 0,
          //         sync: false,
          //       },
          //       direction: "clockwise",
          //       path: false,
          //     },
          //     orbit: {
          //       animation: {
          //         count: 0,
          //         enable: false,
          //         speed: 1,
          //         decay: 0,
          //         delay: 0,
          //         sync: false,
          //       },
          //       enable: false,
          //       opacity: 1,
          //       rotation: {
          //         value: 45,
          //       },
          //       width: 1,
          //     },
          //     links: {
          //       blink: false,
          //       color: {
          //         value: "#ffffff",
          //       },
          //       consent: false,
          //       distance: 200,
          //       enable: false,
          //       frequency: 1,
          //       opacity: 1,
          //       shadow: {
          //         blur: 5,
          //         color: {
          //           value: "#000",
          //         },
          //         enable: false,
          //       },
          //       triangles: {
          //         enable: false,
          //         frequency: 1,
          //       },
          //       width: 2,
          //       warp: false,
          //     },
          //     repulse: {
          //       value: 0,
          //       enabled: false,
          //       distance: 1,
          //       duration: 1,
          //       factor: 1,
          //       speed: 1,
          //     },
          //   },
          //   pauseOnBlur: true,
          //   pauseOnOutsideViewport: true,
          //   responsive: [],
          //   smooth: false,
          //   style: {},
          //   themes: [],
          //   zLayers: 100,
          //   key: "bubble",
          //   name: "Bubble",
          //   motion: {
          //     disable: false,
          //     reduce: {
          //       factor: 4,
          //       value: true,
          //     },
          //   },
          // }}
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
