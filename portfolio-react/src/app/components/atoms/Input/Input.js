import React from "react";
import PropTypes from "prop-types";

import "./Input.scss";

export const Input = ({type, pattern, id, value, required, functionality}) => {
	return (
		<input className="input" type={type} pattern={pattern} id={id} name={id} value={value}
			required={required} onChange={functionality}
		/>
	);
};

Input.propTypes = {
	type: PropTypes.string.isRequired,
	pattern: PropTypes.string,
	value: PropTypes.string,
	id: PropTypes.string.isRequired,
	required: PropTypes.bool.isRequired,
	functionality: PropTypes.func.isRequired,
};

Input.displayName = "Input";

export default Input;