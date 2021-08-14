import React from "react";
import PropTypes from "prop-types";

import i18n from "../../../i18n";
import "./Skills.scss";

export const LevelItem = ({text, active}) => {
	return (
		<p className={active ? "level-item level-item--active" : "level-item"}>
			{i18n.t(text)}
		</p>
	);
};

LevelItem.propTypes = {
	text: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired,
};

LevelItem.displayName = "LevelItem";

export default LevelItem;