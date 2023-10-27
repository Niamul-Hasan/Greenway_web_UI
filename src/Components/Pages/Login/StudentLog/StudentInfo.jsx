import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/UserContext";
const StudentInfo = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
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
                                    <span className="label-text">Name</span>
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
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>

                            <input type="submit" />
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


            </form>







        </div>
    );
};

export default StudentInfo;