import React from "react";
import PropTypes from "prop-types";

import i18n from "../../../../i18n";
import "./Button.scss";

export const Button = ({ text, type = "button", functionality, modificator, disabled = false, ...rest}) => {
	return (
		<button {...rest} className={modificator ? `button button--${modificator}` : "button"} onClick={functionality} type={type} disabled={disabled}>{i18n.t(text)}</button>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string,
	functionality: PropTypes.func,
	modificator: PropTypes.string,
	disabled: PropTypes.bool
};

Button.displayName = "Button";

export default Button;