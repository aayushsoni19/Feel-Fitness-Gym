import React, { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import "./Testimonials.css"

const Testimonials = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide ( slide === data.length - 1 ? 0 : slide + 1 );
    }

    const prevSlide = () => {
        setSlide ( slide === 0 ? data.length - 1 :  slide - 1 );
    }

    return (
        <>
            <div id="testimonials">
                <div className="testimonial-desc">
                    <span className="sec-no">02</span>
                    <h3><span className="t-h3">Our Testimonials</span></h3>
                    <h1><span className="t-h1">What Clients Say</span></h1>
                    <div className="line t-line-pos"></div>
                </div>
                <div className="reviews">
                    <div className="review">
                        <BsArrowLeftCircleFill className="t-arrow t-arrow-left" onClick={ prevSlide }/>
                            {data.map((item, idx) => {
                                return (
                                    <>
                                        <div className="r1">
                                            <div className="r1-desc">
                                                <span key={idx} className={ slide === idx ? "name" : "name slide-hidden" }>{item.name}</span>
                                                <span key={idx} className={ slide === idx ? "occupation" : "occupation slide-hidden"}>{item.occupation}</span>
                                                <p key={idx} className={ slide === idx ? "text" : "text slide-hidden"}>{item.review}</p>
                                                <img src="https://live.staticflickr.com/65535/53032854962_27bee8ea4f_q.jpg" alt="ratings" key={idx} className={ slide === idx ? "rating" : "rating slide-hidden"}/>
                                            </div>
                                            <img src="" alt="" key={idx} className={ slide === idx ? "c-pic" : "c-pic slide-hidden"}/>
                                        </div>
                                    </>
                                )
                            })}
                        <BsArrowRightCircleFill className="t-arrow t-arrow-right" onClick={ nextSlide }/>
                    </div>
                    <div className="indicators">
                        {data.map((_, idx) => {
                            return <button key={idx} onClick={ () => setSlide(idx) } className={ slide === idx ? "indicator" : "indicator indicator-inactive" }></button>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials