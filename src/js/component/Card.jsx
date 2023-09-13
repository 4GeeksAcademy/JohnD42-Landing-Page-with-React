import React from "react";
import PropType from "prop-types";
import Button from "./Button.jsx"


const Card = (props) => {
    return (
        <div className="col-md-3 col-12 my-4">
            <div className="card h-100">
                <img className="card-img-top" src={props.imageUrl} alt='Card image cap'/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className="card-footer bg-white d-flex">
                    <Button
                    buttonUrl={props.buttonUrl}
                    buttonLabel={props.buttonLabel} 
                    /> 
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
	title: PropType.string,
	imageUrl: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,
};

export default Card;