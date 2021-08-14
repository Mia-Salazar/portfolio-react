import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { Switch,Route } from "react-router-dom";


import { Stars } from "../src/app/components/molecules/Stars/Stars";
import { Spaceship } from "../src/app/components/atoms/Spaceship/Spaceship";
import { Header } from "../src/app/components/molecules/Header/Header";
import { Footer } from "../src/app/components/molecules/Footer/Footer";
import { NavbarContainer } from "../src/app/components/organisms/NavbarContainer/NavbarContainer";
import { About } from "../src/app/pages/About/About";
import { Skills } from "../src/app/pages/Skills/Skills";
import { useWindowDimensions } from "./app/utils/getWidth";
import "./App.scss";

const App = () => {
	const numberOfStarts = Math.floor(Math.random() * 50) + 20;
	const { width } = useWindowDimensions();
	const [menuOpen, setMenuOpen] = useState(false);
	const [menuOpenFirstTime, setMenuOpenFirstTime] = useState(false);
	const openMenu = () => {
		if (!menuOpenFirstTime) {
			setMenuOpenFirstTime(true);
			setMenuOpen(!menuOpen);
		}
		if (menuOpenFirstTime && width < 1024) {
			setMenuOpen(!menuOpen);
		}
	};
	useEffect(() => {
		const location = window.location.pathname;
		if (location !== "/") {
			if (width < 1024) {
				setMenuOpen(false);
				setMenuOpenFirstTime(true);
			} else {
				setMenuOpen(true);
				setMenuOpenFirstTime(true);
			}
		}
	}, [width]);
	return (
		<>
			<Stars numberOfStarts={numberOfStarts} />
			<Spaceship/>
			<Header open={menuOpen} openFunction={openMenu} openFirstTime={menuOpenFirstTime}/>
			<div className="content">
				<NavbarContainer menuOpen={menuOpen} menuOpenFirstTime={menuOpenFirstTime} functionality={openMenu} />
				<main>
					{ width >= 1024 || (width < 1024 && !menuOpen) ?
						<Switch>
							<Route exact path="/about" component={About} />
							<Route exact path="/skills" component={Skills} />
						</Switch>
						: ""
					}
				</main>
			</div>
			<footer className="footer">
				<Footer/>
			</footer>
		</>
	);
}; 

export default withTranslation()(App);