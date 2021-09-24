import React, { useEffect } from "react";
import { useMessagesContext } from "../../Contexts/MessagesContext";
import { useUserContext } from "../../Contexts/UserContext";

import Message from "./Message";
import "./MessagesContainer.scss";

export default function MessagesContainer() {
	const { loadingMessages, messages, deleteMessage } = useMessagesContext();
	const { adminLogged } = useUserContext();

	const handleDelete = (id) => {
		if (adminLogged) deleteMessage(id);
	};

	useEffect(() => {
		const messagesContainer = document.querySelector(".messagesContainer");
		messagesContainer.scrollTo(0, messagesContainer.scrollHeight);
	}, [messages]);

	return (
		<div className="messagesContainer">
			{loadingMessages && <h3>Cargando...</h3>}
			{messages &&
				messages.map((message) => (
					<Message
						key={message.id}
						message={message}
						displayDelete={adminLogged}
						handleDelete={handleDelete}
					/>
				))}
		</div>
	);
}
