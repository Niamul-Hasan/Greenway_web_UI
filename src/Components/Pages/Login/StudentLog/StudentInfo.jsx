import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/UserContext";
import useToken from "../../Hooks/useToken";
const StudentInfo = () => {
    const { user } = useContext(AuthContext);
    const [token] = useToken(user);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => { if (token) console.log(data); }

    return (
        // this is the main div 
        <div className="bg-gradient-to-r from-indigo-800 via-violet-700 to-cyan-800">
            <h1 className="text-center p-5 font-sans font-semibold text-2xl text-orange-400 uppercase">
                Please fill up all fields and submit your details</h1>

            <div className="p-4 "> {/* it is for form wraping div  */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-row justify-center gap-4">
                        {/* it is for first part of form input field  */}
                        <div className="card w-3/4 glass">
                            <div className="card-body items-center">
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
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-white">{errors.name.message}</span>}
                                        {errors.name?.type === 'minLength' && <span className="label-text-alt text-white">{errors.name.message}</span>}
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
                                        {errors.Fathername?.type === 'required' && <span className="label-text-alt text-white">{errors.Fathername.message}</span>}
                                        {errors.Fathername?.type === 'minLength' && <span className="label-text-alt text-white">{errors.Fathername.message}</span>}
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
                                        {errors.Mothername?.type === 'required' && <span className="label-text-alt text-white">{errors.Mothername.message}</span>}
                                        {errors.Mothername?.type === 'minLength' && <span className="label-text-alt text-white">{errors.Mothername.message}</span>}
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
                                        <option value="male">male</option>
                                        <option value="female">female</option>
                                    </select>

                                    <label className="label">
                                        {errors.gender?.type === 'required' && <span className="label-text-alt text-white">{errors.gender.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Primary Contact Number</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={user.phoneNumber}
                                        className="input input-bordered w-full max-w-xs"
                                        style={{ border: "1px solid black" }}
                                        {...register("primaryContact", {
                                            required: {
                                                value: true,
                                            },

                                        })}
                                    />

                                </div>


                            </div>
                        </div>

                        {/* it is for second part of form input field  */}
                        <div className="card w-3/4 glass">
                            <div className="card-body">
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Your School/College Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="School/College"
                                        className="input input-bordered w-full max-w-xs"
                                        style={{ border: "1px solid black" }}
                                        {...register("institute", {
                                            required: {
                                                value: true,
                                                message: 'School/College Name is Required'
                                            },
                                            minLength: {
                                                value: 10,
                                                message: 'Minimum 10 characters or longer'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.institute?.type === 'required' && <span className="label-text-alt text-white">{errors.institute.message}</span>}
                                        {errors.institute?.type === 'minLength' && <span className="label-text-alt text-white">{errors.institute.message}</span>}
                                    </label>
                                </div>


                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Select Class</span>
                                    </label>
                                    <select
                                        className="input input-bordered w-full max-w-xs"
                                        style={{ border: "1px solid black" }}
                                        {...register("class", {
                                            required: {
                                                value: true,
                                                message: 'class is Required'
                                            },
                                        }
                                        )}>
                                        <option value="N/A">Select your class</option>
                                        <option value="five">Five</option>
                                        <option value="six">Six</option>
                                        <option value="seven">Seven</option>
                                        <option value="eight">Eight</option>
                                        <option value="nine">Nine</option>
                                        <option value="ten">Ten</option>
                                        <option value="ssc">SSC Exam Batch</option>
                                        <option value="eleven">Eleven</option>
                                        <option value="twelve">Twelve</option>
                                        <option value="hsc">HSC Exm Batch</option>
                                    </select>

                                    <label className="label">
                                        {errors.class?.type === 'required' && <span className="label-text-alt text-white">{errors.class.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Your Section/Group</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Section or Group"
                                        className="input input-bordered w-full max-w-xs"
                                        style={{ border: "1px solid black" }}
                                        {...register("group", {
                                            required: {
                                                value: true,
                                                message: 'Section/Group is Required'
                                            },

                                        })}
                                    />
                                    <label className="label">
                                        {errors.group?.type === 'required' && <span className="label-text-alt text-white">{errors.group.message}</span>}

                                    </label>
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Your Present Address</span>
                                    </label>
                                    <textarea
                                        type="textarea"
                                        placeholder="Address"
                                        className="input input-bordered w-full max-w-xs"
                                        style={{ border: "1px solid black" }}
                                        {...register("address", {
                                            required: {
                                                value: true,
                                                message: 'Address is Required'
                                            },
                                            minLength: {
                                                value: 5,
                                                message: 'Minimum 5 characters or longer'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.address?.type === 'required' && <span className="label-text-alt text-white">{errors.address.message}</span>}
                                        {errors.address?.type === 'minLength' && <span className="label-text-alt text-white">{errors.address.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Secondary Contact Number</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full max-w-xs"
                                        style={{ border: "1px solid black" }}
                                        {...register("secondaryContact", {
                                            required: {
                                                value: true,
                                                message: 'Contact Number is Required'
                                            },

                                        })}
                                    />
                                    <label className="label">
                                        {errors.secondaryContact?.type === 'required' && <span className="label-text-alt text-white">{errors.secondaryContact.message}</span>}

                                    </label>
                                </div>

                            </div>
                        </div>


                    </div>
                    <div className="flex flex-row justify-center">{/* it is for submit button  */}
                        <input className="btn btn-sm btn-success mt-10" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StudentInfo;