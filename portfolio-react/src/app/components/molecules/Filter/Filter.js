import React from "react";
import PropTypes from "prop-types";

import "./Filter.scss";
import { Button } from "../../atoms/Button/Button";

export const Filter = ({buttonFunctionality, filterActive, array}) => {
	return (
		<div className="filter">
			{
				array.map((item, index) => {
					return(
						<Button key={index} text={item.text} functionality={() => buttonFunctionality(item.value)} modificator={filterActive === item.value ? "selected" : ""}/>
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