import React from "react";
import { withTranslation } from "react-i18next";

import { LanguageButton } from "./app/components/molecules/LanguageButton";

import "./App.scss";

function App ({ t }) {
	return (
		<main>
			<h1>{t("header.hi")}</h1>
			<LanguageButton></LanguageButton>
		</main>
	);
}

export default withTranslation()(App);