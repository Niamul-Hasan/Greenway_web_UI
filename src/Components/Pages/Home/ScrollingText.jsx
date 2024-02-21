import Marquee from "react-fast-marquee";
const ScrollingText = () => {

    return (
        <div>
            <div className="w-full mx-auto">
                <Marquee
                    className="text-xl text-yellow-300 h-12"
                    pauseOnHover={true}
                    speed={80}>
                    <p>This page is under construction now ...</p>
                    <p>This page is under construction now ...</p>
                    <p>This page is under construction now ...</p>
                    <p>This page is under construction now ...</p>
                    <p>This page is under construction now ...</p>
                </Marquee>
            </div>
        </div>
    );
};

export default ScrollingText;