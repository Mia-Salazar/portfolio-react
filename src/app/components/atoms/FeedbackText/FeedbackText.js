import React from "react";
import PropTypes from "prop-types";

import i18n from "../../../../i18n";
import "./FeedbackText.scss";

export const FeedbackText = ({text, type}) => {
	return (
		<p className={type ? `feedback-text feedback-text--${type}` : "feedback-text"}>
			{i18n.t(text)}
		</p>
	);
};

FeedbackText.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string,
};

FeedbackText.displayName = "FeedbackText";

export default FeedbackText;