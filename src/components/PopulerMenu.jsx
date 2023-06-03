import { useEffect, useState } from "react";
import Heading from "./Heading";
import MenuCard from "./MenuCard";
import useCategory from "../hooks/useCategory";


const PopulerMenu = () => {
   
    const popular = useCategory("popular")
    return (
        <section className="container mt-[140px]">
            <Heading heading="FROM OUR MENU" subHeading="Check it out" />
            <div className="grid md:grid-cols-2 gap-5 mt-8">
                {
                    popular && popular.map(menu => <MenuCard key={menu._id} menu={menu}/>)
                }
                
            </div>
            <button className="btn-primary my-6 block mx-auto">View Full  Menu</button>
        </section>
    );
};

export default PopulerMenu;