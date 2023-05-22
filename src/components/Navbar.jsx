import { NavLink } from "react-router-dom";
import logo from "/logo.png"
const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt="logo" />
            <ul>
                <li>
                    <NavLink className={({isActive}) => isActive ? "active" : "font-bold uppercase"}>Home</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? "active" : "font-bold uppercase"}>Contact Us</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? "active" : "font-bold uppercase"}>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? "active" : "font-bold uppercase"}>Our Menu</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? "active" : "font-bold uppercase"}>Our Shop</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;