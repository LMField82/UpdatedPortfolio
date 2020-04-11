import React from 'react';

function Card(props) {
  return (

    <div className="card mb-3">
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src={props.image} className="card-img" alt={props.title} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn">{props.btnText}</a>
                </div>
            </div>
        </div>
    </div>
    

  );
}

export default Card;

