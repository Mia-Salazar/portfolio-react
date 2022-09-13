/* eslint-disable */
import React, { useState } from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";

import i18n from "../../../../i18n";
import { Filter } from "./Filter";

describe("Filter", () => {
    i18n.changeLanguage("cimode");
    let filter = "all";
    const array = [
        { text: "all", value: "all" },
        { text: "angular", value: "angular" },
        { text: "react", value: "react" },
    ];
    let component;
    const changeFilter = (filterNew) => {
		if (filter !== filterNew) {
            filter = filterNew;
		}
	};
    beforeEach(() => {
        component = render(
            <Filter filterActive={filter} array={array} buttonFunctionality={changeFilter}/>
        );
    })
    test("renders all filter buttons", () => {
        component.getByText("angular");
        component.getByText("react");
    });
    test("on click changes filter", () => {
        const button = component.getByText("angular");
        fireEvent.click(button);
        expect(filter).toBe("angular")
    });
});