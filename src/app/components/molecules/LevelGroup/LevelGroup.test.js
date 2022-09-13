/* eslint-disable */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import i18n from "../../../../i18n";
import { LevelGroup } from "./LevelGroup";

describe("LevelGroup", () => {
	i18n.changeLanguage("cimode");
	let component;
	beforeEach(() => {
		component = render(
			<LevelGroup levelStatus="veryHigh" />
		);
	});
	it("it renders 4 elements", () => {
        const level = component.queryAllByTestId("level-item");
        expect(level).toHaveLength(4);
	});
    it("check very high is the active", () => {
        const level = component.getByText("skills.veryHigh");
        expect(level.classList.contains("level-item--active")).toBe(true);
	});
});