import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Heading from "./Heading";
import slide1 from '/home/slide1.jpg';
import slide2 from '/home/slide2.jpg';
import slide3 from '/home/slide3.jpg';
import slide4 from '/home/slide4.jpg';
import slide5 from '/home/slide5.jpg';
const Order = () => {
    return (
        <section className="mt-[140px] container">
            <Heading heading="ORDER ONLINE" subHeading="From 11:00am to 10:00pm" />
            <section className="mt-8">
            <Swiper
        slidesPerView={4}
        spaceBetween={24}
      >
        <SwiperSlide>
            <div>
                <img className="w-full" src={slide1} alt="" />
                <h3 className="-mt-20 text-center text-xl text-white">Salads</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className="w-full" src={slide2} alt="" />
                <h3 className="-mt-20 text-center text-xl text-white">Soups</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className="w-full" src={slide3} alt="" />
                <h3 className="-mt-20 text-center text-xl text-white">pizzas</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className="w-full" src={slide4} alt="" />
                <h3 className="-mt-20 text-center text-xl text-white">desserts</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className="w-full" src={slide5} alt="" />
                <h3 className="-mt-20 text-center text-xl text-white"></h3>
            </div>
        </SwiperSlide>
    
      </Swiper>
            </section>
        </section>
    );
};

export default Order;