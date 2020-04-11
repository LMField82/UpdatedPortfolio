import React, { Component } from 'react';
import Card from "../components/Card";
import cards from "../cards.json";

class Projects extends Component {
    state = {
      cards
    };

render()  {
    return (
        <div>
            {this.state.cards.map(cards => (
            <Card 
                id={cards.id}
                image={cards.image}
                title={cards.title}
                text={cards.text}
                btnText={cards.btnText}
            />
            ))}
        </div>
      )
    }
};

export default Projects;