import React from "react";

import { Title } from "../../components/atoms/Title/Title";
import { Box } from "../../components/atoms/Box/Box";
import i18n from "../../../i18n";
import "./Awards.scss";

export const Awards = () => {
	return (
		<Box>
			<Title text="navbar.awards"/>
			<p className="text">{i18n.t("awards.textOne")}</p>
		</Box>
	);
};

export default Awards;