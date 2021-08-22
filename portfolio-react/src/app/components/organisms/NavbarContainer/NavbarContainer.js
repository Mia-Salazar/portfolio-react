import React from "react";
import PropTypes from "prop-types";

import { Button } from "../../atoms/Button/Button";
import { Navbar } from "../../organisms/Navbar/Navbar";
import "./NavbarContainer.scss";

export const NavbarContainer = ({functionality, menuOpen, menuOpenFirstTime, activeLink}) => {
	return (
		<div className="navbar-container">
			{ menuOpen && <Navbar functionality={functionality} activeLink={activeLink}/> }
			{ menuOpen && menuOpenFirstTime && <Button text="navbar.back" functionality={functionality}></Button> }
			{ !menuOpen && menuOpenFirstTime && <Button text="navbar.menu" functionality={functionality} modificator="back"></Button> }
		</div>
	);
};

NavbarContainer.propTypes = {
	menuOpen: PropTypes.bool.isRequired,
	menuOpenFirstTime: PropTypes.bool.isRequired,
	functionality: PropTypes.func.isRequired,
	activeLink: PropTypes.string.isRequired,
};

NavbarContainer.displayName = "NavbarContainer";

export default NavbarContainer;