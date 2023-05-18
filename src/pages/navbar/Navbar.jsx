import React from 'react';
import "./navbar.scss";
import arrow from "../../assests/arrow.svg";
import logo from "../../assests/logo.png";
import alarm from "../../assests/alarm.svg"

const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="arrow">
                <img src={arrow} alt="" />
            </div>
            <div className="logo">
            <img src={logo} alt="" />
            </div>
            <div className="alarm">
            <img src={alarm} alt="" />
            </div>
            
        </div>
    </>
  )
}

export default Navbar