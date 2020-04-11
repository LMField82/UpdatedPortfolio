import React from 'react';

function Card(props) {
  return (
    <div className="card-container">
        <div className="card mb-3">
            <div>
                    <img src={props.image} className="card-img-top" alt={props.title} />
               
                
                    <div className="card-body">
                        <h4 className="card-title">{props.title}</h4>
                        <p className="card-text">{props.text}</p>
                        <button href={props.link}>{props.btnText}</button>
                    </div>
               
            </div>
        </div>
    </div>

  );
}

export default Card;

