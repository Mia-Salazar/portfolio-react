import React, { useEffect, useState } from "react";

import { articleConstructor } from "../../../models/ArticlesModel";

import i18n from "../../../../i18n";
import { awardsArray } from "../../../utils/data/awardsArray";
import { awardsFilter } from "../../../utils/data/awardsFilter";
import { Filter } from "../../molecules/Filter/Filter";
import { AwardItem } from "../../molecules/AwardItem/AwardItem";

import "./TabsContent.scss";

export const TabsContent = () => {
	const [contentArray, setContentArray] = useState(awardsArray);
	const [filter, setFilter] = useState("article");

	const changeFilter = (filterNew) => {
		setFilter(filterNew);
	};

	const filterFunction = () => {
		return contentArray.filter(element => element.type === filter);
	};

	const filterTextFunction = () => {
		if (filter === "article") {
			return "awards.articlesText";
		} else if (filter === "scientific") {
			return "awards.scientificText";
		} else {
			return "awards.othersText";
		}
	};

	useEffect(() => {
		fetch("https://dev.to/api/articles?username=miasalazar")
			.then(response => response.json())
			.then(data => data.map(articleConstructor))
			.then(data => setContentArray(prevState => [...data, ...prevState]));
	}, []);

	return (
		<>
			<Filter buttonFunctionality={changeFilter} filterActive={filter} array={awardsFilter}/>
			<p className="tabs-text">{i18n.t(filterTextFunction())}</p>
			<ul>
				{
					filterFunction().map((item, index) => {
						return(
							<AwardItem item={item} key={index}/>
						);
					})
				}
			</ul>
		</>
	);
};

TabsContent.displayName = "TabsContent";

export default TabsContent;