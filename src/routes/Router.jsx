import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood/OrderFood";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRouter from "./PrivateRouter";
import DashBoard from "../layouts/DashBoard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import Payment from "../Pages/Dashboard/Payment/Payment";
import AddReview from "../Pages/Dashboard/AddReview/AddReview";
import MyBookings from "../Pages/Dashboard/MyBookings/MyBookings";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/menu",
                element: <Menu />
            },
            {
                path: '/order',
                element: <OrderFood />
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },

        ]
    },
    {
        path: "dashboard",
        element: <PrivateRouter><DashBoard /></PrivateRouter>,
        children: [
            {
                path: 'user-home',
                element: <UserHome />
            },
            {
                path: 'add-item',
                element: <AdminRoute><AddItems /></AdminRoute>
            },
            {
                path: 'reservation',
                element: <Reservation />
            },
            {
                path: 'payment-history',
                element: < Payment />
            },
            {
                path: 'my-cart',
                element: <MyCart />
            },
            {
                path: 'add-review',
                element: <AddReview />
            },
            {
                path: 'bookings',
                element: <MyBookings />
            },
            {
                path: "admin-home",
                element: <AdminHome />
            },
            {
                path: "all-users",
                element: <AllUser />
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage />
    }
]) 