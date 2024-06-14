/* eslint-disable no-unused-vars */
import React from 'react'
import "./Layout.css"
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
function Layout() {
    return (
        <div className='layout'>
            <div className="navbar">
                <Navbar />
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout