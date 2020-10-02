import React from "react";
import "../style.css"


function Cards(props) {
    console.log(props.image)
    return <div className="card bg-secondary m-3">
        <div className="card-body">
            <img className="card-img-top" alt={props.name} id='port' src={props.image} alt={props.name} />
            <h5 className="card-title text-center">{props.name}</h5>
            <p className="card-text">{props.occupation}</p>
            <p className="card-text">{props.email}</p>
            <p className="card-text">{props.phone}</p>
        </div>
    </div>
}
export default Cards;





