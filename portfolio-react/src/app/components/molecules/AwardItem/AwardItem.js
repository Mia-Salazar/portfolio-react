import React from "react";
import PropTypes from "prop-types";

import i18n from "../../../../i18n";
import { LinkItem } from "../../atoms/LinkItem/LinkItem";
import "./AwardItem.scss";

export const AwardItem = ({item}) => {
	return (
		<li className="list-item">
			<div className="list-item__icon-container">
				<span className={`fas fa-${item.icon}`} aria-label={i18n.t(item.aria)} title={i18n.t(item.aria)}></span>
			</div>
			<LinkItem text={item.text} href={item.href} target={item.target} modificator="simple"/>
		</li>
	);
};

AwardItem.propTypes = {
	item: PropTypes.object.isRequired,
};

AwardItem.displayName = "AwardItem";

export default AwardItem;