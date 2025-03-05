import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/Home";
import About from "./pages/About";
import BillingCalculator from "./components/BillingCalculator";
import Login from "./pages/Login";
import ProfilePage from "./components/profile Management/ProfilePage";
import SavedData from "./pages/SavedData";
import ProtectedRoutes from "./ProtectedRoutes";
import Registration from "./pages/Registration";


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
                element: <ProtectedRoutes element={<SavedData />}/>

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
                path:"/register",
                element:<Registration/>
            },
            {
                path:"/profile",
                element:<ProfilePage />

            }
        ]

    }
]);

export default router;
