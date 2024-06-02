import { useNavigate } from "react-router-dom";
import img1 from '../../../assets/profile.png';
import img2 from '../../../assets/graph.png';
import img3 from '../../../assets/payment-icon.png';

const Dashboard = () => {
    const nevigate = useNavigate();
    const dashItems = [
        {
            id: 1,
            title: "YOUR PROFILE",
            link: "accountCheck",
            image: img1
        },
        {
            id: 2,
            title: "RESULTS",
            link: "accountCheck",
            image: img2
        },
        {
            id: 3,
            title: "MAKE PAYMENT",
            link: "accountCheck",
            image: img3
        },
        {
            id: 4,
            title: "GUIDELINES",
            link: "accountCheck",

        },
    ]

    const handleClick = (link) => {
        nevigate(`${link}`)
        console.log(link)
    }
    return (
        <div>
            <h1 className="text-xl font-bold">This is Dashbaord Landing page</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10">
                {
                    dashItems.map(item => <div key={item.id} className="card w-96 bg-gradient-to-r from-gray-800 to-blue-900 text-primary-content mx-auto" onClick={() => handleClick(item?.link)}>
                        <div className="card-body">
                            <h1 className="text-4xl font-bold text-center">{item.title}</h1>
                            <div className="avatar">
                                <div className="w-32 rounded-full mx-auto">
                                    <img src={item?.image} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>


        </div>
    );
};

export default Dashboard;