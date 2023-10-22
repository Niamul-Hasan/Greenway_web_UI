import { useNavigate } from "react-router-dom";

const LiftingPage = () => {
    const navigate = useNavigate();
    const handleStudent = () => {
        navigate("/phoneSign");
    }
    const handleTeacher = () => {
        navigate("/idAuth");
    }

    return (
        <div className="">
            <h1 className="font-xl">This is Lifting Page</h1>
            <div className="flex flex-row gap-4 ms-4">
                <button onClick={handleTeacher} className="btn btn-sm btn-info">Teacher</button>
                <button onClick={handleStudent} className="btn btn-sm btn-warning">Student</button>
            </div>
        </div>
    );
};

export default LiftingPage;