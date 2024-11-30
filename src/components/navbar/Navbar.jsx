import React, { Fragment, useState } from 'react'
import "./navbar.css"
import { assests } from '../../images/images'
import { FaSearch } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
import { Link, Links, useNavigate } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home")
    const navigate =useNavigate()
    return (
        <div className="flex justify-between bg-slate-200 border-b-2 shadow-lg shadow-gray-500">
            <div className='flex justify-start ml-5 gap-8'>
                <img src={assests.logo} alt="logo" className='max-h-16 max-w-16 ' />
                <span className='self-center text-3xl text-nowrap text-[#008000] '>Healthy Food</span>
            </div>
            <ul className='flex gap-12 self-center text-xl cursor-pointer text-nowrap'>
                <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href='#menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href='#download' onClick={() => setMenu("mobile")} className={menu === "mobile" ? "active" : ""}>Mobile-app</a>
                <a href='#footers' onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact us</a>
            </ul>
            <div className='flex gap-8 self-center mr-12'>
                <FaSearch className='text-2xl hover:text-[#008000] hover:scale-125' />
                <div onClick={()=>navigate("/cart")}>
                    <IoBagCheck className='text-2xl relative hover:text-[#008000] hover:scale-125' />
                    <span className='absolute bg-red-700 h-2.5 w-2.5 rounded-xl top-3 right-48'></span>
                </div>
                <button onClick={()=>setShowLogin(true)} className='border-none text-nowrap bg-red-700 px-4 py-1 mx-6 rounded-tl-lg rounded-br-lg border-black'>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar