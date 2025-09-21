import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { CircleUser, KeyRound, Mail, Eye, EyeOff } from 'lucide-react';
import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handlePasswordToggle = () => {
    setShowPassword(prev => !prev);
  };

  const handleConfirmPasswordToggle = () => {
    setShowConfirmPass(prev => !prev);
  };

  const handleChange = (e) => {
    setFormErrors({});
    setSuccess("");
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};

    if (!formData.fullname.trim()) {
      errors.fullname = "Please enter your name";
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your email";
    }

    if (!formData.password) {
      errors.password = "Please enter your password";
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setSuccess("Your account has been created");
      setFormErrors({});
      setFormData({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    }
  };

  return (
    <div className="min-h-screen">
      <div className="bg-gray-700">
        <NavBar />
      </div>
      <div className="flex flex-col items-center bg-blue-50 gap-6 py-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-500 text-center">JOIN BLOG-VERSE</h1>
        <p className="text-gray-700 text-center font-semibold text-lg sm:text-xl">
          Create your account and <br /> start your blogging journey today
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col border-2 py-5 px-4 items-center sm:w-[45%] w-[90%] rounded-2xl shadow-2xl border-white gap-4 bg-blue-100"
        >
          <div className="w-full">
            <p className="text-md text-gray-600 font-semibold pb-2">Full Name</p>
            <input
              value={formData.fullname}
              onChange={handleChange}
              name="fullname"
              type="text"
              placeholder="Enter your Full Name"
              className="border rounded-xl pl-2 w-full py-2 focus:outline-none focus:border-purple-400"
            />
            {formErrors.fullname && <p className="text-red-500">{formErrors.fullname}</p>}
          </div>

          <div className="w-full relative">
            <p className="text-md text-gray-600 font-semibold pb-2">Email</p>
            <Mail className="absolute top-10 left-2 text-gray-700" />
            <input
              value={formData.email}
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="border rounded-xl pl-8 w-full py-2 focus:outline-none focus:border-purple-400"
            />
            {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
          </div>

          <div className="w-full relative">
            <p className="text-md text-gray-600 font-semibold pb-2">Password</p>
            <KeyRound className="absolute top-10 left-2 text-blue-700" />
            <span onClick={handlePasswordToggle}>
              {showPassword ? (
                <Eye className="absolute top-10 right-3 cursor-pointer" />
              ) : (
                <EyeOff className="absolute top-10 right-3 cursor-pointer" />
              )}
            </span>
            <input
              value={formData.password}
              onChange={handleChange}
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              className="border rounded-xl pl-8 w-full py-2 focus:outline-none focus:border-purple-400"
            />
            {formErrors.password && <p className="text-red-500">{formErrors.password}</p>}
          </div>

          <div className="w-full relative">
            <p className="text-md text-gray-600 font-semibold pb-2">Confirm Password</p>
            <KeyRound className="absolute top-10 left-2 text-blue-700" />
            <span onClick={handleConfirmPasswordToggle}>
              {showConfirmPass ? (
                <Eye className="absolute top-10 right-3 cursor-pointer" />
              ) : (
                <EyeOff className="absolute top-10 right-3 cursor-pointer" />
              )}
            </span>
            <input
              value={formData.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              type={showConfirmPass ? "text" : "password"}
              placeholder="Confirm your Password"
              className="border rounded-xl pl-8 w-full py-2 focus:outline-none focus:border-purple-400"
            />
            {formErrors.confirmPassword && <p className="text-red-500">{formErrors.confirmPassword}</p>}
          </div>

          <div className="flex gap-2 mt-4 w-full border rounded-xl border-red-400 px-4 py-3 items-center justify-center">
            <input type="checkbox" className="h-5 w-5" />
            <p>I agree to the Terms of Service and Privacy Policy</p>
          </div>

          {success && <p className="text-green-500">{success}</p>}

          <button
            type="submit"
            className="bg-purple-500 font-bold text-white w-full py-2 rounded-xl mt-2 hover:text-cyan-950 cursor-pointer flex justify-center items-center"
          >
            <CircleUser />
            <span className="ml-2">Create Account</span>
          </button>

          <div className="border-gray-500 border-t w-full mt-4"></div>

          <p className="font-semibold text-gray-700 mt-4 text-center">
            Already have an account?{" "}
            <Link to="/SignIn" className="text-purple-500 hover:text-emerald-800">
              Sign In Here
            </Link>
          </p>
          <Link to="/Home" className="font-semibold mt-2 hover:text-blue-900 cursor-pointer text-center">
            Back to Home
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;