import React from "react";
import MessageForm from "./MessageForm";

import "./FormsContainer.scss";

export default function FormsContainer({ disableSubmit, newMessage, notification, onChange, sendMessage }) {
	return (
		<div className={"formsContainer"}>
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
