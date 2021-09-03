/* eslint-disable */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import i18n from "../../../../i18n";
import { LevelItem } from "./LevelItem";

describe('<LevelItemn />', () => {
    i18n.changeLanguage('cimode');
  
    test("if it is active has active class", () => {
        const component = render(
            <LevelItem text="example" active={true}/>,
        );
        const levelItem = component.getByText("example");
        expect(levelItem.classList.contains("level-item--active")).toBe(true);
    });

    test("if it is not active, it does not has active class", () => {
        const component = render(
            <LevelItem text="example" active={false}/>,
        );
        const levelItem = component.getByText("example");
        expect(levelItem.classList.contains("level-item--active")).toBe(false);
    });
});