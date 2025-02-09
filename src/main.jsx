import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AnimatedCursor from "react-animated-cursor";
import ParticlesAnimation from "./ParticlesAnimation/ParticlesAnimation.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParticlesAnimation></ParticlesAnimation>
    <AnimatedCursor
      innerSize={6}
      outerSize={24}
      outerScale={2}
      outerAlpha={0}
      showSystemCursor={true}
      trailingSpeed={7}
      innerStyle={{
        backgroundColor: "#fff",
        mixBlendMode: "difference",
        boxShadow: "0 0 0 .5px #fff",
      }}
      outerStyle={{
        backgroundColor: "transparent",
        mixBlendMode: "exclusion",
        boxShadow: "0 0 0 2px #fff",
      }}
    />
    <App />
  </React.StrictMode>,
);
