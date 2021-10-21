import React, { useEffect, useState } from "react";

import i18n from "../../../../i18n";
import "./LanguageButton.scss";

export const LanguageButton = () => {
	const [language, setLanguage] = useState("en");
	const changeLanguage = (language) => {
		localStorage.setItem("lang", language);
		i18n.changeLanguage(language);
		setLanguage(language);
	};
	useEffect(() => {
		const lang = localStorage.getItem("lang");
		if (lang === "en" || lang === "es") {
			i18n.changeLanguage(lang);
			setLanguage(lang);
		} else {
			i18n.changeLanguage("en");
			setLanguage("en");
		}
	}, []);
	return (
		<div className="language-buttons" aria-label={i18n.t("navbar.lang")}>
			<button className={language === "en" ? "language-buttons__item language-buttons__item--active" : "language-buttons__item" } onClick={() => changeLanguage("en")}>en</button>
			<button className={language === "es" ? "language-buttons__item language-buttons__item--active" : "language-buttons__item" } onClick={() => changeLanguage("es")}>es</button>
		</div>
	);
};

export default LanguageButton;