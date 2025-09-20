import NavBar from "./NavBar"
import { Link } from "react-router-dom"
import { CircleUser } from 'lucide-react';
import { KeyRound } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from "react";



const SignUp = () => {
    const [FormData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: ""

    })
    const [showPassword, setShowPasswrod] = useState(false);
    const [showconfirmPass, setConfirmPassword] = useState(false);
    const [error, setError] = useState("")
    const [sucess, setSuccess] = useState("")
    const [errors, setErrors] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: ""

    })
    const handlePassword = () => {
        setShowPasswrod((password) => !password)
    }
    const handleconfirmPassword = () => {
        setConfirmPassword((password) => !password)
    }
    const handleSubmit = (event) => 
        {
         event.preventDefault();
         let newErrors={}
         if(!FormData.fullname){
            newErrors.fullname="please enter your name"
         }
          if(!FormData.email){
            newErrors.email="please enter your email"
         }
         if(!FormData.password){
            newErrors.password="please enter your password"
         }
         else if(!FormData.confirmPassword){
            newErrors.confirmPassword="your passwowrd is not same"
         }
         if (Object.keys(newErrors).length>0)
         {
            setError(newErrors);
         }
         else{
            setSuccess("your account has been ceated");
            setError("");
             setFormData({
                 fullname: "",
                 email: "",
              password: "",
             confirmPassword: ""
         })}

        // if (!FormData.fullname || !FormData.email || !FormData.password || !FormData.confirmPassword) {
        //     setError("All fields required");
        // }
        // else if (FormData.password !== FormData.confirmPassword) {
        //     setError("password mismatched");
        // }

        // else {
        //     setSuccess("successfully Signed");
        //     setError("");
        //     setFormData({
        //         fullname: "",
        //         email: "",
        //         password: "",
        //         confirmPassword: ""


        

        }

    
    const handleChange = (e) => {
        setError("");
        setSuccess("");
        setFormData((FormData) => ({
            ...FormData,
            [e.target.name]: e.target.value
        }))
        setErrors({
            ...error,
            [e.target.name]: e.target.value
        })


    }
    return (
        <div className="bg-gray-700">
            <NavBar />

            <div className=" flex flex-col items-center bg-blue-50 gap-6">


                <h1 className="text-5xl text-bold text-blue-500 ">JOIN BLOG-VERSE</h1>
                <p className="text-gray-700 text-center text-semibold text-xl">create your account and <br></br>start Blogging journey today</p>
                <form onSubmit={handleSubmit} className="flex flex-col border-2 py-5 items-center w-1/3 rounded-2xl shadow-2xl  border-white gap-2  ">
                    <div className="w-[90%] items-center">
                        <p className="text-md text-gray-600 font-semibold pb-2">FullName</p>
                        <input
                            value={FormData.fullname}
                            onChange={handleChange}
                            name="fullname"
                            
                            type="text" placeholder="Enter your FullName" className="border-1 rounded-xl pl-2 w-full py-1 focus:outline-none focus:border-purple-400" />
                   {error.fullname &&<p>{error.fullname}</p>}
                    </div>
                    <div className="w-[90%] relative items-center pt-5">
                        <p className="text-md text-gray-600 font-semibold pb-2">Email</p>
                        <Mail className="absolute pt-2 pl-1 text-gray-950" />
                        <input
                            value={FormData.email}
                            onChange={handleChange}
                            type="email"
                            name="email"
                         
                         placeholder="Enter your Email" className="border-1 rounded-xl pl-7 w-full py-1 focus:outline-none focus:border-purple-400" />
                   {error.email &&<p>{error.email}</p>}
                    </div>
                    
                    <div className="w-[90%] items-center pt-5 relative">
                        <p className="text-md text-gray-600 font-semibold pb-2">Password</p>
                        <KeyRound className="absolute top-14 pl-1  text-blue-700  " />
                        <p onClick={handlePassword}> {showPassword ? <Eye className="absolute right-3 top-14" /> : <EyeOff className="absolute right-3 top-14" />}  </p>

                        <input
                            value={FormData.password}
                            onChange={handleChange}
                            name="password"
                          
                          type={showPassword ? "password" : "text"} placeholder="Enter your Password" className="border-1 rounded-xl pl-7 w-full py-1 px-3 focus:outline-none focus:border-purple-400" />
                    {error.password &&<p>{error.password}</p>}
                    </div>
                    <div className="w-[90%] items-center relative pt-5">
                        <p className="text-md text-gray-600 font-semibold pb-2">Confirm Password</p>
                        <KeyRound className="absolute top-14 pl-1 text-blue-700" />
                        <p onClick={handleconfirmPassword}> {showconfirmPass ? <Eye className="absolute right-3 top-14" /> : <EyeOff className="absolute right-3 top-14" />}  </p>

                        <input
                            value={FormData.confirmPassword}
                            onChange={handleChange}
                            name="confirmPassword"
                            type={showconfirmPass ? "password" : "text"} placeholder="confirm your password" className="border-1 rounded-xl pl-7 w-full py-1 focus:outline-none focus:border-purple-400" />
                   {error.confirmpassword &&<p>{error.confirmpassword}</p>}
                    </div>

                    <div className="flex gap-2 mt-5 w-[90%] border-1 rounded-xl border-red-400 px-4 py-5 items-center justify-center">
                        <input type="checkbox" name="" id="" className="h-5 w-5" />
                        <p>I agree to the Terms of service and Privacy policy</p>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    {sucess && <p className="text-green-500"> {sucess}</p>}
                    <button type="submit" className="bg-purple-500 font-bold text-white w-[90%] p-2 rounded-xl  items-center mt-4 hover:text-cyan-950 cursor-pointer flex justify-center"> <CircleUser /><p>Create Account</p></button>
                    <div className="border-gray-500 border-[0.5px] w-[90%] mt-5"></div>
                    <p className="text-semibold text-gray-700 mt-5 ">Already have an Account ?  <Link to="/SignIn" className="text-purple-500 hover:text-emerald-800">Sign In Here</Link></p>
                    <Link to="/Home" className="text-semibold mt-5 hover:text-blue-900 cursor-pointer ">Back to Home </Link>
                </form>

            </div>
        </div>

    )
}
export default SignUp