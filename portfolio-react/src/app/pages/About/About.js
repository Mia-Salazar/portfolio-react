import React from "react";

import { Title } from "../../components/atoms/Title/Title";
import { Box } from "../../components/atoms/Box/Box";
import i18n from "../../../i18n";
import "./About.scss";

export const About = () => {
	return (
		<Box>
			<Title text="navbar.about"/>
			<p className="text">{i18n.t("about.textOne")}</p>
			<p className="text">{i18n.t("about.textTwo")}</p>
			<p className="text">{i18n.t("about.textThree")}</p>
		</Box>
	);
};

export default About;