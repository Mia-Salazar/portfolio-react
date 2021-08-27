import React from "react";
import PropTypes from "prop-types";

import i18n from "../../../../i18n";
import { Textarea } from "../../atoms/Textarea/Textarea";
import { Input } from "../../atoms/Input/Input";
import "./InputGroup.scss";

export const InputGroup = ({text, type, pattern, id, value, required, functionality}) => {
	return (
		<div className="input-group">
			<label htmlFor={id} className="input-group__label">
				{i18n.t(text)}
				{required ? <span className="input-group__asterisk">*</span> : ""}
			</label>
			{type 
				? <Input type={type} pattern={pattern} id={id} required={required} functionality={functionality} value={value} />
				: <Textarea pattern={pattern} id={id} text={text} required={required} functionality={functionality} value={value} />
			}			
		</div>
	);
};

InputGroup.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string,
	pattern: PropTypes.string,
	value: PropTypes.string,
	id: PropTypes.string.isRequired,
	required: PropTypes.bool,
	functionality: PropTypes.func,
};

InputGroup.displayName = "InputGroup";

export default InputGroup;