import React from "react";
import PropType from "prop-types";

const Button = (props) => {
    const buttonClasses = props.buttonLarge === true ? 'btn btn-primary btn-lg' : 'btn btn-primary mx-auto'
    return (
        <a href={props.buttonUrl} className={buttonClasses}>
            <strong>{props.buttonLabel}</strong>
        </a>
    )
}

Button.propTypes = {
    buttonUrl: PropType.string,
	buttonLabel: PropType.string,
    buttonLarge: PropType.bool
}

export default Button;