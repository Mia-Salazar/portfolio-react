import React from "react";
import PropTypes from "prop-types";

import "./Filter.scss";
import { Button } from "../../atoms/Button/Button";

export const Filter = ({buttonFunctionality, filterActive, array}) => {
	return (
		<div className="filter" role="tablist">
			{
				array.map((item) => {
					return(
						<Button role="tab" key={item.value} text={item.text}
							id={"tab-" + item.value} aria-controls={"panel-" + item.value} tabindex={ filterActive === item.value ? 0 : -1}
							functionality={() => buttonFunctionality(item.value)} modificator={filterActive === item.value ? "selected" : ""}
							aria-selected={filterActive === item.value ? true : false}/>
					);
				})
			}
		</div>
	);
};

Filter.propTypes = {
	buttonFunctionality: PropTypes.func.isRequired,
	filterActive: PropTypes.string.isRequired,
	array: PropTypes.array.isRequired,
};

Filter.displayName = "Filter";

export default Filter;