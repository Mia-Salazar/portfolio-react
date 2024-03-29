import React from "react";

import { Title } from "../../components/atoms/Title/Title";
import { Box } from "../../components/atoms/Box/Box";
import { SkillItem } from "../../components/organisms/SkillItem/SkillItem";
import i18n from "../../../i18n";
import "./Skills.scss";

export const Skills = () => {
	return (
		<Box description="Discover Mia Salazar's skills" keywords="Mia Salazar, front end, front-end, developer, desarrolladora, programadora, react, angular, typescript">
			<Title text="navbar.skills"/>
			<p className="text">{i18n.t("skills.textTwo")}</p>
			<p className="text">{i18n.t("skills.textOne")}</p>
			<SkillItem levelStatus="veryHigh" text="skills.html" />
			<SkillItem levelStatus="high" text="skills.js" />
			<SkillItem levelStatus="high" text="skills.framework" />
			<SkillItem levelStatus="veryHigh" text="skills.css" />
			<SkillItem levelStatus="high" text="skills.accessibility" />
			<SkillItem levelStatus="medium" text="skills.redux" />
			<SkillItem levelStatus="medium" text="skills.testing" />
		</Box>
	);
};

export default Skills;