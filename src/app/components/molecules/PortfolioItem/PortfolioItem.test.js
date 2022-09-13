/* eslint-disable */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";

import marvel from "../../../../assets/images/comic.PNG"
import i18n from "../../../../i18n";
import { PortfolioItem } from "./PortfolioItem";

describe("PortfolioItem", () => {
	i18n.changeLanguage("cimode");
    const item = { href: "miasalazar.com", text:"text", src: marvel };
	let component;
	beforeEach(() => {
		component = render(
			<PortfolioItem item={item} />
		);
	});
	it("it has the correct href", () => {
        const item = component.getByText("portfolio.visit");
        expect(item).toHaveAttribute("href", "miasalazar.com");
	});
    it("it has the correct src", () => {
        const item = component.getByRole('img');
        expect(item).toHaveAttribute("src", "comic.PNG")
	});
    it("has the correct text", () => {
        const item = component.getByText("text");
	});
    it("when you push the button it open the text", () => {
        const button = component.getByText("portfolio.info");
        const article = component.getByTestId("portfolio-item")
        fireEvent.click(button);
        expect(article.classList.contains("portfolio-item--active")).toBe(true);
	});
});
