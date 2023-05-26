import bg from "/reservation/wood-grain-pattern.png"
import authenticationImg from "/others/authentication2.png"
import { useAuth } from "../context/AuthProvider";
import { useState } from "react";
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoGoogle } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
const SignUp = () => {
    const {createUser} = useAuth()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const hendleForm = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const profileUrl = form.profile.value;
        const confirmPassword = form.confirmPassword.value

        setError(null)
        setSuccess(null)

        if(!name || !email || !password) {
            setError("Cannot leave any field empty")
            return
        } 
        
        if(password.length < 6) {
            setError("password at least 6 character")
            return
        }
        if(password !== confirmPassword) {
            setError("password not matched")
            return
        }
        

        createUser(email, password) 
        .then ((result) => {
            updateProfile(result.user, {
                displayName: name,
                photoURL: profileUrl
            })
           form.reset()

           setSuccess("Registration successfull")

        }) 
        .catch(error => {
            
        })
    }

    const handelGoogle = () => {
        signInWithGoogle()
            .then((result) => {

                navigate(from)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const handelGitHub = () => {
        signInWithGithub()
        .then((result) => {
            const gitHub = result.user;

            navigate(from)
        })
        .catch((error) => {
            console.log(error.message)
        })
}

    return (
        <main>
            <img className='w-full h-full fixed top-0 left-0 right-0 bottom-0' src={bg} alt="" />
            <section className='container relative z-50 h-screen  md:flex items-center'>
                <div style={{boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)"}} className='flex p-14 '>
                   
                    <form onSubmit={hendleForm}>
                        <div className='mt-5'>
                            <label className='font-bold block'>Name</label>
                            <input className='px-7 py-4 bg-white rounded-md outline-0' type="text" placeholder='Type here'/>
                        </div>
                        <div className='mt-5'>
                            <label className='font-bold block'>Email</label>
                            <input className='px-7 py-4 bg-white rounded-md outline-0' type="email" placeholder='Enter your password'/>
                        </div>
                        <div className='mt-5'>
                            <label className='font-bold block'>Password</label>
                            <input className='px-7 py-4 bg-white rounded-md outline-0' type="password" placeholder='Enter your password'/>
                        </div>
                        <p className='text-red-700 mt-2'>{error && error}</p>
                        <div className='mt-5'>
                            <button type='submit' className='bg-[#d1a054b2] block p-4 text-white w-full rounded-md'>Sign In</button>
                        </div>
                        <div className='text-center'>
                            <p className='text-[#D1A054] my-2'>Already registered? <span className='font-bold'>Go to log in</span></p>
                            <p className='text-[#444444] my-2'>Or sign in with</p>
                        </div>
                        <ul className='flex justify-center items-center gap-4'>
                            <li className='border-2 cursor-pointer border-[#444444] rounded-full p-2 text-2xl'><RiFacebookFill/></li>
                            <li onClick={handelGoogle} className='border-2 cursor-pointer border-[#444444] rounded-full p-2 text-2xl'><IoLogoGoogle/></li>
                            <li onClick={handelGitHub} className='border-2 cursor-pointer border-[#444444] rounded-full p-2 text-2xl'><AiFillGithub/></li>
                        </ul>
                    </form>
                    <div>
                        <img className='w-full' src={authenticationImg} alt="" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SignUp;