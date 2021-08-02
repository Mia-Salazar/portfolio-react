import React from "react";

import "./Footer.scss";
import { SocialNetwork } from "../../atoms/SocialNetwork/SocialNetwork";

export const Footer = () => {
	const socialNetwork = [
		{icon: "fa-github-alt", link: "https://github.com/Mia-Salazar", aria: "Github"},
		{icon: "fa-codepen", link: "https://codepen.io/MiaSalazar", aria: "Codepen"},
		{icon: "fa-linkedin-in", link: "https://www.linkedin.com/in/miasalazar/", aria: "Linkedin"},
		{icon: "fa-medium-m", link: "https://marasalazar.medium.com/", aria: "Medium"}
	];
	return (
		<ul className="social-networks">
			{
				socialNetwork.map((social) => {
					return <SocialNetwork key={social.icon} icon={social.icon} link={social.link} ariaLabel={social.aria}></SocialNetwork>;
				})
			}
		</ul>
	);
};

export default Footer;