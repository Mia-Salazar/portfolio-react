import React from "react";
import PropTypes from "prop-types";

import "./Filter.scss";
import { Button } from "../../atoms/Button/Button";

export const Filter = ({buttonFunctionality, filterActive}) => {
	return (
		<div>
			<Button text="portfolio.all" functionality={() => buttonFunctionality("all")} modificator={filterActive === "all" ? "selected" : ""}/>
			<Button text="portfolio.angular" functionality={() => buttonFunctionality("angular")} modificator={filterActive === "angular" ? "selected" : ""}/>
			<Button text="portfolio.react"functionality={() => buttonFunctionality("reactjs")} modificator={filterActive === "reactjs" ? "selected" : ""}/>
			<Button text="portfolio.vue"functionality={() => buttonFunctionality("vuejs")} modificator={filterActive === "vuejs" ? "selected" : ""}/>
		</div>
	);
};

Filter.propTypes = {
	buttonFunctionality: PropTypes.func.isRequired,
	filterActive: PropTypes.string.isRequired,
};

Filter.displayName = "Filter";

export default Filter;