import Marquee from "react-fast-marquee";
const ScrollingText = () => {

    return (
        <div>
            <div className="w-3/4 mx-auto">
                <Marquee
                    // style={{ height: "200px" }}
                    className="text-4xl text-red-500 h-12"
                    pauseOnHover={true}
                    speed={80}>
                    This page is under construction now
                </Marquee>
            </div>
        </div>
    );
};

export default ScrollingText;