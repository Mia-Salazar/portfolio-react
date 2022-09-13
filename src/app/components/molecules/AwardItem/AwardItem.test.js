/* eslint-disable */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import i18n from "../../../../i18n";
import { AwardItem } from "./AwardItem";

describe("AwardItem", () => {
    i18n.changeLanguage('cimode');
    const item = { aria: "paper", icon: "atom", target: "_blank", text: "corea", href: "miasalazar.com", type: "scientific"};
    let component;
    beforeEach(() => {
        component = render(
            <AwardItem item={item} />
        );
    })
    test("has the correct icon", () => {
        const item = component.getByLabelText("paper");
        expect(item).toHaveClass("fa-atom");
    });
    test("has the correct target", () => {
        const link = component.getByLabelText("paper").closest("div").nextElementSibling;
        expect(link).toHaveAttribute("target", "_blank");
    });
    test("has the correct href and text", () => {
        const link = component.getByText("corea");
        expect(link).toHaveAttribute("href", "miasalazar.com");
    });
});