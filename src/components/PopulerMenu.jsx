import { useEffect, useState } from "react";
import Heading from "./Heading";
import MenuCard from "./MenuCard";


const PopulerMenu = () => {
    const [menues, setMenues] = useState([])
    useEffect(() => {
        fetch("/menu.json")
        .then(res => res.json())
        .then(data => {
            const populler = data.filter(menu => menu.category === "popular")
            setMenues(populler)
        })
    },[])
    return (
        <section className="container mt-[140px]">
            <Heading heading="FROM OUR MENU" subHeading="Check it out" />
            <div className="grid md:grid-cols-2 gap-5 mt-8">
                {
                    menues.map(menu => <MenuCard key={menu._id} menu={menu}/>)
                }
                
            </div>
        </section>
    );
};

export default PopulerMenu;