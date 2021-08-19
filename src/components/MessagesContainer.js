import React from "react";
import Message from "./Message";
import "./MessagesContainer.scss";

export default function MessagesContainer({ messages }) {
	return (
		<div className="messagesContainer">
			{messages && messages.map((message) => <Message message={message} key={message.id} />)}
		</div>
	);
}
