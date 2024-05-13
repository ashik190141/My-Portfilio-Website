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
import AuthProvider from "./Provider/AuthProvider";
import SignUp from "./Authentication/SignUp/SignUp";
import LogIn from './Authentication/LogIn/LogIn';
import DashboardLayout from "./Layout/DashboardLayout";
import AddSkill from './Dashboard/AddSkill/AddSkill';
import AddPost from './Dashboard/AddPost/AddPost';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://portfolio-server-six-gamma.vercel.app/home/projects"),
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
        element: <Blog></Blog>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
        loader: () =>
          fetch("https://portfolio-server-six-gamma.vercel.app/projects"),
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails></ProjectDetails>,
        loader: ({ params }) =>
          fetch(
            `https://portfolio-server-six-gamma.vercel.app/projects/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/logIn",
    element: <LogIn></LogIn>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "add-skill",
        element: <AddSkill></AddSkill>,
      },
      {
        path: "add-blog",
        element: <AddPost></AddPost>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
);
