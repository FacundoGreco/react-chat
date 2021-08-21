import React, { useEffect } from "react";
import Message from "./Message";
import "./MessagesContainer.scss";

export default function MessagesContainer({ loadingMessages, messages }) {
	useEffect(() => {
		const messagesContainer = document.querySelector(".messagesContainer");
		messagesContainer.scrollTo(0, messagesContainer.scrollHeight);
	}, [messages]);

	return (
		<div className="messagesContainer">
			{loadingMessages && <h3>Cargando...</h3>}
			{messages && messages.map((message) => <Message message={message} key={message.id} />)}
		</div>
	);
}
