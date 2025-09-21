import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { Mail } from 'lucide-react';

const SignIn = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-gray-700">
        <NavBar />
      </div>
      <div className="bg-blue-50 h-screen flex items-center justify-center shadow-black">
        <div className="border-2 shadow-2xl bg-blue-100 rounded-2xl flex flex-col justify-evenly items-center sm:h-[75%] sm:w-[45%] w-[75%] gap-4 p-6 font-serif">
          <h1 className="text-2xl font-bold">Sign In</h1>
          <h2 className="font-semibold">Access your account</h2>
          <form className="w-full flex flex-col gap-4">
            <div className="w-full">
              <p className="text-md text-gray-600 font-semibold pb-2">Email</p>
              <div className="relative">
                <Mail className="absolute top-2 left-2 text-gray-700" />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="border rounded-xl pl-8 w-full py-2 focus:outline-none focus:border-purple-400"
                />
              </div>
            </div>

            <div className="w-full">
              <p className="text-md text-gray-600 font-semibold pb-2">Password</p>
              <input
                type="password"
                placeholder="Enter your Password"
                className="border rounded-xl pl-2 w-full py-2 focus:outline-none focus:border-blue-700"
              />
            </div>

            <div className="flex flex-wrap gap-3 items-center justify-between mt-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <p className="text-sm text-blue-700 hover:text-blue-900 cursor-pointer">Forgot password?</p>
            </div>

            <button
              type="submit"
              className="font-bold bg-cyan-100 border rounded-2xl w-full py-2 hover:bg-blue-500 cursor-pointer"
            >
              SIGN IN
            </button>

            <div className="border-t border-red-500 w-full mt-4"></div>

            <div className="mt-3 text-center">
              <p>
                Don't have an account?{" "}
                <Link to="/SignUp" className="text-blue-950 hover:text-red-600">
                  Create one here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;