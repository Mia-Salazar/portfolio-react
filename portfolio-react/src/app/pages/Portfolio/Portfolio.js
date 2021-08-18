import React, { useState } from "react";

import { Title } from "../../components/atoms/Title/Title";
import { Box } from "../../components/atoms/Box/Box";
import { Button } from "../../components/atoms/Button/Button";
import { PortfolioItem } from "../../components/molecules/PortfolioItem/PortfolioItem";
import { portfolioArray } from "../../utils/portfolioContent";
import i18n from "../../../i18n";
import "./Portfolio.scss";

export const Portfolio = () => {
	const [portfolioContent, setPortfolioContent] = useState(portfolioArray.slice(0, 6));
	const [portfolioQuantity, setPortfolioQuantity] = useState(6);
	const loadMore = () => {
		setPortfolioContent(portfolioContent.concat(portfolioArray.slice(portfolioQuantity, portfolioQuantity + 3)));
		setPortfolioQuantity(portfolioQuantity + 3);
	};
	return (
		<Box>
			<div className="portfolio">
				<Title text="navbar.portfolio"/>
				<p className="text">{i18n.t("portfolio.subtitle")}</p>
				<div className="portfolio__items-container">
					{
						portfolioContent.map((item, index) => {
							return(
								<PortfolioItem item={item} key={index}/>
							);
						})
					}
				</div>
				{
					portfolioQuantity < portfolioArray.length &&
                    <Button text="portfolio.load" modificator="filled" functionality={loadMore}/>
				}	
			</div>
		</Box>
	);
};

export default Portfolio;