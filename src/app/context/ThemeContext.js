import React, {createContext, useContext, useState} from "react";

const ThemeContext = createContext();

export const useThemeContext = () => {
	return useContext(ThemeContext);
};

export const ThemeContextProvider = ({children}) => {
	const [theme, setTheme] = useState("dark");

	const handleChangeTheme = value => {
		setTheme(value);
	};

	return (
		<ThemeContext.Provider value={{theme, handleChangeTheme}}>
			{children}
		</ThemeContext.Provider>
	);
};