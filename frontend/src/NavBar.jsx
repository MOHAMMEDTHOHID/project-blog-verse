import React from "react";

const NavBar = () => {
    return(
        <div className="flex justify-around h-16 items-center border-1 border-gray- 400">
            <h1 className=" font-bold">BlogVerse</h1>
            <button className="text-gray-700 bg-blue-200 px-5 py-2 cursor-pointer hover:bg-blue-800">Home</button>
            <div className="flex gap-3">
                <button className=" font-semibold hover:text-blue-900">Sign in</button>
                <button className="border-2 border-black bg-blue-600 p-2 text-amber-50 rounded-2xl hover:bg-blue-800">Sign up</button>
            </div>
            </div>
    )
}
export default NavBar;
