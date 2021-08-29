import React, { useEffect, useState } from "react";
import axios from "axios";

import { emailValidator, textValidator } from "../../../utils/functionalities/validators";
import { Button } from "../../atoms/Button/Button";
import { FeedbackText } from "../../atoms/FeedbackText/FeedbackText";
import { InputGroup } from "../../molecules/InputGroup/InputGroup";
import "./Form.scss";

export const Form = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [textarea, setTextarea] = useState("");
	const [inputValidation, setInputValidation] = useState({
		name: null,
		email: null,
		textarea: null
	});
	const [serverState, setServerState] = useState({
		submitting: false,
		status: null
	});
	const handleServerResponse = (ok, msg) => {
		setServerState({
			submitting: false,
			status: { ok, msg }
		});
		if (ok) {
			setEmail("");
			setTextarea("");
			setName("");
		}
	};
	const handleOnSubmit = e => {
		e.preventDefault();
		const form = e.target;
		setServerState({ submitting: true });
		axios({
			method: "post",
			url: "https://formspree.io/f/mjvjpnrl",
			data: new FormData(form)
		})
			.then(() => {
				handleServerResponse(true, "contact.success");
			})
			.catch(r => {
				handleServerResponse(false, r.response.data.error);
			});
	};
	const inputChange = (param) => (e) => {
		const inputValue = e.target.value;
		if (param === "email") {
			setEmail(inputValue);
		}
		if (param === "textarea") {
			setTextarea(inputValue);
		}
		if (param === "name") {
			setName(inputValue);
		}
	};
	useEffect(() => {
		setInputValidation({
			email: emailValidator(email),
			name: textValidator(name),
			textarea: textValidator(textarea)
		});
	}, [email, name, textarea]);
	return (
		<form className="form" onSubmit={handleOnSubmit}>
			<InputGroup text="contact.name" type="text" id="name" placeholder="contact.name" value={name} functionality={inputChange("name")}/>
			{name !== "" && !inputValidation.name &&
				<FeedbackText text="contact.error" type="feedback" />
			}
			<InputGroup text="contact.email" type="email" id="email" placeholder="contact.email" required={true} value={email} functionality={inputChange("email")}/>
			{email !== "" && !inputValidation.email &&
				<FeedbackText text="contact.error" type="feedback" />
			}
			<InputGroup text="contact.comment" type="text" id="comment" placeholder="contact.comment" required={true} value={textarea} functionality={inputChange("textarea")}/>
			{textarea !== "" && !inputValidation.textarea &&
				<FeedbackText text="contact.error" type="feedback" />
			}
			<FeedbackText  text="contact.required" type="required"/>
			{serverState.status && serverState.status.ok && (
				<FeedbackText text={serverState.status.msg} />
			)}
			{serverState.status && !serverState.status.ok && (
				<FeedbackText text={serverState.status.msg} type="failure" />
			)}
			<Button text="contact.send" modificator="filled" disabled={serverState.submitting || email === undefined || textarea === undefined || !inputValidation.email || !inputValidation.textarea} type="submit"/>
		</form>
	);
};

export default Form;