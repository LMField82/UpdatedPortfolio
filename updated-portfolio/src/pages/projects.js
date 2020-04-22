import React, { Component } from 'react';
import ProjectCard from "../components/ProjectCard";
import cards from "../cards.json";
// import "../styles/projects.css";
 
const handleClick = () => {

 }

    class Projects extends Component {
    state = {
      cards
    };

render()  {
   
    return (
        <div>
            {this.state.cards.map(cards => (
            <ProjectCard 
                id={cards.id}
                image={cards.image}
                title={cards.title}
                text={cards.text}
                btnText={cards.btnText}
                link={cards.link}
            />
            ))}
        </div>
      )
  
}
};

export default Projects;