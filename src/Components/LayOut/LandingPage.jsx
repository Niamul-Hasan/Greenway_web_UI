// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from "../Pages/SharedPages/Navbar";
import { Outlet } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>


        </div>
    );
};

export default LandingPage;