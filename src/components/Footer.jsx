import { Link } from "react-router-dom";
import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-[140px] ">
            <section className="grid md:grid-cols-2 text-white ">
                <div className="p-[90px] bg-[#1F2937] flex flex-col items-end ">
                    <div className="text-center">
                        <h2 className="text-[32px]">CONTACT US</h2>
                        <ul className="text-xl mt-4">
                            <li className="mt-2">123 ABS Street, Uni 21, Bangladesh</li>
                            <li className="mt-2">+88 123456789</li>
                            <li className="mt-2">Mon - Fri: 08:00 - 22:00</li>
                            <li className="mt-2">Sat - Sun: 10:00 - 23:00</li>
                        </ul>
                    </div>
                </div>
                <div className="p-[90px] bg-[#111827] flex flex-col items-start">
                    <div className="text-center">
                        <h2 className="text-[32px]">Follow US</h2>
                        <p className="mt-4 text-xl">Join us on social media</p>
                        <ul className="flex gap-3 text-[32px] justify-center mt-5">
                            <li><Link><ImFacebook/></Link></li>
                            <li><Link><BsInstagram/></Link></li>
                            <li><Link><FaTwitter/></Link></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="bg-[#151515] text-center text-white text-xl p-2">
            <h4>Copyright © CulinaryCloud. All rights reserved.</h4>
            </section>
        </footer>
    );
};

export default Footer;