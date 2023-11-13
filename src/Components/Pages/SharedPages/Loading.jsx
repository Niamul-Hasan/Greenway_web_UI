import bg from "../../../assets/loading.gif"
const Loading = () => {
    return (
        <div className="flex flex-row justify-center items-center p-10 h-screen"
            style={{ backgroundColor: "#222222" }}
        >
            <div className="flex flex-row justify-center items-center">
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default Loading;