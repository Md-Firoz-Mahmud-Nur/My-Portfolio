import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ParticlesAnimation from "./ParticlesAnimation/ParticlesAnimation.jsx";
import CursorAnimation from "./CursorAnimation/CursorAnimation.jsx";
import Provider from "./Context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <ParticlesAnimation></ParticlesAnimation>
      <CursorAnimation></CursorAnimation>
      <App />
    </Provider>
  </React.StrictMode>,
);
