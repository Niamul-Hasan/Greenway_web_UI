import { useNavigate } from "react-router-dom";
import img1 from "../../../../assets/teacher.png";
import img2 from "../../../../assets/student.png";
import login from "../../../../assets/login.gif";


const LiftingPage = () => {
    const navigate = useNavigate();
    const handleStudent = () => {
        navigate("/phoneSign");
    }
    const handleTeacher = () => {
        navigate("/idAuth");
    }

    return (
        <div className="w-3/4 mx-auto">
            <h1 className="text-4xl font-semibold font-sans text-center mt-16">
                Welcome To Greenway Academic Web Authentication System.<br />
                Please Select Your Singn Up Pannel First.
            </h1>
            <div className="flex flex-row justify-around items-start h-screen p-10">
                <div className="flex flex-col justify-center items-center">
                    <img src={img1} alt="" />
                    <button onClick={handleTeacher} className="btn btn-sm btn-info">Teacher</button>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={login} style={{ height: "400px", width: "250px" }} />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={img2} />
                    <button onClick={handleStudent} className="btn btn-sm btn-warning">Student</button>
                </div>
            </div>
        </div>
    );
};

export default LiftingPage;