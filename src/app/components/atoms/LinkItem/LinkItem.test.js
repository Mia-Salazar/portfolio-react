/* eslint-disable */
import React, { useState } from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";

import i18n from "../../../../i18n";
import { LinkItem } from "./LinkItem";

describe("<LinkItem  />", () => {
    i18n.changeLanguage("cimode");
    let component;
    beforeEach(() => {
        component = render(
            <LinkItem  text="example" target="_blank" href="miasalazar.com"/>
        );
    })
    test("to have correct href", () => {
        const link = component.getByText("example");
        expect(link).toHaveAttribute("href", "miasalazar.com")
    });
    test("to have correct target", () => {
        const link = component.getByText("example");
        expect(link).toHaveAttribute("target", "_blank")
    });
});