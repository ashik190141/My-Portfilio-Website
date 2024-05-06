import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Home/Home";
import About from "./About/About";
import ContactUs from "./Contact_us/ContactUs";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import ProjectDetails from "./Projects/ProjectDetails";
import Blog from "./Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/home/projects"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/skills",
        element: <Skills></Skills>,
      },
      {
        path: "/blog",
        element:<Blog></Blog>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
        loader: () => fetch("http://localhost:5000/projects"),
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails></ProjectDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/projects/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
