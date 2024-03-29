import React from "react";

import old from "../../../assets/images/old.jpg";
import { Title } from "../../components/atoms/Title/Title";
import { Box } from "../../components/atoms/Box/Box";
import { PortfolioItem } from "../../components/molecules/PortfolioItem/PortfolioItem";
import { PortfolioContainer } from "../../components/organisms/PortfolioContainer/PortfolioContainer";
import i18n from "../../../i18n";
import "./Portfolio.scss";

export const Portfolio = () => {
	const item = { href: "https://lucid-goldberg-035a3f.netlify.app/", text:"Angular, Typescript, HTML5, CSS3, SASS, Flexbox, Grid, BEM, i18n", src: old };
	return (
		<Box description="Check Mia Salazar's projects out" keywords="Mia Salazar, front end, front-end, developer, desarrolladora, programadora, react development, angular development, javascript development, personal projects">
			<div className="portfolio">
				<Title text="navbar.portfolio"/>
				<p className="text">{i18n.t("portfolio.subtitle")}</p>
				<PortfolioContainer />
				<Title text="portfolio.old"/>
				<p className="text">{i18n.t("portfolio.oldText")}</p>
				<div className="portfolio__old">
					<PortfolioItem item={item}/>
				</div>
			</div>
		</Box>
	);
};

export default Portfolio;