
import PropTypes from "prop-types";
import stlyes from "./Button.module.css";

function Button({text}){
    return <button className={stlyes.btn}>{text}</button>
}

Button.propType = {
    text : PropTypes.string.isRequired,
}

export default Button;