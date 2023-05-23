import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import Heading from "./Heading";

const Recommends = () => {
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
        <section className="mt-[140px] container">
            <Heading heading="Should Try" subHeading="CHEF RECOMMENDS"/>
            <div className="mt-8 grid md:grid-cols-3 gap-5">
                
                {
                    menues.slice(0,3).map(menu => <FoodCard key={menu._id} menu={menu} />)
                }
            </div>
        </section>
    );
};

export default Recommends;