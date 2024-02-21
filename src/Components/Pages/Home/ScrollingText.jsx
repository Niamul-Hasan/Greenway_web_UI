import Marquee from "react-fast-marquee";
const ScrollingText = () => {

    return (
        <div>
            <div className="w-full mx-auto rounded-lg shadow-lg shadow-zinc-200 bg-gradient-to-t from-neutral-700 via-stone-400 to-slate-700">
                <Marquee
                    className="text-xl text-yellow-300 h-12"
                    pauseOnHover={true}
                    speed={80}>
                    This page is under construction now ...
                </Marquee>
            </div>
        </div>
    );
};

export default ScrollingText;