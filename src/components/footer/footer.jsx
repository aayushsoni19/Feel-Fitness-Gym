import React from 'react'
import "./Footer.css"
import address from "../../assets/address.png"
import phone from "../../assets/phone.png"
import mail from "../../assets/Mail.png"
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <>
        <div id="footer">
            <div className="footer-content">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                    <div className="tagline">Transform Your Body, Transform Your Life</div>
                </div>
                <div className="footer-desc">
                        <h2>Quick Contacts</h2>
                        <div className="address">
                            <img src={address} alt="Location" />
                            <span>SF/TF RADHE COMPLEX, 52 RADHA KRISHNA PARK SOCIETY, AKOTA, VADODARA, GUJARAT, 390020</span>
                        </div>
                        <div className="phone-no">
                            <img src={phone} alt="Call us" />
                            <span>+91 9909912369</span>
                        </div>
                        <div className="mail">
                            <img src={mail} alt="Mail" />
                            <span>info@feelfitness.in</span>
                        </div>
                </div>
            </div>
            <div className="copyright">
                <span>© 2023 All rights reserved | Feel Fitness</span>
            </div>
        </div>
    </>
  )
}

export default Footer
