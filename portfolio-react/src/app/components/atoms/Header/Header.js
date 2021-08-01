import React from "react";

import "./Header.scss";

export const Header = () => {
	return (
		<header className="header">
			<div className="header__title-container">
				<h1 className="header__title">
                    Mia Salazar
				</h1>
			</div>
			<h2  className="header__subtitle">Galactic Front-end developer</h2>

		</header>
	);
};

export default Header;