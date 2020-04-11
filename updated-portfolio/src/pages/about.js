import React, { useState } from "react";
import "../styles/about.css";
import ReactCardFlip from 'react-card-flip';

const About = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="card-container">
                <div className="card front">
                    <div className="card-body">
                        <img src="images/Lindsay.jpeg" className="card-img-top profile" alt="Lindsay Field" />
                        <h4 className="card-title">Hi, I'm Lindsay!</h4>
                        <p className="card-text">I recently graduated from a full-stack coding bootcamp through the University of Denver. I learned skills in HTML, CSS, JavaScript, SQL, MongoDB, React, and more. See my full Story below.</p>
                        <button onClick={handleClick}>About Me</button>
                    </div>
                </div>
            </div>
                  
            <div className="card-container">
                <div className="card-container">
                <div className="card back">
                    <div className="card-body">
                        <img src="images/Lindsay.jpeg" className="card-img-top profile" alt="Lindsay Field" />

                        <h4 className="card-title">Here's My Story</h4>
                        <p className="card-text">I have a background in Mathematics and Education... </p>
                        <a href="#" className="btn">Back</a>
                    </div>
                </div>
                </div>
            </div>
        </ReactCardFlip>
    )

}



export default About;
