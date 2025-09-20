import NavBar from "./NavBar"
import { Link } from "react-router-dom"
import { CircleUser } from 'lucide-react';
import { KeyRound } from 'lucide-react';
import { Mail } from 'lucide-react';


const SignUp = () => {
    return (
        <div className=" flex flex-col  items-center gap-6">
            <NavBar />
            <h1 className="text-5xl text-bold text-blue-500 ">JOIN BLOG-VERSE</h1>
            <p className="text-gray-700 text-center text-semibold text-xl">create your account and <br></br>start Blogging journey today</p>
            <form className="flex flex-col border-2 py-5 items-center w-1/3 rounded-2xl shadow-2xl  border-white gap-2  ">
                <div className="w-[90%] items-center">
                    <p className="text-md text-gray-600 font-semibold pb-2">FullName</p>
                    <input type="text" placeholder="Enter your FullName" className="border-1 rounded-xl pl-2 w-full py-1 focus:outline-none focus:border-purple-400" />
                </div>
                <div className="w-[90%] relative items-center pt-5">
                    <p className="text-md text-gray-600 font-semibold pb-2">Email</p>
                 <Mail className="absolute pt-2 pl-1"/>
                    <input type="email" placeholder="Enter your Email" className="border-1 rounded-xl pl-7 w-full py-1 focus:outline-none focus:border-purple-400" />
                </div>
                <div className="w-[90%] items-center pt-5 relative">
                    <p className="text-md text-gray-600 font-semibold pb-2">Password</p>
                    <KeyRound className="absolute top-14 pl-1 "/>
                    <input type="password" placeholder="Enter your Password" className="border-1 rounded-xl pl-7 w-full py-1 px-3 focus:outline-none focus:border-purple-400" />
                </div>
                <div className="w-[90%] items-center relative pt-5">
                    <p className="text-md text-gray-600 font-semibold pb-2">Confirm Password</p>
                    <KeyRound className="absolute top-14 pl-1 "/>
                    <input type="password" placeholder="confirm your password" className="border-1 rounded-xl pl-7 w-full py-1 focus:outline-none focus:border-purple-400" />
                </div>
                <div className="flex gap-2 mt-5 w-[90%] border-1 rounded-xl border-red-400 px-4 py-5 items-center justify-center">
                    <input type="checkbox" name="" id="" className="h-5 w-5" />
                    <p>I agree to the Terms of service and Privacy policy</p>
                </div>
                <button className="bg-purple-500 font-bold text-white w-[90%] p-2 rounded-xl  items-center mt-4 hover:text-cyan-950 cursor-pointer flex justify-center"> <CircleUser  /><p>Create Account</p></button>
                <div className="border-gray-500 border-[0.5px] w-[90%] mt-5"></div>
                <p className="text-semibold text-gray-700 mt-5 ">Already have an Account ?  <Link to="/SignIn" className="text-purple-500 hover:text-emerald-800">Sign In Here</Link></p>
                <Link to="/Home" className="text-semibold mt-5 hover:text-blue-900 cursor-pointer ">Back to Home </Link>
            </form>
        </div>

    )
}
export default SignUp