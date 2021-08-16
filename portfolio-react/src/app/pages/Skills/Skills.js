import React from "react";

import { Title } from "../../components/atoms/Title/Title";
import { Box } from "../../components/atoms/Box/Box";
import { SkillItem } from "../../components/organisms/SkillItem/SkillItem";
import i18n from "../../../i18n";
import "./Skills.scss";

export const Skills = () => {
	return (
		<Box>
			<Title text="navbar.skills"/>
			<p className="text">{i18n.t("skills.textOne")}</p>
			<SkillItem levelStatus="veryHigh" text="skills.html" />
			<SkillItem levelStatus="medium" text="skills.js" />
			<SkillItem levelStatus="medium" text="skills.framework" />
			<SkillItem levelStatus="high" text="skills.css" />
			<SkillItem levelStatus="medium" text="skills.accessibility" />
			<SkillItem levelStatus="low" text="skills.redux" />
		</Box>
	);
};

export default Skills;