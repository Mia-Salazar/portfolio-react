/* eslint-disable */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import i18n from "../../../../i18n";
import { Title } from "./Title";

describe("Title", () => {
    i18n.changeLanguage("cimode");
    let component;
    beforeEach(() => {
        component = render(
            <Title text="example" />
        );
    })

    test("renders the correct text", () => {
        component.getByText("example");
    });
});