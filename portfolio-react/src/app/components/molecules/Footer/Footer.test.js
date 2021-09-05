/* eslint-disable */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import i18n from "../../../../i18n";
import { Footer } from "./Footer";

describe("Footer", () => {
    i18n.changeLanguage('cimode');
    let component;
    beforeEach(() => {
        component = render(
            <Footer />
        );
    })

    test("has the four links", () => {
        const footer = component.getAllByLabelText("footer");
        expect(footer).toHaveLength(4)
    });
});