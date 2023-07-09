import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import Navbar from '../../components/Navbar/Navbar'
library.add(faYoutube)
import "./LandingPage.css"

const LandingPage = () => {
    return (
        <>
            <div id="landingpage">
                <img className="mobile" src="https://live.staticflickr.com/65535/53032855087_ab0efe8551_w.jpg" alt="Background Image" />

                <img className="desktop" src="https://live.staticflickr.com/65535/53033914353_e4a3318463.jpg" alt="Background Image" />

                <img src="src/assets/canvas.png" alt="Text Background" className="sm-hero" />

                <Navbar />
                
                <div className="lp-header">You Only Fail, When You Stop Trying</div>
                <div className="lp-header-desc">In here we will help you to shape and build you ideal body and live up your life to fullest </div>

                <button className="btn1"><a href="#ourprograms">Get Started Now</a></button>
                <button className="btn2"><a href="#testimonials"><FontAwesomeIcon icon="fa-brands fa-youtube" className="icon" />Watch Reviews</a></button>
            </div>
        </>
    )
}

export default LandingPage

