import React, { useState } from "react";
import { withTranslation } from "react-i18next";

import { Star } from "../src/app/components/atoms/Star/Star";
import { Spaceship } from "../src/app/components/atoms/Spaceship/Spaceship";
import { Header } from "../src/app/components/molecules/Header/Header";
import { Footer } from "../src/app/components/molecules/Footer/Footer";
import { Navbar } from "../src/app/components/organisms/Navbar/Navbar";
import "./App.scss";

const App = () =>{
	const [menuOpen, setMenuOpen] = useState(false);
	const openMenu = () => {
		setMenuOpen(!menuOpen);
	};
	const numberOfStarts = Math.floor(Math.random() * 50) + 20;
	return (
		<div className="wrapper">
			<div className="wrapper__stars-container">
				{Array.from(Array(numberOfStarts), (e, i) => {
					return <Star key={i}></Star>;
				})}
			</div>
			<Spaceship/>
			<div className="all-content">
				<Header open={menuOpen} openFunction={openMenu} />
				<main>
					{/* TODO: Continue button only on root route */}
					{ menuOpen && <Navbar/> }
				</main>
				<footer className="footer">
					<Footer/>
				</footer>
			</div>
		</div>
	);
}; 

export default withTranslation()(App);