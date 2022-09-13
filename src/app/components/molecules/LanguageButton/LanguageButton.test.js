/* eslint-disable */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";

import i18n from "../../../../i18n";
import { LanguageButton } from "./LanguageButton";

describe("LanguageButton", () => {
    i18n.changeLanguage('cimode');
    let component;
    beforeEach(() => {
        component = render(
            <LanguageButton />
        );
    });
    it("it starts at english language", () => {
        const button = component.getByText("en");
        expect(button.classList.contains("language-buttons__item--active")).toBe(true);
    });
    it("it does not changes language after clicking on english", () => {
        const button = component.getByText("en");
        const buttonSpanish = component.getByText("es");
        fireEvent.click(button);
        expect(buttonSpanish.classList.contains("language-buttons__item--active")).toBe(false);
    });
    it("it changes language after clicking on spanish", () => {
        const buttonSpanish = component.getByText("es");
        fireEvent.click(buttonSpanish);
        expect(buttonSpanish.classList.contains("language-buttons__item--active")).toBe(true);
    });
});