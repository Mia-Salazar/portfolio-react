import React from "react";

import { Title } from "../../components/atoms/Title/Title";
import { Box } from "../../components/atoms/Box/Box";
import { SkillItem } from "../../components/organisms/SkillItem/SkillItem";
import { PortfolioItem } from "../../components/molecules/PortfolioItem/PortfolioItem";
import i18n from "../../../i18n";
import "./Skills.scss";

export const Skills = () => {
	const item = {
		alt: "skills.js", src: "https://images.unsplash.com/photo-1629142934004-bdd7bc2e3eed?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", text: "skills.js", href: "example"
	};
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
			<p className="text">{i18n.t("skills.textTwo")}</p>
			<PortfolioItem item={item}/>
		</Box>
	);
};

export default Skills;