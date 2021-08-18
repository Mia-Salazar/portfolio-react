import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "../../atoms/Button/Button";
import { LinkItem } from "../../atoms/LinkItem/LinkItem";
import i18n from "../../../../i18n";
import "./PortfolioItem.scss";

export const PortfolioItem = ({item}) => {
	const [moreInfoOpen, setMoreInfoOpen] = useState(false);
	const getMoreInfo = () => {
		setMoreInfoOpen(!moreInfoOpen);
	};
	return (
		<article className={moreInfoOpen ? "portfolio-item portfolio-item--active": "portfolio-item" }>
			<figure className="portfolio-item__img-container">
				<img className="portfolio-item__img" alt={i18n.t(item.alt)} src={item.src}/> 
				<figcaption className="portfolio-item__img-text">{i18n.t(item.text)} </figcaption>
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