  
import React, { useState } from "react";
import i18n from "../../../../i18n";

import "./LanguageButton.scss";

export const LanguageButton = () => {
	const [language, setLanguage] = useState("en");
	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
		setLanguage(language);
	};
	return (
		<div className="language-buttons">
			<button className={language === "en" ? "language-buttons__item language-buttons__item--active" : "language-buttons__item" } onClick={() => changeLanguage("en")}>en</button>
			<button className={language === "es" ? "language-buttons__item language-buttons__item--active" : "language-buttons__item" } onClick={() => changeLanguage("es")}>es</button>
		</div>
	);
};

export default LanguageButton;