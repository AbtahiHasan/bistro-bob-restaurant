import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "/home/01.jpg"
import bannerImg2 from "/home/02.jpg"
import bannerImg3 from "/home/03.png"
import bannerImg4 from "/home/04.jpg"
import bannerImg5 from "/home/05.png"
import bannerImg6 from "/home/06.png"
const Banner = () => {
    return (
        <section>
             <Carousel centerMode={false}>
                <div className="w-full">
                    <img className="w-full object-cover" src={bannerImg1} />
                </div>
                <div className="w-full">
                    <img className="w-full object-cover" src={bannerImg2} />
                </div>
                <div className="w-full">
                    <img className="w-full object-cover" src={bannerImg3} />
                </div>
                <div className="w-full">
                    <img className="w-full object-cover" src={bannerImg4} />
                </div>
                <div className="w-full">
                    <img className="w-full object-cover" src={bannerImg5} />
                </div>
                <div className="w-full">
                    <img className="w-full object-cover" src={bannerImg6} />
                </div>
            </Carousel>
        </section>

    );
};

export default Banner;