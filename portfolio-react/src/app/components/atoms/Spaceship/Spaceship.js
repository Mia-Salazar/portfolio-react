import React from "react";

import "./Spaceship.scss";

export const Spaceship = () => {
	return (
		<div className="spaceship">
			<span className="spaceship__window"></span>
			<span className="spaceship__body"></span>
			<span className="spaceship__left-motor"></span>
			<span className="spaceship__right-motor"></span>
			<div className="spaceship__flame-container ">
				<span className="spaceship__flame"></span>
				<span className="spaceship__flame spaceship__flame--middle"></span>
				<span className="spaceship__flame spaceship__flame--last"></span>
			</div>
		</div>
	);
};

export default Spaceship;