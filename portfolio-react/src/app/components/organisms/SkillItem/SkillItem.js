import React from "react";
import PropTypes from "prop-types";

import i18n from "../../../../i18n";
import { LevelGroup } from "../../molecules/LevelGroup/LevelGroup";
import "./SkillItem.scss";

export const SkillItem = ({text, levelStatus}) => {
	return (
		<article className="skill-item">
			<h3 className="skill-item__title">{i18n.t(text)}</h3>
			<LevelGroup levelStatus={levelStatus}/>
		</article>
	);
};

SkillItem.propTypes = {
	text: PropTypes.string.isRequired,
	levelStatus: PropTypes.string.isRequired,
};

SkillItem.displayName = "SkillItem";

export default SkillItem;