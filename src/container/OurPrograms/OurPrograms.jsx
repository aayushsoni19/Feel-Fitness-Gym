import React from 'react'
import "./OurPrograms.css"

const OurPrograms = () => {
    return (
        <>
            <div id="ourprograms">
                <div className="op-desc">
                    <span className="sec-no op-sec-no">03</span>
                    <h3><span className="op-h3">Our Programs</span></h3>
                    <h1><span className="op-h1">Specialy designed for you</span></h1>
                    <div className="line op-line-pos"></div>
                </div>
                <div className="programs">
                    <div className="bt">
                        <h1>Body Transformation</h1>
                        <p>A program developed to change the body with the help of a trainer who provides guidance.</p>
                    </div>
                    <div className="rawfit">
                        <h1>Rawfit</h1>
                        <p>This fitness program is designed for teenagers and includes a combination of functional movements, metabolism-boosting, and obesity control techniques.</p>
                    </div>
                    <div className="weightgl">
                        <h1>Weight Gain/Loss</h1>
                        <p>The program typically consists of exercises that improve strength, endurance, flexibility, gain muscles, maintain BMI etc.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurPrograms