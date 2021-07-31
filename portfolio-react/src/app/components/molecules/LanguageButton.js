  
import React from "react";
import i18n from "../../../i18n";

import "./LanguageButton.scss";

export const LanguageButton = () => {
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};
	return (
		<div>
			<button onClick={() => changeLanguage("en")}>en</button>
			<button onClick={() => changeLanguage("es")}>es</button>
		</div>
	);
};

export default LanguageButton;