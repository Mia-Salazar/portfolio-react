import React, { useState } from "react";
import axios from "axios";

import i18n from "../../../../i18n";
import { Button } from "../../atoms/Button/Button";
import { InputGroup } from "../../molecules/InputGroup/InputGroup";
import "./Form.scss";

export const Form = () => {
	const [serverState, setServerState] = useState({
		submitting: false,
		status: null
	});
	const handleServerResponse = (ok, msg, form) => {
		setServerState({
			submitting: false,
			status: { ok, msg }
		});
		if (ok) {
			form.reset();
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
				handleServerResponse(true, "contact.success", form);
			})
			.catch(r => {
				handleServerResponse(false, r.response.data.error, form);
			});
	};
	return (
		<form className="form" onSubmit={handleOnSubmit}>
			<InputGroup text="contact.name" type="text" pattern="[A-zÀ-ú0-9_.-]" id="name" placeholder="contact.name" />
			<InputGroup text="contact.email" type="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" id="email" placeholder="contact.email" required={true} />
			<InputGroup text="contact.comment" pattern="[A-zÀ-ú0-9_.-]" id="comment" placeholder="contact.comment" required={true} />
			<p className="form__required">{i18n.t("contact.required")}</p>
			{serverState.status && serverState.status.ok && (
				<p className="form__success">
					{i18n.t(serverState.status.msg)}
				</p>
			)}
			{serverState.status && !serverState.status.ok && (
				<p className="form__failure">
					{serverState.status.msg}
				</p>
			)}
			<Button text="contact.send" modificator="filled" disabled={serverState.submitting} type="submit"/>
		</form>
	);
};

export default Form;