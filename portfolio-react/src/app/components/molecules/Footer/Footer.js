import React from "react";

import "./Footer.scss";
import { SocialNetwork } from "../../atoms/SocialNetwork/SocialNetwork";

export const Footer = () => {
	const socialNetwork = [
		{icon: "fa-github-alt", link: "https://github.com/Mia-Salazar", aria: ""},
		{icon: "fa-codepen", link: "https://codepen.io/MiaSalazar", aria: ""},
		{icon: "fa-linkedin-in", link: "https://www.linkedin.com/in/miasalazar/", aria: ""},
		{icon: "fa-medium-m", link: "https://marasalazar.medium.com/", aria: ""}
	];
	return (
		<footer className="footer">
			<ul className="footer__social-container">
				{
					socialNetwork.map((social) => {
						return <SocialNetwork key={social.icon} icon={social.icon} link={social.link} aria={social.aria}></SocialNetwork>;
					})
				}
			</ul>
		</footer>
	);
};

export default Footer;