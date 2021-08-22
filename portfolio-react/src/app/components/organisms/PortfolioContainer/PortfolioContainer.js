import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { portfolioArray } from "../../../utils/portfolioContent";
import { Button } from "../../atoms/Button/Button";
import { PortfolioItem } from "../../molecules/PortfolioItem/PortfolioItem";
import { Filter } from "../../molecules/Filter/Filter";
import "./PortfolioContainer.scss";

export const PortfolioContainer = ({array}) => {
	const [portfolioContent, setPortfolioContent] = useState(portfolioArray.slice(0, 6));
	const [loadMore, setLoadMore] = useState(true);
	const [filter, setFilter] = useState("all");
	const loadMoreFunc = () => {
		const length = portfolioContent.length;
		let arrayFiltered;
		if (filter === "all") {
			arrayFiltered = portfolioArray;
		} else {
			arrayFiltered = portfolioArray.filter(element => element.text.toLowerCase().includes(filter));
		}
		setPortfolioContent(portfolioContent.concat(arrayFiltered.slice(length, length + 3)));
		if (portfolioContent.length + 3 >= arrayFiltered.length) {
			setLoadMore(false);
		} else {
			setLoadMore(true);
		}
	};
	const changeFilter = (filterNew) => {
		if (filter !== filterNew) {
			setFilter(filterNew);
		}
	};

	const filterFunction = (term , array) => {
		if (term === "all") {
			return array.slice(0, 6);
		} else {
			const arrayFiltered = array.filter(element => element.text.toLowerCase().includes(filter));
			const arrayFilteredShort = arrayFiltered.slice(0, 6);
			if (arrayFilteredShort >= arrayFiltered) {
				setLoadMore(false);
			} else {
				setLoadMore(true);
			}
			return arrayFilteredShort;
		}
	};
	useEffect(() => {
		setPortfolioContent(filterFunction(filter, portfolioArray));
	}, [filter]);
	return (
		<div className="portfolio-items">
			<Filter buttonFunctionality={changeFilter} filterActive={filter} array={array}/>
			<div className="portfolio-items__container">
				{
					portfolioContent.map((item, index) => {
						return(
							<PortfolioItem item={item} key={index}/>
						);
					})
				}
			</div>
			{
				loadMore &&
                    <Button text="portfolio.load" modificator="filled" functionality={loadMoreFunc}/>
			}
		</div>
	);
};

PortfolioContainer.propTypes = {
	array: PropTypes.array.isRequired,
};

PortfolioContainer.displayName = "PortfolioContainer";

export default PortfolioContainer;