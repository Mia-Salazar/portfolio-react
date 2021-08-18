import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Footer } from "../../molecules/Footer/Footer";
import { LanguageButton } from "../../molecules/LanguageButton/LanguageButton";
import i18n from "../../../../i18n";
import "./Navbar.scss";

export const Navbar = ({functionality}) => {
	const navLinks = [
		{link: "/about", text: "navbar.about"},
		{link: "/portfolio", text: "navbar.portfolio"},
		{link: "/skills", text: "navbar.skills"},
		{link: "", text: "navbar.awards"},
		{link: "", text: "navbar.contact"}
	];
	return (
		<nav className="navbar">
			<ul className="navbar__list">
				{
					navLinks.map((link) => {
						return(
							<li className="navbar__list-item" key={link.text}>
								<Link className="navbar__link" to={link.link} onClick={functionality} >{i18n.t(link.text)}</Link>
							</li>
						);
					})
				}
			</ul>
			<LanguageButton></LanguageButton>
			<Footer></Footer>
		</nav>
	);
};

Navbar.propTypes = {
	functionality: PropTypes.func.isRequired,
};

Navbar.displayName = "Navbar";

export default Navbar;