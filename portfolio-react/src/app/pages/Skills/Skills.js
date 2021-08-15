import React from "react";

import { Title } from "../../components/atoms/Title/Title";
import { Box } from "../../components/atoms/Box/Box";
import { LevelGroup } from "../../components/molecules/LevelGroup/LevelGroup";
import i18n from "../../../i18n";
import "./Skills.scss";

export const Skills = () => {
	return (
		<Box>
			<Title text="navbar.skills"/>
			<p className="text">{i18n.t("skills.textOne")}</p>
			<LevelGroup levelStatus="low"/>
		</Box>
	);
};

export default Skills;