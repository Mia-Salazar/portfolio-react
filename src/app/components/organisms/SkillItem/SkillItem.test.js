/* eslint-disable */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import i18n from "../../../../i18n";
import { SkillItem } from "./SkillItem";


describe("SkillItem", () => {
    i18n.changeLanguage("cimode");
	let component;
	beforeEach(() => {
		component = render(
			<SkillItem text="html" levelStatus="low" />
		);
	});
    it("check text", () => {
        const skill = component.getByText("html");
	});
});