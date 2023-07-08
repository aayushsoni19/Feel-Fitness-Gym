import React, { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import "./AboutUs.css"

const AboutUs = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide ( slide === data.length - 1 ? 0 : slide + 1 );
    }

    const prevSlide = () => {
        setSlide ( slide === 0 ? data.length - 1 :  slide - 1 );
    }

    return (
        <>
            <div id="aboutus">
                <div className="au">
                    <div className="au-desc">
                        <span className="sec-no">01</span>
                        <h3><span className="au-h3">About Feel Fitness</span></h3>
                        <h1><span className="au-h1">Welcome to Us</span></h1>
                        <div className="line au-line-pos"></div>
                        <p className="p1">
                            The Gym was founded by Mrs. Rekha in retrospect to motivate oneself but over time, it faced various opportunities and challenges which were successfully overcome.
                        </p>
                        <p className="p2">
                            The gym is now well-maintained with good equipment and a positive relationship with its members, resulting in benefits for many. <br /> <br />
                            The gym strives to provide the best service and also supports and organises various events, including sponsoring championships in bodybuilding, power-lifting, arm-wrestling, and CrossFit.
                        </p>
                    </div>
                    <div className="gallery">
                        <div className="carousel">
                            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={ prevSlide }/>
                            {data.map((item, idx) => {
                                return <img src={item.src} alt={item.alt} key={idx} className={ slide === idx ? "slide" : "slide slide-hidden" } />
                            })}
                            <BsArrowRightCircleFill className="arrow arrow-right" onClick={ nextSlide }/>
                        </div>
                        <div className="thumbnails">
                            {data.map((_, idx) => {
                                return <button key={idx} onClick={ () => setSlide(idx) } className={ slide === idx ? "thumbnail" : "thumbnail thumbnail-inactive" }>
                                    <img src={_.src} alt={_.alt} className="t-img" />
                                </button>
                            })}
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default AboutUs