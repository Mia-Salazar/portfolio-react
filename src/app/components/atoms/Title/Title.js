import React from "react";
import PropTypes from "prop-types";

import i18n from "../../../../i18n";
import "./Title.scss";

export const Title = ({text}) => {
	return (
		<h2 className="title">{i18n.t(text)}</h2>
	);
};

Title.propTypes = {
	text: PropTypes.string.isRequired
};

Title.displayName = "Title";

export default Title;