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
                        <h4 className="card-title card-title-front">Hi, I'm Lindsay!</h4>
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
                        <p className="card-text">I graduated from USC with a degree in Mathematics. Everyone used to tell me, "You'd love programming, you have the logical mind for it," but I brushed it off. I decided I wasn't very interested at the time. I started my career in the educational world as a high school math teacher. I taught all levels of mathematics from remedial middle school math to precalculus, and everything in between. While I loved my students and the content, I wasn't thriving as a teacher. 
                        </p>
                        <p>
                        After leaving the educational world I pursued some passions of mine. I learned how to sew and am a very good seamstress now. I learned to paint and mastered making silver jewlery, as I am a quick learner. After some brief exposure to HTML at a teacher internship program, I was hooked. I started learning more HTML and CSS through Codecademy. Last Fall I took my education a step further and enrolled in a 24 week bootcamp. Now I finally understand why people used to tell me I'd be good at coding, cause I am!
                         </p>
                        <button onClick={handleClick}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    
</ReactCardFlip>
)

}



export default About;
