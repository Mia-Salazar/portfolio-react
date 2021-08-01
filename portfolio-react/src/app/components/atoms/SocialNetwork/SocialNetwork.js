import React from "react";
import PropTypes from "prop-types";

import "./SocialNetwork.scss";

export const SocialNetwork = ({icon, link, aria}) => {
	return (
		<li className="social-item">
			<a className="social-item__link" href={link} target="_blank" aria-label={aria} rel="noreferrer noopener">
				<i className={`fab social-item__icon ${icon}`}></i>
			</a>
		</li>
	);
};

export default SocialNetwork;

SocialNetwork.propTypes = {
	icon: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	aria: PropTypes.string.isRequired,
};