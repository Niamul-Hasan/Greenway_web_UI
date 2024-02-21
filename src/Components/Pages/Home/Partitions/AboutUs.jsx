import img1 from "../../../../assets/programs.jpg";
import img2 from "../../../../assets/results.jpg";
import img3 from "../../../../assets/lecturer.jpg";
import img4 from "../../../../assets/events.jpg";
import "../../SharedPages/Style.css"
const AboutUs = () => {
    return (
        <div className="section3">
            <div className="section3-bgcolor">
                <div className="section3-content-box" id="section3-box1">
                    <div className="box-logo"><img src={img1} alt="" className="box-logo" /></div>
                    <div className="box-title">PROGRAMS</div>
                    <div className="box-description">
                        <p>We specialize in providing high-quality education to students spanning grades 6 through 12 within our esteemed institution.</p>
                        <p>
                            <button className="box-more">MORE</button>
                        </p>
                    </div>

                </div>
                <div className="section3-content-box" id="section3-box2">
                    <div className="box-logo"><img src={img2} alt="" className="box-logo" /></div>
                    <div className="box-title">RESULTS</div>
                    <div className="box-description">
                        <p>Our institution consistently demonstrates commendable academic outcomes, reflective of our commitment to excellence in education.</p>
                        <p>
                            <button className="box-more">MORE</button>
                        </p>
                    </div>
                </div>
                <div className="section3-content-box" id="section3-box3">
                    <div className="box-logo"><img src={img3} alt="" className="box-logo" /></div>
                    <div className="box-title">LECTURERS</div>
                    <div className="box-description">
                        <p>We pride ourselves on offering instruction delivered by esteemed educators hailing from leading universities.</p>
                        <p>
                            <button className="box-more">MORE</button>
                        </p>
                    </div>
                </div>
                <div className="section3-content-box" id="section3-box4">
                    <div className="box-logo"><img src={img4} alt="" className="box-logo" /></div>
                    <div className="box-title">EVENTS</div>
                    <div className="box-description">
                        <p>From academic symposiums to cultural celebrations, our events foster engagement, collaboration, and intellectual growth.</p>
                        <p>
                            <button className="box-more">MORE</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;