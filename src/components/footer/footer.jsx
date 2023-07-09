import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <>
        <div id="footer">
            <div className="footer-content">
                <div className="logo">
                    <img src="https://live.staticflickr.com/65535/53033914278_534a56baa0_n.jpg" alt="Logo" />
                    <div className="tagline">Transform Your Body, Transform Your Life</div>
                </div>
                <div className="footer-desc">                
                    <h2>Quick Contacts</h2>
                    <div className="address">
                        <img src="https://live.staticflickr.com/65535/53033914348_8a14d7b9ab_s.jpg" alt="Location" />
                        <span>SF/TF RADHE COMPLEX, 52 RADHA KRISHNA PARK SOCIETY, AKOTA, VADODARA, GUJARAT, 390020</span>
                    </div>
                    <div className="phone-no">
                        <img src="https://live.staticflickr.com/65535/53033434201_00c506c229_s.jpg" alt="Call us" />
                        <span>+91 9909912369</span>
                    </div>
                    <div className="mail">
                        <img src="https://live.staticflickr.com/65535/53033914243_1753361726_s.jpg" alt="Mail" />
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
