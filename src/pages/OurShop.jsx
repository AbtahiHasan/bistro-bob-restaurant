import { NavLink, useParams } from "react-router-dom";
import MenuCover from "../components/MenuCover";
import banner from "/shop/banner.jpg"
import useCategory from "../hooks/useCategory";
import FoodCard from "../components/FoodCard";

const OurShop = () => {
    const {categoryName} = useParams()
    const categories = useCategory(categoryName)
    return (
        <main>
            <MenuCover variant={"banner"} img={banner} title={"OUR SHOP"}/>
            <ul className="flex items-center justify-center gap-5 text-[24px] font-bold mt-[140px]">
                <li>
                    <NavLink to="/our-shop/salad" className={({isActive}) => isActive ? "border-b-4 border-[#BB8506] text-[#BB8506] py-2 uppercase" : " uppercase py-2"}>salad</NavLink>
                </li>
                <li>
                    <NavLink to="/our-shop/pizza" className={({isActive}) => isActive ? "border-b-4 border-[#BB8506] text-[#BB8506] py-2 uppercase" : " uppercase py-2"}>pizza</NavLink>
                </li>
                <li>
                    <NavLink to="/our-shop/soup" className={({isActive}) => isActive ? "border-b-4 border-[#BB8506] text-[#BB8506] py-2 uppercase" : " uppercase py-2"}>soups</NavLink>
                </li>
                <li>
                    <NavLink to="/our-shop/dessert" className={({isActive}) => isActive ? "border-b-4 border-[#BB8506] text-[#BB8506] py-2 uppercase" : " uppercase py-2"}>desserts</NavLink>
                </li>
                <li>
                    <NavLink to="/our-shop/drinks" className={({isActive}) => isActive ? "border-b-4 border-[#BB8506] text-[#BB8506] py-2 uppercase" : " uppercase py-2"}>drinks</NavLink>
                </li>
            </ul>

            <section className="grid md:grid-cols-3 gap-5 container mt-10">
                {
                    categories.map(category => <FoodCard key={category._id} home={false} menu={category}/>)
                }
            </section>
        </main>
    );
};

export default OurShop;