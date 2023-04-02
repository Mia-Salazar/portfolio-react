import React from "react";
import PropTypes from "prop-types";

import { Button } from "../../atoms/Button/Button";
import { Navbar } from "../../organisms/Navbar/Navbar";

import "./NavbarContainer.scss";

export const NavbarContainer = ({openMenu, menuOpen, menuOpenFirstTime, activeLink, mainRef, changeRoute}) => {
	const changeFocus = () => {
		changeRoute();
		mainRef.current.focus();
	};

	return (
		<div className="navbar-container">
			{ menuOpen && 
				<>
					<div className="navbar-container__skip-wrapper">
						<Button functionality={changeFocus} text="skip" modificator="small" />
					</div>
					<Navbar functionality={openMenu} activeLink={activeLink}/>
				</> 
			}
			{ menuOpen && menuOpenFirstTime && <Button text="navbar.back" functionality={openMenu}></Button> }
			{ !menuOpen && menuOpenFirstTime && <Button text="navbar.menu" functionality={openMenu} modificator="back"></Button> }
		</div>
	);
};

NavbarContainer.propTypes = {
	mainRef: PropTypes.object.isRequired,
	menuOpen: PropTypes.bool.isRequired,
	menuOpenFirstTime: PropTypes.bool.isRequired,
	openMenu: PropTypes.func.isRequired,
	activeLink: PropTypes.string,
	changeRoute: PropTypes.func.isRequired,
};

NavbarContainer.displayName = "NavbarContainer";

export default NavbarContainer;