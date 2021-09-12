/* eslint-disable */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import i18n from "../../../../i18n";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
    i18n.changeLanguage('cimode');
    let open = false;
    let activeLink = ""
    let component;
    const openMenu = () => {
        open = !open;
	};
    beforeEach(() => {
        component = render(
            <BrowserRouter basename="/">
                <Navbar functionality={openMenu} activeLink={activeLink}/>
            </BrowserRouter>
        );
    });
    it("no link active at the beginning", () => {
        const listItems = component.queryAllByRole("listitem");
        listItems.forEach(element => {
            expect(element.classList.contains("navbar__link--active")).toBe(false);
        });
    });
    it("it has 9 links, 5 from nav and 4 from footer", () => {
        const nav = component.queryAllByRole("listitem");
        expect(nav).toHaveLength(9);
    });
});

describe("Navbar", () => {
    i18n.changeLanguage('cimode');
    let open = false;
    let component;
    const openMenu = () => {
        open = !open;
	};
    beforeEach(() => {
        component = render(
            <BrowserRouter basename="/">
                <Navbar functionality={openMenu} activeLink="navbar.portfolio"/>
            </BrowserRouter>
        );
    });
    it("the active link is highlighted", () => {
        const portfolio = component.getByText("navbar.portfolio");
        expect(portfolio.classList.contains("navbar__link--active")).toBe(true);
    });
    //TODO activelink
});