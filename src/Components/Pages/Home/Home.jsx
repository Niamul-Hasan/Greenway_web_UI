import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import { useContext } from "react";
import ScrollingText from "./ScrollingText";
import banner from "../../../assets/green.gif"

const Home = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const signOut = () => {
        logOut().then(() => {

        }).catch(error => { console.error(error) })
    }
    const handleClick = () => {

        navigate("/lifting");
    }
    const handlecheck = () => {
        if (user.email) {
            return console.log("user has a nice email address");
        }
        if (user.phoneNumber) {
            return console.log("user has  a fine phone number")
        }
    }
    return (
        <div>
            <ScrollingText></ScrollingText>
            <div className="mx-auto w-11/12">
                <img src={banner} alt="" className="w-full rounded-xl shadow-lg shadow-black" />
            </div>
            <div className='text-center my-5'>
                <h1 className="text-4xl uppercase underline">This is homepage</h1>
                <h1>The Current User is:{user?.email || user?.phoneNumber}</h1>

                <button onClick={handlecheck} className="btn btn-md btn-info">Check</button>

                {user ? <button onClick={signOut} className="btn btn-sm">SignOut</button>
                    : <button onClick={handleClick} className="btn btn-sm">SignIn</button>}
            </div>
        </div>
    );
};

export default Home;