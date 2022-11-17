import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import StartReact from "./components/StartReact/StartReact";
import Portfolio from "./components/Portfolio/Portfolio";

import "./App.css";
import Contact from "./components/Contact/Contact";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import MainLayout from "./components/MainLayout/MainLayout";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <StartReact /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
