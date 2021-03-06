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
import { Portfolio } from "../src/app/pages/Portfolio/Portfolio";
import { Awards } from "../src/app/pages/Awards/Awards";
import { Contact } from "../src/app/pages/Contact/Contact";
import { useWindowDimensions } from "./app/utils/functionalities/getWidth";
import "./App.scss";

const App = () => {
	const numberOfStarts = Math.floor(Math.random() * 50) + 20;
	const { width } = useWindowDimensions();
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeLink, setActiveLink] = useState("");
	const [menuOpenFirstTime, setMenuOpenFirstTime] = useState(false);
	const openMenu = (link) => {
		if (!menuOpenFirstTime) {
			setMenuOpenFirstTime(true);
			setMenuOpen(!menuOpen);
		}
		if (menuOpenFirstTime && width < 992) {
			setMenuOpen(!menuOpen);
		}
		setActiveLink(link.toString());
	};
	useEffect(() => {
		const location = window.location.pathname;
		if (location !== "/") {
			const link = location.replace("/", "");
			if (width < 992) {
				setMenuOpen(false);
				setMenuOpenFirstTime(true);
			} else {
				setMenuOpen(true);
				setMenuOpenFirstTime(true);
			}
			setActiveLink("navbar." + link);
		}
	}, [width]);
	return (
		<>
			<Stars numberOfStarts={numberOfStarts} />
			<Spaceship/>
			<Header open={menuOpen} openFunction={openMenu} openFirstTime={menuOpenFirstTime}/>
			<div className="content">
				<NavbarContainer menuOpen={menuOpen} menuOpenFirstTime={menuOpenFirstTime} functionality={openMenu} activeLink={activeLink}/>
				<main>
					{ width >= 992 || (width < 992 && !menuOpen) ?
						<Switch>
							<Route exact path="/about" component={About} />
							<Route exact path="/awards" component={Awards} />
							<Route exact path="/contact" component={Contact} />
							<Route exact path="/portfolio" component={Portfolio} />
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


<div className="warning" role="alert">
	<ng-content></ng-content>
</div>;