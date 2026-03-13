import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Contact from "./Components/Contact.jsx";
import Provider from "./Context/Context.jsx";
import CursorAnimation from "./CursorAnimation/CursorAnimation.jsx";
import ErrorPage from "./ErrorPage.jsx";
import "./index.css";
import AllProject from "./Pages/AllProject.jsx";
import ParticlesAnimation from "./ParticlesAnimation/ParticlesAnimation.jsx";
import Root from "./Root.jsx";
import { StarsCanvas } from "./StarsCanvas/starBackground.jsx";

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
            <AllProject></AllProject>
          </div>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/fifco",
        element: (
          <div className="flex h-screen w-full items-center justify-center bg-amber-50 text-6xl">
            FIFCO Website
          </div>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <StarsCanvas></StarsCanvas>
      <ParticlesAnimation></ParticlesAnimation>
      <CursorAnimation></CursorAnimation>
      {/* <App /> */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
