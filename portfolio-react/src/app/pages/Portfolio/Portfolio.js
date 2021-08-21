import React from "react";

import { Title } from "../../components/atoms/Title/Title";
import { Box } from "../../components/atoms/Box/Box";
import { PortfolioContainer } from "../../components/organisms/PortfolioContainer/PortfolioContainer";
import i18n from "../../../i18n";
import "./Portfolio.scss";

export const Portfolio = () => {
	return (
		<Box>
			<div className="portfolio">
				<Title text="navbar.portfolio"/>
				<p className="text">{i18n.t("portfolio.subtitle")}</p>
				<PortfolioContainer />
			</div>
		</Box>
	);
};

export default Portfolio;