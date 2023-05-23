import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import Dashboard from "../pages/Dashboard";
import OurMenu from "../pages/OurMenu";
import OurShop from "../pages/OurShop";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/contact-us",
                element: <ContactUs/>
            },
            {
                path: "/dashboard",
                element: <Dashboard/>
            },
            {
                path: "/our-menu",
                element: <OurMenu/>
            },
            {
                path: "/our-shop",
                element: <OurShop/>
            }
        ]
    }
])

export default Routes