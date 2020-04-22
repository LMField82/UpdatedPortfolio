import React, { useState } from "react";
// import "../styles/about.css";
import ReactCardFlip from 'react-card-flip';
// import Mailto from "react-mailto";


const Contact = () => {
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
                        <h4 className="card-title card-title-front">Contact Me</h4>
                        <p className="card-text">Email: meneslindsay@hotmail.com 
                        Location: Denver, CO</p>
                        {/* <Mailto email="meneslindsay@hotmail.com" obfuscate={true}>
                            Email me!
                        </Mailto> */}
                        <button onClick={handleClick}>What I'm Up To</button>
                    </div>
                </div>
                </div>
                <div className="card-container">
                <div className="card back">
                    <div className="card-body">
                        <img src="images/DollDress.jpg" className="card-img-top latest" alt="Latest Project" />

                        <h4 className="card-title">My Latest Projects Outside Coding</h4>
                        <p className="card-text">Making clothes for my daughter's dolls!</p>
                        <button onClick={handleClick}>Back</button>
                    </div>
                </div>
            </div>
       
        </ReactCardFlip>
    )

}




export default Contact;