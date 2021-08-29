import React, { useEffect, useState } from "react";

import i18n from "../../../../i18n";
import { awardsArray } from "../../../utils/data/awardsArray";
import { awardsFilter } from "../../../utils/data/awardsFilter";
import { Filter } from "../../molecules/Filter/Filter";
import { AwardItem } from "../../molecules/AwardItem/AwardItem";
import "./TabsContent.scss";

export const TabsContent = () => {
	const [awardContent, setAwardContent] = useState(awardsArray.filter(element => element.type === "article"));
	const [filter, setFilter] = useState("article");
	const changeFilter = (filterNew) => {
		setFilter(filterNew);
	};
	const filterFunction = () => {
		return awardsArray.filter(element => element.type === filter);
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
		setAwardContent(filterFunction(filter));
	}, [filter]);
	return (
		<>
			<Filter buttonFunctionality={changeFilter} filterActive={filter} array={awardsFilter}/>
			<p className="tabs-text">{i18n.t(filterTextFunction())}</p>
			<ul>
				{
					awardContent.map((item, index) => {
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