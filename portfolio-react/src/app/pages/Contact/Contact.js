import React from "react";

import { Title } from "../../components/atoms/Title/Title";
import { Box } from "../../components/atoms/Box/Box";
import i18n from "../../../i18n";
import "./Contact.scss";

export const Contact = () => {
	return (
		<Box>
			<Title text="navbar.contact"/>
			<p className="text">{i18n.t("contact.textOne")}</p>
		</Box>
	);
};

export default Contact;