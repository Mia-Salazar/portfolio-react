export const emailValidator = (email) => {
	if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) {
		return true;
	}
	if (email === undefined || email.trim() === "") {
		return false;
	}
	return false;
};

export const textValidator = (text) => {
	if (/[A-zÀ-ú0-9_.-]/.test(text) && text.length >= 2 && text.trim() !== "") {
		return true;
	}
	return false;
};