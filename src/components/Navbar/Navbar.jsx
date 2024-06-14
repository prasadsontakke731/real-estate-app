/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import '../Navbar/navbar.css'
import Logo from "../../../public/bg.png"
const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav>
            <div className="left">
                <a href="/" className='logo'>
                    <img src="/public/bg.png" alt="" />
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                <a href="/">Sign in</a>
                <a href="/" className='register'>Sign up</a>
                <div className="menuIcon">
                    <img src="/public/menu.png" alt="" onClick={() => setOpen((prev) => !prev)} />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/">Sign in</a>
                    <a href="/">Sign up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar