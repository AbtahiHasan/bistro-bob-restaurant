import React from 'react';
import bg from "/reservation/wood-grain-pattern.png"
import authenticationImg from "/others/authentication2.png"
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoGoogle } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
const Login = () => {
    return (
        <main>
            <img className='w-full h-full fixed top-0 left-0 right-0 bottom-0' src={bg} alt="" />
            <section className='container relative z-50 h-screen  flex items-center'>
                <div style={{boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)"}} className='flex p-14 '>
                    <div>
                        <img className='w-full' src={authenticationImg} alt="" />
                    </div>
                    <form>
                        <div className='mt-5'>
                            <label className='font-bold block'>Email</label>
                            <input className='px-7 py-4 bg-white rounded-md outline-0' type="email" placeholder='Type here'/>
                        </div>
                        <div className='mt-5'>
                            <label className='font-bold block'>Password</label>
                            <input className='px-7 py-4 bg-white rounded-md outline-0' type="password" placeholder='Enter your password'/>
                        </div>
                        <div className='mt-5'>
                            <input className='px-7 py-4 bg-white rounded-md outline-0' type="text" placeholder='Type here'/>
                        </div>
                        <div className='mt-5'>
                            <button type='submit' className='bg-[#d1a054b2] block p-4 text-white w-full rounded-md'>Sign In</button>
                        </div>
                        <div className='text-center'>
                            <p className='text-[#D1A054] my-2'>New here? <span className='font-bold'>Create a New Account</span></p>
                            <p className='text-[#444444] my-2'>Or sign in with</p>
                        </div>
                        <ul className='flex justify-center items-center gap-4'>
                            <li className='border-2 cursor-pointer border-[#444444] rounded-full p-2 text-2xl'><RiFacebookFill/></li>
                            <li className='border-2 cursor-pointer border-[#444444] rounded-full p-2 text-2xl'><IoLogoGoogle/></li>
                            <li className='border-2 cursor-pointer border-[#444444] rounded-full p-2 text-2xl'><AiFillGithub/></li>
                        </ul>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Login;