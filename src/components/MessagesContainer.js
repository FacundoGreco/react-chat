import React, { useEffect } from "react";
import Message from "./Message";
import "./MessagesContainer.scss";

export default function MessagesContainer({ messages }) {
	useEffect(() => {
		const messagesContainer = document.querySelector(".messagesContainer");
		messagesContainer.scrollTo(0, messagesContainer.scrollHeight);
	}, [messages]);

	return (
		<div className="messagesContainer">
			{messages && messages.map((message) => <Message message={message} key={message.id} />)}
		</div>
	);
}
