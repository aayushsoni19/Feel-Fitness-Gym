import React, {useState} from 'react'
import "./Bmi.css"

const Bmi = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [age, setAge] = useState("");
    const [bmi, setBmi] = useState("");
    const [msg, setMsg] = useState("Result");

    const handleCalculations = (e) => {
        e.preventDefault()

        if (weight === "0" || height === "0" || weight === "" || height === "") {
            console.log("Invalid");
            alert("Please enter valid values")
        }
        else {
            let bmiformula = (weight / (height * height) * 703);
            setBmi(bmiformula.toFixed(2))
        }

        if (bmi > 25) {
            setMsg("You are underweight!")
        }
        else if (bmi >= 25 || bmi <= 30) {
            setMsg("You are Healthy!")
        }
        else {
            setMsg("You are overweight!")
        }
    }

    return (
        <>
            <div id="bmi">
                <div className="bmi-content">
                    <div className="bmi-desc">
                        <span className="sec-no">04</span>
                        <h3><span className="bmi-h3">Advanced Calculator</span></h3>
                        <h1><span className="bmi-h1">Calculate your BMI</span></h1>
                        <div className="line bmi-line-pos"></div>
                    </div>
                    <div className="bmi-calc">
                        <form onSubmit={handleCalculations}>
                            <div>
                                <label className="label height-label">Your Height</label><br />
                                <input className="placeholder height-placeholder" placeholder="  in cms" value={height} onChange={ (e) => setHeight(e.target.value)}/>
                            </div>
                            <div>
                                <label className="label weight-label">Your Weight</label><br />
                                <input className="placeholder weight-placeholder" placeholder="  in kgs" value={weight} onChange={ (e) => setWeight(e.target.value)}/>
                            </div>
                            <div>
                                <label className="label age-label">Your Age</label><br />
                                <input className="placeholder age-placeholder" placeholder="  Age" value={age} onChange={ (e) => setAge(e.target.value)}/>
                            </div>
                            <div>
                                <button className="s-btn" type="submit"><span>Calculate Now</span></button>
                                <div className="result">{msg}</div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bmi-img">
                    <img className="bmi-bg-img" src="https://live.staticflickr.com/65535/53033830010_780166768e.jpg" alt="" />
                </div>
            </div>
        </>
    )
}

export default Bmi