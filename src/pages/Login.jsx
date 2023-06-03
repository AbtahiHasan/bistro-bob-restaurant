import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha, LoadCanvasTemplateNoReload } from 'react-simple-captcha';
import bg from "/reservation/wood-grain-pattern.png"
import authenticationImg from "/others/authentication2.png"
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoGoogle } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
const Login = () => {
    const CaptchaInput = useRef(null)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'
    const {signIn, signInWithGoogle, signInWithGithub} = useAuth()
    const [error, setError] = useState(null)


    
    useEffect(() => {
        loadCaptchaEnginge(6); 
    },[])
    const login = (e) => {
        e.preventDefault()
        
        if(!validateCaptcha(CaptchaInput.current.value)) {
                setError("Captcha is not valid")
                return
            }
            
            const form = e.target
            const email = form.email.value;
            const password = form.password.value
            setError(null)

            if(!email || !password) {
                setError("Cannot leave any field empty")
                return
            } 
            signIn(email, password) 
            .then (() => {
                navigate(from, { replace: true })
                form.reset()
            })
            .catch(error => {
                setError(error.message)  
            })
    } 

    const handelGoogle = () => {
        signInWithGoogle()
            .then((result) => {

                if(result.user) {
                    const user = {
                        name: result.user.displayName,
                        photo_url: result.user.photoURL || null,
                        email: result.user.email
                    }
                    console.log(result.email)
                    fetch('http://localhost:3000/add-user', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(user)
                    })
                    .then(res => res.json())
                    .then(data => console.log(data))
                }
                navigate(from)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const handelGitHub = () => {
        signInWithGithub()
        .then((result) => {
            if(result.user) {
                const user = {
                    name: result.user.displayName,
                    photo_url: result.user.photoURL || null,
                    email: result.user.email
                }
                console.log(result.email)
                fetch('http://localhost:3000/add-user', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data => console.log(data))
            }
            navigate(from)
        })
        .catch((error) => {
            console.log(error.message)
        })
}
    
    return ( 
        <main>
            <img className='w-full h-full fixed top-0 left-0 right-0 bottom-0' src={bg} alt="" />
            <section className='container relative z-50 h-screen  flex items-center'>
                <div style={{boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)"}} className='flex p-14 '>
                    <div>
                        <img className='w-full' src={authenticationImg} alt="" />
                    </div>
                    <form onSubmit={login}>
                        <div className='mt-5'>
                            <label className='font-bold block'>Email</label>
                            <input className='px-7 py-4 bg-white rounded-md outline-0' type="email" placeholder='Type here'/>
                        </div>
                        <div className='mt-5'>
                            <label className='font-bold block'>Password</label>
                            <input className='px-7 py-4 bg-white rounded-md outline-0' type="password" placeholder='Enter your password'/>
                        </div>
                        <div className='mt-5'>
                        <LoadCanvasTemplateNoReload/>
                        </div>
                        <div className='mt-5'>
                            <input ref={CaptchaInput} className='px-7 py-4 bg-white rounded-md outline-0' type="text" placeholder='Type here'/>
                        </div>
                        <p className='text-red-700 mt-2'>{error && error}</p>
                        <div className='mt-5'>
                            <button type='submit' className='bg-[#d1a054b2] block p-4 text-white w-full rounded-md'>Sign In</button>
                        </div>
                        <div className='text-center'>
                            <p className='text-[#D1A054] my-2'>New here? <span className='font-bold'>Create a New Account</span></p>
                            <p className='text-[#444444] my-2'>Or sign in with</p>
                        </div>
                        <ul className='flex justify-center items-center gap-4'>
                            <li className='border-2 cursor-pointer border-[#444444] rounded-full p-2 text-2xl'><RiFacebookFill/></li>
                            <li onClick={handelGoogle} className='border-2 cursor-pointer border-[#444444] rounded-full p-2 text-2xl'><IoLogoGoogle/></li>
                            <li onClick={handelGitHub} className='border-2 cursor-pointer border-[#444444] rounded-full p-2 text-2xl'><AiFillGithub/></li>
                        </ul>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Login;