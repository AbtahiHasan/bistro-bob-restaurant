import { NavLink } from "react-router-dom";
import logo from "/dashboard-logo.png"
import { HiHome } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { AiOutlineShoppingCart, AiFillAccountBook } from "react-icons/ai";
import { MdReviews } from "react-icons/md";

const Sidebar = () => {
    return (
        <aside className="bg-[#D1A054] w-dashboard-md p-10 h-screen fixed top-0 bottom-0">
            <img src={logo} alt="" />
            <ul className="mt-[60px]">
                <li className="leading-loose"><NavLink to="/dashboard/profile" className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><HiHome className="text-[24px]"/><span>User Home</span></NavLink></li>
                <li className="leading-loose"><NavLink to="/dashboard/reservation" className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><FaRegCalendarAlt className="text-[24px]"/><span>reservation</span></NavLink></li>
                <li className="leading-loose"><NavLink to="/dashboard/payment-history" className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><IoWallet className="text-[24px]"/><span>payment history</span></NavLink></li>
                <li className="leading-loose"><NavLink to="/dashboard/my-cart" className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><AiOutlineShoppingCart className="text-[24px]"/><span>my cart</span></NavLink></li>
                <li className="leading-loose"><NavLink to="/dashboard/add-review" className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><MdReviews className="text-[24px]"/><span>add review</span></NavLink></li>
                <li className="leading-loose"><NavLink to="/dashboard/my-booking" className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><AiFillAccountBook className="text-[24px]"/><span>my booking</span></NavLink></li>
                {/* <li><NavLink className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><HiHome/><span>User Home</span></NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><HiHome/><span>User Home</span></NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><HiHome/><span>User Home</span></NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><HiHome/><span>User Home</span></NavLink></li> */}
            </ul>
        </aside>
    );
};

export default Sidebar;