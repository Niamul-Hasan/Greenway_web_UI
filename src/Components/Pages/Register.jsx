// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/UserContext';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import useToken from './Hooks/useToken';
import { TiWarning } from "react-icons/ti";

const Register = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const [isHovering, setIsHovering] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [registerError, setRegisterError] = useState('');

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        // const name= form.name.value;
        const email = form.email.value;
        const password = form.password.value;


        console.log(email, password);
        createUser(email, password).then(result => {
            const user = result.user;
            setUser(user);
            console.log('registered user', user)
        })
            .catch(error => {
                setRegisterError(error);
            })
    }
    const [token] = useToken(user)
    useEffect(() => {
        if (token) {
            console.log("after geting token", user); //it is for checking purpose
            navigate('/');
        }
    }, [token, navigate, user])

    const handleGoogle = () => {
        signInWithGoogle().then(result => {
            const user = result.user;
            setUser(user);
            console.log(user);
        }).catch(error => console.error(error));
    }
    return (
        <div className='mt-5'>
            <div className="flex flex-col w-full lg:flex-row justify-center items-center gap-4">
                <div className="">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-5">Register Now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password(Minimum 6 Charecters)</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <h1 className='text-green-500 text-sm mt-2'>I Have Already An Account.
                                <span className='link text-blue-600 ms-2' onClick={() => navigate('/login')}>Login</span></h1>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                                {registerError && <h1>Something Went worng. May be this email is used before </h1>}

                            </div>
                        </form>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-col gap-4 items-center'>
                        <div className='btn btn-warning'>
                            <span className='text-4xl text-red-500'><TiWarning></TiWarning></span>  You must register with your valid E-mail address to become an admin.
                        </div>
                        <div><Link to="/phoneSign"><button className="btn btn-success">Register with Phone Number</button>
                        </Link></div>
                    </div>

                    <div className="divider">OR</div>
                    <div><button onClick={handleGoogle} className="btn mb-2"
                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                        style={{
                            backgroundColor: isHovering ? 'gray' : 'black',
                            color: isHovering ? 'black' : 'white',
                        }}
                    >
                        <span className='text-2xl ms-4'><FcGoogle></FcGoogle></span>
                        Register With Google</button></div>
                </div>
            </div>
        </div>
    );
};

export default Register;