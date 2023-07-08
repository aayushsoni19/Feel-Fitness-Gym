import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css";
import AboutUs from '../../container/AboutUs/AboutUs';

const Navbar = () => {
    return (

        <div className="navItem">
            <NavLink exact activeClassName="active" className="homepage" >Home</NavLink>
            <NavLink exact activeClassName='active' to={"#aboutus"}>
               About Us
            </NavLink>
            <NavLink exact activeClassName='active' >
                Our Programmes
            </NavLink>
            <NavLink exact activeClassName='active'>
                Gallery
            </NavLink>
            <NavLink exact activeClassName='active' >
                Contact
            </NavLink>

        </div>

    )
}

export default Navbar
