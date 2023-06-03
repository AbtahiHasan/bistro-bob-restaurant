import Heading from "./Heading";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import qutation from '/qutation.png'
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import useReviews from "../hooks/useReviews";

const Testimonials = () => {
 
    const ratings = useReviews()
    return (
        <section className="mt-[140px] container">
            <Heading heading={"TESTIMONIALS"} subHeading={"What Our Clients Say"}/>
                       
            <Swiper     
         navigation={true} modules={[Navigation]}>

            {
              ratings &&  ratings.map((rating, index )=> {
                    return (
                        <SwiperSlide key={index}>
                            <div className="flex items-center justify-center mt-10 text-[40px] text-[#CD9003]">
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiOutlineStar/>
                        </div>
                        <div className="text-center px-10 md:px-24">
                            <img className="w-[84px] mx-auto my-10" src={qutation} alt="" />
                            <p>{rating.details}</p>
                            <h4 className="text-2xl text-[32px] font-bold text-[#CD9003] my-4">{rating.name}</h4>
                        </div> 
                        </SwiperSlide>
                    )
                })
            }


        
      </Swiper>
        </section>
    );
};

export default Testimonials;