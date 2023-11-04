import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/UserContext";
import useToken from "../../Hooks/useToken";
const StudentInfo = () => {
    const { user } = useContext(AuthContext);
    const [token] = useToken(user);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        if (token) {
            console.log(data);
            const formData = new FormData();
            const image = data.image[0];
            formData.append('image', image);
            const url = `https://api.imgbb.com/1/upload?key=92abab9e839b8dc01e9834546b5d997e`;
            fetch(url, {
                method: "POST",
                body: formData
            }).then(res => res.json()).then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);

                    const studentInfo = {
                        name: data.name,
                        Fathername: data.Fathername,
                        Mothername: data.Mothername,
                        address: data.address,
                        blood: data.blood,
                        class: data.class,
                        gender: data.gender,
                        group: data.group,
                        institute: data.institute,
                        primaryContact: data.primaryContact,
                        secondaryContact: data.secondaryContact,
                        image: imgData.data.url
                    };
                    console.log(studentInfo)
                    fetch('http://localhost:4040/StdInfo', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(studentInfo)
                    }).then(res => res.json()).then(data => {
                        if (data.acknowledged) {
                            alert(`Thank you ${studentInfo?.name} for submitting the form successfully`);
                        }
                    })
                }
            });

        }
    }

    return (
        // this is the main div 
        <div className="bg-gradient-to-br from-green-800 via-green-400 to-green-600">
            <h1 className="text-center p-5 font-sans font-semibold text-2xl text-back uppercase">
                Please fill up all fields and submit your details</h1>

            <div className="p-4 "> {/* it is for form wraping div  */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-4">
                        {/* it is for first part of form input field  */}
                        <div className="card w-3/4 glass">
                            <div className="card-body lg:items-center">
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
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                                        {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
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
                                        {errors.Fathername?.type === 'required' && <span className="label-text-alt text-red-600">{errors.Fathername.message}</span>}
                                        {errors.Fathername?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.Fathername.message}</span>}
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
                                        {errors.Mothername?.type === 'required' && <span className="label-text-alt text-red-600">{errors.Mothername.message}</span>}
                                        {errors.Mothername?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.Mothername.message}</span>}
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
                                        {errors.gender?.type === 'required' && <span className="label-text-alt text-red-600">{errors.gender.message}</span>}
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
                                        {errors.secondaryContact?.type === 'required' && <span className="label-text-alt text-red-600">{errors.secondaryContact.message}</span>}

                                    </label>
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
                                                message: 'Please write the full name of your institution'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.institute?.type === 'required' && <span className="label-text-alt text-red-600">{errors.institute.message}</span>}
                                        {errors.institute?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.institute.message}</span>}
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
                                        {errors.class?.type === 'required' && <span className="label-text-alt text-red-600">{errors.class.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Your Section/Group</span>
                                    </label>
                                    <select
                                        type="select"
                                        placeholder="Select your Group"
                                        className="input input-bordered w-full max-w-xs"
                                        style={{ border: "1px solid black" }}
                                        {...register("group", {
                                            required: {
                                                value: true,
                                                message: 'Section/Group is Required'
                                            },

                                        })}>
                                        <option value=""></option>
                                        <option value="science">Science</option>
                                        <option value="commerce">Commerce</option>
                                        <option value="arts">Arts</option>
                                        <option value="N/A">Not Applicable</option>
                                    </select>
                                    <label className="label">
                                        {errors.group?.type === 'required' && <span className="label-text-alt text-red-600">{errors.group.message}</span>}

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
                                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-600">{errors.address.message}</span>}
                                        {errors.address?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.address.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Blood Group</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full max-w-xs"
                                        style={{ border: "1px solid black" }}
                                        {...register("blood")}
                                    />
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input
                                        type="file"
                                        placeholder="Photo here"
                                        className="input-bordered w-full max-w-xs"

                                        {...register("image", {
                                            required: {
                                                value: true,
                                                message: "Picture is required"
                                            }
                                        })} />
                                    <label className="label">
                                        {errors.image?.type === 'required' && <span
                                            className="label-text-alt text-red-600">{errors.image.message}</span>}
                                        {errors.image?.type === 'pattern' && <span
                                            className="label-text-alt text-red-600">{errors.image.message}</span>}
                                    </label>
                                </div>

                            </div>
                        </div>


                    </div>
                    <div className="flex flex-row justify-center">{/* it is for submit button  */}
                        <input className="btn btn-sm btn-primary mt-10" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StudentInfo;