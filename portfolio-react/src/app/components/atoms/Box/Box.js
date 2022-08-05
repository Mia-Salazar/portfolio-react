import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import "./Box.scss";

export const Box = ({children, description, keywords}) => {
	return (
		<Fragment>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Portfolio Mia Salazar, galactic Front-end developer</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
			</Helmet>
			<section className="box">
				<div className="box__text-container">
					{children}
				</div>
			</section>
		</Fragment>
	);
};

export default Box;