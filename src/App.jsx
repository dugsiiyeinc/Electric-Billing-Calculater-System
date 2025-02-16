// In your App component or wherever you use the routes
import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/components/About";
import Navbar from "./components/Navbar";
import BillingCalculater from "./components/BillingCalculater";
const App = () => {
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
      path: "/billing-calculater",
      element: <BillingCalculater />,
    },
  ]);

  return routes;
};

export default App;
