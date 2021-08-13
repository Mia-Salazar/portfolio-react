import React from "react";

import "./Box.scss";

export const Box = ({children}) => {
	return (
		<section className="box">
			<div className="box__text-container">
				{children}
			</div>
		</section>
	);
};

export default Box;