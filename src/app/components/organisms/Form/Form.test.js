/* eslint-disable */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";

import i18n from "../../../../i18n";
import { Form } from "./Form";


describe("Form", () => {
    i18n.changeLanguage("cimode");
    let value;
	let component;
    const handleSubmit = jest.fn();
    const handleChange = ev => {
        ev.preventDefault();
        value = ev.currentTarget.value;
    }
	beforeEach(() => {
		component = render(
			<Form onSubmit={handleSubmit} functionality={handleChange} />
		);
	});
    it("the button is disabled", () => {
        const button = component.getByRole("button");
        fireEvent.click(button);
        expect(handleSubmit).toHaveBeenCalledTimes(0);
        expect(handleSubmit).not.toHaveBeenCalled();
	});
});