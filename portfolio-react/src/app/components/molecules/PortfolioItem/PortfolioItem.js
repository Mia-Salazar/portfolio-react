import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "../../atoms/Button/Button";
import { LinkItem } from "../../atoms/LinkItem/LinkItem";
import "./PortfolioItem.scss";

export const PortfolioItem = ({item}) => {
	const [moreInfoOpen, setMoreInfoOpen] = useState(false);
	const getMoreInfo = () => {
		setMoreInfoOpen(!moreInfoOpen);
	};
	return (
		<article className={moreInfoOpen ? "portfolio-item portfolio-item--active": "portfolio-item" } data-testid="portfolio-item">
			<figure className="portfolio-item__img-container">
				<img className="portfolio-item__img" alt="" src={item.src}/> 
				<figcaption className="portfolio-item__img-text">{item.text} </figcaption>
			</figure>
			<div className="portfolio-item__button-container">
				<Button text="portfolio.info" modificator="ghost" functionality={getMoreInfo}/>
				<LinkItem text="portfolio.visit" href={item.href} target="_blank" />
			</div>
		</article>
	);
};

PortfolioItem.propTypes = {
	item: PropTypes.object.isRequired
};

PortfolioItem.displayName = "PortfolioItem";

export default PortfolioItem;