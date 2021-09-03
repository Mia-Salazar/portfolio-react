/* eslint-disable */
import React, { useState } from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";

import i18n from "../../../../i18n";
import { Input } from "./Input";

function CostInput() {
  const [value, setValue] = useState("");
  const example = "example";
  i18n.changeLanguage("cimode");

  const handleChange = ev => {
    ev.preventDefault();
    setValue(ev.currentTarget.value);
  }

  return (
    <Input id={example} name={example} type="text" functionality={handleChange}
        placeholder="input"/>
  );
}

const setup = () => {
  const utils = render(<CostInput />)
  const input = utils.getByPlaceholderText("input")
  return {
    input,
    ...utils,
  }
}

test("Input update its value", () => {
  const {input} = setup();
  fireEvent.change(input, {target: {value: "value"}})
  expect(input.value).toBe("value")
});