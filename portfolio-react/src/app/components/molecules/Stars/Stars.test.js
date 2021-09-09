/* eslint-disable */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";

import { Stars } from "./Stars";

describe("Stars", () => {
	let component;
	beforeEach(() => {
		component = render(
			<Stars numberOfStarts={20} />
		);
	});
    it("should have the correct number of stars", () => {
        const item = component.queryAllByTitle("star");
        expect(item).toHaveLength(20);
	});
});