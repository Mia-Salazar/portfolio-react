import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { Switch,Route } from "react-router-dom";

import { Button } from "../src/app/components/atoms/Button/Button";
import { Star } from "../src/app/components/atoms/Star/Star";
import { Spaceship } from "../src/app/components/atoms/Spaceship/Spaceship";
import { Header } from "../src/app/components/molecules/Header/Header";
import { Footer } from "../src/app/components/molecules/Footer/Footer";
import { Navbar } from "../src/app/components/organisms/Navbar/Navbar";
import { About } from "../src/app/pages/About/About";
import { useWindowDimensions } from "./app/utils/getWidth";
import "./App.scss";

const App = () => {
	const { width } = useWindowDimensions();
	const [menuOpen, setMenuOpen] = useState(false);
	const [menuOpenFirstTime, setMenuOpenFirstTime] = useState(false);
	const openMenu = () => {
		console.log("yiiiii");
		if (!menuOpenFirstTime) {
			setMenuOpenFirstTime(true);
			setMenuOpen(!menuOpen);
		}
		if (menuOpenFirstTime && width < 1024) {
			setMenuOpen(!menuOpen);
		}
	};
	const numberOfStarts = Math.floor(Math.random() * 50) + 20;
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
	}, []);
	return (
		<>
			<div className="stars-container">
				{Array.from(Array(numberOfStarts), (e, i) => {
					return <Star key={i}></Star>;
				})}
			</div>
			<Spaceship/>
			<Header open={menuOpen} openFunction={openMenu} openFirstTime={menuOpenFirstTime}/>
			<div className="content">
				<div className="navbar-container">
					{ menuOpen && <Navbar functionality={openMenu}/> }
					{ menuOpen && menuOpenFirstTime && <Button text="navbar.back" functionality={openMenu}></Button> }
					{ !menuOpen && menuOpenFirstTime && <Button text="navbar.menu" functionality={openMenu} modificator="back"></Button> }
				</div>
				<main>
					{ width >= 1024 || (width < 1024 && !menuOpen) ?
						<Switch>
							<Route exact path="/about" component={About} />
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