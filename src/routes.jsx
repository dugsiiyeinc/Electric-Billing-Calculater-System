import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/Home";
import About from "./pages/About";
import BillingApp from "./components/billing History/BillingApp";
import BillingCalculator from "./components/BillingCalculator";
import Login from "./pages/Login";
import ProfilePage from "./components/profile Management/ProfilePage";


const router =  createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {
                index:true,
                element:<HomePage />
            },
            {
                path:"/about",
                element:<About />

            },
            {
                path:"/savedData",
                element:<BillingApp />

            },
            {
                path:"/billingCalculator",
                element:<BillingCalculator />

            },
            {
                path:"/login",
                element:<Login />

            },
            {
                path:"/profile",
                element:<ProfilePage />

            }
        ]

    }
]);

export default router;
