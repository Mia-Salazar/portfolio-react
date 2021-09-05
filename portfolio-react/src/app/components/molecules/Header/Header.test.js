/* eslint-disable */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";

import i18n from "../../../../i18n";
import { Header } from "./Header";

describe("Header", () => {
    i18n.changeLanguage('cimode');
    let open = false;
    let openFirstTime = false;
    let component;
    const openMenu = () => {
        if (!openFirstTime) {
			openFirstTime = true;
			open = !open;
		}
	};
    beforeEach(() => {
        component = render(
            <Header open={open} openFunction={openMenu} openFirstTime={openFirstTime } />
        );
    });
    it("when pushing the button the menu opens", () => {
        const button = component.getByText("navbar.continue");
        fireEvent.click(button);
        expect(open).toBe(true);
        expect(openFirstTime).toBe(true);
    });
    it("the button is not visible", () => {
        const button = component.queryByText("navbar.continue");
        expect(button).not.toBeInTheDocument();
    });
});