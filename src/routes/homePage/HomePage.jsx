/* eslint-disable no-unused-vars */
import React from 'react'
import Bg from "../../../public/bg.png"
import "./HomePage.css"
import SearchBar from '../../components/SearchBar/SearchBar'
import CountUp from 'react-countup';
function HomePage() {
    return (
        <div className='homePage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                        explicabo suscipit cum eius, iure est nulla animi consequatur
                        facilis id pariatur fugit quos laudantium temporibus dolor ea
                        repellat provident impedit!
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1><CountUp end={16} duration={7} />+</h1>
                            <h2>Year of experience</h2>
                        </div>
                        <div className="box">
                            <h1><CountUp end={200} duration={5} />+</h1>
                            <h2>Project Completed</h2>
                        </div>
                        <div className="box">
                            <h1><CountUp end={2000} duration={5} />+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src={Bg} alt="" />
            </div>
        </div>
    )
}

export default HomePage