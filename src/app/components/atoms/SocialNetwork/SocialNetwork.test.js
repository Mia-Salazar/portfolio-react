/* eslint-disable */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import i18n from "../../../../i18n";
import { SocialNetwork } from "./SocialNetwork";

describe("SocialNetwork", () => {
    i18n.changeLanguage("cimode");
    let component;
    beforeEach(() => {
        component = render(
            <SocialNetwork icon="fa-github-alt" link="https://github.com/Mia-Salazar" ariaLabel="footer" />
        );
    })

    test("has the correct href", () => {
        const link = component.getByLabelText("footer");
        expect(link).toHaveAttribute("href", "https://github.com/Mia-Salazar")
    });

    test("has the correct icon", () => {
        const link = component.getByLabelText("footer").firstChild;
        expect(link.classList.contains("fa-github-alt")).toBe(true);
    });
});