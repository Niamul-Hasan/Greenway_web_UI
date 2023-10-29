import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/UserContext";
import useToken from "../../Hooks/useToken";
import { useNavigate } from "react-router-dom";
const StudentInfo = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    console.log(user);
    const [token] = useToken(user);
    useEffect(() => {
        if (token) {
            console.log("after geting token", user, token); //it is for checking purpose

        }
    }, [token, navigate, user])
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-row justify-center">
                    <div className="card w-full bg-primary">
                        <div className="card-body">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                    style={{ border: "1px solid black" }}
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        },
                                        minLength: {
                                            value: 3,
                                            message: 'Minimum 3 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Father&#39;s Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Father's Name"
                                    className="input input-bordered w-full max-w-xs"
                                    style={{ border: "1px solid black" }}
                                    {...register("Fathername", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        },
                                        minLength: {
                                            value: 3,
                                            message: 'Minimum 3 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.Fathername?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Fathername.message}</span>}
                                    {errors.Fathername?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.Fathername.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Mother&#39;s Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Mothers Name"
                                    className="input input-bordered w-full max-w-xs"
                                    style={{ border: "1px solid black" }}
                                    {...register("Mothername", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        },
                                        minLength: {
                                            value: 3,
                                            message: 'Minimum 3 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.Mothername?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Mothername.message}</span>}
                                    {errors.Mothername?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.Mothername.message}</span>}
                                </label>
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Gender</span>
                                </label>
                                <select
                                    className="input input-bordered w-full max-w-xs"
                                    style={{ border: "1px solid black" }}
                                    {...register("gender", {
                                        required: {
                                            value: true,
                                            message: 'Gender is Required'
                                        },
                                    }
                                    )}>
                                    <option value="N/A">Select your gender</option>
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                                </select>

                                <label className="label">
                                    {errors.gender?.type === 'required' && <span className="label-text-alt text-red-500">{errors.gender.message}</span>}
                                </label>
                            </div>


                        </div>
                    </div>


                    <div className="card w-full bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Cookies!</h2>
                            <p>We are using cookies for no reason.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Accept</button>
                                <button className="btn btn-ghost">Deny</button>
                            </div>
                        </div>
                    </div>


                </div>

                <input className="btn btn-sm btn-success" type="submit" />
            </form>







        </div>
    );
};

export default StudentInfo;