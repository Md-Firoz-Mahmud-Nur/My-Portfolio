import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AnimatedCursor from "react-animated-cursor";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimatedCursor
      innerSize={0}
      color="#000"
      outerSize={24}
      showSystemCursor={true}
      trailingSpeed={5}
      outerStyle={{
        border: "2px solid #707070",
      }}
      clickables={[{ target: ".custom" }]}
    />
    <App />
  </React.StrictMode>,
);
