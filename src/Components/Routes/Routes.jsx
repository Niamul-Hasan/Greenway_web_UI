import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../LayOut/LandingPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PhoneSignUp from "../Pages/PhoneSignUp/PhoneSignUp";
import Home from "../Pages/Home/Home";
import LiftingPage from "../Pages/Login/Lifting/LiftingPage";
import IdAuth from "../Pages/Login/TeacherLog/IdAuth";




const router = createBrowserRouter([{
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


    ]

}]);

export default router;