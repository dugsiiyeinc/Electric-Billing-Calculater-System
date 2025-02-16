// In your App component or wherever you use the routes
import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/components/About";
import Navbar from "./components/Navbar";
import Registration from "./pages/Registration";
const App = () => {
  <Navbar />
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/login",
      element: <Registration />,
    },
  ]);

  return routes;
};

export default App;
