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
import AddReview from "../Pages/Dashboard/AddReview/AddReview";
import MyBookings from "../Pages/Dashboard/MyBookings/MyBookings";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import ManageBookings from "../Pages/Dashboard/ManageBookings/ManageBookings";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";


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
                path: "admin-home",
                element: <AdminRoute><AdminHome /></AdminRoute>
            },
            {
                path: "all-users",
                element: <AdminRoute><AllUser /></AdminRoute>
            },
            {
                path: 'add-item',
                element: <AdminRoute><AddItems /></AdminRoute>
            },
            {
                path: 'manage-item',
                element: <AdminRoute><ManageItems /></AdminRoute>
            },
            {
                path: 'manage-bookings',
                element: <AdminRoute><ManageBookings /></AdminRoute>
            },

            {
                path: 'user-home',
                element: <UserHome />
            },

            {
                path: 'reservation',
                element: <Reservation />
            },
            {
                path: 'payment-history',
                element: < PaymentHistory />
            },
            {
                path: 'payment',
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

        ]
    },
    {
        path: "*",
        element: <ErrorPage />
    }
]) 