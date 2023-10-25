import { useState } from "react";
import { useNavigate } from "react-router-dom";

const IdAuth = () => {
    const [teacherId, setTeacherId] = useState("");
    const [flag, setFlag] = useState(false);
    const [isMatch, setIsMatch] = useState(false)
    const navigate = useNavigate();

    const verifyID = (e) => {
        e.preventDefault();
        setIsMatch(arryOfId.includes(teacherId.toUpperCase()))
        setFlag(true);
        // console.log(teacherId.toUpperCase());

    };

    const handleCancel = () => {
        navigate("/")
    }




    // test arrayofId 
    const arryOfId = ["GW0S0T01", "GW0S0T03", "GW0S0T05", "GW0S0T07"];

    return (
        <div className="flex flex-col justify-center items-center lg:h-screen bg-gradient-to-br from-lime-600 via-cyan-300 to-yellow-500">
            <div className="card w-96 glass shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{flag ? "WelCome To GreenWay Log System" : "Please Enter Your Teacher ID"}</h2>
                    {!flag && <form onSubmit={verifyID}>
                        <input
                            type="text"
                            placeholder="Enter ID"
                            onChange={(e) => setTeacherId(e.target.value)} />
                        <div className="card-actions justify-end mt-4">
                            <button onClick={handleCancel} className="btn btn-sm btn-error">cancel</button>
                            <button className="btn btn-sm btn-success" type='submit'>verify ID</button>
                        </div>
                    </form >}
                    {flag && <>
                        {
                            isMatch ? <div>
                                <button onClick={() => navigate("/register")} className="btn btn-sm btn-success">Sign In</button>
                            </div> : <div>
                                <p className="text-error font-serif font-semibold text-xl">You are not an authorized User. Please enter the correct ID</p>
                                <div className="card-actions justify-end mt-4">
                                    <button onClick={handleCancel} className="btn btn-sm btn-error">cancel</button>
                                    <button onClick={() => window.location.reload(false)} className="btn btn-sm btn-warning" >Try Again</button>
                                </div>
                            </div>
                        }
                    </>}



                </div>
            </div>

        </div>
    );
};

export default IdAuth;