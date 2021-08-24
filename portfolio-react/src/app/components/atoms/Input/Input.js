import React from "react";
import PropTypes from "prop-types";

import i18n from "../../../../i18n";
import "./Input.scss";

export const Input = ({type, pattern, placeholder, id, value, required, functionality}) => {
	return (
		<input className="input" type={type} pattern={pattern} id={id} name={name} value={value}
			placeholder={i18n.t(placeholder)} required={required} onChange={functionality}
		/>
	);
};

Input.propTypes = {
	type: PropTypes.string.isRequired,
	pattern: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	required: PropTypes.bool.isRequired,
	functionality: PropTypes.func.isRequired,
};

Input.displayName = "Input";

export default Input;