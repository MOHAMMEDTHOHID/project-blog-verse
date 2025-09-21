import ProductCard from "./ProductCard"
import NavBar from "./NavBar.jsx"
import SignUp from "./SignUp.jsx"
import SignIn from "./SignIn.jsx"
import Home from "./Home.jsx"
import { Routes, Route } from 'react-router-dom'
import { Component } from "react"
function App() {


  return (
    <Routes>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/signIn" element={<SignIn/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
  )
}

export default App