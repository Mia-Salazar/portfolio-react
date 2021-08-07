import React from "react";
import PropTypes from "prop-types";

import { Button } from "../../atoms/Button/Button";
import "./Header.scss";

export const Header = ({open, openFunction}) => {
	return (
		<header className="header">
			<div className="header__title-container">
				<h1 className="header__title">
                    Mia Salazar
				</h1>
			</div>
			<h2  className="header__subtitle">Galactic Front-end developer</h2>
			{!open && <Button text="navbar.continue" functionality={openFunction}></Button>}
		</header>
	);
};

export default Header;

Header.propTypes = {
	openFunction: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired
};