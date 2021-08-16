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
		</Box>
	);
};

export default Skills;