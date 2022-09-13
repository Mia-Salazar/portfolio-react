/* eslint-disable */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";

import { Box } from "./Box";

describe("Check box", () => {
    let component;
    beforeEach(() => {
        component = render(
        <Box>
            <div>This is an example</div>
        </Box>
        );
    })

    test("renders its children", () => {
        component.getByText("This is an example");
    });
});