import React, { useState } from "react";
import { withTranslation } from "react-i18next";

import { Button } from "../src/app/components/atoms/Button/Button";
import { Star } from "../src/app/components/atoms/Star/Star";
import { Spaceship } from "../src/app/components/atoms/Spaceship/Spaceship";
import { Header } from "../src/app/components/molecules/Header/Header";
import { Footer } from "../src/app/components/molecules/Footer/Footer";
import { Navbar } from "../src/app/components/organisms/Navbar/Navbar";
import "./App.scss";

const App = () =>{
	const [menuOpen, setMenuOpen] = useState(false);
	const [menuOpenFirstTime, setMenuOpenFirstTime] = useState(false);
	const openMenu = () => {
		if (!menuOpenFirstTime) {
			setMenuOpenFirstTime(true);
		}
		setMenuOpen(!menuOpen);
	};
	const numberOfStarts = Math.floor(Math.random() * 50) + 20;
	return (
		<>
			<div className="stars-container">
				{Array.from(Array(numberOfStarts), (e, i) => {
					return <Star key={i}></Star>;
				})}
			</div>
			<Spaceship/>
			<Header open={menuOpen} openFunction={openMenu} openFirstTime={menuOpenFirstTime}/>
			<div className="main">
				<main>
					{/* TODO: Continue button only on root route */}
				</main>
				<div className="navbar-container">
					{ menuOpen && <Navbar/> }
					{ menuOpen && menuOpenFirstTime && <Button text="navbar.back" functionality={openMenu}></Button> }
					{ !menuOpen && menuOpenFirstTime && <Button text="navbar.menu" functionality={openMenu} modificator="back"></Button> }
				</div>
			</div>
			<footer className="footer">
				<Footer/>
			</footer>
		</>
	);
}; 

export default withTranslation()(App);