import React from "react";
import PropTypes from "prop-types";

import "./Input.scss";

export const Input = ({type, id, value, required, functionality}) => {
	return (
		<input className="input" type={type} id={id} name={id} value={value}
			required={required} onChange={functionality} 
		/>
	);
};

Input.propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
	id: PropTypes.string.isRequired,
	required: PropTypes.bool,
	functionality: PropTypes.func,
};

Input.displayName = "Input";

export default Input;