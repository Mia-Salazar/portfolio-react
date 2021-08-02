import React from "react";
import PropTypes from "prop-types";

import i18n from "../../../../i18n";
import "./Button.scss";

export const Button = ({ text, type = "button", functionality}) => {
	return (
		<button className="button" onClick={functionality} type={type}>{i18n.t(text)}</button>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string,
	functionality: PropTypes.func
};

Button.displayName = "Button";

export default Button;