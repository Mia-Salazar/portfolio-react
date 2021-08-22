import React, { useEffect, useState } from "react";

import { awardsArray } from "../../../utils/awardsArray";
import { awardsFilter } from "../../../utils/awardsFilter";
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
	useEffect(() => {
		setAwardContent(filterFunction(filter));
	}, [filter]);
	return (
		<>
			<Filter buttonFunctionality={changeFilter} filterActive={filter} array={awardsFilter}/>
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