import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Footer } from "../../molecules/Footer/Footer";
import Button from "../../atoms/Button/Button";
import { LanguageButton } from "../../molecules/LanguageButton/LanguageButton";
import i18n from "../../../../i18n";
import { useThemeContext } from "../../../context/ThemeContext";

import "./Navbar.scss";

export const Navbar = ({functionality, activeLink}) => {
	const {theme, handleChangeTheme} = useThemeContext();

	const navLinks = [
		{link: "/about", text: "navbar.about"},
		{link: "/portfolio", text: "navbar.portfolio"},
		{link: "/skills", text: "navbar.skills"},
		{link: "/awards", text: "navbar.awards"},
		{link: "/contact", text: "navbar.contact"}
	];

	const changeTheme = () => {
		const newTheme = theme === "dark" ? "light" : "dark";
		handleChangeTheme(newTheme);
	};

	return (
		<nav className="navbar">
			<ul className="navbar__list">
				{
					navLinks.map((link) => {
						return(
							<li className="navbar__list-item" key={link.text}>
								<Link className={activeLink === link.text ? "navbar__link navbar__link--active": "navbar__link"} to={link.link} onClick={() => functionality(link.text)} >{i18n.t(link.text)}</Link>
							</li>
						);
					})
				}
			</ul>
			<LanguageButton></LanguageButton>
			<div className="navbar__theme-container">
				<Button functionality={changeTheme} text="theme" modificator="small" />
			</div>
			<Footer></Footer>
		</nav>
	);
};

Navbar.propTypes = {
	functionality: PropTypes.func.isRequired,
	activeLink: PropTypes.string,
};

Navbar.displayName = "Navbar";

export default Navbar;