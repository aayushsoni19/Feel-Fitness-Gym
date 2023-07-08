import React, { useState } from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi"
import { HashLink as NavLink } from 'react-router-hash-link'

const Navbar = () => {
    const [hamburger, setHamburger] = useState(false);

    return (
        <> 
            <div className={ hamburger ? "mobile-navItem navItem" : "navItem"}>
                <NavLink to="#landingpage">
                    Home
                </NavLink>
                <NavLink to="#aboutus">
                    About Us
                </NavLink>
                <NavLink to="#ourprograms">
                    Our Programs
                </NavLink>
                <NavLink to="#gallery">
                    Gallery
                </NavLink>
                <NavLink to="#contactus">
                    Contact
                </NavLink>
            </div>

            <div className="nav-line"></div>

            <div className="hamburger-menu">
                <a href="" onClick={() => setHamburger(!hamburger)}>
                    <GiHamburgerMenu className="hamburger"/>
                </a>
            </div>
        </>
    )
}

export default Navbar