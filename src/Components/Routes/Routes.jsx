import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../LayOut/LandingPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PhoneSignUp from "../Pages/PhoneSignUp/PhoneSignUp";
import Home from "../Pages/Home/Home";
import LiftingPage from "../Pages/Login/Lifting/LiftingPage";
import IdAuth from "../Pages/Login/TeacherLog/IdAuth";
import StudentInfo from "../Pages/Login/StudentLog/StudentInfo";
import AccountCheck from "../Pages/Login/StudentLog/AccountCheck";
import DashBoardLayout from "../LayOut/DashBoardLayout";
import Dashboard from "../Pages/DashBoard/Dashboard";
import PrivateRoute from "../Pages/Private Route/PrivateRoute";




const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage></LandingPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/lifting',
                element: <LiftingPage></LiftingPage>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/idAuth',
                element: <IdAuth></IdAuth>
            },
            {
                path: '/phoneSign',
                element: <PhoneSignUp></PhoneSignUp>
            },
            {
                path: '/studentInfo',
                element: <StudentInfo></StudentInfo>
            },
            {
                path: '/login',
                element: <Login></Login>
            },


        ]

    },
    {
        path: "dashboard",
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: "dashbordLanding",
                element: <Dashboard></Dashboard>
            },
            {
                path: 'accountCheck',
                element: <AccountCheck />
            },
            {
                path: 'dashbordLanding/accountCheck',
                element: <AccountCheck />
            },
        ]
    }
]);

export default router;