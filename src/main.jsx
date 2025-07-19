import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ParticlesAnimation from "./ParticlesAnimation/ParticlesAnimation.jsx";
import CursorAnimation from "./CursorAnimation/CursorAnimation.jsx";
import Provider from "./Context/Context.jsx";
import Contact from "./Components/Contact.jsx";
import Root from "./Root.jsx";
import ErrorPage from "./ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./Components/Projects.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/projects",
        element: (
          <div className="py-10">
            <Projects></Projects>
          </div>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <ParticlesAnimation></ParticlesAnimation>
      <CursorAnimation></CursorAnimation>
      {/* <App /> */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
