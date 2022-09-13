import React from "react";

import { Form } from "../../components/organisms/Form/Form";
import { Title } from "../../components/atoms/Title/Title";
import { Box } from "../../components/atoms/Box/Box";
import i18n from "../../../i18n";
import "./Contact.scss";

export const Contact = () => {
	return (
		<Box description="Contact Mia Salazar" keywords="Mia Salazar, front end, front-end, developer, desarrolladora, programadora, hire front-end">
			<Title text="navbar.contact"/>
			<p className="text">{i18n.t("contact.textOne")}</p>
			<Form />
		</Box>
	);
};

export default Contact;