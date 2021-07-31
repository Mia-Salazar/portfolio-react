  
import React from "react";
import PropTypes from "prop-types";

import "./Star.scss";

export const Star = ({key}) => {
	const sizeOfStar = Math.floor(Math.random() * 6) + 2;
	const positionOfStarHorizontal = Math.floor(Math.random() * 99) + 1;
	const positionOfStarVertical = Math.floor(Math.random() * 99) + 1;

	return <span key={key} aria-hidden="true" style={{"height" : `${sizeOfStar}px`, "width" : `${sizeOfStar}px`, "top" : `${positionOfStarHorizontal}%`, "left" : `${positionOfStarVertical}%`}}  role="presentation" className="star"></span>;
};

export default Star;

Star.propTypes = {
	key: PropTypes.number
};