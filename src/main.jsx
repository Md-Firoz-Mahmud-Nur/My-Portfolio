import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ParticlesAnimation from "./ParticlesAnimation/ParticlesAnimation.jsx";
import CursorAnimation from "./CursorAnimation/CursorAnimation.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParticlesAnimation></ParticlesAnimation>
    <CursorAnimation></CursorAnimation>
    <App />
  </React.StrictMode>,
);
