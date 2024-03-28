import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import { useContext } from "react";
import banner from "../../../assets/green.gif"
import WhyChoose from "./Partitions/WhyChoose";
import AboutUs from "./Partitions/AboutUs";
import LittleInfo from "./Partitions/LittleInfo";
import TopBoard from "./Partitions/TopBoard";
import { Helmet } from "react-helmet-async";

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
            navigate("/accountCheck");
        }
    }
    return (
        <div>
            <Helmet>
                <title>Greenway | Home</title>
            </Helmet>
            <TopBoard></TopBoard>
            <div className="mx-auto w-full lg:w-11/12 mb-40">
                <img src={banner} alt="" className="w-full rounded-xl shadow-lg shadow-black" />
            </div>
            <WhyChoose></WhyChoose>
            <AboutUs></AboutUs>
            <LittleInfo></LittleInfo>


            <div className='text-center my-5 w-full'>
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