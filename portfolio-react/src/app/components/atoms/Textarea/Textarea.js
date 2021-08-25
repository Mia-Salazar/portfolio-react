import React from "react";
import PropTypes from "prop-types";

import "./Textarea.scss";

export const Textarea = ({pattern, id, value, required, functionality}) => {
	return (
		<textarea className="textarea" rows="4" cols="50" pattern={pattern} id={id} name={id} value={value}
			required={required} onChange={functionality}>
		</textarea>
	);
};

Textarea.propTypes = {
	pattern: PropTypes.string,
	value: PropTypes.string,
	id: PropTypes.string.isRequired,
	required: PropTypes.bool.isRequired,
	functionality: PropTypes.func.isRequired,
};

Textarea.displayName = "Textarea";

export default Textarea;