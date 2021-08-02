import React from "react";
import PropTypes from "prop-types";
import i18n from "../../../../i18n";

import "./SocialNetwork.scss";

export const SocialNetwork = ({icon, link, ariaLabel}) => {
	return (
		<li className="social-item">
			<a className="social-item__link" href={link} target="_blank"
				aria-label={i18n.t("footer", { key: ariaLabel})} rel="noreferrer noopener"
			>
				<i className={`fab social-item__icon ${icon}`}></i>
			</a>
		</li>
	);
};

export default SocialNetwork;

SocialNetwork.propTypes = {
	icon: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	ariaLabel: PropTypes.string.isRequired,
};