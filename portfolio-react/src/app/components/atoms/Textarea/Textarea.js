import React from "react";
import PropTypes from "prop-types";

import "./Textarea.scss";

export const Textarea = ({id, value, required, functionality}) => {
	return (
		<textarea className="textarea" rows="4" cols="50" id={id} name={id} value={value}
			required={required} onChange={functionality}>
		</textarea>
	);
};

Textarea.propTypes = {
	value: PropTypes.string,
	id: PropTypes.string.isRequired,
	required: PropTypes.bool,
	functionality: PropTypes.func,
};

Textarea.displayName = "Textarea";

export default Textarea;