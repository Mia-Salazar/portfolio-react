import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./i18n";
import App from "./App.js";

const Loader = () => (
	<div>loading...</div>
);

ReactDOM.render(
	<BrowserRouter basename="/">
		<Suspense fallback={<Loader />}>
			<App />
		</Suspense>
	</BrowserRouter>,
	document.getElementById("root")
);
