import React from "react";

import { Title } from "../../components/atoms/Title/Title";
import { Box } from "../../components/atoms/Box/Box";
import i18n from "../../../i18n";
import "./Portfolio.scss";

export const Portfolio = () => {
	return (
		<Box>
			<Title text="navbar.portfolio"/>
			<p className="text">{i18n.t("portfolio.subtitle")}</p>
		</Box>
	);
};

export default Portfolio;