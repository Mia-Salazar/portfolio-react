import React from "react";
import PropTypes from "prop-types";

import i18n from "../../../../i18n";
import { Input } from "../../atoms/Input/Input";
import "./InputGroup.scss";

export const InputGroup = ({text, type, pattern, id, value, required, functionality}) => {
	return (
		<div className="input-group">
			<label htmlFor={id} className="input-group__label">{i18n.t(text)}</label>
			<Input type={type} pattern={pattern} required={required} functionality={functionality} value={value} />
		</div>
	);
};

InputGroup.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	pattern: PropTypes.string,
	value: PropTypes.string,
	id: PropTypes.string.isRequired,
	required: PropTypes.bool.isRequired,
	functionality: PropTypes.func.isRequired,
};

InputGroup.displayName = "InputGroup";

export default InputGroup;