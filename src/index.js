import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import { ThemeContextProvider } from "./app/context/ThemeContext";

import "./i18n";
import App from "./App.js";

const Loader = () => (
	<div>loading...</div>
);

ReactDOM.render(
	<HashRouter basename="/">
		<Suspense fallback={<Loader />}>
			<ThemeContextProvider>
				<App />
			</ThemeContextProvider>
		</Suspense>
	</HashRouter>,
	document.getElementById("root")
);
