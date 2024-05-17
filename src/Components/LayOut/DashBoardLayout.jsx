import { NavLink, Outlet } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";

const navItem = <>
    <li>
        <NavLink to="/">
            <AiOutlineHome />
            Home </NavLink> </li>
    <li> <NavLink to="/dashboard/dashbordLanding">
        <MdDashboard />
        Dashboard </NavLink></li>
    <li> <NavLink to="/dashboard/accountCheck">
        <FaUser />
        Profile </NavLink>
    </li>

</>
const DashBoardLayout = () => {
    return (
        <div >

            <div className="drawer">
                <input id="dashBoard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="dashBoard-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">Navbar Title</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal gap-4">
                                {/* Navbar menu content here */}
                                {navItem}
                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashBoard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-green-400 gap-2">
                        {/* Sidebar content here */}
                        {navItem}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default DashBoardLayout;