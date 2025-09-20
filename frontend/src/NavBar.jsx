import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
    return(
        <div className="flex justify-around h-16 w-screen items-center border-1 border-gray- 400">
            <h1 className=" font-bold text-xl">BlogVerse</h1>
            <Link to="/Home" className="text-gray-700  rounded-2xl bg-blue-200 px-5 py-2 cursor-pointer hover:bg-blue-800">Home</Link>
            <div className="flex gap-3">
                <Link to="/SignIn" className=" font-semibold shadow-blue-500 hover:text-blue-900 p-2 ">Sign in</Link>
                <Link to="/SignUp" className="border-2 border-black bg-blue-600 p-2 text-amber-50 rounded-2xl hover:bg-blue-800">Sign up</Link>
            </div>
            </div>
    )
}
export default NavBar;
