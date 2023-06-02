import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import Dashboard from "../pages/Dashboard";
import OurMenu from "../pages/OurMenu";
import OurShop from "../pages/OurShop";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import DashboardLayout from "../layouts/DashboardLayout";
import MyCart from "../dashboard/pages/MyCart";
import UserProfile from "../dashboard/pages/UserProfile";
import Reservation from "../dashboard/pages/Reservation";
import PaymentHistory from "../dashboard/pages/PaymentHistory";
import AddReview from "../dashboard/pages/AddReview";
import MyBooking from "../dashboard/pages/MyBooking";
import RequiredLogin from "./private/RequiredLogin";
import AllUsers from "../admin/pages/AllUsers";

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
                path: "/login",
                element: <Login/>
            },
            {
                path: "/sign-up",
                element: <SignUp/>
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
                path: "/our-shop/:categoryName",
                element: <OurShop/>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout/>,
        children: [
            {
                path: "/dashboard/profile",
                element: <RequiredLogin><UserProfile/></RequiredLogin>
            },
            {
                path: "/dashboard/reservation",
                element: <RequiredLogin><Reservation/></RequiredLogin>
            },
            {
                path: "/dashboard/payment-history",
                element: <RequiredLogin><PaymentHistory/></RequiredLogin>
            },
            {
                path: "/dashboard/my-cart",
                element: <RequiredLogin><MyCart/></RequiredLogin>
            },
            {
                path: "/dashboard/reservation",
                element: <RequiredLogin><Reservation/></RequiredLogin>
            },
            {
                path: "/dashboard/add-review",
                element: <RequiredLogin><AddReview/></RequiredLogin>
            },
            {
                path: "/dashboard/my-booking",
                element: <RequiredLogin><MyBooking/></RequiredLogin>
            },
            {
                path: "/dashboard/all-users",
                element: <AllUsers/>
            }
        ]
    }
])

export default Routes