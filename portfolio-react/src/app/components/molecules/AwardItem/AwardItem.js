import React from "react";
import PropTypes from "prop-types";

import { LinkItem } from "../../atoms/LinkItem/LinkItem";
import "./AwardItem.scss";

export const AwardItem = ({item}) => {
	return (
		<li className="list-item">
			<LinkItem text={item.text} href={item.href} target={item.target} modificator="simple"/>
		</li>
	);
};

AwardItem.propTypes = {
	item: PropTypes.object.isRequired,
};

AwardItem.displayName = "AwardItem";

export default AwardItem;