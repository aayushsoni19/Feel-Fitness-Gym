import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="footer-content">
                <div className="logo">
                    <img src="" alt="Logo" />
                    <div className="tagline">Transform Your Body, Transform Your Life</div>
                </div>
                <div className="footer-desc">
                    <div className="qc">
                        <h3>Quick Contacts</h3>
                        <div className="address">
                            <img src="" alt="Location" />
                            <span>SF/TF RADHE COMPLEX, 52 RADHA KRISHNA PARK SOCIETY, AKOTA, VADODARA, GUJARAT, 390020</span>
                        </div>
                        <div className="phone-no">
                            <img src="" alt="Call us" />
                            <span>+91 9909912369</span>
                        </div>
                        <div className="mail">
                            <img src="" alt="Mail" />
                            <span>info@feelfitness.in</span>
                        </div>
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
