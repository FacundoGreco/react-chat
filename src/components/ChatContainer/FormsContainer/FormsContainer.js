import React from "react";
import LoginForm from "./LoginForm";
import MessageForm from "./MessageForm";

import "./FormsContainer.scss";

export default function FormsContainer() {
	return (
		<div className={"formsContainer"}>
			<LoginForm />
			<MessageForm />
		</div>
	);
}
