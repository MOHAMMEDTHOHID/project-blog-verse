import NavBar from "./NavBar"
import { Link } from "react-router-dom";
import { Mail } from 'lucide-react';
const SignIn = () => {

    return (
        <div className="bg-gray-700">   <NavBar />
            <div className=" border h-screen bg-blue-50 w-full shadow-black">

                <div className="flex flex-col items-center justify-center gap-9 font-serif " >
                    <div className="border-2 shadow-2xl  bg-blue-100 mt-15 rounded-2xl flex flex-col justify-evenly items-center h-[60%] w-[25%] gap-1.5">
                        <h1 className=" text-2xl font-bold">Sign In</h1>
                        <h2 className="font-semibold">Access your acconut</h2>
                        <form>
                            <div className="w-[100%]  items-center pt-5">
                                <p className="text-md text-gray-600 font-semibold pb-2">Email</p>
                                <div className="relative">
                                <input type="email" placeholder="Enter your Email" className="border-1 rounded-xl pl-7 w-full py-2  focus:outline-none focus:border-purple-400" />
                                <Mail className="absolute top-2 pl-1"/>
                            </div>
                            </div>

                            <div className="w-[100%]  pt-5 ">
                                <p className="text-md text-gray-600 font-semibold pb-2">Password</p>
                                <input type="password" placeholder="Enter your Password" className="border-1 rounded-xl pl-2 w-full p-2 focus:outline-none focus:border-blue-700 gap-1" />
                            </div>
                            <div className="flex gap-5 mt-5 border- border-gray-400  items-center justify-center p-2 rounded-2xl">
                                <input type="checkbox" className="" />
                                <p>Remember me</p>
                                <p className="hover:text-blue-900">forgot password?</p>

                            </div>
                            <div className="p-2" >
                                <button className=" font-bold bg-cyan-100 border-1 items-center rounded-2xl justify-center w-[100%] h-[20%] gap-2 p-2 hover:bg-blue-500 cursor-pointer ">SIGNIN</button>
                            </div>
                            <div className="border-0.5px border-red-500 w-[90%]"></div>
                            <div className="mt-3 p-4 ">
                                <p >Don't have an account? <Link to="/SignUp" className="text-blue-950 hover:cursor-pointer hover:text-red-600">Create one here</Link></p>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignIn;