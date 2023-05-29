import { NavLink, useParams } from "react-router-dom";
import MenuCover from "../components/MenuCover";
import banner from "/shop/banner.jpg"
import useCategory from "../hooks/useCategory";
import FoodCard from "../components/FoodCard";
import useCart from "../hooks/useCart";
import { useAuth } from "../context/AuthProvider";

const OurShop = () => {
    const {categoryName} = useParams()
    const categories = useCategory(categoryName)
    const {user} = useAuth()
    const {refetch} = useCart()
    const addToCart = (menu) => {
        const cart = {
            ...menu,
            email: user?.email
        }
        fetch("http://localhost:3000/add-cart", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cart)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data) {
                refetch()
            }
        })
    }
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
                    categories.map(category => <FoodCard key={category._id} addToCart={addToCart} home={false} menu={category}/>)
                }
            </section>
        </main>
    );
};

export default OurShop;