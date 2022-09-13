/* eslint-disable */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";

import i18n from "../../../../i18n";
import { TabsContent } from "./TabsContent";


describe("TabsContent", () => {
    i18n.changeLanguage("cimode");
	let component;
	beforeEach(() => {
		component = render(
			<TabsContent />
		);
	});
    it("check articles as the first tab", () => {
        const articles = component.queryAllByRole("listitem");
        expect(articles).toHaveLength(12);
	});
    it("changing filter", () => {
        const others = component.getByText("awards.others");
        fireEvent.click(others);
        const items = component.queryAllByRole("listitem");
        expect(items).toHaveLength(3);
	});
});