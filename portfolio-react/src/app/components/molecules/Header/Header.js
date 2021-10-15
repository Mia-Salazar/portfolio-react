import React, { useEffect } from "react";
import PropTypes from "prop-types";

import i18n from "../../../../i18n";
import { Button } from "../../atoms/Button/Button";
import "./Header.scss";

export const Header = ({open, openFunction, openFirstTime}) => {
	useEffect(() => {
		i18n.changeLanguage("en");
	}, []);
	return (
		<header className={open || openFirstTime ? "header header--open": "header" }>
			<div className="header__title-container">
				<h1 className="header__title">
                    Mia Salazar
				</h1>
			</div>
			<h2  className="header__subtitle">Galactic Front-end developer</h2>
			{!open && !openFirstTime && <Button text="navbar.continue" functionality={openFunction}></Button>}
		</header>
	);
};

export default Header;

Header.propTypes = {
	openFunction: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
	openFirstTime: PropTypes.bool.isRequired
};