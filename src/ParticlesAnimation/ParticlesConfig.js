import bootstrapIcon from "../assets/particles/bootstrapIcon.svg";
import cssIcon from "../assets/particles/cssIcon.svg";
import htmlIcon from "../assets/particles/htmlIcon.svg";
import jsIcon from "../assets/particles/jsIcon.svg";
import nodeIcon from "../assets/particles/nodeIcon.svg";
import reactIcon from "../assets/particles/reactIcon.svg";
import sassIcon from "../assets/particles/sassIcon.svg";
import shopify from "../assets/particles/shopifyIcon.svg";
import typescriptIcon from "../assets/particles/typescriptIcon.svg";
import vueIcon from "../assets/particles/vueIcon.svg";
import wordpress from "../assets/particles/wordpressIcon.svg";

const ParticlesConfig = {
  fullScreen: {
    enable: true,
    zIndex: -10,
  },
  // background: { color: "#fff" },
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
};

export default ParticlesConfig;
