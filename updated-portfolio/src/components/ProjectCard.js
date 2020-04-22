import React from 'react';
import "../styles/projects.css";
// import { Container, Row, Col } from "./Layout"

function ProjectCard(props) {
  return (
      
    <div id="contForCards">
        <div className="card">
            
            <img src={props.image} className="card-img-top" alt={props.title} />
               
                
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.text}</p>
                <button href={props.link}>{props.btnText}</button>
            </div>
               
            
        </div>
     </div>
    
  );
}

export default ProjectCard;

