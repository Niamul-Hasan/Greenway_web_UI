
// eslint-disable-next-line no-unused-vars

import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from 'react-icons/fa';
import { AuthContext } from "../../Context/UserContext";
import logo from "../../../assets/logo.png";
import "./Style.css";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navigate = useNavigate();







    const signOut = () => {
        logOut().then(() => {

        }).catch(error => { console.error(error) })
    }



    const navItem = <>

        <li className="font-bold "><NavLink to='/'>
            Home</NavLink></li>


        <li className="font-bold "><NavLink to='/'>Gallery</NavLink></li>
        <li className="font-bold "><NavLink to='/'>Dashboard</NavLink></li>

        <li className="font-bold "><NavLink to='/'>Covid-19</NavLink></li>
        <li className="font-bold "><NavLink to='/'>Career</NavLink></li>

        <li className="font-bold "><NavLink to='/'>About Us</NavLink></li>

        <div className="flex flex-col items-center lg:hidden">
            <li>{user && <span><FaRegUserCircle></FaRegUserCircle>{user?.email || user?.phoneNumber}</span>}</li>
            <li>{user ? <button onClick={signOut} className='btn btn-xs btn-error shadow-xl'>Sign Out</button>
                : <button className='btn btn-sm btn-success' onClick={() => navigate("/lifting")}>Login</button>}</li>
        </div>


    </>

    return (
        <div style={{ height: 'auto' }} className='flex flex-row justify-center items-center w-full sticky top-0 z-20'>
            <div className="navbar bg-gray-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul id='mobilemenu' tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <NavLink to='/' >
                        <div className="flex flex-row justify-around items-center gap-4 bg-gray-200">
                            <div className="">
                                <img src={logo} alt="" className='h-full w-full' style={{ height: "80px", width: "80px" }} />
                            </div>
                            <div className="logo-name flex lg:flex-col lg:items-start flex-row items-center justify-center gap-2 lg:gap-0">
                                <p><span className="greenway"><span style={{ color: "green" }}>G</span>reenway</span></p>
                                <p> <span className="academic"><span style={{ color: "red" }}>I</span>nstitute </span></p>
                            </div>
                        </div>
                    </NavLink>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}

                    </ul>
                </div>

                <div className="navbar-end">
                    <div className="hidden lg:flex flex-col items-center justify-center w-full">
                        {user && <div className="flex flex-row justify-center items-center gap-2"><p><FaRegUserCircle></FaRegUserCircle></p><p>{user?.email || user?.phoneNumber}</p></div>}
                        <p>{user ? <button onClick={signOut} className='btn btn-xs btn-error shadow-xl'>Sign Out</button>
                            : <button className='btn btn-sm btn-success' onClick={() => navigate("/lifting")}>Login</button>}</p>
                    </div>

                    <label htmlFor="dashBoard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;









// // eslint-disable-next-line no-unused-vars
// import React, { useContext } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import "./CSS/Navbar.css";
// import { AuthContext } from '../Contexts/UserContext';
// import { FaRegUserCircle } from 'react-icons/fa';
// // import logo from '../../assets/logo_prevew.png'
// import Loading from './Loading';
// import { useQuery } from '@tanstack/react-query';
// import logo from '../../assets/images/Eco logo.png';

// const Navbar = () => {
//     const { user, logOut } = useContext(AuthContext);
//     const navigate = useNavigate();



//     const { data, isLoading } = useQuery({
//         queryKey: ["catagory"],
//         queryFn: async () => {
//             const res = await fetch(`https://eco-server-ecocraftz.vercel.app/insertedCatagory`);
//             const data = await res.json();
//             return data;
//         }
//     });


//     if (isLoading) {
//         return <Loading></Loading>
//     }



//     const insertedCatagoryList = <>
//         {
//             data.map(item => <li key={item._id}><button onClick={() => handleClicked(item.item)}
//                 type='button' className='uppercase'>{item.item}</button></li>)
//         }
//     </>





//     // const productList = <>
//     //     <li><button onClick={(event) => handleClicked(event.target.value)}
//     //         type='button' value='ladies bag' className='uppercase'>Ladies bag</button></li>
//     //     <li><button onClick={(event) => handleClicked(event.target.value)}
//     //         type='button' value='sataronji' className='uppercase'>sataronji</button></li>
//     //     <li><button onClick={(event) => handleClicked(event.target.value)}
//     //         type='button' value='chandor' className='uppercase'>chandor</button></li>
//     //     <li><button onClick={(event) => handleClicked(event.target.value)}
//     //         type='button' value='papose' className='uppercase'>papose</button></li>
//     //     <li><button onClick={(event) => handleClicked(event.target.value)}
//     //         type='button' value='pot' className='uppercase'>pot</button></li>
//     // </>

//     const handleClicked = (catagory) => {
//         navigate(`/other/${catagory}`)

//     }

//     const signOut = () => {
//         logOut().then(() => {

//         }).catch(error => { console.error(error) })
//     }

//     const navItem = <>

//         {/* <li id='parent' className='lg:border-2 lg:border-black rounded-ss-2xl rounded-ee-2xl mx-1'>
//             <a>Catagory</a>
//             <ul id='onhover' className="p-2">
//                 {productList}
//             </ul>

//         </li> */}
//         <li id='parent' className='lg:border-2 lg:border-black rounded-ss-2xl rounded-ee-2xl mx-1'>
//             <a>Catagory</a>
//             <ul id='onhover' className="p-2">
//                 {insertedCatagoryList}
//             </ul>

//         </li>
//         <li className="font-bold "><NavLink to='/products'>Gallery</NavLink></li>
//         <li className="font-bold " ><NavLink to='/dashboard'>Dashboard</NavLink></li>
//         <li className='lg:border-2 lg:border-black rounded-ss-2xl rounded-ee-2xl mx-1' ><NavLink to='/about'>About Us</NavLink></li>
//         {/* <li><NavLink to='/register'>Register</NavLink></li> */}
//         <li>{user?.email && <span><FaRegUserCircle></FaRegUserCircle> {user?.email}</span>}</li>
//         <li>{user?.email ? <button onClick={signOut} className='btn btn-sm btn-error'>Sign Out</button>
//             : <button className='btn btn-sm btn-success' onClick={() => navigate("/login")}>Login</button>}</li>


//     </>

//     return (
//         <div style={{ height: 'auto' }} className='flex flex-row justify-center items-center w-full sticky top-0 z-20'>
//             <div className="navbar bg-gradient-to-r from-emerald-400 via-cyan-600 to-blue-400 mt-0 w-full z-10">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                         </label>
//                         <ul id='mobilemenu' tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
//                             {navItem}
//                         </ul>
//                     </div>
//                     {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
//                     <div>
//                         <NavLink to='/'>
//                             <img src={logo} alt="" style={{ width: '200px', height: 'auto' }} />
//                         </NavLink>
//                     </div>
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         {navItem}

//                     </ul>
//                 </div>

//                 <div className="navbar-end">

//                     <label htmlFor="dashBoard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </label>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;