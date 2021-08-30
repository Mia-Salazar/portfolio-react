import "@testing-library/jest-dom/extend-expect";

import { emailValidator, textValidator } from "./validators";

test("Check that a text is an email", () => {
	const email = "example@email.com";
	const checkEmail = emailValidator(email);
	expect(checkEmail).toBe(true);
});