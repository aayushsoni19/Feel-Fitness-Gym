import React from 'react'
import "./ContactUs.css"
import Footer from '../../components/footer/footer'

const ContactUs = () => {
    return (
        <>
            <div id="contactus">
                <img src="src/assets/contact-bg.jpg" alt="Background Image" className="contact-bg" />
                <div className="c-desc">
                    <h3>Call Us Now</h3>
                    <h1>+91 9909912369</h1>
                    <p>Call us today to get your personalised workout and meal plan. Visit us as well to ensure the quality of equipments.</p>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ContactUs