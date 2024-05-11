import banner from "../../../assets/green.gif"
import WhyChoose from "./Partitions/WhyChoose";
import AboutUs from "./Partitions/AboutUs";
import LittleInfo from "./Partitions/LittleInfo";
import TopBoard from "./Partitions/TopBoard";
import { Helmet } from "react-helmet-async";

const Home = () => {

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



        </div>
    );
};

export default Home;