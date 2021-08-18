import React from "react";

import { Title } from "../../components/atoms/Title/Title";
import { Box } from "../../components/atoms/Box/Box";
import { PortfolioItem } from "../../components/molecules/PortfolioItem/PortfolioItem";
import { portfolioArray } from "../../utils/portfolioContent";
import i18n from "../../../i18n";
import "./Portfolio.scss";

export const Portfolio = () => {
	return (
		<Box>
			<Title text="navbar.portfolio"/>
			<p className="text">{i18n.t("portfolio.subtitle")}</p>
			<div className="portfolio-container">
				{
					portfolioArray.map((item, index) => {
						return(
							<PortfolioItem item={item} key={index}/>
						);
					})
				}
			</div>
		</Box>
	);
};

export default Portfolio;