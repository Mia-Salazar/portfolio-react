import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import "./i18n";
import App from "./App.js";

const Loader = () => (
	<div>loading...</div>
);

ReactDOM.render(
	<HashRouter basename="/">
		<Suspense fallback={<Loader />}>
			<App />
		</Suspense>
	</HashRouter>,
	document.getElementById("root")
);
