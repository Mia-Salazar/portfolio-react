/* eslint-disable */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import i18n from "../../../../i18n";
import { NavbarContainer } from "./NavbarContainer";
import { BrowserRouter } from "react-router-dom";

describe("NavbarContainer", () => {
    i18n.changeLanguage('cimode');
    let width = 992;
    let component;
    let menuOpen = false;
    let activeLink = "";
    let menuOpenFirstTime = false;
	const openMenu = (link) => {
        menuOpen = !menuOpen;
		activeLink = link.toString();
	};
    it("don't load menu and back button by default", () => {
        const component = render(
            <BrowserRouter basename="/">
                <NavbarContainer menuOpen={menuOpen} menuOpenFirstTime={menuOpenFirstTime} functionality={openMenu} activeLink={activeLink}/>
            </BrowserRouter>
            
        );
        const menuButton = component.queryByText("navbar.menu");
        const backButton = component.queryByText("navbar.back");
        expect(menuButton).not.toBeInTheDocument();
        expect(backButton).not.toBeInTheDocument();
    });
    it("on first open one of the button is shown", () => {
        const component = render(
            <BrowserRouter basename="/">
                <NavbarContainer menuOpen={true} menuOpenFirstTime={true} functionality={openMenu} activeLink={activeLink}/>
            </BrowserRouter>  
        );
        const menuButton = component.queryByText("navbar.menu");
        const backButton = component.queryByText("navbar.back");
        expect(menuButton).not.toBeInTheDocument();
        expect(backButton).toBeInTheDocument();
    });
    it("on menu closed, back button first is shown", () => {
        const component = render(
            <BrowserRouter basename="/">
                <NavbarContainer menuOpen={false} menuOpenFirstTime={true} functionality={openMenu} activeLink={activeLink}/>
            </BrowserRouter>  
        );
        const menuButton = component.queryByText("navbar.menu");
        const backButton = component.queryByText("navbar.back");
        expect(menuButton).toBeInTheDocument();
        expect(backButton).not.toBeInTheDocument();
    });
    it("on menu closed, back button first is shown", () => {
        const component = render(
            <BrowserRouter basename="/">
                <NavbarContainer menuOpen={false} menuOpenFirstTime={true} functionality={openMenu} activeLink={activeLink}/>
            </BrowserRouter>  
        );
        const menuButton = component.queryByText("navbar.menu");
        const backButton = component.queryByText("navbar.back");
        expect(menuButton).toBeInTheDocument();
        expect(backButton).not.toBeInTheDocument();
    });
    it("button not visible when screen is big", () => {
        const resizeWindow = (x) => {
            window.innerWidth = x;
            window.dispatchEvent(new Event('resize'));
        }
        const component = render(
            <BrowserRouter basename="/">
                <NavbarContainer menuOpen={false} menuOpenFirstTime={true} functionality={openMenu} activeLink={activeLink}/>
            </BrowserRouter>  
        );
        resizeWindow(992);
        const menuButton = component.queryByText("navbar.menu", { hidden: true });
        const backButton = component.queryByText("navbar.back", { hidden: true });
    });
});