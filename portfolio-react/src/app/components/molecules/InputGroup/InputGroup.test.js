/* eslint-disable */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import i18n from "../../../../i18n";
import { InputGroup } from "./InputGroup";

describe("InputGroup", () => {
    i18n.changeLanguage('cimode');
    let component;
    beforeEach(() => {
        component = render(
            <InputGroup text="text" type="number" id="id" required={true}/>
        );
    });
    it("it is not a textarea", () => {
        const input = component.getByText("text").nextElementSibling;
        expect(input.classList.contains("input")).toBe(true);
    });
    it("it is required", () => {
        const input = component.getByText("*");
    });
});

describe("InputGroup", () => {
    i18n.changeLanguage('cimode');
    let component;
    beforeEach(() => {
        component = render(
            <InputGroup text="text" id="id" required={true}/>
        );
    });
    it("it is a textarea", () => {
        const input = component.getByText("text").nextElementSibling;
        expect(input.classList.contains("textarea")).toBe(true);
    });
});