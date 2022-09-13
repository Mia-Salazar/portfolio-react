import React from "react";
import PropTypes from "prop-types";

import "./Stars.scss";
import { Star } from "../../atoms/Star/Star";

export const Stars = ({numberOfStarts}) => {

	return (
		<div className="stars-container">
			{Array.from(Array(numberOfStarts), (e, i) => {
				return <Star key={i}></Star>;
			})}
		</div>
	);
};

Stars.propTypes = {
	numberOfStarts: PropTypes.number.isRequired,
};

Stars.displayName = "Stars";

export default Stars;