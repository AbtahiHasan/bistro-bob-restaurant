import { NavLink } from "react-router-dom";
import logo from "/logo.png"
import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
const Navbar = () => {
    const [toggle, seToggle] = useState(false)
    return (
        <nav className="flex justify-between px-3 py-2 md:px-[55px] z-[1000000] fixed top-0 left-0 right-0 bg-[#1515157f]">
            <img className="h-[45px]" src={logo} alt="logo" />
            <button onClick={() => seToggle(!toggle)} className="text-white text-2xl md:hidden">
            { toggle ? <MdClose/> : <HiMenuAlt1/> }
            </button>
            <ul className={`flex transition-all duration-200 md:flex-row flex-col p-4 bg-[#1515157f] w-full md:w-auto md:bg-transparent absolute md:static top-[61px] md:items-center gap-4 text-white ${toggle ? "left-0" : "-left-full"}`}>
                <li>
                    <NavLink to="/" className={({isActive}) => isActive ? "active" : "font-bold uppercase"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/contact-us" className={({isActive}) => isActive ? "active" : "font-bold uppercase"}>Contact Us</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" className={({isActive}) => isActive ? "active" : "font-bold uppercase"}>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/our-menu" className={({isActive}) => isActive ? "active" : "font-bold uppercase"}>Our Menu</NavLink>
                </li>
                <li>
                    <NavLink to="/our-shop/salad" className={({isActive}) => isActive ? "active" : "font-bold uppercase"}>Our Shop</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;