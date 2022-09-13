import React from "react";
import PropTypes from "prop-types";

import i18n from "../../../../i18n";
import "./LinkItem.scss";

export const LinkItem = ({text, href, target, modificator}) => {
	return (
		<a className={modificator ? `link-item link-item--${modificator}` : "link-item"} href={href} target={target}>
			{i18n.t(text)}
		</a>
	);
};

LinkItem.propTypes = {
	text: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	target: PropTypes.string.isRequired,
};

LinkItem.displayName = "LinkItem";

export default LinkItem;