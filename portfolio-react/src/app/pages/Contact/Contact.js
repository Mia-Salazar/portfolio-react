import React from "react";

import { InputGroup } from "../../components/molecules/InputGroup/InputGroup";
import { Title } from "../../components/atoms/Title/Title";
import { Box } from "../../components/atoms/Box/Box";
import i18n from "../../../i18n";
import "./Contact.scss";

export const Contact = () => {
	return (
		<Box>
			<Title text="navbar.contact"/>
			<p className="text">{i18n.t("contact.textOne")}</p>
			<InputGroup text="contact.email" type="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" id="email" placeholder="contact.email" required="true" />
		</Box>
	);
};

export default Contact;