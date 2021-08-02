import React from "react";
import { Link } from "react-router-dom";

import { Footer } from "../../molecules/Footer/Footer";
import { LanguageButton } from "../../molecules/LanguageButton/LanguageButton";
import i18n from "../../../../i18n";
import "./Navbar.scss";

export const Navbar = () => {
	const navLinks = [
		{link: "", text: "navbar.about"},
		{link: "", text: "navbar.portfolio"},
		{link: "", text: "navbar.skills"},
		{link: "", text: "navbar.awards"},
		{link: "", text: "navbar.contact"}
	];
	return (
		<nav className="navbar">
			<ul className="navbar__list">
				{
					navLinks.map((link) => {
						return(
							<li className="navbar__list-item" key={link.link}>
								<Link className="navbar__link"  to={link.link}>{i18n.t(link.text)}</Link>
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

export default Navbar;