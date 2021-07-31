import React from "react";
import { withTranslation } from "react-i18next";

import "./App.css";

function App ({ t }) {
	return (
		<h1>{t("header.hi")}</h1>
	);
}

export default withTranslation()(App);