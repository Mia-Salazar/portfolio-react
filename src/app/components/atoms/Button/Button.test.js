/* eslint-disable */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";

import i18n from "../../../../i18n";
import { Button } from "./Button";

describe('<Button />', () => {
    const buttonText = "Send";
    i18n.changeLanguage('cimode');
  
    test("is disabled", () => {
        const component = render(
            <Button text={buttonText} disabled={true}/>,
        );
        const button = component.getByText("Send");
        expect(button).toBeDisabled();
    });

    test("click works", async() => {
        const mockHandler = jest.fn();
        const component = render(
            <Button text={buttonText} functionality={mockHandler} />
        );
        const button = component.getByText("Send");
        fireEvent.click(button);
        expect(mockHandler).toHaveBeenCalledTimes(1);
    });
});