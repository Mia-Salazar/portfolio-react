  
import React from "react";

import "./Star.scss";

export const Star = () => {
	const sizeOfStar = Math.floor(Math.random() * 6) + 2;
	const positionOfStarHorizontal = Math.floor(Math.random() * 99) + 1;
	const positionOfStarVertical = Math.floor(Math.random() * 99) + 1;

	return <span aria-hidden="true" style={{"height" : `${sizeOfStar}px`, "width" : `${sizeOfStar}px`, "top" : `${positionOfStarHorizontal}%`, "left" : `${positionOfStarVertical}%`}}  role="presentation" title="star" className="star"></span>;
};

export default Star;