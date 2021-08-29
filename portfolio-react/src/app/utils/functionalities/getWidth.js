import { useEffect, useState } from "react";

function getWindowDimensions() {
	const { innerWidth: width } = window;
	return {
		width
	};
}

const hasWindow = typeof window !== "undefined";

export const useWindowDimensions = () => {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [hasWindow]);

	return windowDimensions;
};