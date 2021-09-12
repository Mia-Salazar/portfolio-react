/* eslint-disable */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";

import i18n from "../../../../i18n";
import { PortfolioContainer } from "./PortfolioContainer";


describe("PortfolioContainer", () => {
    i18n.changeLanguage("cimode");
	let component;
	beforeEach(() => {
		component = render(
			<PortfolioContainer />
		);
	});
    it("check the first elements rendered", () => {
        const articles = component.queryAllByTestId("portfolio-item");
        expect(articles).toHaveLength(6);
	});
    it("load more button is shown and it loads more", () => {
        const button = component.getByText("portfolio.load");
        fireEvent.click(button);
        const articles = component.queryAllByTestId("portfolio-item");
        expect(articles).toHaveLength(9);
	});
    it("when there is no more items, the load more butto disappears", () => {
        const button = component.getByText("portfolio.load");
        fireEvent.click(button);
        fireEvent.click(button);
        fireEvent.click(button);
        const articles = component.queryAllByTestId("portfolio-item");
        expect(articles).toHaveLength(15);
        expect(button).not.toBeInTheDocument();
	});
});