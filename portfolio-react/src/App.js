import React from "react";
import { withTranslation } from "react-i18next";

import { Star } from "../src/app/components/atoms/Star/Star";
import { Spaceship } from "../src/app/components/atoms/Spaceship/Spaceship";
import { LanguageButton } from "./app/components/molecules/LanguageButton/LanguageButton";
import "./App.scss";

function App ({ t }) {
	const numberOfStarts = Math.floor(Math.random() * 50) + 20;
	return (
		<div className="principal-wrapper">
			<div className="principal-wrapper__stars-container">
				{Array.from(Array(numberOfStarts), (i) => {
					return <Star key={i}></Star>;
				})}
			</div>
			<main className="main">

				<Spaceship/>
				
				<h1>{t("header.hi")}</h1>
				<LanguageButton></LanguageButton>
			</main>
		</div>
	);
} 

export default withTranslation()(App);