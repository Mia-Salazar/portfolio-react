/* eslint-disable */
import "@testing-library/jest-dom/extend-expect";

import { emailValidator, textValidator } from "./validators";

test("Check that a text is an email", () => {
	const email = "example@email.com";
	const checkEmail = emailValidator(email);
	expect(checkEmail).toBe(true);
});

test("Check that a text is not an email", () => {
	const email = "example@email.";
	const checkEmail = emailValidator(email);
	expect(checkEmail).toBe(false);
});

test("Check that a text is empty", () => {
	const email = "";
	const checkEmail = emailValidator(email);
	expect(checkEmail).toBe(false);
});

describe("Check that text validator check that a text is ", () => {
    it("is empty", () => {
        const text = "";
        expect(textValidator(text)).toBe(false);
    });
    it("is long enough", () => {
        const text = "abcd";
        expect(textValidator(text)).toBe(true);
    });
    it("has the correct caracters", () => {
        const text = "María_";
        expect(textValidator(text)).toBe(true);
    });
    it("has not the correct caracters", () => {
        const text = "$$$$";
        expect(textValidator(text)).toBe(false);
    });
});