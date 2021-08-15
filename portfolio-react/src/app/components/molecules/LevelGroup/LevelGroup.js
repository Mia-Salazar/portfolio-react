import React from "react";
import PropTypes from "prop-types";

import { LevelItem } from "../../atoms/LevelItem/LevelItem";
import "./LevelGroup.scss";

export const LevelGroup = ({levelStatus}) => {
	const level = [
		{value: "low", text: "skills.low"},
		{value: "medium", text: "skills.medium"},
		{value: "high", text: "skills.high"},
		{value: "veryHigh", text: "skills.veryHigh"}
	];

	return (
		<div className="level-group">
			{
				level.map((item) => {
					return(
						<LevelItem text={item.text} key={item.value} active={levelStatus === item.value ? true : false} />
					);
				})
			}
		</div>
	);
};

LevelGroup.propTypes = {
	levelStatus: PropTypes.string.isRequired,
};

LevelGroup.displayName = "LevelGroup";

export default LevelGroup;