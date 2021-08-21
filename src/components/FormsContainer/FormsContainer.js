import React from "react";
import MessageForm from "./MessageForm";

import "./FormsContainer.scss";
import LoginForm from "./LoginForm";

export default function FormsContainer({ disableSubmit, newMessage, notification, onChange, sendMessage }) {
	return (
		<div className={"formsContainer"}>
			<LoginForm />
			<MessageForm
				disableSubmit={disableSubmit}
				newMessage={newMessage}
				notification={notification}
				onChange={onChange}
				sendMessage={sendMessage}
			/>
		</div>
	);
}
